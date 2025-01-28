const blackScreen=document.getElementById("black-screen")
const blackScreenContent=document.getElementById("content")
console.log(blackScreenContent)

const navButtons=document.querySelectorAll(".nav-a")
const sections=document.querySelectorAll(".section")

const projectsContainer=document.getElementById("projects")
const projects=document.createElement("DIV")

class technology {
    //name, src="img" , status (Learn true or false "learning")
    constructor(name,img) {
        this.name=name
        this.img=img
        
        this.html=`<div class="tech">
                <img src="img/${img}" alt="">
                <h3>${name}</h3>
            </div>`
    }
}
const tecHTML=new technology("HTML","html-5.png")
const css=new technology("CSS","css-3.png")
const javascript= new technology("JavaScript","js.png")
const react=new technology("React","react.png")
const git= new technology("GIT/GitHub","github-mark.png")
const nodeJS=new technology("Node.JS","nodejs.png")

const technologies=[tecHTML,css,javascript,react,git]

class project {
    // Name, description, img, git URL and (ARRAY)technologies
    constructor(name,desc,img,git,technologies) {
        this.name=name
        this.desc=desc
        this.img=`img/${img}`
        this.git=git
        this.technologies=technologies
        function processTechnologies(array){

            let liElements=""
            array.forEach(element =>{
                liElements+=`<li class="tech-in-project">${element}</li>`
                
            })
            console.log(liElements)
            return `<ul class="tec-list">${liElements}</ul>`
        }
        
        //small html for a short description

        this.htmlSmall=`<div class="project">
            <h2>${name}</h2>
            <img src="img/${img}" alt="RenataApp" class="img">
            <p>${desc}</p>
            <button class="show-more" value="${name}">Show more of Renata</button>
        </div>`
        this.extendHTML=`<div class="extend-project">
                <div class="img-extend-project">
                    <img class="img-project" src="img/${img}" >
                </div>
                <div class="content-project">
                    <h3>${name}</h3>
                    <hr>
                    <div>
                        <p>${desc}</p>
                        <p>Technologies used in this project:</p>
                        ${processTechnologies(technologies)}
                        <a href="${git}" target="_blank"><img class="git-img"src="img/github-mark.png">Visit Github project</a>
                    </div>
                </div>
            </div>`
    }
}
// new project(name,desc,img,git,[technologies])
const renata=new project(
    "RenataApp",
    "Renata App is a versatile and user-friendly application designed to help you stay organized and productive. It provides a set of essential tools to streamline your daily tasks and calculations.",
    "imgRenataApp.jpg",
    "https://github.com/emersonmm20/RenataApp",
    ["HTML","CSS","JAVASCRIPT","REACT"]
)
const projectsList=[renata]

// alert(typeof(navButtons))
const showSection=(selected)=>{
    sections.forEach(section =>{
        section.setAttribute("style", "margin-left:150vw");
    })
    document.getElementById(selected).setAttribute("style", "margin-left:0")

}


navButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        console.log(button.getAttribute("value"))
        showSection(button.getAttribute("value"))
    })
})



// send all projects to project container

const renderProjects=(list)=>{
    let allOfList=""
    list.forEach(element =>{
        allOfList+= element.htmlSmall
    })
    projectsContainer.innerHTML+=allOfList

}

renderProjects(projectsList)
const renderExtendProject=(value)=>{
    console.log(value)

    const animationOpen=()=>{
        blackScreen.style.display="flex"
        setTimeout(()=>{
            
            blackScreen.style.opacity="1"

        },200)
        
    }

    projectsList.forEach(project =>{
        if(project.name == value){
            blackScreenContent.innerHTML=project.extendHTML

        }
        animationOpen()
    })
    

}
//Post render()=>--------------

//buttonShowMoreInfo
const showMoreButtons=document.querySelectorAll(".show-more")
console.log(showMoreButtons)
showMoreButtons.forEach(button =>{
    button.addEventListener("click",()=>{renderExtendProject(button.value)})})
//animate HI! starting web site
blackScreen.style.display="none"

const closeBlackScreen=()=>{
    blackScreen.style.opacity="0"
    setTimeout(()=>blackScreen.style.display="none",500)
}

const addtechnologies=(arr)=>{
    let content=""

    arr.forEach(tech=>{
        content+=tech.html
    
    })
    document.querySelector(".tech-container").innerHTML=content


}

addtechnologies(technologies)

blackScreen.addEventListener("click", closeBlackScreen)
blackScreenContent.addEventListener("click",(e)=>e.stopPropagation())