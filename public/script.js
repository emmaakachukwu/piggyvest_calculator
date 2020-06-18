function calculateTotal() {
  var month = document.myform.firstname.value; console.log(month)
  var amount = document.myform.lastname.value;
  var r = 10;
  var totalInterest = (r * amount * month) / 100;
  var m = parseInt(month);
  var i = parseInt(totalInterest);
  var l = parseInt(amount);

  totalReturn = eval(totalInterest);
  totalTotal = eval(l + i);

  document.getElementById("totalinterestrate").innerHTML = totalReturn;
}

document.getElementById("btn").onclick = function () {
  var month = document.myform.firstname.value;
  var amount = document.myform.lastname.value;
  var r = 10;
  var totalInterest = (r * amount * month) / 100;

  var m = parseInt(month);
  var i = parseInt(totalInterest);
  var l = parseInt(amount);

  totalReturn = eval(totalInterest);
  totalTotal = eval(l + i);
  document.getElementById("totalinterest").innerHTML = totalTotal;
};
