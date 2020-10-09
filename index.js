
const productsList = [{

    name: 'Hamburguesa',
    price: '20$',
    img: 'https://e7.pngegg.com/pngimages/143/317/png-clipart-cheeseburger-hamburger-whopper-fast-food-mcdonald-s-big-mac-bread-cheeseburger-hamburger.png'


},
{

    name: 'Hamburguesa',
    price: '20$',
    img: 'https://e7.pngegg.com/pngimages/143/317/png-clipart-cheeseburger-hamburger-whopper-fast-food-mcdonald-s-big-mac-bread-cheeseburger-hamburger.png'


},
{

    name: 'Hamburguesa',
    price: '20$',
    img: 'https://e7.pngegg.com/pngimages/143/317/png-clipart-cheeseburger-hamburger-whopper-fast-food-mcdonald-s-big-mac-bread-cheeseburger-hamburger.png'

},
{

    name: 'Hamburguesa',
    price: '20$',
    img: 'https://e7.pngegg.com/pngimages/143/317/png-clipart-cheeseburger-hamburger-whopper-fast-food-mcdonald-s-big-mac-bread-cheeseburger-hamburger.png'


},
]


const productsContainer = document.querySelector('.products__container');


productsList.forEach(val => {

    productsContainer.innerHTML =
     productsContainer.innerHTML + (`<div class="product__card">
    <img src="${val.img}" alt="">
    <h3>${val.name}</h3>
    <span>${val.price}</span>
    </div>`)

})