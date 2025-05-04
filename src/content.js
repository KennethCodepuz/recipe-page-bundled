import kusheynaLogo from './kusheyna.jpeg';

function pageLoad() {
    const contentContainer = document.getElementById('content');
    const headline = document.createElement('h1');
    const pageLogo = document.createElement('img');
    const restaurantDescription = document.createElement('p');

    headline.innerText = 'A Restaurant that guarantees you to come back!';
    pageLogo.src = kusheynaLogo;
    restaurantDescription.innerText = ` Kusheyna is owned by the beautiful and talented Ms. Hershey May Yabut.
            She started this business as it was her dream to open her own restaurant. 
            It's been a long journey for her, but with her dedication and hardwork and her loyal customers,
            through not only the word of mouth but also in sorts of platform, Kusheyna became a World Wide must dine restaurant.`

    contentContainer.appendChild(headline);
    contentContainer.appendChild(pageLogo);
    contentContainer.appendChild(restaurantDescription);
}

export { pageLoad };