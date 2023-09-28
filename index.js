// // Write your code here!

// newHeader = document.querySelector('h1#victory');

// const mainElement = document.querySelector('main#main');

const main = document.querySelector('main');
main.remove();


const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';


document.body.appendChild(newHeader);

