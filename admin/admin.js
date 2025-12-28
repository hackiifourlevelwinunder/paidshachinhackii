function add(){
 let uid = document.getElementById("uid").value;
 let username = document.getElementById("user").value;
 let password = document.getElementById("pass").value;

 fetch("/addUid",{
   method:"POST",
   headers:{ "Content-Type":"application/json" },
   body:JSON.stringify({uid,username,password})
 })
 .then(r=>r.json())
 .then(d=>{
     document.getElementById("msg").innerHTML = d.message;
 })
}