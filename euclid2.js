

const first = document.getElementById("first");
const second = document.getElementById("second");
const submit = document.querySelector("input[type=submit]");

function runSorter(event) {
   let larger = Math.max(Number(first.value),Number(second.value));
   let smaller = Math.min(Number(first.value),Number(second.value));
   !Number.isNaN(larger % smaller) ?
      displayOrdered(suiterList(larger,smaller)) :
      document.getElementById("ordered").innerHTML = 'enter valid numbers';
}

function displayOrdered(list) {
   document.getElementById("ordered").innerHTML = list;
}

function suiterList(a, b) { 
   let gauls = [];
   let greeks = [];
   populate(a, i => {
   gauls.push(`Gaul ${i + 1}`);
   });
   populate(b, i => {
   greeks.push(`Greek ${i + 1}`);
   });
   return euclidSort(columns(gauls, greeks), a, b)
}

function populate(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function columns(array1, array2) {
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

window.addEventListener("keypress", () => {
   if (event.keyCode === 13) runSorter();
});

submit.addEventListener("click", runSorter);