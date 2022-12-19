    function signup(){
        window.location.href="signup_page.html";
    }

    function submit(){
    
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var dob = document.getElementById("dob").value;
        var gender = document.getElementById("gendr").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var state = document.getElementById("state").value;
        var distric = document.getElementById("district").value;
        var password = document.getElementById("password").value;
        var photo = document.getElementById("photo").value;

        //store data to local storage
        localStorage.setItem("photo",photo)
        localStorage.setItem("firstname",firstname);
        localStorage.setItem("lastname",lastname);
        localStorage.setItem("dob",dob);
        localStorage.setItem("gender",gender);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        localStorage.setItem("state",state);
        localStorage.setItem("district",distric);
        localStorage.setItem("password",password);
        
        window.location.replace("mainfile.html")
    }



    // Logi In function

    function login(){
        var username = document.getElementById("user_id").value;
        var password = document.getElementById("true_pw").value;
        if (username == localStorage.getItem("email") && password == localStorage.getItem("password")){
            window.location.href="adm_puzz.html"
        }
        else{
            alert("Check The Username and Password")
        }
    }


//document.getElementById('profile').innerHTML=img.src;
document.getElementById('fname').innerHTML=localStorage.getItem("firstname");
document.getElementById('lname').innerHTML=localStorage.getItem("lastname");
document.getElementById('lsdob').innerHTML=localStorage.getItem("dob");
document.getElementById('lsemail').innerHTML=localStorage.getItem("email");
document.getElementById('lsgender').innerHTML=localStorage.getItem("gender");
document.getElementById('lsphone').innerHTML=localStorage.getItem("phone");
document.getElementById('lsstate').innerHTML=localStorage.getItem("state");
document.getElementById('lsdistric').innerHTML=localStorage.getItem("district");
console.log(localStorage.getItem("photo"));



function signout(){
    window.location.replace("mainfile.html");
}

function startgame() {
    window.location.replace("gamepuzz.html");
}