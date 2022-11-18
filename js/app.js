const toDoItems = document.getElementsByClassName("to_do_items")[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener('keydown', function(event) {
    if(event.key === "Enter")
    addItem();
})

function addItem(){
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');
    let writeIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightblue';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen'; 
    })

    writeIcon.className = "fa-sharp fa-solid fa-pen";
    writeIcon.style.color = 'lightwhite';
    writeIcon.addEventListener('click', function(){
        writeIcon.style.color = 'limegreen';
    } )

    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener('click', function(){
        divParent.remove();
    })

    divChild.appendChild(writeIcon);

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))