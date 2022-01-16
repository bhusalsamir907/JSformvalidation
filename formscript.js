
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
     item.innerHTML="";

    }
}


function seterror(id, error){
    // sets error inside tag if id
   element = document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval=true;
    clearErrors();

    // Performs validation & if validation fails, set the value of returnval to false.
    var name = document.forms['myForm']["fname"].value;
    if(name.length<5)
    {
        seterror("name","Length of Name is too short");
         returnval = false;
    }

    if(name.length==0) 
    {
        seterror("name","* Length of Name Cannot be Zero");
         returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if(email.length>20)
    {
        seterror("email","Length of email is too long");
         returnval = false;
    }

    var phone = document.forms['myForm']["phone"].value;
    if(phone.length!=10)
    {
        seterror("phone","Phone Number Must Be 10 Digit.");
         returnval = false;
    }
    if(phone.length!=int)
    {
        seterror("phone","please enter number.");
         returnval = false;
    }
    var password = document.forms['myForm']["pass"].value;
    if(password.length<7)
    {
        seterror("pass","Password must contain Alphanumeric with upper case and special charaters");
         returnval = false;
    }

    var cpassword = document.forms['myForm']["cpass"].value;
    if(cpassword!=password)
    {
        seterror("cpass","Please enter same password");
         returnval = false;
    }




    

    
    
     return returnval;

}