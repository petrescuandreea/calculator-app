// TOGGLE THEME 
let t1 = document.getElementById('theme-1');
let t2 = document.getElementById('theme-2');
let t3 = document.getElementById('theme-3');

let contRes = document.querySelector('#container-result');
let contOpr = document.querySelector('#container-operations');
let btnNumOpr = document.querySelectorAll('.btn');
let btnDel = document.querySelectorAll('.btn-delete');
let btnEqual = document.querySelector('.btn-equal');
let contHead = document.querySelector('.container-head');
var myBody = document.getElementById('body');

t1.addEventListener('click', function() {
    toggleTheme('body-bg-1', 'bg-container-result-1', 'bg-container-operations-1', 'bg-btn-1', 'bg-del-1', 'bg-equal-1', 'color-text-1');
});

t2.addEventListener('click', function() {
    toggleTheme('body-bg-2', 'bg-container-result-2', 'bg-container-operations-2', 'bg-btn-2', 'bg-del-2', 'bg-equal-2', 'color-text-2');
});

t3.addEventListener('click', function() {
    toggleTheme('body-bg-3', 'bg-container-result-3', 'bg-container-operations-3', 'bg-btn-3', 'bg-del-3', 'bg-equal-3', 'color-text-3');
});


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