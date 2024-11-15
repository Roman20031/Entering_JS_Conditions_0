/*function Control(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    const output = document.getElementById("output");
    const code = document.getElementById

    //console.log(password);
    //console.log(Password = ", password value, ")

    /*if (password.value == password_control){

        if(!isNaN(code.value)){
         console.log("Login is true");
        console.innerHTML = ("Login is true");   
        }
        else{
            output.innerHTML = ("Login is false");
        }
    }
    else{
        console.log("Login is false");
        output.innerHTML = ("Login is false");
    }
} */

function Control_a(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    const output = document.getElementById("output");
    const code = document.getElementById
    if (password.value == password_control){

        if(!isNaN(code.value)){
         console.log("Login is true");
        console.innerHTML = ("Login is true");   
        }
        else{
            output.innerHTML = ("Login is false");
        }
    }
    else{
        console.log("Login is false");
        output.innerHTML = ("Login is false");
    } 
}  

