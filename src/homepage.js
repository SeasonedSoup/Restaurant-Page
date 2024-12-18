
import hellImg from './hell.jpeg';
import chickenImg from './images/chicken.jpeg'
import pizzaImg from './images/hellPizza.jpg'
import friesImg from './images/hellFries.jpeg'
import jalapenoImg from './images/jalapeno.jpeg'
import poopImg from './images/poop.jpeg'

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

function createMenuItem(name, description, imgLink) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuName = document.createElement('h1');
    menuName.textContent  = name;

    const menuDesc = document.createElement('h3');
    menuDesc.textContent = description;

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-img')
    menuImg.src = imgLink

    menuItem.appendChild(menuName);
    menuItem.appendChild(menuDesc);
    menuItem.appendChild(menuImg);

    return menuItem;
}

function createInfo(job, contact, email) {
    const infoItem = document.createElement('div');
    infoItem.classList.add('info-item');

    const infoJob = document.createElement('p');
    infoJob.textContent = job;

    const infoContact = document.createElement('p');
    infoContact.textContent = contact;

    const infoEmail = document.createElement('p');
    infoEmail.textContent = email;

    infoItem.appendChild(infoJob);
    infoItem.appendChild(infoContact);
    infoItem.appendChild(infoEmail);

    return infoItem;
}

export function loadMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('h1');
    menu.textContent = "Inferno Menu";

    const mainDish = document.createElement('div');
    const mainDishHeader = document.createElement('h2');
    mainDishHeader.classList.add('menuHeader');
    mainDishHeader.textContent = 'Main Dish';
    //header
    mainDish.appendChild(mainDishHeader);

    mainDish.appendChild(createMenuItem('Spicy Chicken', 'Fiery poultry from the depths of hell', chickenImg));
    mainDish.appendChild(createMenuItem('Inferno Pizza', 'HELL PIZZA this one has pineapple in it and a bunch of spicy stuff', pizzaImg))

    const sideDish = document.createElement('div');
    const sidesHeader = document.createElement('h2');
    sidesHeader.classList.add('menuHeader');
    sidesHeader.textContent = 'Sides';

    sideDish.appendChild(sidesHeader)

    sideDish.appendChild(createMenuItem('Eternal Fries', 'Fries taht will eternally burn up even after consuming', friesImg))

    const beverages = document.createElement('div');
    const bevHeader = document.createElement('h2');
    bevHeader.classList.add('menuHeader');
    bevHeader.textContent = 'Beverages';
    
    beverages.appendChild(bevHeader);

    beverages.appendChild(createMenuItem('Jalapeno Juice', 'Jalapeno Juice what the heeeelll', jalapenoImg))

    const deserts = document.createElement('div');
    const desertsHeader = document.createElement('h2');
    desertsHeader.classList.add('menuHeader');
    desertsHeader.textContent = 'Deserts';

    deserts.appendChild(desertsHeader);

    deserts.appendChild(createMenuItem('Crap Cake', 'A Wonderful desert for the craps you get in life', poopImg))

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
    lucifer.classList.add('center')
    lucifer.appendChild(createInfo('Owner', '0875-666-342', 'devdoesnotexist@realemail.com'))

    const demon = document.createElement('div');
    demon.textContent = 'Random Demon 666';
    demon.classList.add('center')
    demon.appendChild(createInfo('Chef and Waiter', 'no number', 'eternallyworking@fakeemail.com'))


    const jared = document.createElement('div');
    jared.textContent = 'Jared'
    jared.classList.add('center')
    jared.appendChild(createInfo('Website Maker, Advertiser', '1111-333-2222', 'becomfortablewithbeinguncomfortable@fremail.com'))

    content.appendChild(contact);
    content.appendChild(lucifer);
    content.appendChild(demon);
    content.appendChild(jared);
}
