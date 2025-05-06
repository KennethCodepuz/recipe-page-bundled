import img1 from './images/pastil.jpg';
import img2 from './images/friedChicken.jpg';
import img3 from './images/calamares.jpg';
import './styles/menu.css';


function menuPage(containerContent) {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    let cardArray = [];
    let itemNames = ['Chicken Pastil', 'Fried Chicken', 'Calamares'];
    let itemDescriptions = ["'Chicken Pastil (or pastel) is a popular Filipino dish with origins in Mindanao, particularly among the Maguindanaon and Maranao people. It typically consists of flaked chicken cooked in spices, served over rice that's sometimes wrapped in banana leaves.",
        'Fried chicken is made by coating chicken pieces in a seasoned batter or breading and deep-frying them until golden brown and crispy.',
        'Calamares (or calamari) is a popular Filipino and Spanish-inspired dish made of battered and deep-fried squid rings. It’s crunchy on the outside, tender on the inside, and often served with dipping sauces like garlic mayo or vinegar.'
    ]
    const priceList = [250, 400, 200];
    const images = [img1, img2, img3]
    for(let i = 0; i < 3; i++){
        cardArray.push(document.createElement('div'));
    }

    for(let i = 0; i < cardArray.length; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        const itemName = document.createElement('h2');
        const image = document.createElement('img');
        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-descrip')
        const price = document.createElement('div');
        price.classList.add('price');

        itemName.innerText = itemNames[i];
        image.src = images[i];
        image.classList.add('menu-item');
        itemDescription.innerText = itemDescriptions[i];
        price.innerText = `Php${priceList[i]}`;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(image);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(price);

        menuContainer.appendChild(itemContainer);

        containerContent.appendChild(menuContainer)
    }
}


export { menuPage };