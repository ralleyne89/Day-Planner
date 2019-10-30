let userInput = {};
let myObj = {
    Activity: $(".input-field").val()
  }
// this will turn the Object into a string so local storage can save it
let myObjString = JSON.stringify(myObj);
console.log(myObjString);

localStorage.setItem('myObj', myObjString);

let myObjSelect = JSON.parse(localStorage.getItem('myObj'));

console.log(myObjSelect);

$('.btn').on('click',function save(event) {
    // call a function that stops the page from refreshing
    event.preventDefault();
    
    // make a variable for the value of user activity 
    let inputText = document.getElementById('email').value;
    console.log("value inside is: " + inputText);

    // insert data to the array 
    userInput.push(inputText);

    // get the value from the user 
    let pval = "";
    for(i = 0; i < userInput.length; i++) {
        pval += userInput[i];
    }
    // display the array data 
    document.getElementById('email').innerHTML = pval;

// $('.btn').text('SAVED');


    // if (userInput === pval) {

    //     $('.input').attr("style", "background-color:", "green")

    // }



});