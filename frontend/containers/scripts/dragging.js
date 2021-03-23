let currentDraggingElement;

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveto(category) {
    todo[currentDraggedElement]['category'] = category;
    
    let change = JSON.parse(localStorage.getItem(`notes`));
    // console.log(showlocal[i]);
    // change[currentDraggingElement].show = 0;
    console.log();
    change[currentDraggedElement].category = category;

    localStorage.setItem('notes', JSON.stringify(change));

    loadboard(0);
}

/*function hightlight(id) {
    document.getElementById(id).classList.add('drag-area-highligth');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highligth');
}*/