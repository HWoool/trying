import books from "./booklist.js";
console.log(books);

let content = document.querySelector("#content");
let lib = "<ul>";

books.forEach((book) => {
  lib += `<li>`;
  lib += `<div><img src="./images/${book.photo}"></div>`;
  // lib += `<div><a href="#"><img src="./images/search.png">미리보기</a>`;
  lib += `<div>${book.subject}</div>`;
  lib += `<div>${book.author}</div>`;
  lib += `<div>${book.publisher}</div>`;
  lib += `<div>${book.date}</div>`;
  lib += `<div>${book.price}</div>`;
  lib += `<div>${book.summary}</div>`;
  lib += `<div ><button class='buttons'>수정</button><button class='buttons'>삭제</button></div>`;
  lib += `</li>`;
});

lib += "</ul>";
content.innerHTML = lib;
