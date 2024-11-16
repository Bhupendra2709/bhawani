//signup page js

function Fet(){


let ob={
    name:document.getElementById("uname").value,
    email:document.getElementById("uemail").value,
    pass:document.getElementById("upass").value,
    Cpass:document.getElementById("ucpass").value
}


localStorage.setItem("obb",JSON.stringify(ob))
}  



//login page js
function sum(){
    let re=JSON.parse(localStorage.getItem("obb"))  
    let lem=document.getElementById("lemail").value
    let lps=document.getElementById("lpass").value
    document.getElementById("username").innerHTML=re.name
    
    
    

    



    if (re.email==lem){
        alert("Login sucessfull",re.email)
    } 
       else{
      alert("Invalid username and password")
      return  false
    }
}