fetch("json/homecartegroy2.json")
.then(Response=>Response.json())
.then(data=>{
    let col = `<div class="container">
                    <div class="row">
                        <div class="col-xs-12 text-center">
                            <h3 class="main-heading text-uppercase">Our Projects</h3>
                        </div>
                    </div>
                </div>`;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=` <div class="col overlay">
                    <img src="${objectsKey.images}" alt="image description" class="img-responsive">
                    <div class="over text-center">
                        <strong class="title text-uppercase"><a href="">${objectsKey.description1}</a></strong>
                        <span class="sub-title">${objectsKey.description}</span>
                        

                    </div>
                </div>`
        }
    }
    document.querySelector("#home001").innerHTML=col
})

