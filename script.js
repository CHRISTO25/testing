const search = async()=>{
    let countryName = cname.value
    const api_key ='771dc67f'
    console.log(countryName);
    if(countryName){
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${countryName}`);
        const data = await response.json();
    
        // Handle the data
        console.log(data,"=============");
       

       result.innerHTML = ` <div class="card mb-3 mt-4 p-2 style="max-width: 100%;">
       <div class="row g-0">
         <div class="col-md-4">
           <img src=${data.Poster} class="img-fluid rounded-start mt-2" alt="...">
           <h5 class="card-title mt-3">${data.Title}</h5><div class="card" style="width: 18rem;">
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">Name: ${data.Title}</li>
                 <li class="list-group-item">Common name:${data.Title}</li>
                 <li class="list-group-item">Capital:${data.Title}</li>
               </ul>
             </div>

         </div>
         <div class="col-md-8">
           <div class="card-body">
            
               <div class="card ms-2" style="width: 100%;">
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">Area : ${data.Actors}</li>
                     <li class="list-group-item">Continent : ${data.Title}</li>
                     <li class="list-group-item">Timezone : ${data.Title}</li>
                     <li class="list-group-item">Border countries : ${data.Title}</li>
                     <li class="list-group-item">Languages : ${data.Title}</li>
                     <li class="list-group-item">Currency : ${data.Title} ${data.Title}</li>
                     <li class="list-group-item">population : ${data.Title}</li>
                     
                     <li class="list-group-item">Google maps : <span style="color:red;text-decoration:underline"> ${data.Title}</li>
                   </ul>
                 </div>
           </div>
         </div>
       </div>
     </div>`

        } catch (error) {
            console.error('Error:', error);
        }
        
     
}
}