function details(){
   
    
    let  part1=document.querySelector(".part1");
    let  box1head=document.querySelector(".box1-head");
   
    let headerBgColor=document.getElementById("headerBgColor").addEventListener("input",(e)=>{
        box1head.style.backgroundColor=e.target.value;
    });
    


    let txtColor=document.getElementById("txtColor").addEventListener("input",(e)=>{
        let line = document.querySelectorAll(".line");
        let icons = document.querySelectorAll(".material-symbols-outlined");
        let loc= document.querySelectorAll(".loc");
        let alltext = document.querySelectorAll(".alltext");
        let innerName2 = document.querySelector("#innerName2");
        let innerSkill2 = document.querySelector("#innerSkill2");
        for(let i=0;i<line.length;i++){
            line[i].style.color=e.target.value;
            line[i].style.borderBottom = "1px solid " + e.target.value;
            icons[i].style.color = e.target.value;
            loc[i].style.color=e.target.value;
            alltext[i].style.color=e.target.value;
            innerSkill2.style.color=e.target.value;
            innerName2.style.color=e.target.value;
        }
        part1.style.color=e.target.value;
    });

    let  box1headp2=document.querySelector(".box1-headp2");
   
    let  main1=document.querySelector(".main1");
    let headerBgColor2=document.getElementById("headerBgColor2").addEventListener("input",(e)=>{
        main1.style.backgroundColor=e.target.value;
        box1headp2.style.backgroundColor=e.target.value;
    });
     let  part2=document.querySelector(".part2");
     let h2line=document.getElementsByTagName("h2");
     let innerSkill=document.getElementById("innerSkill");
     let skillDetails=document.getElementById("skillDetails");
    let txtColor2=document.getElementById("txtColor2").addEventListener("input",(e)=>{
        part2.style.color=e.target.value;
        innerSkill.style.borderBottom=("1px solid")+e.target.value;
        main1.style.color=e.target.value;
        // Assuming skillDetails is a reference to the element you want to style
        skillDetails.style.setProperty('color', e.target.value, 'important');


        for(let i=0;i<h2line.length;i++){
            h2line[i].style.borderBottom=("1px solid")+e.target.value;
            
        }
        
        // box1headp2.style.color=e.target.value;
    });
        let innerName2=document.getElementById("innerName2");
    
    
    //  let name1=document.getElementById("name1").addEventListener("keyup",(e)=>{
    // innerName2.innerText=e.target.value;
    //  });
    //  let jobTitle=document.getElementById("jobTitle").addEventListener("keyup",(e)=>{
    //     innerSkill2.innerText=e.target.value;
    //      });

    let innerName=document.getElementById("innerName");
    let name1=document.getElementById("name1").addEventListener("keyup",(e)=>{
        innerName.innerText=e.target.value;
        innerName2.innerText=e.target.value;
    });

     let innerSkill2=document.getElementById("innerSkill2");
    let jobTitle=document.getElementById("jobTitle").addEventListener("keyup",(e)=>{
        innerSkill.innerText=e.target.value;
        innerSkill2.innerText=e.target.value;
    });

   
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
 

    let summarytxt=document.getElementById("summarytxt");
    let textarea10=document.getElementById("textarea10").addEventListener("keyup",(e)=>{
        summarytxt.innerText= e.target.value;
    });

    let EmploymentSection = document.getElementById("EmploymentSection");
    let AddEmploymentBtn=document.getElementById("AddEmploymentBtn").addEventListener("click",()=>{
        let div=document.createElement("div");
        div.classList.add("EmploymentSectionDiv");
        div.innerHTML=`
            <label for="EmploymentStartDate">Start</label>
            <input type="month" id="EmploymentStartDate">
        
            <label for="EmploymentEndDate">End</label>
            <input type="month" id="EmploymentEndDate">
        
            <input type="text" name="" id="jobTitle2" placeholder="job Title">
            <input type="text" name="" id="Employer2" placeholder="Employer">
            <textarea name="" id="descriptionText2" cols="30" rows="10" placeholder="Description"></textarea>
        `;
        
  
        let professionaltxt = document.getElementById("professionaltxt");
        let detailbox = document.createElement("div");
        detailbox.setAttribute("class","detailbox");
        let spanbox = document.createElement("span");
        spanbox.setAttribute("class","spanbox");
        let para1=document.createElement("p");
        para1.setAttribute("class","para1");
        let para2=document.createElement("p");
        para2.setAttribute("class","para2");
        let para3=document.createElement("p");
        para3.setAttribute("class","para3");
        let para4=document.createElement("p");
        para4.setAttribute("class","para4");
        let para5=document.createElement("p");
        para5.setAttribute("class","para5");
        let div2=document.createElement("div");
        div2.setAttribute("class","detailsbox2")
        spanbox.append(para2,para3);
        div2.append(para1, spanbox);
        
        detailbox.append(div2,para4,para5);
        professionaltxt.appendChild(detailbox);

        let EmploymentStartDate = div.querySelector("#EmploymentStartDate");
        EmploymentStartDate.addEventListener("input", (e) => {
          
            para2.innerText=e.target.value;
        });

        let EmploymentEndDate = div.querySelector("#EmploymentEndDate");
        EmploymentEndDate.addEventListener("input", (e) => {
            para3.innerText=e.target.value;
        });

        let jobTitle2 = div.querySelector("#jobTitle2");
        jobTitle2.addEventListener("keyup",(e)=>{
            para1.innerText=e.target.value;
        });

        let Employer2 = div.querySelector("#Employer2");
        Employer2.addEventListener("keyup",(e)=>{
            para4.innerText=e.target.value;
        });
        let descriptionText2 = div.querySelector("#descriptionText2");
        descriptionText2.addEventListener("keyup",(e)=>{
            para5.innerText=e.target.value;
        });
        
        EmploymentSection.appendChild(div);

     
    });


    let AddProject=document.getElementById("AddProject");
    let AddProjectBtn=document.getElementById("AddProjectBtn").addEventListener("click",()=>{
       
        let div=document.createElement("div");
        div.classList.add("EmploymentSectionDiv");

        div.innerHTML=`
            <label for="EmploymentStartDate">Start</label>
            <input type="date" id="AddProjectStartDate">
        
            <label for="EmploymentEndDate">End</label>
            <input type="date" id="AddProjectEndDate">
        
            <input type="text" name="" id="AddProjectTitle" placeholder="Project Title">
            <textarea name="" id="AddProjectDescription" cols="30" rows="10" placeholder="Description"></textarea>
        `;
        
        let projectstxt = document.getElementById("projectstxt");
        let detailbox = document.createElement("div");
        detailbox.setAttribute("class","detailbox");
        let spanbox = document.createElement("span");
        spanbox.setAttribute("class","spanbox");
        let para1=document.createElement("p");
        para1.setAttribute("class","para1");
        let para2=document.createElement("p");
        para2.setAttribute("class","para2");
        let para3=document.createElement("p");
        para3.setAttribute("class","para3");
        let para4=document.createElement("p");
        para4.setAttribute("class","para4");
        let para5=document.createElement("p");
        para5.setAttribute("class","para5");
        let div2=document.createElement("div");
        div2.setAttribute("class","detailsbox2")
        spanbox.append(para2,para3);
        div2.append(para1, spanbox);
        
        detailbox.append(div2,para4,para5);
        projectstxt.appendChild(detailbox);

        let AddProjectStartDate = div.querySelector("#AddProjectStartDate");
        AddProjectStartDate.addEventListener("input", (e) => {
          
            para2.innerText=e.target.value;
        });
        
        let AddProjectEndDate = div.querySelector("#AddProjectEndDate");
        AddProjectEndDate.addEventListener("input", (e) => {
            para3.innerText=e.target.value;
        });
       
        

        

        let AddProjectTitle = div.querySelector("#AddProjectTitle");
        AddProjectTitle.addEventListener("keyup",(e)=>{
            para1.innerText=e.target.value;
        });

       
        let AddProjectDescription = div.querySelector("#AddProjectDescription");
        AddProjectDescription.addEventListener("keyup",(e)=>{
            para5.innerText=e.target.value;
        });
        
       
        AddProject.appendChild(div);
    });


    let EducationalSection=document.getElementById("EducationalSection");
    let EducationalBtn=document.getElementById("EducationalBtn").addEventListener("click",()=>{
        
        let div=document.createElement("div");
        div.setAttribute("class","eschng2");
        
        div.innerHTML=`
            <label for="EducationalStartDate">Start</label>
            <input type="date" id="EducationalStartDate">
    
            <label for="EducationalEndDate">End</label>
            <input type="date" id="EducationalEndDate">
    
            <input type="text" name="" id="jobTitle3" placeholder="Qualification">
            <input type="text" name="" id="jobTitle4" placeholder="School/College">
            <textarea name="" id="descriptionText3" cols="30" rows="10" placeholder="Description"></textarea>
        `;
        
        let educationtxt = document.getElementById("educationtxt");
        let detailbox = document.createElement("div");
        detailbox.setAttribute("class","detailbox");
        let spanbox = document.createElement("span");
        spanbox.setAttribute("class","spanbox");
        let para1=document.createElement("p");
        para1.setAttribute("class","para1");
        let para2=document.createElement("p");
        para2.setAttribute("class","para2");
        let para3=document.createElement("p");
        para3.setAttribute("class","para3");
        let para4=document.createElement("p");
        para4.setAttribute("class","para4");
        let para5=document.createElement("p");
        para5.setAttribute("class","para5");
        let div2=document.createElement("div");
        div2.setAttribute("class","detailsbox2")
        spanbox.append(para2,para3);
        div2.append(para1, spanbox);
        
        detailbox.append(div2,para4,para5);
        educationtxt.appendChild(detailbox);
        // EducationalStartDate,EmploymentEndDate,jobTitle3,jobTitle4,descriptionText3
        let EducationalStartDate = div.querySelector("#EducationalStartDate");
        EducationalStartDate.addEventListener("input", (e) => {
          
            para2.innerText=e.target.value;
        });

        let EducationalEndDate = div.querySelector("#EducationalEndDate");
        EducationalEndDate.addEventListener("input", (e) => {
            para3.innerText=e.target.value;
        });

        let jobTitle3 = div.querySelector("#jobTitle3");
        jobTitle3.addEventListener("keyup",(e)=>{
            para1.innerText=e.target.value;
        });

        let jobTitle4 = div.querySelector("#jobTitle4");
        jobTitle4.addEventListener("keyup",(e)=>{
            para4.innerText=e.target.value;
        });
        let descriptionText3 = div.querySelector("#descriptionText3");
        descriptionText3.addEventListener("keyup",(e)=>{
            para5.innerText=e.target.value;
        });
        

        
        EducationalSection.appendChild(div);

       
    });
    
    let selectType1=document.getElementById("selectType1");
    
    selectType1.addEventListener("input", (e) => {
        console.log(e.target.value);
    
        if (e.target.value === "minimalist") {
            MinimalistFun();
        }
    
        if (e.target.value === "two-column") {
            twoColumnFun();
        }
    
        if (e.target.value === "ReverseTwoColumn") {
            ReverseTwoColumn();
        }
    });
    
    // if(e.target.value=="Reverse-Two-column"){

function MinimalistFun(){
        let box1=document.querySelector(".box1");
        box1.style.display="block"
        let box1head=document.querySelector(".box1-head");
        box1head.style.width="100%"
        box1head.style.flexDirection="row"
        box1head.style.justifyContent="space-between"
        let box1headp3=document.querySelector(".box1-headp3");
        box1headp3.style.display="block"
        let box1headp21=document.querySelector(".box1-headp21");
        box1headp21.style.display="none"
        let  box1headp1=document.querySelector(".box1-headp1");
        box1headp1.style.display="block";
       
        let  box1headp2=document.querySelector(".box1-headp2");
        box1headp2.style.backgroundColor="transparent"
        box1headp2.style.padding="30px 0px"
   
        let  part1=document.querySelector(".part1");
        part1.style.maxWidth="371px"
        let  main1=document.querySelector(".main1");
        main1.style.width="100%";
        let innerName2=document.getElementById("innerName2");
        let innerSkill2=document.getElementById("innerSkill2");
     
       }
    
function twoColumnFun(){
        let box1=document.querySelector(".box1");
        box1.style.display="flex"
        box1.style.flexDirection = "row";
        let box1head=document.querySelector(".box1-head");
        box1head.style.width="35%"
        box1head.style.flexDirection="column"
        box1head.style.justifyContent="space-between"
        let  main1=document.querySelector(".main1");
        main1.style.width="calc(100% - 35%)";
        
        let box1headp3=document.querySelector(".box1-headp3");
        box1headp3.style.display="none";
        let box1headp21=document.querySelector(".box1-headp21");
        box1headp21.style.display="block"
        let  box1headp1=document.querySelector(".box1-headp1");
        box1headp1.style.display="flex";
        let  box1headp2=document.querySelector(".box1-headp2");
        box1headp2.style.padding="30px"
   
  
  
  }

  function ReverseTwoColumn() {
    let box1 = document.querySelector(".box1");
    box1.style.flexDirection = "row-reverse";
    box1.style.display="flex"
    let box1head=document.querySelector(".box1-head");
    box1head.style.width="35%"
    box1head.style.flexDirection="column"
    box1head.style.justifyContent="space-between"
    let  main1=document.querySelector(".main1");
    main1.style.width="calc(100% - 35%)";
    
    let box1headp3=document.querySelector(".box1-headp3");
    box1headp3.style.display="none";
    let box1headp21=document.querySelector(".box1-headp21");
    box1headp21.style.display="block"
    let  box1headp1=document.querySelector(".box1-headp1");
    box1headp1.style.display="flex";
    let  box1headp2=document.querySelector(".box1-headp2");
    box1headp2.style.padding="30px"
}




}

function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
      var dataURL = reader.result;
      var preview = document.getElementById('preview');
      var img = document.createElement('img');
      img.src = dataURL;
      img.style.Width = '100%';
      img.style.Height = '100%';
      preview.innerHTML = '';
      preview.appendChild(img);
      let uploadInput=document.getElementById("uploadInput");
      uploadInput.style.display="none"
    };

    reader.readAsDataURL(input.files[0]);
  }


  let downloadbtn=document.querySelector("#dow-btn");//dow btn

// downloadbtn.addEventListener("click",function(){
//     let secondDownload =document.querySelector(".box1");
  
    
    // html2pdf().from(secondDownload).save();
    // // secondDownload.style.width="100%"
    


// })

  function generatePDF() {
    const element = document.querySelector('#pdfdow');
        element.style.width="100%"
        let left = document.querySelector('.left');
        left.style.width="20%"
    html2pdf(element, {
        margin: 10,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
}
