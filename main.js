document.addEventListener("DOMContentLoaded",()=>{
    const success=document.getElementById("success");
    const from=document.getElementById("from");
    const email=document.getElementById("email");
    const dismiss=document.getElementById("dismiss");
    const errorm=document.getElementById("errormsg");

    success.style.display="none"
   from.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(email.value.trim()===""){
        errorm.textContent="Valid Email Required";
        email.style.backgroundColor="hsl(4, 100%, 67%, 0.8)"      
    }else{
        from.style.display="none"
        errorm.textContent="";
        success.style.display="block"
    }
   })
   
    
})