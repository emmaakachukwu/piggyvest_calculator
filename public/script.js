let amount = document.getElementById('amount').value;
let investment = document.getElementById('investment').value;
let rate = document.getElementById('rate').value;
let period = document.getElementById('period').value;
let interestCalc = document.getElementById('interest');
let submit = document.getElementById('btn');

submit.addEventListener('click', onSubmit);

async function onSubmit(){
    let error;
    if ( !amount || !investment || !rate || !time ) {
        error = "All fields are requitred";
    } else {
        let interest = (amount * rate * period) / 100;
        interestCalc.value = interest;
        const postInterest = await fetch( '/', { //set the url to post the inputs
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                investment,
                interest
            })
        })
        console.log(postInterest.json()); //response returns here
    }
}