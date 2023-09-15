var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;


const datesContainerDiv = document.getElementsByClassName("dates container")[0];

// <: 이전달
// month -= 1;
// >: 이후달
// month += 1;

const setCalendar = (year, month) => {

    // 현재 월 제목에 표시
    // html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    //1~해당 월의 마지막 날짜까지 날짜 div
 
    // 해당 월의 마지막날
    var thisMonthLastDate = new Date(year, month + 1 - 1, 0).getDate(); // 0 : 9월 1일 전날 -> 8월 31일
    
    for(let date = 1; date <= thisMonthLastDate; date++){
        let dateItemDiv = document.createElement("div") //div 만들기 
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item"); //<div class = "date item">
        dateItemDiv.innerHTML = date;
        //.dates.container 에게 자식으로 붙이자
        datesContainerDiv.appendChild(dateItemDiv);
    }
    
    // 해당 월의 시작일 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay(); // 0 : 일요일

    console.log(thisMonthLastDate, thisMonthFirstDay);
}

setCalendar(year, month);