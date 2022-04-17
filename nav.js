const openMenu = () => {
    document.querySelector('.menubr'). className='active';
}

const closeMenu = () => {
    document.querySelector('.menubr'). className='';
}

document.getElementById('menubutton').onclick = e => {
    e.preventDefault();
    openMeny();
}
document.querySelector('button .closebtn').onclick = e => {
    closeMenu();
}

function onalert() {
    alert("Sorry,you should create an account before you can shop");
}