//URL book에 해당하는 parameter 값 읽어오자(string)
let book = new URL(location.href).searchParams.get('book');
console.log(`book: ${book} type: ${typeof book}`); //"3"string
//book이 null이면 책장으로 가자
if(book === null){
    location.href = 'index.html';
}
//book값(string) -> bookId(number) 변환하자 "3" -> 3
let bookId = Number(book);
//let bookId = parseInt(book);
console.log(`bookId: ${bookId} type: ${typeof bookId}`); //3 number
//books를 돌면서 book 숫자와 같은 id값의 책을 가져오자
let bookData;
for(let bookOne of books){
    if(bookId === bookOne.id){
        bookData = bookOne;
        break;
    }   
}

//제목을 보여주자
let title = bookData.title;
console.log(bookData.title);
// console.log(bookData["title"]);
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}" />`;

//html 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
//js 변수.innerHTML
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

//읽은 날짜: 임시로 오늘의 날짜 표시하자
let now = new Date();
//오늘의 날짜 구하자
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

//사람이 알아보는 형식으로 바꾸자
let dateString = `${year}년 ${month}월 ${date}일`;
//HTML -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
//오늘의 날짜 값 넣자
readDateDiv.innerHTML = dateString;
