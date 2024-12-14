import hellImg from './hell.jpeg';
import chickenImg from './images/chicken.jpeg'
const content = document.getElementById('content');


export function loadHomepage() {
    const restaurant = document.createElement('div');
    restaurant.classList.add('h1')
    restaurant.textContent = "Hell's Restaurant";

    
    const img = document.createElement('img');
    img.classList.add('hellImage');
    img.src = hellImg;
    img.alt = 'hell'
    
    const desc = document.createElement('div');
    desc.classList.add('box');
    desc.textContent = "Pain and Suffering is what your appetite just needs!";
    
    const callToAction = document.createElement('div');
    callToAction.classList.add('box');
    callToAction.textContent = "The restaurant is well known for taking the suffering and pain within every single person stuck in this Hell Loop and use it as delicious culinary stuff like idk hot wings and carolina reaper cuisines!!! ";

    const hours = document.createElement('div');
    hours.classList.add('box');
    
    const eternal = document.createElement('p');
    hours.appendChild
    hours.textContent = "Hours"
    content.appendChild(restaurant);
    content.appendChild(img);
    content.appendChild(desc);
    content.appendChild(callToAction);
    content.appendChild(hours);
};

export function loadMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('h1');
    menu.textContent = "Inferno Menu";

    const mainDish = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Main Dishes';
    mainDish.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Spicy Chicken ';
    mainDish.appendChild(p);

  

    const img = document.createElement('img');
    img.classList.add('chickenImage');
    img.src = chickenImg;
    img.alt = 'spicy chicken';

    mainDish.appendChild(img);

    const sideDish = document.createElement('div');
    sideDish.textContent = 'Sides';

    const beverages = document.createElement('div');
    beverages.textContent = 'Beverages';

    const deserts = document.createElement('div');
    deserts.textContent = 'Deserts';

    content.appendChild(menu);
    content.appendChild(mainDish);
    content.appendChild(sideDish);
    content.appendChild(beverages);
    content.appendChild(deserts);

}

export function loadContactPage() {
    const contact = document.createElement('div');
    contact.classList.add('h1');
    contact.textContent = 'Contact Us!';

    const lucifer  = document.createElement('div');
    lucifer.textContent = 'Lucifer';

    const demon = document.createElement('div');
    demon.textContent = 'Random Demon 666';

    const jared = document.createElement('div');
    jared.textContent = 'Jared'

    content.appendChild(contact);
    content.appendChild(lucifer);
    content.appendChild(demon);
    content.appendChild(jared);
}
