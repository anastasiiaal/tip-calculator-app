let inputBill = document.getElementById('bill');
let inputTip = document.getElementById('tip');
let inputPeople = document.getElementById('people');

const tipAmountPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-pp');
const btnReset = document.getElementById('btn');

// console.log(valueBill + ',' + valueTip + ',' + valuePeople);

// let valueBill, valueTip, valuePeople;
let inputArray = [inputBill, inputTip, inputPeople];

function inputBad(i) {
    i.classList.add('error');
}

function inputGood(i) {
    i.classList.remove('error');
}

inputArray.forEach(input => {
    input.addEventListener('keyup', () => {
        if (input.id == "bill") {
            if (inputBill.value <= 0) {
                inputBad(inputBill);
                tipAmountPerPerson.innerHTML = '0.00';
            } else {
                inputGood(inputBill);
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