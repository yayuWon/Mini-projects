const items = [{
        id: 1,
        name: "Orange",
        quantity: 5
  },
  {
        id: 2,
        name: "Carrot",
        quantity: 6
  },
  {
        id: 3,
        name: "Banana",
        quantity: 7
  },
  {
        id: 4,
        name: "Apple",
        quantity: 4
  },
  {
        id: 5,
        name: "Strawberry",
        quantity: 9
  },
  {
        id: 6,
        name: "Cabbagge",
        quantity: 4
  }
];

const mainInput = document.getElementById("input1");
const btn = document.getElementById("btn1");
let staticHeader = document.getElementById("dynamic-header");
let para = document.getElementById("para1");

mainInput.addEventListener("change", inputFun);
btn.addEventListener("click", btnFun);

function inputFun(){
        if(mainInput.value == ""){
            return staticHeader.textContent = `Results for ...`;
        }     
        return staticHeader.textContent = `Results for ${mainInput.value}`;
}
function btnFun(){
        const resultItem = items.find(item => mainInput.value.toLowerCase() === item.name.toLowerCase());
        if(!resultItem){
                return para.textContent = "Item not found";
        }
        //since 'textContent' expects string not object, I used JSON
        return para.textContent = JSON.stringify(resultItem, null, 1);
}