



function details(){
    let selectType1=document.getElementById("selectType1");
    let  part1=document.querySelector(".part1");
    let  box1headp1=document.querySelector(".box1-headp1");
    let headerBgColor=document.getElementById("headerBgColor").addEventListener("input",(e)=>{
        
        part1.style.backgroundColor=e.target.value;
        box1headp1.style.backgroundColor=e.target.value;
    });

    let txtColor=document.getElementById("txtColor").addEventListener("input",(e)=>{
        console.log(e.target.value)
        part1.style.color=e.target.value;
        box1headp1.style.color=e.target.value;
    });

    let  box1headp2=document.querySelector(".box1-headp2");
    let  part2=document.querySelector(".part2");
    let headerBgColor2=document.getElementById("headerBgColor2").addEventListener("input",(e)=>{
        
        part2.style.backgroundColor=e.target.value;
        box1headp2.style.backgroundColor=e.target.value;
    });
    let txtColor2=document.getElementById("txtColor2").addEventListener("input",(e)=>{
        console.log(e.target.value)
        part2.style.color=e.target.value;
        box1headp2.style.color=e.target.value;
    });
    // selectType1.addEventListener("click",(e)=>{
    //     part1.style.backgroundColor=e.target.value;
    //     console.log(e.target.value)
    //     details()
    // })
    
    

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
        <textarea name="" id="descriptionText2" cols="30" rows="10" placeholder="Description"></textarea>
        
        
        `
        EmploymentSection.appendChild(div)
    });

    let AddProjectBtn=document.getElementById("AddProjectBtn").addEventListener("click",()=>{
       
        
        let AddProject=document.getElementById("AddProject");
        let div=document.createElement("div");
        div.classList.add("EmploymentSectionDiv");


        div.innerHTML=`
        <label for="EmploymentStartDate">Start</label>
        <input type="date" id="AddProjectStartDate">
    
        <label for="EmploymentEndDate">End</label>
        <input type="date" id="AddProjectEndDate">
    
        <input type="text" name="" id="AddProjectTitle" placeholder="Project Title">
        <textarea name="" id="AddProjectDescription" cols="30" rows="10" placeholder="Description"></textarea>
        
        
        `
        AddProject.appendChild(div)
    });


let EducationalBtn=document.getElementById("EducationalBtn").addEventListener("click",()=>{
    let AddProject=document.getElementById("EducationalSection");
  
  
    AddProject.innerHTML=`
    <label for="EducationalStartDate">Start</label>
    <input type="date" id="EducationalStartDate">

    <label for="EmploymentEndDate">End</label>
    <input type="date" id="EducationalEndDate">

    <input type="text" name="" id="jobTitle3" placeholder="Qualification">
    <input type="text" name="" id="jobTitle3" placeholder="School/College">
    <textarea name="" id="descriptionText3" cols="30" rows="10" placeholder="Description"></textarea>
    
    
    `
    
});


   
   





    
    
    
   
    
   

}
