fetch("json/cartegroyshop.json")
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
