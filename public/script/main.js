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

// introducing values to pass in functions
let valueBill = "";
let valueTip = "";
let valuePeople = 1; // I pass 1 person as default value for those who eat solo and just want to count the tip ASAP

// tip options from document
let tipOptions = document.querySelectorAll('.tip__option');
let tipOptionsArr = Array.prototype.slice.call(tipOptions);

// what happens when one's interacting with tip options...
tipOptionsArr.forEach(option => {
    option.addEventListener('click', () => {
        // when any one is clicked, all the others remove class active
        tipOptionsArr.forEach(op => {
            op.classList.remove('active');
        });
        // the clicked one gets active class to apply styles
        option.classList.add('active');
        // register the value of a data-id as valueTip to run main function (if not a custon value)
        if(option.dataset.id != "custom") {
            valueTip = option.dataset.id;
            countTotal(valueBill, valueTip, valuePeople);
            // clear custom tip input value
            inputTip.value = "";
        }
    })
})

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
    // if anything is inserted in an input, should verify & run a function if possible
    input.addEventListener('keyup', () => {
        if (input.id == "bill") {
            if (inputBill.value <= 0) {
                inputBad(inputBill, errorBill);
                errorBill.innerHTML = 'Should be more than 0';
                valueBill = "";
            } else if (inputBill.value > 100000) {
                inputBad(inputBill, errorBill);
                errorBill.innerHTML = 'Can\'t be more than 100k';
                valueBill = "";
            } else {
                inputGood(inputBill, errorBill);
                valueBill = inputBill.value;
            }
        } else if (input.id == "tip") {
            valueTip = inputTip.value;
        } else if (input.id == "people") {
            inputPeople.placeholder = '0';
            if(inputPeople.value < 1) {
                inputBad(inputPeople, errorPeople);
                errorPeople.innerHTML = 'Should be more than 0';
                valuePeople = "";
            } else if (inputPeople.value > 50) {
                inputBad(inputPeople, errorPeople);
                errorPeople.innerHTML = 'Cant\' be more than 50';
                valuePeople = "";
            } else if (inputPeople.value.includes('.')) {
                inputBad(inputPeople, errorPeople);
                errorPeople.innerHTML = 'Only natural numbers';
                valuePeople = "";
            } else {
                inputGood(inputPeople, errorPeople);
                valuePeople = inputPeople.value;
            }
        }
        // if all 3 parameters ok, will run
        countTotal(valueBill, valueTip, valuePeople);
    })
});

// _____ main function counting the total numbers
function countTotal (a,b,c) {
    // run the count function only if all 3 parameters have been modified by user
    if (a != "" && b != "" && c != "") {
        a = parseFloat(a);
        b = parseInt(b);
        c = parseInt(c);
        let resultTotal = ((a+(a*(b/100)))/c).toFixed(2);
        let resultTip = (resultTotal - (a/c)).toFixed(2);
        tipAmountPerPerson.innerHTML = resultTip;
        totalPerPerson.innerHTML = resultTotal;
        btnReset.classList.add('active');
    }
}

// _____ function clearing up all elems
// lol what if i just do a page refresh
btnReset.addEventListener('click', () => {
    if(btnReset.classList.contains('active')) {
        location.reload();
    }
})