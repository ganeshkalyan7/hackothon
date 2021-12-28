document.body.innerHTML=`
<div class="heading" id="normal">
<input type="text" id="input" placeholder="search"/>

<hr>
<button id="btn"  class="btn btn-primary"> click</button>
<button id="btn2" class=" btn2 btn2-primary">click for search images</button>
<img id="img" alt="imges"/>
<div id="output"> </div>

`

    
async  function  value (){
    try{
       
        //fethcing of api//
       let data= await fetch("https://cataas.com/api/cats") 
       let get=await data.json()
       output.innerHTML=''
       
       get.forEach(element => {
           displaydata(element)
          });
       



       //console.log(get)
     
    }
    //catch block//
     catch(err){
         console.log("error");
     }
}


const displaydata=(obj)=>{
    output+=`${obj.id}`

     if(obj.tags.includes('cat') )
        {

            img.src="https://cataas.com/cat"
       console.log(obj)
}
     
 
  
    
    
}
document.getElementById('btn').addEventListener('click',value);




    
    













  








    


















 










