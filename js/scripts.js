/**Модальное  окно контакты */
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName('closes')[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
};



  /*Функция  увеличения картинки*/ 

window.onload = function(){
    var image = document.getElementById("image");

}
    var maxWidth = "275px";
    var minWidth = "150px";


function cartinka(evant){
    evant.style.width = maxWidth;
    console.log(evant);
}
function cartinka1(evant){
    evant.style.width = minWidth;

}
  

/**Копирование по айдишнику блока */
/*
window.onload = function(){
    header1.document.getElementById("header1").innerHTML = ``;
};
*/

const catalogProduct = [
    {
        id: 'id1',
        name: 'Мужчина',
        clothes:'шапки',
        img: './img/116.jpg',
        price: '100p'
    },
    {
        id: 'id2',
        name: 'Мужчина',
        clothes:'шапки',
        img: './img/1111.jpg',
        price: '20p'
    },
    {
        id: 'id3',
        name: 'Мужчина',
        clothes:'носки',
        img: './img/1114.jpg',
        price: '30p'
    },
    {
        id: '1d4',
        name: 'Мужчина',
        clothes:'носки',
        img: './img/1116.jpg',
        price: '25p'
    },
    {
        id: 'id5',
        name: 'Женщина',
        clothes:'шапки',
        img: './img/1115.jpg',
        price: '32p'
    },
    {
        id: 'id6',
        name: 'Женщина',
        clothes:'шапки',
        img: './img/13.jpg',
        price: '24p'
    },
    {
        id: 'id7',
        name: 'Женщина',
        clothes:'свитер',
        img: './img/12.jpg',
        price: '150p'
    },
    {
        id: 'id8',
        name: 'Женщина',
        clothes:'свитер',
        img: './img/01.jpg',
        price: '102p'
    },
    {
        id: 'id9',
        name: 'Женщина',
        clothes:'варежки',
        img: './img/1112.jpg',
        price: '135p'
    },
    {
        id: 'id10',
        name: 'Женщина',
        clothes:'варежки',
        img: './img/1113.jpg',
        price: '153p'
    },
    {
        id: 'id11',
        name: 'Прочее',
        clothes:'Дети',
        img: './img/03.jpg',
        price: '155p'
    },
    {
        id: 'id12',
        name: 'Прочее',
        clothes:'Дети',
        img: './img/1116.jpg',
        price: '125p'
    },
    {
        id: 'id13',
        name: 'Прочее',
        clothes:'Товары для дома',
        img: './img/1113.jpg',
        price: '75p'
    },
    {
        id: 'id14',
        name: 'Прочее',
        clothes:'Товары для дома',
        img: './img/111.jpg',
        price: '50p'
    }
 
    
]


function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;
 
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();
 
  if ( isNaN(dateEnd) ) {
    return;
  }
 
  timer = setInterval(calculate, 1000);
 
  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
 
    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);
 
      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
 
  function display(days, hours, minutes, seconds) {}
}
 
 
 
countdown('06/19/2020 03:14:07 AM');

