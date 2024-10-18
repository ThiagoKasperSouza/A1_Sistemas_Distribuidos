/*
Autor: Thiago Kasper de Souza - 2024

COMANDO
Faça um algoritmo que preencha um vetor com 5 números do teclado e 
após substitua os pares por um e os impares por zero.
*/
const MAX_ITERATIONS:number = 5;

export function isEven(a: number): number {
  if (!a || !Number.isInteger(a)) return -1; // filters null & non-integers
  if (a %2 == 0) return 1;
  return 0;
}


// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {

  const nums:number[] = [];
  let temp: number|null;
  
  for(let n:number=0; n <MAX_ITERATIONS; n++) {
    do {
      temp = Number(prompt(`Digite o número ${n+1}: `));
    } while (isEven(temp) == -1);
   
    if(temp != -1) nums.push(isEven(temp));
  }
  console.log(nums);
}
