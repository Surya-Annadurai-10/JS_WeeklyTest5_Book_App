async function data1() {
  let api1 = "https://books-backend.p.goit.global/books/top-books";
  let reponse = await fetch(api1);

  return await reponse.json();
}

async function data2() {
  let api = "https://books-backend.p.goit.global/books/category-list";
  let reponse = await fetch(api);

  return await reponse.json();
}

data1()
  .then((msg) => {
    demo1(msg);
    console.log(msg);
  })
  .catch((msg) => {
    return msg;
  });

data2()
  .then((msg) => {
    demo2(msg);
    // console.log(msg);
  })
  .catch((msg) => {
    return msg;
  });

function demo2(msg) {
  msg.forEach((value) => {
    let p = document.createElement("p");
    p.classList.add("categories-name");
    p.innerText = `${value.list_name}`;
    //    console.log(p);
    categories.appendChild(p);
  });
}

let mainRight = document.querySelector(".main-right");
let mainCon = document.createElement("div");
mainCon.classList.add("main-con");

let allCategories = document.querySelector(".all-categories");
let categories = document.querySelector(".categories");
let darkBall = document.querySelector(".dark-ball");
darkBall.style.left = "1px";

darkBall.addEventListener("click", () => {
  if (darkBall.style.left == "1px") {
    darkBall.style.left = "34px";
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    document.querySelector("header").style.borderColor = "#fff";
    document.querySelectorAll(".see-more").forEach((value) => {
      value.style.color = "#fff";
    });
  } else {
    darkBall.style.left = "1px";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.querySelector("header").style.borderColor = "#000";
    document.querySelectorAll(".see-more").forEach((value) => {
      value.style.color = "#000";
    });
  }
});

function demo1(msg) {
  let h1 = document.createElement("h1");
  h1.innerHTML = `Best Sellers <span>Books</span>`;
  mainCon.appendChild(h1);
  msg.forEach((value, index, arr) => {
    loading(value, index, arr);
  });

  let categoriesArr = document.querySelectorAll(".categories-name");

  categoriesArr.forEach((ele, index) => {
    ele.addEventListener("click", (event) => {
      if (
        event.target.innerText.toLowerCase() == "ALL CATEGORIES".toLowerCase()
      ) {
        window.location.reload();
      }
      msg.forEach((value, index, arr) => {
        if (value.list_name.toLowerCase() == ele.innerText.toLowerCase()) {
          // mainCon.remove();
          updateUI(value);
          // console.log(mainRight);
        }
      });
    });

    // console.log(ele.innerText);
  });
}

let section = document.querySelector(".pop");

function loading(value, index, arr) {
  allCategories.style.color = "#4F2EE8";
  allCategories.style.textTransform = "uppercase";
  allCategories.style.fontWeight = "bold";

  let div = document.createElement("div");
  div.classList.add("container");

  let bookCategory = document.createElement("h2");
  bookCategory.innerText = `${value.list_name}`;
  div.appendChild(bookCategory);

  let booksCollection = document.createElement("div");
  booksCollection.classList.add("books-collection");
  value.books.forEach((book) => {
    let books = document.createElement("div");
    books.classList.add("books");

    books.innerHTML = `
         <div class="book-img">
              <img src="${book.book_image}" alt="">
              <div class="quick-view">Quick View</div>
            
              </div>
            <p class="book-name">${book.title}</p>
            <p class="book-author"> ${book.author}</p>
        `;
    // console.log(books);
    booksCollection.appendChild(books);

    books.addEventListener("click", () => {
        console.log(book.buy_links[1].url)
      let popUpCon = document.createElement("div");
      popUpCon.classList.add("popUp-container")
      popUpCon.innerHTML = `
         <div class="pop-content">
          <div class="books-details">
           <div class="book-box">
             <img src="${book.book_image}" alt="">
           </div>
           <div class="book-des">
             <h1 class="book-head">${book.title}</h1>
             <p class="author">${book.author}</p>
             <p class="description">${book.description}</p>
             <div class="icons">
                 <a href="${book.buy_links[0].url}"  target="_blank">
                    <img  src="https://yevhenii2022.github.io/team-proj-js-book-app/amazon-shop-1x.d33dc585.png" alt="">
                 </a>
                <a href="${book.buy_links[1].url}"  target="_blank">
                    <img src="https://yevhenii2022.github.io/team-proj-js-book-app/apple-shop-1x.aeb5cfd2.png" alt="">
                </a>
                <a href="${book.buy_links[2].url}"  target="_blank">
                    <img src="https://yevhenii2022.github.io/team-proj-js-book-app/bookshop-1x.d3877644.png" alt="">
                </a>
             </div>
           </div>
          </div>
          <button class="add-to-cart">
           Add to Shopping List
          </button>
     
          <button class="clear">X</button>
       </div>
         `;

         section.appendChild(popUpCon);

         let clear = document.querySelectorAll(".clear");

         clear.forEach((value) =>{
            value.addEventListener("click",() =>{
                popUpCon.remove();

            })
         })
    });
  });

  div.appendChild(booksCollection);
  let seeMore = document.createElement("button");
  seeMore.classList.add("see-more");
  seeMore.innerText = "SEE MORE";
  div.appendChild(seeMore);
  mainCon.appendChild(div);
  mainRight.appendChild(mainCon);

  seeMore.addEventListener("click", () => {
    displayNew(arr[index].list_name, arr, index);
  });
}

function displayNew(value, arr, i) {
  if (value == arr[i].list_name) {
    // mainCon.remove();
    updateUI(arr[i]);
  }
}
// let mainCon;

function updateUI(value) {
  mainCon.remove();
  mainCon = document.createElement("div");
  mainCon.classList.add("main-con");
  // console.log(value.list_name);
  let h1 = document.createElement("h1");
  h1.innerHTML = `${value.list_name}`;
  mainCon.appendChild(h1);

  createBooks(value);
  createBooks(value);
  createBooks(value);

  mainRight.appendChild(mainCon);

  function createBooks(value) {
    let div = document.createElement("div");
    div.classList.add("container");

    let booksCollection = document.createElement("div");
    booksCollection.classList.add("books-collection");

    value.books.forEach((book) => {
      let books = document.createElement("div");
      books.classList.add("books");

      books.innerHTML = `
         <div class="book-img">
              <img src="${book.book_image}" alt="">
              <div class="quick-view">Quick View</div>
            
              </div>
            <p class="book-name">${book.title}</p>
            <p class="book-author"> ${book.author}</p>
        `;
      // console.log(books);
      booksCollection.appendChild(books);

      books.addEventListener("click", () => {
        let popUpCon = document.createElement("div");
        popUpCon.classList.add("popUp-container")
        popUpCon.innerHTML = `
           <div class="pop-content">
            <div class="books-details">
             <div class="book-box">
               <img src="${book.book_image}" alt="">
             </div>
             <div class="book-des">
               <h1 class="book-head">${book.title}</h1>
               <p class="author">${book.author}</p>
               <p class="description">${book.description}</p>
               <div class="icons">
                   <a href="${book.buy_links[0].url}">
                      <img  src="https://yevhenii2022.github.io/team-proj-js-book-app/amazon-shop-1x.d33dc585.png" alt="">
                   </a>
                  <a href="${book.buy_links[1].url}">
                      <img src="https://yevhenii2022.github.io/team-proj-js-book-app/apple-shop-1x.aeb5cfd2.png" alt="">
                  </a>
                  <a href="${book.buy_links[4].url}">
                      <img src="https://yevhenii2022.github.io/team-proj-js-book-app/bookshop-1x.d3877644.png" alt="">
                  </a>
               </div>
             </div>
            </div>
            <button class="add-to-cart">
             Add to Shopping List
            </button>
       
            <button class="clear">X</button>
         </div>
           `;
  
           section.appendChild(popUpCon);
  
           let clear = document.querySelectorAll(".clear");
  
           clear.forEach((value) =>{
              value.addEventListener("click",() =>{
                  popUpCon.remove();
              })
           })
      });
    });

    div.appendChild(booksCollection);
    mainCon.appendChild(div);
  }
}
