const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);

const list = document.querySelector('ul#categories');

const firstCategoryTitle = list.firstElementChild.querySelector('h2');
const firstCategoryElements = list.firstElementChild.querySelectorAll('li');
console.log("Category:", firstCategoryTitle.textContent);
console.log("Elements:", firstCategoryElements.length);

const secondCategoryTitle = list.children[1].querySelector('h2');
const secondCategoryElements = list.children[1].querySelectorAll('li');
console.log("Category:", secondCategoryTitle.textContent);
console.log("Elements:", secondCategoryElements.length);

const lastCategoryTitle = list.lastElementChild.querySelector('h2');
const lastCategoryElements = list.lastElementChild.querySelectorAll('li');
console.log("Category:", lastCategoryTitle.textContent);
console.log("Elements:", lastCategoryElements.length);



