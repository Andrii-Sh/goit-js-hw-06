const categoriesEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach(element => {
    const categoryTitleEl = element.querySelector('h2');
    console.log("Category:", categoryTitleEl.textContent);

    const categoryElementsEl = element.querySelectorAll('li');
    console.log("Elements:", categoryElementsEl.length);
});