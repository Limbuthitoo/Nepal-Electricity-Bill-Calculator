"use strict";
let form = document.forms["my-form"];
let menu = form.ampere;
let options = form.ampere.options;

const textInput = {
  previous: document.querySelector(".inputs #previousReading"),
  current: document.querySelector(".inputs #currentReading"),
};

let filterInputPrevious;
let filterInputCurrent;
let yourUnit;
const checkBtn = document.querySelector(".inputs button");
let unitInfo = document.getElementById("unit-info").textContent;
let billInfo = document.getElementById("bill-info").textContent;

(textInput.previous.addEventListener || textInput.current.addEventListener)(
  "keyup",
  () => {
    //removing spaces & all special characters from entered value
    filterInputPrevious = textInput.previous.value.replace(/[^0-9]/gi, "");
    filterInputCurrent = textInput.current.value.replace(/[^0-9]/gi, "");

    if (filterInputPrevious || filterInputCurrent) {
      return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
  }
);

menu.onchange = function () {
  let optionValue = this.value;

  let index = this.selectedIndex;
  let optionText = this.options[index].innerText;
  let calcUnit = function (options) {
    switch (options) {
      case "5 Ampere":
        checkBtn.addEventListener("click", () => {
          yourUnit = filterInputCurrent - filterInputPrevious;
          unitInfo = `${yourUnit} units`;
          document.getElementById("unit-info").textContent = unitInfo;
          if (yourUnit<= 20){
            billInfo = `Rs 30`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=30 && yourUnit>= 21){
            billInfo = `Rs ${(yourUnit * 6.5) - 20}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=50 && yourUnit>= 31){
            billInfo = `Rs ${(yourUnit * 8)-65}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=100 && yourUnit>= 51){
            billInfo = `Rs ${(yourUnit * 9.5)-115}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=250 && yourUnit>= 101){
            billInfo = `Rs ${(yourUnit * 9.5)-90}`;
            document.getElementById("bill-info").textContent = billInfo;
          }else if( yourUnit>250) {
            billInfo = `Rs ${(yourUnit * 11)-415}`;
            document.getElementById("bill-info").textContent = billInfo;
          }          
        });
        break;
      case "15 Ampere":
        checkBtn.addEventListener("click", () => {
          yourUnit = filterInputCurrent - filterInputPrevious;
          unitInfo = `${yourUnit} units`;
          document.getElementById("unit-info").textContent = unitInfo;
          if (yourUnit<= 20){
            billInfo = `Rs ${(yourUnit * 4) + 50}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=30 && yourUnit>= 21){
            billInfo = `Rs ${(yourUnit * 6.5) + 25}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=50 && yourUnit>= 31){
            billInfo = `Rs ${(yourUnit * 8)-20}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=100 && yourUnit>= 51){
            billInfo = `Rs ${(yourUnit * 9.5)-70}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=250 && yourUnit>= 101){
            billInfo = `Rs ${(yourUnit * 9.5)-45}`;
            document.getElementById("bill-info").textContent = billInfo;
          }else if( yourUnit>250){
            billInfo = `Rs ${(yourUnit * 11)-370}`;
            document.getElementById("bill-info").textContent = billInfo;
          }         
        });
        break;
      case "30 Ampere":
        checkBtn.addEventListener("click", () => {
          yourUnit = filterInputCurrent - filterInputPrevious;
          unitInfo = `${yourUnit} units`;
          document.getElementById("unit-info").textContent = unitInfo;
          if (yourUnit<= 20){
            billInfo = `Rs ${(yourUnit * 5) + 75}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=30 && yourUnit>= 21){
            billInfo = `Rs ${(yourUnit * 6.5) + 70}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=50 && yourUnit>= 31){
            billInfo = `Rs ${(yourUnit * 8)-25}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=100 && yourUnit>= 51){
            billInfo = `Rs ${(yourUnit * 9.5)-25}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=250 && yourUnit>= 101){
            billInfo = `Rs ${(yourUnit * 9.5)}`;
            document.getElementById("bill-info").textContent = billInfo;
          }else if( yourUnit>250){
            billInfo = `Rs ${(yourUnit * 11)-325}`;
            document.getElementById("bill-info").textContent = billInfo;
          }         
        });         
        break;
      default:
        checkBtn.addEventListener("click", () => {
          yourUnit = filterInputCurrent - filterInputPrevious;
          unitInfo = `${yourUnit} units`;
          document.getElementById("unit-info").textContent = unitInfo;
          if (yourUnit<= 20){
            billInfo = `Rs ${(yourUnit * 6) + 125}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=30 && yourUnit>= 21){
            billInfo = `Rs ${(yourUnit * 6.5) + 115}`;
            document.getElementById("bill-info").textContent = billInfo;
            console.log(billInfo);
          } else if (yourUnit <=50 && yourUnit>= 31){
            billInfo = `Rs ${(yourUnit * 8)+70}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=100 && yourUnit>= 51){
            billInfo = `Rs ${(yourUnit * 9.5)+20}`;
            document.getElementById("bill-info").textContent = billInfo;
          } else if (yourUnit <=250 && yourUnit>= 101){
            billInfo = `Rs ${(yourUnit * 9.5)+70}`;
            document.getElementById("bill-info").textContent = billInfo;
          }else if( yourUnit>250){
            billInfo = `Rs ${(yourUnit * 11)-255}`;
            document.getElementById("bill-info").textContent = billInfo;
          }         
        });
        break;
      }
  };
  calcUnit(optionText);
};
