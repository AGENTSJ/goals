let click = document.getElementById('form');

    click.addEventListener('submit',async(e)=>{

        e.preventDefault();

        let data={
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value
        }
        

try{
    
  let response =  await fetch('http://localhost/createuser',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
   })
   alert(await response.text());


   
 

}catch(e){
    alert(`failed to send data to server`);
}


        
})