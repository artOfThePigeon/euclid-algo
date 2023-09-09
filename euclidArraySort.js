const gauls = (number) => {
   let gaulsArr = [];
   while (number > 0) {
      gaulsArr.push('gaul');
      number--;
   }
   return gaulsArr;
}

const greeks = (number) => {
   let greeksArr = [];
   while (number > 0) {
      greeksArr.push('greek');
      number--;
   }
   return greeksArr;
}


const columns = (array1, array2) => {
  return array1.concat(array2).map(i => [i]);
}

function euclidSort(array, a, b) {
   const q = Math.trunc(a / b);
   const r = (a % b);
   for (let qCount = 0; qCount < q; qCount++) {
      for (let i = 0; i < b; i++ ) {
         array[i] = array[i].concat(array.pop());
      } 
   }
   return !(r > 1) ? lineUp(array) : euclidSort(array, b, r);
}


function lineUp(sortedColumns) {
   let linedUp = []
   for (let i of sortedColumns) {
      linedUp = linedUp.concat(i);
   }
   return linedUp;
   // return sortedColumns.forEach(i => linedUp = linedUp.concat(i));
}