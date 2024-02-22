import React, { useState} from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const NonConstructibleChange = () => {
    const [numbers, setNumbers] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [errors, setErrors] = useState({ numbers: ''})

    const handleNumbersChange = (e) => {
        setNumbers(e.target.value);
        setErrors({ ...errors, numbers: '' });
        setApiResponse('');
    };

    const validateInfo = async () => {

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

        setErrors({ ...errors, numbers: arrayNumberError || arrayNumberError2});
        
        if (arrayNumberError)
            return;
        try {
            const response = await fetch(API_URL + '/non-constructible-change', {
                method: 'POST',
                body: JSON.stringify({ arrayNumbers }),
                headers: { 'content-type': 'application/json;charset=utf-8' },
            });
            const result = await response.json();
            setApiResponse(result.currentChangeCreated)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-xl w-full px-6">
                <h1 className="text-2xl font-bold mb-8 text-center">Non-Constructible Change</h1>
                <h3 className="text-xl mb-8 text-center">
                    Dado un array de enterospositivos representados por valores de monedas en tu posecion, 
                    crea una funcion que regrese la minima cantidad de cambio que no se pueda crear con las monedas que se tienen.
                    las monedas pueden ser cualqueir numero positivo y no necesariamente son unicas.

                    Por ejemplo: teniendo las monedas = [1, 2 ,5], la minima cantidad de cambio que no podemos crear es 4.
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
                <button
                    className="w-full mt-2 bg-emerald-700 hover:bg-emerald-900 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-lg"
                    onClick={validateInfo}
                >
                    Validar
                </button>
                {apiResponse !== '' && (<>
                    <h3 className="text-xl mb-8 text-center mt-6">La cantidad minima de cambio que NO se puede crear es de: {apiResponse}</h3>
                </>)}
            </div>
        </div>
    );
};

export default NonConstructibleChange;
