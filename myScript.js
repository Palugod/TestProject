// const regex = new RegExp('^[a-z ].+, [A-Z ]+,[0-9 ]+@.[a-z ]+$');

// const string1 = "hello world, 2021 @ more of a string dog Dog";

// const array = string1.split("");
// array[0] = 'H';

// array.filter
// console.log("122" + 344);
// console.log(array.join(""));


// const btn = document.getElementById('btn-1');
// console.log(typeof(btn));

// function addParagraph(){
//         const randomNum = Math.random() * 100
//         console.log(randomNum);

//         const newElement = document.createElement('p');
//         newElement.textContent = randomNum;
//         document.body.appendChild(newElement);
// }

// btn.onclick = onMemeClick;


// let list = document.querySelector('ul');
// list.children.item(1).textContent = "john";

// const parent = document.querySelector('ul');
// const newItem = document.createElement('li');
// newItem.textContent = "johnnyp";
// const liItem = parent.children.item(1);
// parent.insertBeforimage.pnge(newItem, liItem);

// const memeArray = "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg";
// const jokeArray = ["joke1", "joke2", "joke3"];
// const quoteArray = ["quote1", "quote2", "quote3"];
// const riddleArray = ["quote1", "quote2", "quote3"];

// const parentDiv = document.getElementById('testDiv');

// const btnMeme = document.getElementById("memeBtn")

// function onMemeClick(){

//     const newNode = document.createElement('img');
//     newNode.setAttribute('src', memeArray);
//     newNode.setAttribute('width', '300');
//     parentDiv.insertBefore(newNode, parentDiv.children.item(1));

// }

const articles = {
    title: 'sample title',
    content: 'sample content',
    newArticle: function(title, content){
        this.title = title;
        this.content = content;
    }
};

let articleArray = new Array();
const postBtn = document.getElementById("postBtn");

const parent = document.getElementById('article-list');

function getArticleData(){

    parent.textContent ='';
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    const newObj = {
        title, 
        content
    };
    
    articleArray.push(newObj);
    console.log(articleArray);


    articleArray.forEach(arrayItem => {
        console.log(arrayItem);
        const newList = document.createElement('li');
        newList.textContent = arrayItem.title + "---" + arrayItem.content;
        parent.append(newList);
    
    })

 }
 
postBtn.onclick = getArticleData;

const deleteBtn = document.getElementById("deleteBtn");

function deleteArticle(){
    parent.textContent ='';
    let deleteArticle = document.getElementById('deleteField').value.toString();
    console.log(deleteArticle);

    let index = articleArray.findIndex(arrayItem =>{
        return arrayItem.title == deleteArticle;

    })

    articleArray.splice(index, 1);

    console.log(index);

    articleArray.forEach(arrayItem => {
        console.log(arrayItem);
        const newList = document.createElement('li');
        newList.textContent = arrayItem.title + "---" + arrayItem.content;
        parent.append(newList);
    
    })
}

deleteBtn.onclick = deleteArticle;

const editBtn = document.getElementById("editBtn");

function setArticleData(){
    parent.textContent ='';
    let title = document.getElementById('editTitleField').value;
    let newContent = document.getElementById('editContentField').value;

    let index = articleArray.findIndex(arrayItem =>{
        return arrayItem.title == title;

    })

    console.log(newContent);
    articleArray[index].content = newContent;

    articleArray.forEach(arrayItem => {
        console.log(arrayItem);
        const newList = document.createElement('li');
        newList.textContent = arrayItem.title + "---" + arrayItem.content;
        parent.append(newList);
    
    })
}



editBtn.onclick = setArticleData;





