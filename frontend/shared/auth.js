// setURL('http://developerakademie.com/smallest_backend_ever');
setURL('http://gruppe-61.developerakademie.com/backend');

let Name = "";
let Pwd = "";
let User; // if local = yes and you wanna use localstorage JSON.parse(localStorage.getItem("user")) || [];

async function userloading() {
    await downloadFromServer();
    User = await backend.getItem(`user`) || [];  
    console.log(User);
}

/** 
function userloading() {
    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(user));
    }
}*/

function changedName() {
    Name = document.getElementById("nameInput").value;
}

function changedPwd() {
    Pwd = document.getElementById("pwdInput").value;
}

function checkUser(event, Name, Pwd) {
    event.preventDefault();
    // User = JSON.parse(localStorage.getItem("user"));
    console.log(User);
    Pwd = sha256(Pwd);
    for (let i = 0; i < User.length; i++) {
        console.log(i);
        if ((User[i].name == Name) && (User[i].pwd == Pwd)) {
            // const activeUser = user[i].id
            const activeUser = { "id": User[i].id, "name": User[i].name }
            loginUser(activeUser);
            break;
        }
    }
}

async function loginUser(activeUser) {
    await sessionStorage.setItem("activeUser", JSON.stringify(activeUser));
    window.location.assign("http://gruppe-61.developerakademie.com/demo/containers/pages/app.html");
    // window.location.assign("http://localhost:5500/frontend/containers/pages/app.html");
}

function logoutUser() {
    sessionStorage.removeItem("activeUser");
    window.location.assign("http://gruppe-61.developerakademie.com/demo/index.html");
    // window.location.assign("http://localhost:5500/frontend/index.html");
}


function isloggedin() {
    let activeUser = sessionStorage.getItem("activeUser");

    if (activeUser == null || undefined) {
        window.location.assign("http://gruppe-61.developerakademie.com/demo/containers/pages/login.html")
        // window.location.assign("login.html")
    }
    else {
        return;
    }
}

function regisUser(event, Name, Pwd) {
    event.preventDefault();
    Pwd = sha256(Pwd);
    let oldUser = User // JSON.parse(localStorage.getItem("user"));
    console.log(oldUser);
    oldUser.push({ "id": (User.length), "name": `${Name}`, "pwd": `${Pwd}`});
    let newUser = oldUser
    console.log(newUser);
    backend.setItem("user", newUser);
    // localStorage.setItem("user", JSON.stringify(newUser));
    window.location.assign("http://gruppe-61.developerakademie.com/demo/index.html");
    // window.location.assign("http://localhost:5500/frontend/index.html");
}