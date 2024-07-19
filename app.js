// var form = document.getElementById("myForm"),
//     imgInput = document.querySelector(".img"),
//     file = document.getElementById("imgInput"),
//     userName = document.getElementById("name"),
//     age = document.getElementById("age"),
//     city = document.getElementById("city"),
//     email = document.getElementById("email"),
//     phone = document.getElementById("phone"),
//     post = document.getElementById("post"),
//     sDate = document.getElementById("sDate"),
//     submitBtn = document.querySelector(".submit"),
//     userInfo = document.getElementById("data"),
//     modal = document.getElementById("userForm"),
//     modalTitle = document.querySelector("#userForm .modal-title"),
//     newUserBtn = document.querySelector(".newUser")
let product = [];
var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
   
    coffee_roasted_product_description = document.getElementById("coffee_roasted_product_description"),
    coffee_roasted_farm = document.getElementById("coffee_roasted_farm"),
    coffee_roasted_farmer = document.getElementById("coffee_roasted_farmer"),
    coffee_roasted_roaster = document.getElementById("coffee_roasted_roaster"),
   
    dealer = document.getElementById("coffee_roasted_dealer"),
    coffee_roasted_brand = document.getElementById("coffee_roasted_brand"),
    coffee_roasted_origin = document.getElementById("coffee_roasted_origin"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    productcart = document.getElementById("productcart"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")

    const parentElement = document.querySelector('#buyItems');

    var prodd = 0;
    var getfromprod = 0;
    prodd = localStorage.getItem('product');
    getfromprod = prodd.length;


    // document.getElementById("test").innerHTML = localStorage.getItem('product').length;
document.getElementById("test").innerHTML = getfromprod;


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}


// function showInfo(){
//     document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
//     getData.forEach((element, index) => {
//         let createElement = `<tr class="employeeDetails">
//             <td>${index+1}</td>
//             <td><img src="${element.picture}" alt="" width="50" height="50"></td>
//             <td>${element.employeeName}</td>
//             <td>${element.employeeAge}</td>
//             <td>${element.employeeCity}</td>
//             <td>${element.employeeEmail}</td>
//             <td>${element.employeePhone}</td>
//             <td>${element.employeePost}</td>
//             <td>${element.startDate}</td>


//             <td>
//                 <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

//                 <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

//                 <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
//             </td>
//         </tr>`

//         userInfo.innerHTML += createElement
//     })
// }

function showInfo() {
    var prod = 0;
    let length = 0;
    // var prod = JSON.parse(localStorage.getItem('product'));
    // console.log('show', prod);
    // console.log('prod numberOfUnits', prod[0].numberOfUnits);

        prod = JSON.parse(localStorage.getItem('product'));
        length = prod.length
        //length = localStorage.length
        console.log("lenght", length)
        // for (let i=0; i<=prod.lenght-1; i++) {

        // }

        // prod = JSON.parse(prod);
        // const total = cartArray.reduce((prev, cur) => (cur.index * cur.numberOfUnits) + prev, 0);
        // console.log(total);

    if (prod === null) {
        prod = 0;
    } else {
    console.log('show', prod);
    //console.log('prod numberOfUnits', prod[0].numberOfUnits);
    }



    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
           
           <td>${index + 1}</td>
           
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.coffee_roasted_product_description}</td>
           
            


            <td>
                <button style="background-color: #855c37" class="btn btn-success" onclick="readInfo(${index},'${element.picture}', '${element.coffee_roasted_product_description}', '${element.coffee_roasted_farm}', '${element.coffee_roasted_farmer}', '${element.coffee_roasted_roaster}','${element.coffee_roasted_dealer}', '${element.coffee_roasted_brand}', '${element.coffee_roasted_origin}')" data-bs-toggle="modal" data-bs-target="#readData">view moreeeeee</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="changeNumberOfUnits('minus', ${index})" >-</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="addToBasket(${index}, '${element.coffee_roasted_product_description}' )" >Add to Basket</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="changeNumberOfUnits('plus', ${index})" >+</button>


                <button style="background-color: #855c37" class="btn btn-success" onclick="showProduct()" >show</button>



                <button style="background-color: #855c37" class="btn btn-success" onclick="decrementInBasket(${index}, '${element.coffee_roasted_product_description}' )" >Minus</button>

                <button style="background-color: #855c37" class="btn btn-success" onclick="totalClick(1)" >Plus</button>
               
                <span  id="totalClicks">${prod.length}yy</span>
               
                <button style="background-color: #855c37" class="btn btn-success" onclick="totalClick(-1)" >Minus</button>






                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })


    // let product = localStorage.getItem('product');
    // console.log("pppprroduct", product);


    let product = JSON.parse(localStorage.getItem('product'));

    product.forEach((element, index)=>{
        console.log(element.product_description);


        let createElement = `<tr class="employeeDetails">
           
           <td>${index + 1}</td>
           
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.product_description}</td>
           
            


            <td>
                <button style="background-color: #855c37" class="btn btn-success" onclick="readInfo(${index},'${element.picture}', '${element.coffee_roasted_product_description}', '${element.coffee_roasted_farm}', '${element.coffee_roasted_farmer}', '${element.coffee_roasted_roaster}','${element.coffee_roasted_dealer}', '${element.coffee_roasted_brand}', '${element.coffee_roasted_origin}')" data-bs-toggle="modal" data-bs-target="#readData">view moreeeeee</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="changeNumberOfUnits('minus', ${index})" >-</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="addToBasket(${index}, '${element.coffee_roasted_product_description}' )" >Add to Basket</button>
                <button style="background-color: #855c37" class="btn btn-success" onclick="changeNumberOfUnits('plus', ${index})" >+</button>


                <button style="background-color: #855c37" class="btn btn-success" onclick="showProduct()" >show</button>



                <button style="background-color: #855c37" class="btn btn-success" onclick="decrementInBasket(${index}, '${element.coffee_roasted_product_description}' )" >Minus</button>

                <button style="background-color: #855c37" class="btn btn-success" onclick="totalClick(1)" >Plus</button>
               
                <span  id="totalClicks">${prod.length}yy</span>
               
                <button style="background-color: #855c37" class="btn btn-success" onclick="totalClick(-1)" >Minus</button>






                            
            </td>
        </tr>`

        productcart.innerHTML += createElement




    })

    for (let i = 0; i < product.length; i++) {
        console.log("product", product[i].product_description);
    }

   
}
showInfo()


// const product = {
//     product_description: $product_description,
//     farm: $farm,
//     farmer: $farmer,
//     roaster: $roaster
// }

// let product = []


const updateShoppingCartHTML = function () {

    if (product.length > 0) {
        let result = product.map( product => {
            console.log("product", product);
            return `
              <li class="buyItem">
                <div>
                  <h5>${product.product_description}</h5>
                  <h6>$${product.price}
                </div>
              </li>
            `
        });
        parentElement.innerHTML = result.join('');
    }
}

function addToBasket(index, coffee_roasted_product_description){

    // if (index === 0)
    //        index = 1;

         index += 1;

    const productt = {
        index: index,
        product_description: coffee_roasted_product_description,
        farm: "lkajsdl",
        farmer: "lkjasdl",
        roaster: "lkjasdkfj"
    }

    product.push({
        ...productt,
        numberOfUnits : 1,
    });


    
    console.log(index);

    updateShoppingCartHTML();
    // console.log(coffee_roasted_product_description);
    // console.log(productt);
    // console.log(product);
}

const products = {
    amount: 1
};

// function incrementInBasket(click, index, coffee_roasted_product_description) {


function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click)
    totalClicks.innerText = sumvalue;
}

// function incrementinBasket() {
//     let value = 1;
//     ++value;
//     console.log(value); 
// }

// function incrementinBasket(action, index1) {

function anotherNumberOfUnits(action, index) {
    console.log(index);
}




function changeNumberOfUnits(action, index1) {
    // let value = 1;
    // ++value;
    // console.log(value);

    // if (index1 === 0) //here
    //      index1 = 1;

    console.log(index1+=1);
   
    // if (index1 === 0) {
    //     index1 = 1;
    // } else if (index1 !== 0) {
    //     return index1;
    // }
        
       // index1 = 1;


        //  else
        //  return;

    //console.log("action", action);
    console.log("index1", index1);

    product = product.map((item) => {
         let oldNumberOfUnits = item.numberOfUnits;
         // console.log("item index", item.index)
         if (item.index == index1) {
           console.log("item.index", item.index);
           console.log("index1", item.index);
            if (action === "minus") {
                oldNumberOfUnits--;
            } else if (action === "plus") {
                oldNumberOfUnits++;
                console.log("oldNumberOfUnits", oldNumberOfUnits);
            }

         }
         console.log("oldNumberOfUnits", oldNumberOfUnits);
        //return item;

        // localStorage.setItem('product', JSON.stringify(product));
        // let prod = localStorage.getItem('product');
        // console.log(prod);  /////////////

        return {
            ...item,
            numberOfUnits: oldNumberOfUnits,
        };
    });


    localStorage.setItem('product', JSON.stringify(product));
    let prod = localStorage.getItem('product');
    console.log(prod);

    

    // product = product.map((productt) => {

    //     let oldNumberOfUnits = index1;

    //     if (productt.index === index1) {
    //         if (action === 'plus') {
    //             oldNumberOfUnits++;
    //         }
    //     }

    //     return {
    //         ...productt,
    //         numberOfUnits: oldNumberOfUnits,
    //     };
    // })
}

function showProduct() {
    console.log("product", product);
   // console.log("product amount", product[0].farmer)
}

function incrementInBasket(click) {

    click += 1
    
    products.amount = 2;
    let sumvalue = 1;

    const incrementinBasket = document.getElementById('incrementInBasket');
    const sumv = parseInt(incrementInBasket.innerHTML) + click;
    console.log(sumv + click);
    console.log(click + 1);
    console.log(click++);

    // let amountOfProduct =+ click
    
    // let amountOfProduct = 1 + click;
    let amountOfProduct = 1 + click;
        sumvalue += click

    const product = {
        // index: index,
        product_description: coffee_roasted_product_description,
        farm: "lkajsdl",
        farmer: "lkjasdl",
        roaster: "lkjasdkfj"
    }



    // console.log(index);
    // console.log(coffee_roasted_product_description);
    console.log(product);
    // console.log("amountOfProducts", amountOfProduct);
    console.log("sumvalue", sumvalue);
    console.log(products.amount);
}

function decrementInBasket(index, coffee_roasted_product_description) {


    const product = {
        index: index,
        product_description: coffee_roasted_product_description,
        farm: "lkajsdl",
        farmer: "lkjasdl",
        roaster: "lkjasdkfj"
    }



    console.log(index);
    // console.log(coffee_roasted_product_description);
    // console.log(product);
}

// const addToBasket = (index) => {

//     console.log(index);
// }

// function readInfo(pic, name, age, city, email, phone, post, sDate){
//     document.querySelector('.showImg').src = pic,
//     document.querySelector('#showName').value = name,
//     document.querySelector("#showAge").value = age,
//     document.querySelector("#showCity").value = city,
//     document.querySelector("#showEmail").value = email,
//     document.querySelector("#showPhone").value = phone,
//     document.querySelector("#showPost").value = post,
//     document.querySelector("#showsDate").value = sDate
// }

function readInfo(index, pic, coffee_roasted_product_description, coffee_roasted_farm, coffee_roasted_farmer, coffee_roasted_roaster, coffee_roasted_dealer, coffee_roasted_brand, coffee_roasted_origin) {
        document.querySelector('#index_of_product').value = index,
        document.querySelector('.showImg').src = pic,
        document.querySelector('#show_coffee_roasted_product_description').value = coffee_roasted_product_description,
        document.querySelector("#show_coffee_roasted_farm").value = coffee_roasted_farm,
        document.querySelector("#show_coffee_roasted_farmer").value = coffee_roasted_farmer,
        document.querySelector("#show_coffee_roasted_roaster").value = coffee_roasted_roaster,
        document.querySelector("#show_coffee_roasted_dealer").value = coffee_roasted_dealer,
        document.querySelector("#show_coffee_roasted_brand").value = coffee_roasted_brand,
        document.querySelector("#show_coffee_roasted_origin").value = coffee_roasted_origin,
        document.querySelector("#show_coffee_farmer").value = product[0].farmer
        // document.querySelector("#show_coffee_farmer").value = "yyyyyyyyyy"
}

var output = document.getElementById('output');

function readBasket(el) {
    el = "lkajdlfkjkkkkkk";
    output.innerHTML = el.value;
}

// function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate){
//     isEdit = true
//     editId = index
//     imgInput.src = pic
//     userName.value = name
//     age.value = Age
//     city.value =City
//     email.value = Email,
//     phone.value = Phone,
//     post.value = Post,
//     sDate.value = Sdate

//     submitBtn.innerText = "Update"
//     modalTitle.innerText = "Update The Form"
// }

function editInfo(index, pic, Coffee_Roasted_Product_Description, Coffee_Roasted_Farm, Coffee_Roasted_Farmer, Coffee_Roasted_Roaster, Coffee_Roasted_Dealer, Coffee_Roasted_Brand, Coffee_Roasted_Origin) {
    isEdit = true
    editId = index
    imgInput.src = pic
    coffee_roasted_product_description.value = Coffee_Roasted_Product_Description
    coffee_roasted_farm.value = Coffee_Roasted_Farm
    coffee_roasted_farmer.value = Coffee_Roasted_Farmer
    coffee_roasted_roaster.value = Coffee_Roasted_Roaster,
    coffee_roasted_dealer.value = Coffee_Roasted_Dealer,
    coffee_roasted_brand.value = Coffee_Roasted_Brand,
    coffee_roasted_origin.value = Coffee_Roasted_Origin

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    // const information = {
    //     picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
    //     employeeName: userName.value,
    //     employeeAge: age.value,
    //     employeeCity: city.value,
    //     employeeEmail: email.value,
    //     employeePhone: phone.value,
    //     employeePost: post.value,
    //     startDate: sDate.value
    // }

    const information = {
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        coffee_roasted_product_description: coffee_roasted_product_description.value,
        coffee_roasted_farm: coffee_roasted_farm.value,
        coffee_roasted_farmer: coffee_roasted_farmer.value,
        coffee_roasted_roaster: coffee_roasted_roaster.value,
        coffee_roasted_dealer: coffee_roasted_dealer.value,
        coffee_roasted_brand: coffee_roasted_brand.value,
        coffee_roasted_origin: coffee_roasted_origin.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "./image/Profile Icon.webp"  

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()
})




function img(x) {

    // if (x == 0) {
    //     document.getElementById('myimg').style.display = 'block';
    // } else {
    //     document.getElementById('myimg').style.display = 'none';

    // }
    if (x == 0) {
        // document.getElementById('coffee_roasted_name').style.display = 'block';
        document.getElementById('coffee_roasted_product_description').style.display = 'block';
        document.getElementById('coffee_roasted_farm').style.display = 'block';
        document.getElementById('coffee_roasted_farmer').style.display = 'block';
        document.getElementById('coffee_roasted_roaster').style.display = 'block';
    } else {
        // document.getElementById('coffee_roasted_name').style.display = 'none';

        // document.getElementById('coffee_roasted_product_description').style.display = 'none';
        // document.getElementById('coffee_roasted_farm').style.display = 'none';
        // document.getElementById('coffee_roasted_farmer').style.display = 'none';
        // document.getElementById('coffee_roasted_roaster').style.display = 'none';

        document.getElementById('coffee_roasted_product_description').style.display = 'block';
        document.getElementById('coffee_roasted_farm').style.display = 'block';
        document.getElementById('coffee_roasted_farmer').style.display = 'block';
        document.getElementById('coffee_roasted_roaster').style.display = 'none';

    }


    return;

}


var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log("removeCartItemButtons", removeCartItemButtons);

let productss = JSON.parse(localStorage.getItem('product'));

for ( let i = 0; i < productss.length; i++) {
     console.log("productss", productss[i].product_description);
}



let productt = localStorage.getItem('product');
for (let i = 0; i < productt.length; i++) {
    console.log("productt", productt[i].product_description);
        //  let prod = productt[i];
        //  let prod_desc = prod.product_description
        //  console.log("prod_desc", prod_desc);

}
//console.log("producttttt", productt);

// for (i=0; i<removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i];
//     button.addEventListener('click', function(){
//         console.log('clicked kdkdkdk');
//         // var buttonClicked = event.target
//         // buttonClicked.parentElement.parentElement.remove();

//         // updateCartTotal();
//     })
// }

for ( i = 0; i < productt.length; i++) {
    var prod = productt[i];
    var prod_desc = prod.product_description
    console.log("product", product[i].product_description);
}

function updateCartTotal() {
    // var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    // var cartRows = document.getElementsByClassName('cart-row')
    // for (var i=0; i<cartRows.length; i++) {
    //     var cartRow = cartRows[i];
    //     var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    //     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    //     console.log(priceElement, quantityElement);
    // }
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = document.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        let productss = JSON.parse(localStorage.getItem('product'));
        for (var j = 0; j < productss[i].length; j++) {

            // var cartRow = cartRows[i];
            // var priceElement = cartRow.getElementsByClassName('cart-price')[0];
            // var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            // console.log(priceElement, quantityElement);
           
            console.log("product ---", productss[j]);


        }
    

    }
}

// if (localStorage.getItem('userProfile') !== null) 
//         //  $("#side-menuu").fadeToggle();
//     $("#side-menuu").fadeToggle();
//        // $("#sth").show();








