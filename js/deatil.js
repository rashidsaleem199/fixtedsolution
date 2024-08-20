let url = window.location.href;
let getUrl = new URL(url);
let getProId = getUrl.searchParams.get('proId');
let remainingData=``
// console.log(getProId)
fetch("json/cartegroyshop.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    // console.log(data);
    for(let key in data){
       if(key==getProId){
        // console.log(data[key])
        for(let objectsKey of data[key]){
            // console.log(objectsKey.description)
         col=`
    	<div class="img-holder">
								<img src="${objectsKey.images}" alt="image description" class="img-responsive">
							</div>
							<div class="txt-holder">
								<h4>${objectsKey.name}</h4>
								<strong class="price">${objectsKey.price}</strong>
								<ul class="list-unstyled rating-list">
									<li><a href="#" class="active"><i class="ti-star"></i></a></li>
									<li><a href="#" class="active"><i class="ti-star"></i></a></li>
									<li><a href="#" class="active"><i class="ti-star"></i></a></li>
									<li><a href="#" class="active"><i class="ti-star"></i></a></li>
									<li><a href="#"><i class="ti-star"></i></a></li>
								</ul>
								<p>descript</p>
								<div class="cart-form">
									<fieldset>
										<select id='quantity'>
											
											<option value="1" selected>1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</fieldset>
								</div>
								<button class="btn text-center text-uppercase" id="addToCart">Add to Cart</button>
							</div>`
							
     }
       }
    }
    document.querySelector("#detailData").innerHTML=col
	$("#addToCart").click(function(){
		// let qty = $("#quantity").val();
		// console.log(localStorage.getItem("cartData"))
		if(localStorage.getItem("cartData")==null){
			localStorage.setItem('cartData','[]');
		}
		for(let key in data){
			if(key==getProId){
			 // console.log(data[key])
			 for(let objectsKey of data[key]){
				 // console.log(objectsKey.description)
			  let objectCart = {
				productId : getProId,
				productName:objectsKey.name,
				productPrice:objectsKey.price,
				productImage:objectsKey.images,
				productQuantity:$("#quantity").val()
			  }
			  let oldData = JSON.parse(localStorage.getItem("cartData"));
			  oldData.push(objectCart);
			  localStorage.setItem('cartData',JSON.stringify(oldData));
			  alert("product add into cart ");
			  location.assign("cart.html");
			  
					


		  }
			}
		 }
	})
});
//  cart table
let cartproducts = JSON.parse(localStorage.getItem('cartData'));
let productsRows =''
let subTotal = 0;
for(let productKeys of cartproducts){
	// let qtySring = productKeys.productPrice.charAt(0);
	let ovalue = Number(productKeys.productPrice.substring(1));
	subTotal +=productKeys.productQuantity*ovalue; 
// 	console.log(ovalue);

// console.log(qtySring);
productsRows +=`<div class="row border pad">
					<div class="col-xs-12 col-sm-3">
						<div class="img-holder"><img src="${productKeys.productImage}" alt="image description" class="img-responsive"></div>
					</div>
					<div class="col-xs-12 col-sm-3">
						<strong class="high-light">${productKeys.productName}</strong>
					</div>
					<div class="col-xs-12 col-sm-2">
						<strong class="high-light">${productKeys.productPrice}</strong>
					</div>
					<div class="col-xs-12 col-sm-2">
						<form action="#">
							<fieldset>
								<select>
									<option value="${productKeys.productQuantity}" selected>${productKeys.productQuantity}</option>
									<option value="1">2</option>
									<option value="2">3</option>
								</select>
							</fieldset>
						</form>
					</div>
					<div class="col-xs-12 col-sm-1">
						<strong class="high-light">£${productKeys.productQuantity*ovalue} </strong>
					</div>
					<div class="col-xs-12 col-sm-1 text-right">
						<a href="#" class="ti-close"></a>
					</div>
					
				</div>`
}
$("#cartRows").html(productsRows) 
let count = cartproducts.length;
$('#cartCount').html(count)
$('.total').html(parseFloat(subTotal));
$("#checkOut").click(function(){
	alert('')
})
