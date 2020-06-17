let amount = document.getElementById('amount');
let investment = document.getElementById('investment').value;
let rate = document.getElementById('rate').value;
let time = document.getElementById('time').value;
let submit = document.getElementById('btn');

submit.addEventListener('click', onSubmit);

function onSubmit(){
    let error;
    if ( !amount || !investment || !rate || !time ) {
        error = "All fields are requitred";
    } else {
        //continue here
    }
}