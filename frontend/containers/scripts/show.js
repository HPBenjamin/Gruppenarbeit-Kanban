function showcorretTitle(k) {
    switch (k) {
        case 0:
            document.getElementById("titlebeforenote").innerHTML = `<h2> Kanban</div>`
            break;
        case 1:
            document.getElementById("titlebeforenote").innerHTML = `<h2> Backlog </h2>`
            break;
        case 2:
            document.getElementById("titlebeforenote").innerHTML = `<h2> archivierte Aufgaben</h2>`
            break;
        case 3:
            document.getElementById("titlebeforenote").innerHTML = `<h2> gelöschte Notizen</h2>`
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
                    /** case "backlog":
                        document.getElementById("backlog").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <div class="deleteicon"><img src="trash-icon.png" alt="delete" onclick="deleteNote(${i},${k})"/></div>
                    </div>`;
                        break; */
                    case "to_do":
                        document.getElementById("to_do").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                        break;
                    case "in_progress":
                        document.getElementById("in_progress").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                        break;
                    case "testing":
                        document.getElementById("testing").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                        break;
                    case "done":
                        document.getElementById("done").innerHTML += `
                    <div draggable="true" ondragstart="startDragging(${todo[i].id})" class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
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
                    <div class="note">
                    <div>${todo[i].assignedtouser}</div>
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                
                /** switch (todo[i].category) {
                    case "backlog":
                    document.getElementById("backlog").innerHTML += `
                    <div class="note">
                    <div>${todo[i].assignedtouser}</div>
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button class="archievedeletebutton" onclick="archieveNote(${i},${k})" >Archieve</button>
                    <div class="deleteicon"><img src="trash-icon.png" alt="delete" onclick="deleteNote(${i},${k})"/></div>
                    </div>`;
                        break;

                } */
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
                switch (todo[i].category) {
                    case "archieve":
                        document.getElementById("archieve").innerHTML += `
                    <div class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button onclick="backtoBacklog(${i},${k})">Backlog</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                        break;

                }
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
                switch (todo[i].category) {
                    case "delete":
                        document.getElementById("delete").innerHTML += `
                    <div class="note">
                    <b>${todo[i].title}</b>
                    ${todo[i].note}
                    <button onclick="backtoBacklog(${i},${k})" >Backlog</button>
                    <img class="deleteicon" src="../../assets/delete.png" alt="delete" onclick="deleteNote(${i},${k})"/>
                    </div>`;
                        break;

                }
            }
        }
    }
}

