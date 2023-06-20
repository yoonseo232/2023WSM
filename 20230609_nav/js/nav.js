
//1/ HTML -> js
//햄버거메뉴 -> navToggleDiv
//햄버거메뉴 i -> navToggleI
//.nav-list -> navListUl

// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

//2. Event Handling
//햄버거메뉴 클릭하면, 햄버거메뉴 i "bi bi-list"<-> X "bi bi-x-lg"
//햄버거메뉴 클릭하면, .nav-list에 .show-munu보여주기 <-> 안보여주기
nav_toggle.onclick = () => alert("안녕");
nav_toggle.onclick = alert("안녕");

//--------------
//Html -> JS
//id
//const navToggleDiv = document.getElementById("nav_toggle");
//const navToggleDiv = nav_toggle 쓸 수 있지만 JS변수 규칙을 지켜야함

//class
//const navToggleDiv = document.getElementById("nav-toggle")[0];

//tag
//const navToggleDiv = get.getElementByTagName("div")[0];

//querySelector, querySelectorAll
//const navToggleDiv = document.querySelector("#nav_toggle");
//const navToggleDiv = document.querySelectorAll(".nav_toggle")[0];
//const navToggleDiv = document.querySelector("div")[0];