const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMunu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailcloseIcon = document.querySelector('.product-detail-close');
const aside = document.querySelector('.product-detail');


/* elementos productos detallados */

const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-secundary');
const productDetailImage = document.querySelector(".product-image");
const productDetailPrice = document.querySelector(".product-info p:nth-child(1)");
const productDetailName = document.querySelector(".product-info p:nth-child(2)");
const productDetailDescription = document.querySelector(".product-info p:nth-child(3)");
const productDetailCloseIcon = document.querySelector('.product-detail-close');




menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailcloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDestopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMunu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMunu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMunu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    aside.classList.toggle('inactive');

}


function openProductDetailAside() {
    aside.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

function openProductDetail(product) {
    productDetailImage.src = product.image;
    productDetailPrice.textContent = "$" + product.price;
    productDetailName.textContent = product.name;
    productDetailDescription.textContent = product.description;

    productDetailContainer.classList.remove('inactive');
}

// Función para cerrar el detalle del producto
function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

// Función para renderizar productos
function renderProducts(products) {
    for (const product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;

        // Abre el detalle del producto al hacer clic en la imagen
        productImg.addEventListener('click', function() {
            openProductDetail(product);
        });

        productCard.appendChild(productImg);
        cardsContainer.appendChild(productCard);
    }
}

// Cerrar el detalle del producto al hacer clic en el ícono de cierre
productDetailCloseIcon.addEventListener('click', closeProductDetail);

const produclist = [{
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'A robust bicicleta helmet to keep you safe on your rides.'
},
 {
    name: 'pantalla',
    price: 320,
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'A robust pantalla helmet to keep you safe on your rides.'
},
{
    name: 'portatil',
    price: 620,
    image: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'A robust bicycle helmet to keep you safe on your rides.'
},
{
    name: 'mause',
    price: 30,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'el mejor mause y rapido del mercado.'
},
{
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'A robust bicycle helmet to keep you safe on your rides.'
},
{
    name: 'pantalla',
    price: 320,
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'A robust bicycle helmet to keep you safe on your rides.'
},
{
    name: 'portatil',
    price: 620,
    image: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'A robust bicycle helmet to keep you safe on your rides.'
},
{ 
name: 'mause',
    price: 30,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'A robust bicycle helmet to keep you safe on your rides.'
} ];

renderProducts(produclist); 