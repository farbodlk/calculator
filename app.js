



let billValue = 10;
let tipValue = 0.15;
let peopleValue = 1;

const bill = document.getElementById("inp-bill");
bill.addEventListener("input", setBillValue);
function setBillValue() {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
  }
  billValue = parseFloat(bill.value);
  console.log(billValue)
  calculateTip()
}


const tipBtns = document.querySelectorAll(".tip");
tipBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
function handleClick(event) {
  tipBtns.forEach((btn) => {
    btn.classList.remove("btn-active");
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("btn-active");
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  calculateTip()
}

const tipCustom = document.getElementById("inp-tip");
tipCustom.addEventListener("input", setTipCustomValue);
function setTipCustomValue() {
  tipValue = parseFloat(tipCustom.value / 100);

  tipBtns.forEach((btn) => {
    btn.classList.remove("btn-active");
  });

  calculateTip()
}

const errorMsg = document.querySelector ('.error-msg')
const people = document.getElementById("inp-people");
people.addEventListener("input", setPeopleValue);
function setPeopleValue() {
  peopleValue = parseFloat(people.value);

        if(peopleValue <= 0){
        errorMsg.classList.add("show-error-msg");
        setTimeout(function(){
        }, 3000);
    }


  calculateTip()
}


const results = document.querySelectorAll(".value");
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    results[0].innerHTML = "$" + tipAmount.toFixed(2);
    results[1].innerHTML = "$" + total.toFixed(2);
  }


if (bill.value =='') {
  results[0].innerHTML = "";
  results[1].innerHTML = "";

} 

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', reset);

function reset(){
  bill.value = '0.0';
  setBillValue();

  tipBtns[2].click();

  people.value = '1';
  setPeopleValue();
}


}


