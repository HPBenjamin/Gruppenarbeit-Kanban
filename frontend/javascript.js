let currentDraggingElement;

function init() {
    allowDrop();
    drop();
    updateHTML();
}

function updateHTML() {

}

function startDragging(id) {
    currentDraggingElement = id;
}

function drop() {
    document.getElementById('one').innerHTML = '';
    document.getElementById('one').innerHTML = [];
    updateHTML();

}