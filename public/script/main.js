// inputs got from document
let inputBill = document.getElementById('bill');
let inputTip = document.getElementById('tip');
let inputPeople = document.getElementById('people');

// error messages
const errorBill = document.getElementById('error-bill');
const errorPeople = document.getElementById('error-people');

// result elements (noninteractive)
const tipAmountPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-pp');

// button reset
const btnReset = document.getElementById('btn');

// tip options from document
let tipOptions = document.querySelectorAll('.tip__option');
console.log(tipOptions);

// _____ functions for correctly/incorrectly filled inputs
function inputBad(i,e) {
    i.classList.add('error');
    e.classList.remove('hidden');
}

function inputGood(i,e) {
    i.classList.remove('error');
    e.classList.add('hidden');
}

// array containing all inputs to apply a "foreach"
let inputArray = [inputBill, inputTip, inputPeople];

// _____ function occuring on each input interaction
inputArray.forEach(input => {
    input.addEventListener('keyup', () => {
        if (input.id == "bill") {
            if (inputBill.value <= 0) {
                inputBad(inputBill, errorBill);
                tipAmountPerPerson.innerHTML = '0.00';
            } else {
                inputGood(inputBill, errorBill);
                let valueBill = inputBill.value;
                tipAmountPerPerson.innerHTML = (valueBill / 3).toFixed(2);
                console.log(valueBill);
            }
        } else if (input.id == "tip") {
            valueTip = inputTip.value;
        } else if (input.id == "people") {
            valuePeople = inputPeople.value;
        }
    })
});


function countTotal (a,b,c) {
    let resultTotal = ((a+(a*(b/100)))/c).toFixed(2);
    let resultTip =  (resultTotal - (a/c)).toFixed(2);
    console.log(resultTip);
    console.log(resultTotal);
    tipAmountPerPerson.innerHTML = resultTip;
    totalPerPerson.innerHTML = resultTotal;
    btnReset.classList.add('active');
}

// countTotal(100,5,2);