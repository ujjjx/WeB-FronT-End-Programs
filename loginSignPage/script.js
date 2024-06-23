document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    var username = document.querySelector('#name').value;
    var rollnoelement = document.querySelector('#rollno');
    var rollno  = rollnoelement?rollnoelement.value:null;
    var emailelement = document.querySelector('#email');
    var email = emailelement?emailelement.value:null;
    var ageelement = document.querySelector('#age');
    var age = ageelement?ageelement.value:null;
    var genderelement = document.querySelector('input[name= "gender"]:checked');
    var gender = genderelement?genderelement.value:null; 
    var addresselement = document.querySelector('#address');
    var address = addresselement?addresselement.value:null;
    var imageelement = document.querySelector('#photo');
    var image = imageelement?imageelement.value:null;
    var passwordElement = document.querySelector('#password');
    var password = passwordElement ? passwordElement.value : null;

    // value represents the current value of the element.zzz
    if(password != null){
        if(password === ''){
            alert('Please fill password');
        }
        else if(password.length<8 || password.length>15){
            alert('Password must be between 8 and 15 characters long');
        }
        else if(!password.match(/[0-9]/g) || !password.match(/[A-Z]/g) || !password.match(/[a-z]/g) || !password.match(/[^a-zA-Z\d]/g)){
            alert('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character');
        }
    }
    if(username === '')
        alert('Please fill username');
    else if(username.length<3 || username.length>20){
       alert("Username must be between 3 and 20 characters long");
    }
    else if(username !== ''){
    var usernameWords = username.split(' ');
    for(var i = 0;i<usernameWords.length;i++){
        if(usernameWords[i][0] !== usernameWords[i][0].toUpperCase()){
            alert('First letter of each word should be capitalised');
            return;
        }
    }
    }
    else if(rollno === '')
        alert('Please fill rollno');
    else if(rollno.length !== 11){
        alert('Rollno must be 9 characters long');
    }
    else if(email === ''){
        alert('Please fill email');
    }
    else if(email.indexOf('@')=== -1 || email.indexOf('.')=== -1){
        alert('Invalid email address');
    }
    else if(age === ''){
        alert('Please fill age');asd
    }
    else if(age<10 || age>100){
        alert('Age must be between 10 and 100');
    }
    else if(!Number.isInteger(Number(age))){ // Number.isInteger() is a method that is used to check if the number 
    // is an integer or not.
    // Number is first convert age to a number and then checking it whether it is an integer or not.
        alert('Age must be a number');
    }
    else if(!gender){
        alert('Please select your gender');
    }
    else if(address === ''){
        alert('Please fill address');
    }
    else if(address.length<10 || address.length>100){
        alert('Address must be between 10 and 100 characters long');
    }
    else if(image === ''){
        alert('Please upload your photo');
    }else if( image.indexOf('.jpg') === -1 && image.indexOf('.jpeg') === -1 && image.indexOf('.png') === -1){
        alert('Invalid image format');
    }
    if(username !== '')
        alert("Registration Successful");
    
})
// event.preventDefault() is a method that is used to stop the default action of an event from happening.

// In the context of a form when a submit button is triggered and sent  to the server the page is refreshed.
// If you want to handle the form submission in JavaScript and dont want the page to refresh you can call
// event.preventDefault() in the submit event handler
