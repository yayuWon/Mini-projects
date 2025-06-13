

const numOne = document.getElementById("num-one");
const numTwo = document.getElementById("num-two");
const sumHolder = document.getElementById("sum-holder-id");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);


function add(){
    const one = parseFloat(numOne.value) || 0;
    const two = parseFloat(numTwo.value) || 0;
    
    sumHolder.innerHTML = `Your sum is: ${ one + two }`;
    //alert("hi");
}
/*
function add(){
    document.getElementById("header1").style.color = "blue";
}

*/
//document.getElementById("header1-id").style.color = "blue";










