import * as calc from './calculator.js';

// setup
let testbutton = document.querySelector("#testbttn");

testbutton.addEventListener('click', runTests)

function runTests() {
  console.log("starting tests")
  
  // tests go here
  testUmfang();
  testUmfangInvalidInputs();

  console.log("stopping tests")
}

function testUmfang() {
  let v = {
    a: 1,
    b: 5,
    c: 5
  }

  calc.umfang(v)

  if (v.umfang == 11) {
    console.info("testUmfang works")
  } else {
    console.warn("umfang is not 11")
  }
}

function testUmfangInvalidInputs() {
  let v = {
    a: 1,
    b: 2
  }
  
  calc.umfang(v)

  if (!isNaN(v.umfang)) {
    console.warn("NaN is expected on invalid inputs")
  }
}

























