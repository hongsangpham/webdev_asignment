let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_4 =>{
    image_4.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_5 =>{
    image_5.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-5').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_6 =>{
    image_6.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-6').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_7 =>{
    image_7.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-7').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_8 =>{
    image_8.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-8').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_9 =>{
    image_9.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_10 =>{
    image_10.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-10').src = src;
    });
});

const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function(button, index) {
    // console.log(button, index);
    button.addEventListener("click", function(event){{
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h3").innerText;
        var productPrice = product.querySelector(".price").innerText;
        // console.log(productImg);
        // console.log(productName);
        // console.log(productPrice);
        addcart(productImg, productName, productPrice);
    }});
});

function addcart(productImg, productName, productPrice) {{
    var addtr = document.createElement("tr");

    // var cartItem = document.querySelectorAll("tbody tr");
    // for (var i = 0; i < cartItem.length; i++) {
    //     var inputValue = cartItem[i].querySelector("input").value;
    //     var productCount = document.querySelectorAll(".title");
    //     if (productCount[i].innerHTML == productName) {
    //         alert("Added");
    //         // inputValue = inputValue + 1;
    //         return;
    //     };
    // };

    var trcontent = productPrice;
    addtr.innerHTML = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Delete</span></td></tr>'
    var cartTable = document.querySelector("tbody");
    // console.log(cartTable);
    cartTable.append(addtr);

    cartTotal();
    deleteItem();
}};

// Sum Product
function cartTotal() {
    var totalPrice = 0;
    var cartItem = document.querySelectorAll("tbody tr");
    // console.log(cartItem.length);
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".price").innerHTML;
        // console.log(inputValue, productPrice);
        shoesPrice = inputValue*productPrice;
        // console.log(shoesPrice);
        totalPrice = totalPrice + shoesPrice;
        // console.log(totalPrice);
    };

    var displayTotal = document.querySelector(".price-total span");

    var amountProduct = document.querySelector(".icons span");
    amountProduct.innerHTML = totalPrice;

    displayTotal.innerHTML = totalPrice;
    // console.log(displayTotal);
    inputChange();
};

// Delete Product
function deleteItem() {

    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var deleteButton = document.querySelectorAll(".delete");
        // console.log(deleteButton);
        deleteButton[i].addEventListener("click", function(event) {
            var cartDelete = event.target;
            var targetDelete = cartDelete.parentElement.parentElement;
            targetDelete.remove();
            // console.log(targetDelete);
            cartTotal();
        });
    };
};

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        // console.log(deleteButton);
        inputValue.addEventListener("change", function() {
            cartTotal();
        });
    };
};

const closeButton = document.querySelector(".closeButton");
const showCart = document.querySelector(".fa-shopping-cart");
console.log(showCart);

showCart.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "0";
});

closeButton.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%"
});