let Name = "";
let Pwd = "";
let User = JSON.parse(localStorage.getItem("user")) || [];

function userloading() {
    if (!localStorage.getItem("user")){
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function show() {
    console.log(user);
}

function changedName() {
    Name = document.getElementById("nameInput").value;
}

function changedPwd() {
    Pwd = document.getElementById("pwdInput").value;
}

function checkUser(event, Name, Pwd) {
    event.preventDefault();
    User = JSON.parse(localStorage.getItem("user"));
    console.log(User);
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

function regisUser(event, Name, Pwd) {
    event.preventDefault();
    let oldUser = JSON.parse(localStorage.getItem("user"));
    oldUser.push({ "id": (User.length), "name": `${Name}`, "pwd": `${Pwd}` });
    console.log(oldUser);
    let newUser = oldUser
    localStorage.setItem("user", JSON.stringify(newUser));
    window.location.assign("http://127.0.0.1:5500/frontend/index.html");
}