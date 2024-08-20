fetch("json/servicecartegroy.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
        <div class="col-xs-12 col-sm-4">
							<!-- service of the page -->
							<div class="service text-center">
								<div class="img">
									<img src="${objectsKey.images}" alt="icon" class="img-responsive">
								</div>
								<h2 class="text-uppercase"><a href="service-detail.html?service_id=${key}">${objectsKey.description}</a></h2>
								<p>${objectsKey.description1}</p>
							</div>
						</div>`
        }
    }
    document.querySelector("#home05").innerHTML=col
})
 


fetch("json/servicecartegroy.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
            // console.log(objectsKey.description)
         col+=`
     <div class="col-xs-12 col-sm-6 col-md-3">
                     <!-- Shop of the page -->
                     <div class="shop text-center">
                         <div class="img-holder">
                             <img src="${objectsKey.images}" alt="image description" class="img-responsive">
                             <a href="" class="cart text-center text-uppercase"> Add to Cart</a>
                         </div>
                         <strong class="price">${objectsKey.price}</strong>
                         <span class="txt"><a href="shop-detail.html?proId=${key}">${objectsKey.name}</a></span>
                     </div>
                 </div>`
     }
    }
    document.querySelector("#shop01").innerHTML=col
})
