import './styles/about.css';

function aboutPage(containerContent) {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const chef = document.createElement('h1');
    const chefInfo = document.createElement('p');

    title.innerText = 'Introducing the proud business owner and the main chef!';
    chef.innerText = 'Ms. Hershey May Bumanglag Yabut!';
    chefInfo.innerText = `Ms. Yabut was born and raise in the province of Ilocos Norte and the City of Laoag. She dreamed of being a chef and owning her very own restaurant
                            ever since she was a kid. She has a passion for cooking so anything she makes in the kitchen is delicious and full of love. `

    container.appendChild(title);
    container.appendChild(chef);
    container.appendChild(chefInfo);
    containerContent.appendChild(container);
}

export { aboutPage };