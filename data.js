import Data from './jsonDummy.js'

let jSonString = JSON.stringify(Data); // Converting a JSon Object to String 
let jSonObject = JSON.parse(jSonString); // Converting Json String to Object

// Example of Iterating the Json Object and showing all the products on the document by using DOM
let colorArr = ['danger', 'primary', 'success', 'warning', 'info', 'secondary']; let i = 0;
for (let record of jSonObject) {
    if (i == 4) i = 0;
    let parentDiv = document.createElement('div');
    let cardHeader = document.createElement('div');
    let imageContent = document.createElement('div');
    let contentDiv = document.createElement('div');
    let imageDiv = document.createElement('img');
    let purchaseBtn = document.createElement('button');
    // Styling Elements 
    parentDiv.classList.add('card', 'w-25', 'ms-1', 'mt-3');
    cardHeader.classList.add('card-header', 'alert', `alert-${colorArr[i]}`);
    cardHeader.innerHTML = "Category : " + record.category.toUpperCase();
    imageContent.classList.add('d-flex');
    imageDiv.setAttribute('src', record.image)
    imageDiv.setAttribute('style', 'height: 120px; width: 123px; margin-left: 10px;');
    purchaseBtn.classList.add('mt-3', 'btn', `btn-${colorArr[i]}`); i++;
    contentDiv.classList.add('container');
    contentDiv.setAttribute('style', 'margin-left: 40px;width: 120px; font-size: 12px')
    purchaseBtn.innerHTML = "Purchase"
    contentDiv.innerHTML = "<b>Name : </b>" + record.title + "<br/>"
    contentDiv.innerHTML += "<b>Price : &#8377;</b>" + record.price + "<br/>"
    contentDiv.innerHTML += "<b>Ratings : </b>" + record.rating.rate
    // Append 
    document.querySelector('.container-fluid').append(parentDiv);
    parentDiv.append(cardHeader)
    parentDiv.append(imageContent);
    imageContent.append(imageDiv);
    imageContent.append(contentDiv)
    parentDiv.append(purchaseBtn);
}        