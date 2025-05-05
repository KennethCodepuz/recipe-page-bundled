import { pageLoad  } from "./content.js";
import { menuPage  } from "./menu.js";
import { aboutPage } from "./about.js";

function contentLoad() {
    const contentContainer = document.getElementById('content');
    pageLoad(contentContainer);

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.value === 'home') {
                contentContainer.innerHTML = '';
                pageLoad(contentContainer);
            }
            if(btn.value === 'menu') {
                contentContainer.innerHTML = '';
                menuPage(contentContainer);
            }
            if(btn.value === 'about') {
                contentContainer.innerHTML = '';
                aboutPage(contentContainer);
            }
        })
    })
}


contentLoad();