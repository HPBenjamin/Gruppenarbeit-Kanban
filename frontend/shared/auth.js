// setURL('http://developerakademie.com/smallest_backend_ever');

function show() {
    console.log(user);
}

let Name = "";
let Pwd = "";

function changedName() {
    Name = document.getElementById("nameInput").value;
}

function changedPwd() {
    Pwd = document.getElementById("pwdInput").value;
}

function checkUser(event, Name, Pwd) {
    event.preventDefault();

    if (Name === "" || Pwd === "") {
        alert("Wtf");
    }
    else {
        for (let i = 0; i < user.length; i++) {
            console.log(i);
            if ( (user[i].name == Name ) && (user[i].pwd == Pwd) ) {
                // const activeUser = user[i].id
                const activeUser = { "id":user[i].id , "name": user[i].name } 
                loginUser(activeUser);
                break;  
            }
        }
    }
}

async function loginUser(activeUser) {
    await sessionStorage.setItem("activeUser", JSON.stringify(activeUser));
    window.location.assign("http://127.0.0.1:5500/frontend/containers/pages/app.html");
}

function logoutUser() {
    sessionStorage.removeItem("activeUser");
    window.location.assign("http://127.0.0.1:5500/frontend/index.html");
}

function isloggedin() {
    let activeUser = sessionStorage.getItem("activeUser");

    if (activeUser == null || undefined) {
        window.location.assign("http://127.0.0.1:5500/frontend/containers/pages/login.html")
    }
    else {
        return;
    }
}


