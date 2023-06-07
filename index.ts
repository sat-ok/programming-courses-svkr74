//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//###########x
let num1, num2, result: number;
num1 = parseInt(prompt('entrer le numero 1'));
num2 = parseInt(prompt('entrer le numero 2'));
result = num1 * num2;
if (result == 0) {
  console.log('nul');
} else if (result > 0) {
  console.log('POSITIF');
} else {
  console.log('NEGATIF');
}
console.log('FIN');
