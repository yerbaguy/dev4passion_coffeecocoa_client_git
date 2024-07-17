//let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
let productsInCart = [];
let product = JSON.parse(localStorage.getItem('product'));
if (!productsInCart) {
    productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function () { // 4
    let sum = 0;
    productsInCart.forEach(item => {
        sum += item.price;
    });
    return sum;
}

const updateShoppingCartHTML = function () {  // 3
   // localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        cartSumPrice.innerHTML = '$' + countTheSumPrice();

    }
    else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = '';
    }
}

function updateProductsInCart(product) { // 2
   
    console.log("updateProductsInCard product", product);

    for ( let i=0; i < productsInCart.length; i++) {
        if (productsInCart[i].id === product.id) {
            //productsInCart[i].count += 1;
            console.log("products are in cart")
            return;
        }
    }

     productsInCart.push(product);
     console.log("updateProductsInCart productsInCart", productsInCart)


   
    // for (let i = 0; i < productsInCart.length; i++) {
    //     if (productsInCart[i].id == product.id) {
    //         productsInCart[i].count += 1;
    //         productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
    //         return;
    //     }
    // }
    // productsInCart.push(product);
}

products.forEach(item => {   // 1
    //product.forEach()


   // console.log("product", product);
    
    item.addEventListener('click', (e) => {
       
        product.map(product => {
            
       // })

        if (e.target.classList.contains('addToCart')) {

            console.log("productttttttt", product);




            // product.map(product=>{
            //     console.log("product", product)
            // })

            // const productID = e.target.dataset.productId;
            // const productName = item.querySelector('.productName').innerHTML;
            // const productPrice = item.querySelector('.priceValue').innerHTML;
            // const productImage = item.querySelector('img').src;
            // let product = {
            //     name: productName,
            //     image: productImage,
            //     id: productID,
            //     count: 1,
            //     price: +productPrice,
            //     basePrice: +productPrice,
            // }
            // updateProductsInCart(product);
            // updateShoppingCartHTML();
           //// const productID = e.target.dataset.productId;


            

            /////out
            // const productID = product.index;
            // const productName = item.querySelector('.productName').innerHTML = product.product_description;
            // console.log("productName", productName);
            // console.log("product Index", productID);

            // let productToCart = {
            //     name: productName,
            //     id: productID,
            //     count: 1
            // };
            //////



            // console.log("productToCart", productToCart);


            // const productPrice = item.querySelector('.priceValue').innerHTML;
            // const productImage = item.querySelector('img').src;
            // let product = {
            //     name: productName,
            //     image: productImage,
            //     id: productID,
            //     count: 1,
            //     price: +productPrice,
            //     basePrice: +productPrice,
            // }
            //  updateProductsInCart(product);


            /////crossed out
            // updateProductsInCart(productToCart);
            // updateShoppingCartHTML();
            ////crossed out
        }

    })

    }); item

});

parentElement.addEventListener('click', (e) => { // Last
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1
                }
                else if (isMinusButton) {
                    productsInCart[i].count -= 1
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();