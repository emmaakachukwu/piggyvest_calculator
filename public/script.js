function calculateTotal() {
  var month = document.myform.period.value;
  var amount = document.myform.amount.value;
  var r = 10;
  var totalInterest = (r * amount * month) / 100;
  window.totalInterest = totalInterest;
  var m = parseInt(month);
  var i = parseInt(totalInterest);
  var l = parseInt(amount);

  totalReturn = eval(totalInterest);
  totalTotal = eval(l + i);

  totalReturn ? document.getElementById("resultSection").style.display = "block" : (document.getElementById("resultSection").style.display = "none", document.getElementById("totalinterest").innerHTML = 0);
  document.getElementById("totalinterestrate").innerHTML = totalReturn;
}

document.getElementById("btn").onclick = function () {
  var month = document.myform.period.value;
  var amount = document.myform.amount.value;
  var r = 10;
  var totalInterest = (r * amount * month) / 100;

  var m = parseInt(month);
  var i = parseInt(totalInterest);
  var l = parseInt(amount);

  totalReturn = eval(totalInterest);
  totalTotal = eval(l + i);
  document.getElementById("totalinterest").innerHTML = totalTotal;

  document.getElementById("tweet").setAttribute("href", `https://twitter.com/intent/tweet?text=Wow! now i can save upto ${totalTotal} naira in a period of ${m} ${m > 1 ? 'months' : 'month'}. Thanks alot to piggyvest savings.`);

  totalTotal ? document.getElementById("share").style.display = "block" : document.getElementById("share").style.display = "none";
};

document.getElementById("export").onclick = async function () {
  let pload = {
    amount: parseInt(document.myform.amount.value),
    month: parseInt(document.myform.period.value),
    interest: window.totalInterest
  }

  const res = await fetch('/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pload)
  })

  console.log(res.json());
}