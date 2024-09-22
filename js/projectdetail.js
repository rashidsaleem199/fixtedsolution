let url = window.location.href;
let getUrl = new URL(url);
let getServiceId = getUrl.searchParams.get('project_id');
console.log(getServiceId)
let links=``;
let col = ``;
// console.log(getProId)
fetch("json/Building_Desing.json")
.then(Response=>Response.json())
.then(data=>{
//  console.log(data)
    // console.log(data);
    for(let key in data){
        // console.log(key)
       if(key==getServiceId){
        // console.log(data[key])
        for(let objectsKey of data[key]){
            // console.log(objectsKey.description1)
         col=`
    	
							<img src="${objectsKey.images}" alt="image description" class="img-responsive" style="width: 98%; height: 99%;">
					

`
// document.querySelector("").innerHTML=objectsKey.description;
// document.querySelector("").innerHTML=objectsKey.description;

     }
       }
       links+=`<li><a href="service-detail.html?service_id=${key}">${data[key][0].description}</a></li>`					

    }
    // document.querySelector("").innerHTML=links
    document.querySelector("#project-img").innerHTML=col
    document.querySelector("#project-img2").innerHTML=col
    })
   