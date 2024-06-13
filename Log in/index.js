function storage(event){
    event.preventDefault();

    var email_id = document.getElementById("email").value;
    var u_password = document.getElementById("password").value;

    localStorage.setItem("is_email",email_id);
    localStorage.setItem("is_password",u_password);

}
function confirm(event){
    event.preventDefault();

    var email_inp = document.getElementById("email").value;
    var password_inp = document.getElementById("password").value;
    var email_sto = window.localStorage.getItem('is_email');
    var password_sto = window.localStorage.getItem('is_password');

    if(email_inp==email_sto && password_inp==password_sto){
        window.location.href = "index2.html";
    }
    else{
        alert("User has not registered!");
    }

}

function teleporter(event){
    window.location.href = "index.html";
}