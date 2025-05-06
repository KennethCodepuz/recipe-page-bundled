import kusheynaLogo from './images/kusheynaLogo.png';
import './styles/content.css';

function pageLoad(contentContainer) {
    
    const container = document.createElement('div');
    container.classList.add('home-container');
    const headline = document.createElement('h1');
    const pageLogo = document.createElement('img');
    const restaurantDescription = document.createElement('p');
    restaurantDescription.classList.add('resto-descrip');
    const location = document.createElement('div');
    location.classList.add('location');


    headline.innerText = 'A Restaurant that guarantees you to come back!';
    headline.classList.add('title');
    pageLogo.src = kusheynaLogo;
    pageLogo.classList.add('page-logo');
    restaurantDescription.innerHTML = ` Kusheyna is owned by the beautiful and talented <span class="chef-name">Ms. Hershey May Yabut.</span>
            She started this business as it was her dream to open her own restaurant. 
            It's been a long journey for her, but with her dedication and hardwork and her loyal customers,
            through not only the word of mouth but also in all sorts of platform, Kusheyna became a World Wide must dine restaurant.`
    location.innerText = 'Visit us at Laoag City, Ilocos Norte!';

    container.appendChild(headline);
    container.appendChild(pageLogo);
    container.appendChild(restaurantDescription);
    container.appendChild(location);

    contentContainer.appendChild(container);
}

export { pageLoad };