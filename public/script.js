let amount = document.getElementById('amount');
let investment = document.getElementById('investment');
let rate = document.getElementById('rate');
let period = document.getElementById('period');
let interestCalc = document.getElementById('interest');
let submit = document.getElementById('btn');

submit.addEventListener('click', onSubmit);
async function onSubmit(){
    let error;
    if ( !amount.value || !investment.value || !rate.value || !period.value ) {
        error = "All fields are requitred";
    } else {
        let interest = (parseInt(amount.value) * parseInt(rate.value) * parseInt(period.value)) / 100;
        interestCalc.innerHTML = `<span>&#8358;${interest}</span>`;
        return;
        const postInterest = await fetch( '/', { //set the url to post the inputs
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount.value,
                investment: investment.value,
                interest
            })
        })
        console.log(postInterest.json()); //response returns here
    }
}