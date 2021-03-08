// let todo = [{}];
let todo = JSON.parse(localStorage.getItem(`notes`));

/** not needed 

var showhide = 1;
 
function showhidelsb() {
    var leftside = document.getElementById("leftsidebar").classList
    if (showhide == 1) {
        leftside.add("d-none");
        showhide = 0;
        // console.log(showhide);
    }
    else {
        leftside.remove("d-none");
        showhide = 1;
        // console.log(showhide);
    }
}
 */

/**  not needed
function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {

        submit();
        return false;
    }
} */

// submits the Note and loads again all notes

function taskform(o) {
    document.getElementById("taskform").innerHTML=`
    <div class="form1">
        <form class="form2">
            <input id="input${o}" class="title" placeholder="Title">
                <textarea id="input${o}" class="text" placeholder="Take a note.."></textarea>
                <!-- If you want Tab as submit element onkeypress="return runScript(event)" -->
                            </form>
            <button class="submitbutton" onclick="submit(${o})">Ok</button>
    </div>`
}


function submit(j) {

    let title = document.getElementById(`input${j}`).value;
    let note = document.getElementById(`input${j}`).value;
    let category;
    let show = 0;
    let k = 0;

// add the other categories

    switch(j){
        case 0: category = "backlog";
        break;
        case 1: category = "to_do"
        break;
        case 2: category = "in_progress"
        break;
        case 3: category = "testing"
        break;
        case 4: category = "done"
        break;
        default: category = "backlog";
    }

    console.log(title, note);

    // getting the last element number in the array
    if ( Array.isArray(todo) && todo.length ) {
            k = todo.length;
    }

    if (todo == null){
            todo = [];
    }

    //console.log(k);
    // k++ is the new element`s number which is then filled with the object`s info
    todo[k++] = {"title": `${title}`, "note": `${note}`, "category": `${category}`,  "show": `${show}` };

    localStorage.setItem(`notes`, JSON.stringify(todo));

    // console.log(title, note, show); -- still here for debug

    document.getElementById("taskform").innerHTML=``;
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