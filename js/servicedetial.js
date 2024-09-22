let url = window.location.href;
let getUrl = new URL(url);
let getServiceId = getUrl.searchParams.get('service_id');
console.log(getServiceId)
let links=``;
let col = ``;
// console.log(getProId)
fetch("json/servicecartegroy.json")
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
    	<div class="img-holder">
							<img src="${objectsKey.images1}" alt="image description" class="img-responsive" style="width:100%; height:10%;">
						</div>
						<h2>Construction is the process of constructing a <br>building or infrastructure.</h2>
						<h2>${objectsKey.description}</h2>
						<span class="fst">${objectsKey.description1}</span>

`
document.querySelector("#bannerHeading").innerHTML=objectsKey.description;
document.querySelector("#serviceBreadcrum").innerHTML=objectsKey.description;

     }
       }
       links+=`<li><a href="service-detail.html?service_id=${key}">${data[key][0].description}</a></li>`					

    }
    document.querySelector("#serviceLink").innerHTML=links
    document.querySelector("#detailOption").innerHTML=col
    })
   