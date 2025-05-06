import chefImage from './images/chef.jpg'
import './styles/about.css';

function aboutPage(containerContent) {
    const container = document.createElement('div');
    container.classList.add('about-container');
    const title = document.createElement('h2');
    const chef = document.createElement('h1');
    const chefimage = document.createElement('img');
    const chefInfo = document.createElement('p');

    title.innerText = 'Introducing the proud business owner and the main chef!';
    chef.innerText = 'Ms. Hershey May Bumanglag Yabut!';
    chefimage.src = chefImage;
    chefimage.classList.add('chef-image');
    chefInfo.innerText = `Ms. Yabut was born and raise in the province of Ilocos Norte and the City of Laoag. She dreamed of being a chef and owning her very own restaurant
                            ever since she was a kid. She has a passion for cooking so anything she makes in the kitchen is delicious and full of love. `;
    chefInfo.classList.add('chef-info');

    container.appendChild(title);
    container.appendChild(chef);
    container.appendChild(chefimage);
    container.appendChild(chefInfo);
    containerContent.appendChild(container);
}

export { aboutPage };