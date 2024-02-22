import express from "express";
import cors from "cors";

export const app = express ();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/two-number-sum', (req, res) =>{
  const {arrayNumbers, targetSum } = req.body; 

  //Validacion de los campos que se estan recibiendo
  if(!Array.isArray(arrayNumbers) || isNaN(parseInt(targetSum))) {
    return res.status(400).json({ error: 'Error, Please provide an array of integers and the target of the sum' });
  }
  //ordenamiento del array recibido
  const sortedArray = arrayNumbers.sort();
  const responseArray = [];

  let pt1 = 0, pt2 = sortedArray.length - 1;

  //Se realiza una busqueda binaria para encontrar los elementos, ayudado de 2 punteros, 
  //que cumplan con la condicion que su suma sea igual al numero  ingresado 
  while(pt1 < pt2){
    if(parseInt(sortedArray[pt1]) + parseInt(sortedArray[pt2]) === parseInt(targetSum)){
      responseArray.push({num1: parseInt(sortedArray[pt1]), num2: parseInt(sortedArray[pt2])});
      pt1++;
    } else if(parseInt(sortedArray[pt1]) + parseInt(sortedArray[pt2]) < targetSum) {
      pt1++;
    } else{
      pt2--;
    }
  }

  //Return success
  return res.status(200).json({ 
    responseArray,
    message:"success",
    error: false 
  });
});

app.post('/non-constructible-change', (req, res) =>{
  const {arrayNumbers } = req.body;

  //Validacion de los campos que se estan recibiendo
  if(!Array.isArray(arrayNumbers)) {
    return res.status(400).json({ error: 'Error Type, Please provide an array of integers' });
  }

  //Ordenamiento del array recibido
  const sortedArray = arrayNumbers.sort((a,b) => a-b);
  let currentChangeCreated = 0;

  //Iteramos atravez de todos los elementos del array ordenado, creamos una validacion donde comparamos 
  //el elemento actual con el cambio que podemos crear, si este es mayor a uno significa que encontramos el minimo cambio quie podemos entregar
  //si esta validacion no se cumple, se suma el elemento a la cantidad de cambio que podemos entregar
  for (const item of sortedArray) {
    if (parseInt(item) > currentChangeCreated + 1) {
      currentChangeCreated++;
      break;
    }
    currentChangeCreated += parseInt(item);
  }
 
  //Respuesta success
  return res.status(200).json({ 
    currentChangeCreated,
    message:"success",
    error: false 
  });
});

app.listen(port, () => {
  console.log("App listening on port => " + port)
})