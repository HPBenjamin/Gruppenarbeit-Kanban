function showcorretTitle(k) {
    switch (k) {
        case 0:
            document.getElementById("titlebeforenote").innerHTML = `<h2 class="margin-left"> Kanban</div>`
            break;
        case 1:
            document.getElementById("titlebeforenote").innerHTML = `<h2 class="margin-left"> Backlog </h2>`
            break;
        case 2:
            document.getElementById("titlebeforenote").innerHTML = `<h2 class="margin-left"> Archivierte Aufgaben</h2>`
            break;
        case 3:
            document.getElementById("titlebeforenote").innerHTML = `<h2 class="margin-left"> Gelöschte Aufgaben</h2>`
            break;
        default:
            console.log(`error`);
            break;
    }
}

function loadnotes(k) {

    showcorretTitle(k);

    switch (k) {
        case 0:
            loadboard(k);
            break;
        case 1:
            loadbacklog(k);
            break;
        case 2:
            loadarchieve(k);
            break;
        case 3:
            loadtrash(k);
        default:
            loadboard(k);
    }
}

function loadboard(k) {

    // einmal leeren bevor neu befüllt wird
    // document.getElementById("backlog").innerHTML = ``;
    document.getElementById("to_do").innerHTML = ``
    document.getElementById("in_progress").innerHTML = ``;
    document.getElementById("testing").innerHTML = ``;
    document.getElementById("done").innerHTML = ``
        // console.log(k, todo[0].show)

    //console.log(todo);

    if (todo != null) {
        for (i = 0; i < todo.length; i++) {
            if (todo[i].show == k) {
                switch (todo[i].category) {
                    case "to_do":
                        document.getElementById("to_do").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    <p>${todo[i].note}</p>
                    <div class="notefooteractions">
                    <img class="archieveicon" src="../../assets/archieve.png" onclick="archieveNote(${i},${k})"/>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>
                    </div>`;
                        break;
                    case "in_progress":
                        document.getElementById("in_progress").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    <p>${todo[i].note}</p>
                    <div class="notefooteractions">
                    <img class="archieveicon" src="../../assets/archieve.png" onclick="archieveNote(${i},${k})"/>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>
                    </div>`;
                        break;
                    case "testing":
                        document.getElementById("testing").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    <p>${todo[i].note}</p>
                    <div class="notefooteractions">
                    <img class="archieveicon" src="../../assets/archieve.png" onclick="archieveNote(${i},${k})"/>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>
                    </div>`;
                        break;
                    case "done":
                        document.getElementById("done").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    <p>${todo[i].note}</p>
                    <div class="notefooteractions">
                    <img class="archieveicon" src="../../assets/archieve.png" onclick="archieveNote(${i},${k})"/>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>
                    </div>`;
                        break;
                    default:
                        0;
                }

            }
        }
    }

}

function loadbacklog(k) {

    // einmal leeren bevor neu befüllt wird
    document.getElementById("backlog").innerHTML = ``;

    if (todo != null) {
        for (i = 0; i < todo.length; i++) {
            if (todo[i].show == 0) { // k is 1 in this case so i had to change it here to 0
                document.getElementById("backlog").innerHTML += `
                    <div class="notebacklog">
                        <div>${todo[i].assignedtouser}</div>
                        <b>${todo[i].title}</b>
                        <p>${todo[i].note}</p>
                        <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                        <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
            }
        }
    }
}


function loadarchieve(k) {

    // einmal leeren bevor neu befüllt wird
    document.getElementById("archieve").innerHTML = ``;

    if (todo != null) {
        for (i = 0; i < todo.length; i++) {
            if (todo[i].show == 1) {
                document.getElementById("archieve").innerHTML += `
                    <div class="notearchieve">
                    <div>${todo[i].assignedtouser}</div>
                        <b>${todo[i].title}</b>
                        <p>${todo[i].note}</p>
                        <button onclick="backtoBacklog(${i},${k})">Backlog</button>
                        <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
            }
        }
    }
}


function loadtrash(k) {

    // einmal leeren bevor neu befüllt wird
    document.getElementById("delete").innerHTML = ``;

    if (todo != null) {
        for (i = 0; i < todo.length; i++) {
            if (todo[i].show == 2) {
                document.getElementById("delete").innerHTML += `
                    <div class="notetrash">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button onclick="backtoBacklog(${i},${k})" >Backlog</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
            }
        }
    }
}