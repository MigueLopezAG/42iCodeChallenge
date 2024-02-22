import React, { useState } from 'react';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const TwoNumberSum = () => {
    const [numbers, setNumbers] = useState('');
    const [targetSum, setTargetSum] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [errors, setErrors] = useState({ numbers: '', targetSum: '' })
    
    const handleNumbersChange = (e) => {
        setNumbers(e.target.value);
        setErrors({ ...errors, numbers: '' });
        setApiResponse('');
    };

    const handleTargetNumberChange = (e) => {
        setTargetSum(e.target.value);
        setErrors({ ...errors, targetSum: '' });
        setApiResponse('');
    };

    const validateInfo = async () => {
        const parseTargetSum = parseInt(targetSum);
        const targetSumError = isNaN(parseTargetSum) ? 'Ingresa un numero valido o el campo esta vacío' : '';

        let arrayNumberError2 = '';
        const expresionRegular = /\s*,|-\s*/;
        const array = numbers.split(expresionRegular);
        //Funcion para filtrar elementos no numericos en el string
        const arrayNumbers = array.filter(number => {
            const integer = parseInt(number);
            if (isNaN(integer) && !Number.isInteger(integer)) {
                arrayNumberError2 = "Se encontro un numero no valido y se descartara del array";
            }
            return !isNaN(integer) && integer;
        })
        const arrayNumberError = arrayNumbers.length === 0 || numbers === '' ? 'No se ingreso el array en un formato correcto o el campo esta vacio' : ''

        setErrors({ ...errors, numbers: arrayNumberError || arrayNumberError2, targetSum: targetSumError });
        
        if (targetSumError || arrayNumberError)
            return;
        try {
            const response = await fetch(API_URL + '/two-number-sum', {
                method: 'POST',
                body: JSON.stringify({ arrayNumbers, targetSum }),
                headers: { 'content-type': 'application/json;charset=utf-8' },
            });
            const result = await response.json();
            setApiResponse(result.responseArray)
            console.log(result.responseArray);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-xl w-full px-6">
                <h1 className="text-2xl font-bold mb-8 text-center">Two Number Sum</h1>
                <h3 className="text-xl mb-8 text-center">
                    Dado un array de enteros, donde ningún número se encuentra repetido en el array,
                    y un número entero que representa la suma que buscamos en el array. Se creó un endpoint con Express,
                    donde se recibe el array y el resultado a buscar, y obtenemos como respuesta un objeto con los distintos números que cumplen esta condición.
                </h3>
                <input
                    type="text"
                    value={numbers}
                    onChange={handleNumbersChange}
                    placeholder="Ingrese números separados por coma o guion"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-2 "
                />
                {errors.numbers !== '' &&
                    (<p className="w-full px-4 py-2 mb-2 text-red-600">{errors.numbers}</p>)
                }
                <input
                    type="text"
                    value={targetSum}
                    onChange={handleTargetNumberChange}
                    placeholder="Ingresa el total de la suma que se busca en el array"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-2"
                />
                {errors.targetSum !== '' &&
                    (<p className="w-full px-4 py-2 mb-2 text-red-600">{errors.targetSum}</p>)
                }
                <button
                    className="w-full bg-pink-700 hover:bg-pink-900 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-lg"
                    onClick={validateInfo}
                >
                    Validar
                </button>
                {apiResponse !== '' && (<>
                    {apiResponse.length === 0 ? (
                        <h3 className="text-xl mb-8 text-center mt-6">NO se encontraron combinaciones que den como resultado el numero ingresado</h3>
                    ):(<>
                        <h3 className="text-xl mb-8 text-center mt-6">Estas son las posibles combinaciones dentro del array que su suma dan como resultado el numero: {targetSum}</h3>
                        <ul className="divide-y divide-gray-200">
                        {apiResponse.map((e, index) => (
                            <li key={index} className="py-4">
                                <div className="flex justify-center">
                                <span className="text-xl text-gray-800 mr-4">{e.num1}{' + '}{e.num2}{' = '}{targetSum}</span>
                                </div>
                            </li>
                        ))}
                        </ul>
                        </>
                    )}
                </>)}
            </div>
        </div>
    );
};

export default TwoNumberSum;
