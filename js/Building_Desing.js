fetch("json/Building_Desing.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
      <div class="col overlay building">
						<img src="${objectsKey.images}" alt="image description" class="img-responsive"style="width: 450px;height: 250px;">
						<div class="over text-center">
							<strong class="title text-uppercase"><a href="prject-detail1.html">${objectsKey.description}</a></strong>
							<span class="sub-title">${objectsKey.description}</span>
						</div>
					</div>`
        }
    }
    document.querySelector("#home07").innerHTML=col
})
