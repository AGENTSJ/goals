const menuicon = document.getElementById('menu').addEventListener('click',()=>{
    menudisplay('menucont');
});
const proicon = document.getElementById('acc').addEventListener('click',()=>{
    menudisplay('accnt');
})





function menudisplay(id){

    let cont = document.getElementById(id);
    const st = window.getComputedStyle(cont)
    if(st.height=='0px'){
        
        cont.style['height']='fit-content';
   }else{
    cont.style['height']='0px'
   }


}