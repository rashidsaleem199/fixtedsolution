fetch("json/homecartegroy1.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`<div class="col-xs-12 col-sm-6 col-md-4">
							<!-- service of the page -->
							<div class="service overlay">
								<img src="${objectsKey.images}" alt="image description" class="img-responsive">
								<div class="over text-center">
									<h2 class="text-uppercase">${objectsKey.description}</h2>
									<p>${objectsKey.description1}</p>
									<a href="service-detail.html" class="read-more text-uppercase">Read more</a>
								</div>
							</div>
						</div>
						
            `
        }
    }
    document.querySelector("#home01").innerHTML=col
})

