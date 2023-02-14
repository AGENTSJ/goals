const acc = document.getElementById('acc');
acc.addEventListener('mouseover',acpresent);
acc.addEventListener('mouseout',acabsent);

const menu = document.getElementById('menu');
menu.addEventListener('mouseover',mpresent);
menu.addEventListener('mouseout',mabsent);

function acpresent(){
     let temp = document.getElementById('accnt')
    temp.style['display']='block';
    temp.style['height']='200px';
    
}
function acabsent(){
    const temp = document.getElementById('accnt')
    temp.style['display']='block';
    temp.style['height']='0px';
    
}

function mpresent(){
    const temp = document.getElementById('menucont');
    temp.style['height']='300px'
}

function mabsent(){
    const temp = document.getElementById('menucont');
    temp.style['height']='0px'
}

