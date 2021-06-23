export function validate(input){
  let errors = {};
  
  if (!input.name)  errors.name = 'Ingrese un nombre';
  if (!input.difficulty)  errors.difficulty = 'Elija una dificultad';
  else if (!/^[0-9]$/.test(input.difficulty)) errors.difficulty = 'La dificultad debe ir de 1 a 5';
  if (!input.duration)  errors.duration = 'Ingrese un numero (en dias)';
  else if (!/^[0]*?[1-9]{1}[0-9]{0,2}$/.test(input.duration)) errors.duration = 'Ingrese un numero del 1 al 999';
  if (!input.season)  errors.season = 'Elija una temporada';
  else if (!/[a-zA-Z ]$/.test(input.season))  errors.season = 'Elija una temporada valida';
  if (!input.countries.length)  errors.countries = 'Agregue al menos un pais a la actividad';
  return errors;
}