const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMunu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailcloseIcon = document.querySelector('.product-detail-close');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-secundary');

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

const produclist = [];
produclist.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produclist.push({
    name: 'pantalla',
    price: 320,
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
produclist.push({
    name: 'portatil',
    price: 620,
    image: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
produclist.push({
    name: 'mause',
    price: 30,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
produclist.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produclist.push({
    name: 'pantalla',
    price: 320,
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
produclist.push({
    name: 'portatil',
    price: 620,
    image: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
produclist.push({
    name: 'mause',
    price: 30,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /* product= {name, price, image} -> product.image*/
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.append(productImgCard)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(produclist);