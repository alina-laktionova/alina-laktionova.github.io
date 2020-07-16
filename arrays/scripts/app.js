var ar = [];
var arModified = [];
var N_NUMBERS = 10;
var MIN_VALUE = 1;
var MAX_VALUE = 50;
var rep = document.querySelector('.report');
var arrString = document.getElementById('arrString');
var result = document.getElementById('result');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var buttonRes = document.getElementById('buttonRes');
var addingSubMenu = document.querySelector('.addingSubMenu');
var deletingSubMenu = document.querySelector('.deletingSubMenu');
var sortingSubMenu = document.querySelector('.sortingSubMenu');
var iterationsSubMenu = document.querySelector('.iterationsSubMenu');
var operation = '';

function printResult() {
    switch (operation) {
        case 'addingEnd':
            arModified = ar.slice();
            arModified.push(input1.value);
            result.textContent = arrToString(arModified);
            break;
        case 'addingBegin':
            arModified = ar.slice();
            arModified.unshift(input1.value);
            result.textContent = arrToString(arModified);
            break;
        case 'addingMiddle':
            arModified = ar.slice();
            arModified.splice(input2.value, 0, input1.value);
            result.textContent = arrToString(arModified);
            break;
        case 'updating':
            arModified = ar.slice();
            arModified.splice(input2.value, input3.value, input1.value);
            result.textContent = arrToString(arModified);
            break;
        case 'deletingEnd':
            arModified = ar.slice();
            arModified.pop();
            result.textContent = arrToString(arModified);
            break;
        case 'deletingBegin':
            arModified = ar.slice();
            arModified.shift();
            result.textContent = arrToString(arModified);
            break;
        case 'deletingMiddle':
            arModified = ar.slice();
            arModified.splice(input2.value, input3.value);
            result.textContent = arrToString(arModified);
            break;
        case 'slicing':
            arModified = ar.slice(input2.value, input3.value);
            result.textContent = arrToString(arModified);
            break;
        case 'sortAsc':
            arModified = ar.slice();
            arModified.sort(function (a,b) {
                return a-b;
            });
            result.textContent = arrToString(arModified);
            break;
        case 'sortDesc':
            arModified = ar.slice();
            arModified.sort(function (a,b) {
                return b-a;
            });
            result.textContent = arrToString(arModified);
            break;
        case 'sumAll':
            var sum = 0;
            arModified = ar.slice();
            function sumVal(value) {
                sum += value;
            }
            arModified.forEach(sumVal);
            result.textContent = sum;
            break;
        case 'numbersMore':
            arModified = ar.filter(function (value) {
                return value > input2.value;
            })
            result.textContent = arrToString(arModified);
            break;
        default: result.textContent = "Select an operation";
    }
}

function createRandomArray() {
    fillRandomArray(ar, N_NUMBERS);
    arrString.textContent = arrToString(ar);
}
function fillRandomArray(array, nNumbers) {
    for (var i = 0; i < nNumbers; i++) {
        array[i] = getRandomNumber(MIN_VALUE, MAX_VALUE);
    }
}
function getRandomNumber(minValue, maxValue) {
    return minValue + Math.round(Math.random() * (maxValue - minValue));
}

function resetAll() {
    resetMenu();
    arrString.textContent = '';
    ar = [];
    arModified = [];
}
function resetMenu() {
    resetSub();
    addingSubMenu.hidden = true;
    deletingSubMenu.hidden = true;
    sortingSubMenu.hidden = true;
    iterationsSubMenu.hidden = true;
    buttonRes.hidden = true;
    rep.textContent = '';
}
function resetSub() {
    buttonRes.hidden = false;
    input1.hidden = true;
    input2.hidden = true;
    input3.hidden = true;
    input1.value = '';
    input2.value = '';
    input3.value = '';
    result.textContent = '';
    operation = '';
}

function adding() {
    resetMenu();
    addingSubMenu.hidden = false;
}
function addingEnd() {
    resetSub();
    operation = 'addingEnd';
    input1.hidden = false;
    input1.setAttribute('placeholder', 'number to add at the end');
    rep.textContent = 'Adding element at the end of array';
}
function addingBegin() {
    resetSub();
    operation = 'addingBegin';
    input1.hidden = false;
    input1.setAttribute('placeholder', 'number to add at the beginning');
    rep.textContent = 'Adding element at the beginning of array';
}
function addingMiddle() {
    resetSub();
    operation = 'addingMiddle';
    input1.hidden = false;
    input2.hidden = false;
    input1.setAttribute('placeholder', 'number to add by index');
    input2.setAttribute('placeholder', 'index');
    rep.textContent = 'Adding element at the middle of array';
}

function updating() {
    resetMenu();
    operation = 'updating';
    input1.hidden = false;
    input2.hidden = false;
    input3.hidden = false;
    buttonRes.hidden = false;
    input1.setAttribute('placeholder', 'number to add');
    input2.setAttribute('placeholder', 'index');
    input3.setAttribute('placeholder', 'number of elements to delete');
    rep.textContent = 'Updating elements in array';
}

function deleting() {
    resetMenu();
    deletingSubMenu.hidden = false;
}
function deletingEnd() {
    resetSub();
    operation = 'deletingEnd';
    rep.textContent = 'Deleting element from the end of array';
}
function deletingBegin() {
    resetSub();
    operation = 'deletingBegin';
    rep.textContent = 'Deleting element from the beginning of array';
}
function deletingMiddle() {
    resetSub();
    operation = 'deletingMiddle';
    input2.hidden = false;
    input3.hidden = false;
    input2.setAttribute('placeholder', 'index');
    input3.setAttribute('placeholder', 'number of elements to delete');
    rep.textContent = 'Deleting element from the middle of array';
}

function slicing() {
    resetMenu();
    operation = 'slicing';
    buttonRes.hidden = false;
    input2.hidden = false;
    input3.hidden = false;
    input2.setAttribute('placeholder', 'index start');
    input3.setAttribute('placeholder', 'index end');
    rep.textContent = 'Slicing - copying part of array';
}

function sorting() {
    resetMenu();
    sortingSubMenu.hidden = false;
}
function sortAsc() {
    resetSub();
    operation = 'sortAsc';
    rep.textContent = 'Sorting array in the ascending order';
}
function sortDesc() {
    resetSub();
    operation = 'sortDesc';
    rep.textContent = 'Sorting array in the descending order';
}

function iterations() {
    resetMenu();
    iterationsSubMenu.hidden = false;
}
function sumAll() {
    resetSub();
    operation = 'sumAll';
    buttonRes.hidden = false;
    rep.textContent = 'Sum of all numbers in the array';
}
function numbersMore() {
    resetSub();
    operation = 'numbersMore';
    input2.hidden = false;
    input2.setAttribute('placeholder', 'number');
    rep.textContent = 'Showing numbers that more than a given number';
}

function arrToString(array) {
    var str = '';
    function myFunction(value) {
        str += '['+value+'] ';
    }
    array.forEach(myFunction);
    return str;
}






