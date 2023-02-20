let click = document.getElementById('form');

    click.addEventListener('submit',async(e)=>{

        e.preventDefault();

        let data={
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value
        }
        

try{
    
  let response =  await fetch('http://localhost/userlogin',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
   })
   if(response.status===200){
       
       document.cookie= `auth-token=${await response.text()}`;
       
        // await fetch('http://localhost/home',{
        //     method:'get',
        //     headers:{
        //         'auth-token':`${document.cookie.split(';').find((e)=>{
        //             return e.startsWith('auth-token=')
        //         }).split('=')[1]}`
        //     }
        // })

   }else{
    alert(await response.text())
   }
   


   
 

}catch(e){
    alert(`failed to send data to server${e}`);
}


        
})