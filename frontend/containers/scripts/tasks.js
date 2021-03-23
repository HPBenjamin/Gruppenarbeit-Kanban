
let todo = JSON.parse(localStorage.getItem(`notes`));

// submits the note and loads again all notes

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

function submit(j) {

    let title = document.getElementById(`inputtitle${j}`).value;
    let note = document.getElementById(`inputdescription${j}`).value;
    let category;
    let show = 0;
    let k = 0;
    let id;
    let createdbyuser = sessionStorage.getItem("activeUser");
    let assignedtouser = document.getElementById("inputassigenduser").value || "";

    if (assignedtouser == ""){
        assignedtouser = createdbyuser
    }

    

    // add the other categories

    switch (j) {
        case 0:
            category = "backlog";
            break;
        case 1:
            category = "to_do"
            break;
        case 2:
            category = "in_progress"
            break;
        case 3:
            category = "testing"
            break;
        case 4:
            category = "done"
            break;
        case 5:
            category = document.getElementById(`inputcategory`).value
            break
        default:
            category = "backlog";
    }

    console.log(title, note);

    // getting the last element number in the array
    if (Array.isArray(todo) && todo.length) {
        k = todo.length;
    }

    id = k++;

    if (todo == null) {
        todo = [];
    }

    //console.log(k);
    // k++ is the new element`s number which is then filled with the object`s info
    todo[id] = {"id": `${id}`, 
                "createdbyuser": `${createdbyuser}`,
                "assignedtouser": `${assignedtouser}`,
                "title": `${title}`,
                "note": `${note}`,
                "category": `${category}`,
                "show": `${show}` };

    localStorage.setItem(`notes`, JSON.stringify(todo));

    // console.log(title, note, show); -- still here for debug

    document.getElementById(`taskform${j}`).innerHTML = ``;
    loadnotes(0);

}

// archivieren des todo Elements i = Todo Element Array Nr.
// k = welches Kategorie Notes / Archieve / Delelete gerade angezeigt wird

function archieveNote(i, k) {
    todo[i].show = 1;

    var showlocal = JSON.parse(localStorage.getItem(`notes`));
    // console.log(showlocal[i]);
    showlocal[i].show = 1;
    showlocal[i].category = "archieve";
    localStorage.setItem('notes', JSON.stringify(showlocal));

    loadnotes(k);
};

// back to backlog
function backtoBacklog(i, k) {
    todo[i].show = 0;

    var showlocal = JSON.parse(localStorage.getItem(`notes`));
    // console.log(showlocal[i]);
    showlocal[i].show = 0;
    showlocal[i].category = "backlog";
    localStorage.setItem('notes', JSON.stringify(showlocal));

    loadnotes(k);
};


// "soft" löschen bis k = Delete Kategorie dann endgültiges löschen!

function deleteNote(i, k) {
    todo[i].show = 2;

    var deletelocal = JSON.parse(localStorage.getItem(`notes`));
    // console.log(deletelocal[i]);
    deletelocal[i].show = 2;
    deletelocal[i].category = "delete";
    localStorage.setItem('notes', JSON.stringify(deletelocal));

    if (k == 3) {
        todo.splice(i, 1);

        deletelocal = JSON.parse(localStorage.getItem(`notes`));
        // console.log(deletelocal[i]);
        deletelocal.splice(i, 1);
        localStorage.setItem('notes', JSON.stringify(deletelocal));
    }

    loadnotes(k);
};

