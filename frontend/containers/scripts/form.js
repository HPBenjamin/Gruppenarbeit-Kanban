
async function taskform(o) {
    document.getElementById(`taskform${o}`).innerHTML = `
    <div class="form1">
        <form class="form2">
            <input id="inputtitle${o}" class="title" placeholder="Title">
            <textarea id="inputdescription${o}" class="text" placeholder="Take a note.."></textarea>
            <div id="taskformmanipulationfield"></div>
            <div id="assigneduser"></div>
        </form>
        <button class="submitbutton" onclick="submit(${o})">Ok</button>
    </div>`
    await taskformmanipultionforBacklog(o);
    await assign();
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

function assign(){
    document.getElementById("assigneduser").innerHTML = `
        <input list="teammembers" id="inputassigenduser" placeholder="person">

        <datalist id="teammembers"></datalist>
        `;
    for (let g = 0; g < user.length; g++){
        document.getElementById("teammembers").innerHTML += `<option value=${user[g].name}>`
    }
}
