const ListCategories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${ListCategories.length} `)
const categoryElementsCount = ListCategories.forEach((elem) => {
    console.log(`Category: &{elem.querySelector('h2).textContent}\nElements: 
    ${elem.querySelector('ul').childElementCount}`)
})