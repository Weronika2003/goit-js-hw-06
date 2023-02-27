const listCategories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${listCategories.length} `)

const categoryElementsCount = listCategories.forEach((elem) => {
    console.log(`Category: ${elem.querySelector('h2').textContent} 
    Elements:  ${elem.querySelector('ul').childElementCount}`);
});