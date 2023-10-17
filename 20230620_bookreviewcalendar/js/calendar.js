var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

const setCalendar = (year, month) => {

    // 현재 월 제목에 표시
    // html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    //1~해당 월의 마지막 날짜까지 날짜 div
    //datesContainerDiv의 자식들(dateitemDiv) clear
    while (datesContainerDiv.firstChild) {
        datesContainerDiv.removeChild(datesContainerDiv.firstChild);
    }
    // datesContainerDiv.innerHTML = ""; 가능!
    // datesContainerDiv.replaceChildren(); 가능!
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

    //1일을 해당 요일로 이동
    let firstDateDiv = datesContainerDiv.querySelector(".date.item:nth-child(1)");
    //css: .date.item:nth-child(1) {grid-colum-start: 6}
    //1일의 요일 구하자
    let firstDateDay = new Date(year, month-1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토요일 : 파란색 : 토요일 첫날  = 7 - 달의 1일 요일 
    let saturdayFirstDate = 7 - firstDateDay;  // 5 -> 2, 2 -> 5, 6 -> 1
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for(let saturdayDiv of saturdayDivs){
        //.date.item:nth-child(7n+2){color: blue;}
        saturdayDiv.style.color = "blue";
    }


    //일요일 : 빨간색
    let sundayFirstDate = (8 - firstDateDay) % 7;  //5 -> 3, 2 -> 6, 6 -> 2
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs){
        //.date.item:nth-child(7n+2){color: blue;}
        sundayDiv.style.color = "red";
    }

}

setCalendar(year, month);

// <: 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month - 1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
};
// >: 이후달
const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month === 13){
        year++;
        month = 1;
    }
    setCalendar(year, month);
};
// month += 1;