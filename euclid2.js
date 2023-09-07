const first = document.getElementById("first");
const second = document.getElementById("second");
const submit = document.querySelector("input[type=submit]");

function runSorter(event) {
   let larger = Math.max(Number(first.value),Number(second.value));
   let smaller = Math.min(Number(first.value),Number(second.value));
   !Number.isNaN(larger % smaller) ?
      order(suiterList(larger, smaller)) :
      document.getElementById("gcd").innerHTML = 'enter valid numbers';
}

function order(list) {
   document.getElementById("ordered").innerHTML = list;
}

function suiterList(gauls, greeks) { 
   let columns = [];
   for (let i = 0; i < gauls; i++ ) {
      columns.push(['Gaul']);
   }
   for (let i = 0; i < greeks; i ++) {
      columns.push(['Greek']);
   }
   return euclidSort(columns, gauls, greeks);
}

function euclidSort(array, a, b) {
   let q = Math.trunc(a / b);
   let r = (a % b);
   for (let qCounter = 0; qCounter < q; qCounter++) {
      for (let i = 0; i < b; i++ ) {
         array[i] = array[i].concat(array.pop());
      } 
   }
   return !(r > 1) ? lineUp(array) : euclidSort(array, b, r);
}

function lineUp(sortedArray) {
   let linedUp = [];
   for (let i of sortedArray) {
      linedUp = linedUp.concat(i);
   }
   return linedUp;
}

window.addEventListener("keypress", () => {
   if (event.keyCode === 13) runSorter();
});

submit.addEventListener("click", runSorter);