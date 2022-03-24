// TOGGLE THEME 
let t1 = document.getElementById('theme-1');
let t2 = document.getElementById('theme-2');
let t3 = document.getElementById('theme-3');

let contRes = document.querySelector('#container-result');
let contOpr = document.querySelector('#container-operations');
let btnNumOpr = document.querySelectorAll('.btn');
let btnDel = document.querySelectorAll('.btn-delete');
let contHead = document.querySelector('.container-head');
let buttonsNumbers = document.querySelectorAll('button');

// OPERATORS
let plus = document.querySelector('#plus-operator');
let minus = document.querySelector('#minus-operator');
let divide = document.querySelector('#divide-operator');
let multiply = document.querySelector('#multiply-operator');
let reset = document.querySelector('#reset-operator');
let btnEqual = document.querySelector('.btn-equal');


// VARIABLES
var myBody = document.getElementById('body');
var number = 0;
let result = 0;
let defaultRes = 0;
let firstClick = false;
let numbersClicked = [];
let num = '';

// themes
t1.addEventListener('click', function() {
    toggleTheme('body-bg-1', 'bg-container-result-1', 'bg-container-operations-1', 'bg-btn-1', 'bg-del-1', 'bg-equal-1', 'color-text-1');
});

t2.addEventListener('click', function() {
    toggleTheme('body-bg-2', 'bg-container-result-2', 'bg-container-operations-2', 'bg-btn-2', 'bg-del-2', 'bg-equal-2', 'color-text-2');
});

t3.addEventListener('click', function() {
    toggleTheme('body-bg-3', 'bg-container-result-3', 'bg-container-operations-3', 'bg-btn-3', 'bg-del-3', 'bg-equal-3', 'color-text-3');
});

// default result 
contRes.innerHTML = result;

// click numbers handler
buttonsNumbers.forEach(number => {
    number.addEventListener('click', function(){
        // console.log(parseInt(number.value));
        if (firstClick === false) {
            contRes.innerHTML = '';
            firstClick = true;
        }

        num += number.value;
        // numbersClicked.push(parseInt(num));
        // console.log(numbersClicked);
        console.log(num);

        // console.log(numbersClicked.length);
        // if (numbersClicked.length % 3 === 0) {
        //     contRes.innerHTML += '.';
        // }
        contRes.innerHTML += parseInt(number.value) ;
        
    });
    
});

// reset
reset.addEventListener('click', function() {
    firstClick = false;
    contRes.innerHTML = 0;
    num = '';
    numbersClicked = [];
});

// plus 
let sumNumbers = 0;
plus.addEventListener('click', function() {
    contRes.innerHTML += '+';

    numbersClicked.push(parseInt(num));
    // sumNumbers += parseInt(numbersClicked);
    
    numbersClicked.push('+');
    console.log(numbersClicked);
    // numbersClicked = [];
    num = '';

})

// equal 
btnEqual.addEventListener('click', function() {
    contRes.innerHTML = sumNumbers;
    sumNumbers = 0;
    let total = 0;

    numbersClicked.push(parseInt(num));
    console.log(numbersClicked);

    if (numbersClicked.includes('+')){
        console.log('ciao :)');

        for(let i = 0; i < numbersClicked.length; i++) {
            if (numbersClicked[i] !== '+') {
                // console.log(numbersClicked[i]);
                total += numbersClicked[i];
                console.log(total);
            }
        }

        contRes.innerHTML = total;
    }
});

    




// FUNCTIONS
function toggleTheme(msBody, msContRes, msContOpr, msBtn, msBtnDel, msBtnEqual, msContHead) {
    myBody.className = " ";
    myBody.classList.add(msBody);

    contRes.className = " ";
    contRes.classList.add(msContRes);

    contOpr.className = " ";
    contOpr.classList.add(msContOpr);

    btnNumOpr.forEach(e => {
        e.className = " ";
        e.classList.add(msBtn, 'btn');
    });

    btnDel.forEach(e => {
        e.className = " ";
        e.classList.add('btn-delete', msBtnDel);
    });

    btnEqual.className = " ";
    btnEqual.classList.add('btn-equal', msBtnEqual);

    contHead.className = " ";
    contHead.classList.add('container-head', msContHead);

}