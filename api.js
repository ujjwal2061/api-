const key="mOR0C8NQFqHR8anFEX8YeUPdDFDeE9bQ_nGTa37_SaE"/*API key store in key variable*/
const formE1=document.querySelector("form");
const input=document.getElementById("find");
const searchRes=document.querySelector(".search-results");
const showMore=document.getElementById("show-more-button");

let inputData="";
let page=1;

 async function searchImage(){
    inputData=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
     const reponse=await fetch(url);
     const data=await reponse.json();
     const results=data.results;
     
     if (page===1){
        searchRes.innerHTML="";
     }
     results.map((result)=>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.regular;
        image.alt=result.alt_descriptiion;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.textContent=result.alt_descriptiion;
   imageWrapper.appendChild(image);
   imageWrapper.appendChild(imageLink);
   searchRes.appendChild(imageWrapper);
     })
     page++
     if(page>1){
        showMore.style.display="block";
     }
}
formE1.addEventListener("submit",(event)=>{
event.preventDefault()
page=1;
searchImage();
});
showMore.addEventListener("click",()=>{
    
    searchImage();
    });