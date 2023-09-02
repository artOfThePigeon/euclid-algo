const first = document.getElementById("first");
const second = document.getElementById("second");
const submit = document.querySelector("input[type=submit]")
const tbody = document.querySelector("tbody");

function euclidAlgo(a, b) {
	let q = Math.trunc(a / b);
	let r = (a % b);
	buildTable([a, q, b, r])
	return !(a % b) ? Math.abs(b) : euclidAlgo(b, (a % b));
}

function buildTable(list) {
	let tr = document.createElement("tr");
	let td = {}
	for (let i of list) {
		td = document.createElement("td");
		td.appendChild(document.createTextNode(i));
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
}

function gcdIs(gcd) {
	document.getElementById("gcd").innerHTML = `The gcd is ${gcd}.`
}

function clearTable() {
	if (tbody.hasChildNodes()) {
		while (tbody.firstChild) {
			tbody.removeChild(tbody.firstChild);
		}
	}
}

function pressEnter(event) {
	if (event.keyCode === 13) {
		runEuclid()
	}
}

function runEuclid(event) {
	clearTable();
	let larger = Math.max(Number(first.value),Number(second.value));
	let smaller = Math.min(Number(first.value),Number(second.value));
	!Number.isNaN(larger % smaller) ?
		gcdIs(euclidAlgo(larger, smaller)) :
		document.getElementById("gcd").innerHTML = 'enter valid numbers';
}

window.addEventListener("keypress", pressEnter)

submit.addEventListener("click", runEuclid);


