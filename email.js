
function sendMail() {
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;

  if(nameValue.length>0 && emailValue.length>0){

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    
    const serviceID ="service_ymvdakc";
    const  templateID ="template_95ovjlr";
    
      emailjs.send(serviceID, templateID, params).then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }else if(nameValue.length>0 && emailValue.length<=0){
    alert('Fill the Email')
  }else{
    alert('Fill the Name')
  }
   
  
  }
