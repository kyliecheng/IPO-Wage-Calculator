//  IPO Wage calculator

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  console.log("hi");
  //Input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;

  // Process
  let total = (num1 + num2 + num3) / 5;

  //Output
  document.getElementById("output").innerHTML = total;
}
