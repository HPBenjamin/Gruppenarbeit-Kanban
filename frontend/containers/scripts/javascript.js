let currentDraggingElement;

/* function updateHTML() {
    let open = todos.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';

    for (let index = 0; index < open.length; index++) {
        const element = open[index];
        document.getElementById('open').innerHTML += generateTodoHTML(element);
    }



    let closed = todos.filter(t => t['category'] == 'closed');

    document.getElementById('closed').innerHTML = '';

    for (let index = 0; index < closed.length; index++) {
        const element = closed[index];
        document.getElementById('closed').innerHTML += generateTodoHTML(element);
    }

} */

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}</div>`;
}

function startDragging(id) {
    currentDraggedElement = id;

}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveto(category) {
    todo[currentDraggedElement]['category'] = category;
    loadboard(0);
}

/*function hightlight(id) {
    document.getElementById(id).classList.add('drag-area-highligth');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highligth');
}*/