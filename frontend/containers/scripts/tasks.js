
var showhide = 1;
// let todo = [{}];
let todo = JSON.parse(localStorage.getItem(`notes`));

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

/**  not needed
function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {

        submit();
        return false;
    }
} */

function showcorretTitle(k) {
    switch (k) {
        case 0:
            document.getElementById("titlebeforenote").innerHTML = `<h2> Notizen</div>`
            break;
        case 1:
            document.getElementById("titlebeforenote").innerHTML = `<h2> Archivierte Notizen</h2>`
            break;
        case 2:
            document.getElementById("titlebeforenote").innerHTML = `<h2> gelöschte Notizen</h2>`
            break;
        default:
            console.log(`error`);
            break;
    }
}

function loadnotes(k) {

    // einmal leeren bevor neu befüllt wird
    document.getElementById("notebox").innerHTML = ``
    // console.log(k, todo[0].show)

    //console.log(todo);

    showcorretTitle(k);

    if ( todo != null ) {
        for (i = 0; i < todo.length; i++) {
            if (todo[i].show == k) {
                document.getElementById("notebox").innerHTML += `
            <div class="note">
            <b>${todo[i].title}</b>
            ${todo[i].note}
            <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
            <div class="deleteicon"><img src="trash-icon.png" alt="delete" onclick="deleteNote(${i},${k})"/></div>
            </div>`;
            }
        }
    }
}

// submits the Note and loads again all notes

function submit() {
    
    var title = document.getElementById("input1").value;
    var note = document.getElementById("input2").value;
    var show = 0;
    var k = 0;

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
    todo[k++] = { "title": `${title}`, "note": `${note}`, "show": `${show}` };

    localStorage.setItem(`notes`, JSON.stringify(todo));

    // console.log(title, note, show); -- still here for debug

    loadnotes(0);
}

// archivieren des todo Elements i = Todo Element Array Nr. 
// k = welches Kategorie Notes / Archieve / Delelete gerade angezeigt wird

function archieveNote(i, k) {
    todo[i].show = 1;

    var showlocal = JSON.parse(localStorage.getItem(`notes`));
    // console.log(showlocal[i]);
    showlocal[i].show = 1;
    localStorage.setItem('notes', JSON.stringify(showlocal));

    loadnotes(k);
};

// "soft" löschen bis k = Delete Kategorie dann endgültiges löschen!

function deleteNote(i, k) {
    todo[i].show = 2;

    var deletelocal = JSON.parse(localStorage.getItem(`notes`));
    // console.log(deletelocal[i]);
    deletelocal[i].show = 2;
    localStorage.setItem('notes', JSON.stringify(deletelocal));

    if (k == 2) {
        todo.splice(i, 1);

        deletelocal = JSON.parse(localStorage.getItem(`notes`));
        // console.log(deletelocal[i]);
        deletelocal.splice(i, 1);
        localStorage.setItem('notes', JSON.stringify(deletelocal));
    }

    loadnotes(k);
};