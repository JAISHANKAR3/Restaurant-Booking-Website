// function sendMail(){

//     let dee={
//         name: document.getElementById("fname").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("mes").value,


//     }
// //     const serviceId="service_css197j";
// // const templateId="template_ybaoea9";

// emailjs.send("service_pz07isw","template_mw73iia",dee)
// .then(()=>{
//     alert("Email send successfully");
// })

// .catch((error) =>{
//     console.log("error send email:",error);
//     alert("failed to send email,please try again");
//    }  );

// }

 function sendMail(){
    let params ={
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#mes").value,
    

    };

    emailjs.send("service_pz07isw","template_mw73iia",params)
    .then(()=>{
        alert("Email send successfully");
    })
   .catch((error) =>{
    console.log("error send email:",error);
    alert("failed to send email,please try again");
   }  );
}
