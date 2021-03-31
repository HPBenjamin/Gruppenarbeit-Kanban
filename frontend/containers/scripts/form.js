
function taskform(o) {

    if (o != 5) {
        for (let k = 1; k < 4; k++) {
            document.getElementById(`taskform${k}`).innerHTML = ``
        };
    }

    document.getElementById(`taskformbutton${o}`).style.display = "none";

    document.getElementById(`taskform${o}`).innerHTML = `
    <div class="form1">
        <form class="form2">
            <button onclick="closeForm(${o})" > X </button>
            <input id="inputtitle${o}" class="title" placeholder="Title">
            <textarea id="inputdescription${o}" class="text" placeholder="Take a note.."></textarea>
            <div id="taskformmanipulationfield"></div>
            <div id="assigneduser${o}"></div>
        </form>
        <button class="submitbutton" onclick="submit(${o})">Ok</button>
    </div>
    `
    assign(o);
    taskformmanipultionforBacklog(o);
}

function closeForm(o) {
    document.getElementById(`taskform${o}`).innerHTML = ``;
    document.getElementById(`taskformbutton${o}`).style.display = "flex";

}

function taskformmanipultionforBacklog(o) {
    if (o == 5) {
        document.getElementById("taskformmanipulationfield").innerHTML = `
        <input list="possiblecategories" id="inputcategory" placeholder="category pls">

        <datalist id="possiblecategories">
            <option value="to_do">
            <option value="in_progress">
            <option value="testing">
            <option value="done">
        </datalist>
        `;
    }
}

function assign(o) {
    document.getElementById(`assigneduser${o}`).innerHTML = `
        <input list="teammembers" id="inputassigenduser" placeholder="person">

        <datalist id="teammembers"></datalist>
        `;
    for (let g = 0; g < user.length; g++) {
        document.getElementById("teammembers").innerHTML += `<option value=${user[g].name}>`
    }
}

/**  */

function fillteammembers(event){
    event.preventDefault();
    
    document.getElementById("members").innerHTML = ``;

    let filteruser = JSON.parse(localStorage.getItem("user"));
    for (let g = 0; g < filteruser.length; g++) {
        document.getElementById("members").innerHTML += `<option value=${filteruser[g].name}>`
    }
}