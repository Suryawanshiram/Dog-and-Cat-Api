//select 4 parameter cat_btn,dog_btn,cat_result,dog_rsult
const cat_btn =document.getElementById('cat_btn');
const cat_result=document.getElementById('cat_result');
const dog_btn=document.getElementById('dog_btn');
const dog_result=document.getElementById('dog_result');


cat_btn.addEventListener("click",async ()=>{

    try {
        let res= await fetch("https://aws.random.cat/meow")
        let data= await res.json();
        // console.log(data);
    //display the data in DOM 
    cat_result.innerHTML=`<img src="${data.file}" alt="cat" width="400" height="300" />`
    } catch (error) {
        console.log(error);
    }
})

// Dog result
dog_btn.addEventListener("click",async ()=>{
    try {
        
        let res=await fetch("https://random.dog/woof.json")
        let data=await res.json();
        // console.log(data);
        //check if the data contains .mp4 file then display video else display images 
        if(data.url.includes("mp4")){
            //display video result 
            dog_result.innerHTML=`<video width="400" height="300" controls>
            <source src="${data.url}" type="video/mp4">
            </video>`;
        }else{
            //display the images result 
            dog_result.innerHTML=`<img src="${data.url}" alt="dog" width="400" height="200">`;
        }
    } catch (error) {
        console.log(error);
    }

})


//create and Build and Html element 
document.body.innerHTML=`
<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26Qz-KzycPb3biBJn49TtywG_fnyWYR3xQQ&usqp=CAU" width="400px" height="200px" alt="icon"/>
<div id="mainContainer" class="main-container"></div>
`;


const getData=async()=>{
    try {
        //fetch the data from the url 
        const data=await fetch("https://api.openbrewerydb.org/breweries");
        const brewerys=await data.json();
        mainContainer.innerHTML="";
        brewerys.forEach((brewery)=>{
            console.log(brewery)
        })
        
    } catch (error) {
        console.log(error)
    }
}
getData();