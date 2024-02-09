

selectType1.addEventListener("click",()=>{
    console.log(selectType1.value)
})


function details(){
    let selectType1=document.getElementById("selectType1");
    let headerBgColor=document.getElementById("headerBgColor").value;
    let txtColor=document.getElementById("txtColor");

    // header part
    let innerName=document.getElementById("innerName");

    let name1=document.getElementById("name1").addEventListener("keyup",(e)=>{
        innerName.innerText=e.target.value;
        console.log(e.target.value);
    });

    let innerSkill=document.getElementById("innerSkill");

    let jobTitle=document.getElementById("jobTitle").addEventListener("keyup",(e)=>{
        innerSkill.innerText=e.target.value;
    });

    //End
     
    // skills /details - contact - mail
    let skillDetails=document.getElementById("skillDetails");
    let skill=document.getElementById("skill").addEventListener("keyup",(e)=>{
        skillDetails.innerText=e.target.value;
    });
     
    let callDetails=document.getElementById("callDetails");
    let phone1=document.getElementById("phone1").addEventListener("keyup",(e)=>{
        callDetails.innerText=e.target.value;
    });

    let mailDetails=document.getElementById("mailDetails");
    let email1=document.getElementById("email1").addEventListener("keyup",(e)=>{
        mailDetails.innerText=e.target.value;
    });

    let locationDetails=document.getElementById("locationDetails");
    let city1=document.getElementById("city1").addEventListener("keyup",(e)=>{
        locationDetails.innerText=e.target.value;
    });

    // end
    

   
    let AddEmploymentBtn=document.getElementById("AddEmploymentBtn").addEventListener("click",()=>{
       
        
        let EmploymentSection=document.getElementById("EmploymentSection");
        let div=document.createElement("div");
        div.classList.add("EmploymentSectionDiv");


        div.innerHTML=`
        <label for="EmploymentStartDate">Start</label>
        <input type="date" id="EmploymentStartDate">
    
        <label for="EmploymentEndDate">End</label>
        <input type="date" id="EmploymentEndDate">
    
        <input type="text" name="" id="jobTitle2" placeholder="job Title">
        <input type="text" name="" id="Employer2" placeholder="Employer">
        <textarea name="" id="descriptionText2" cols="30" rows="10"></textarea>
        
        
        `
        EmploymentSection.appendChild(div)
    });

   
   





    
    
    
   
    
   

}
