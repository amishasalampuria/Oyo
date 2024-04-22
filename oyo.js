
const dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const currentDate = new Date();
const day = currentDate.getDate();
const dayOfWeek = dayName[currentDate.getDay()];
console.log(currentDate.getDay())
const Month = monthName[currentDate.getMonth()];

let value = currentDate.getDay() + 1 ;
if(value>=6) value=0;
const nextDayOfWeek = dayName[value]

const nextDay = currentDate.getDate() + 1;

let value2 = currentDate.getMonth()
if(value2==11)  value2=1;
const nextdayOfMonth = monthName[value2];
// const month = currentDate.getMonth() + 1
// const month = currentDate.toLocaleString('fr-FR', { month: 'long' });

document.getElementById("date").innerHTML = dayOfWeek + "," + " " + day + " " +  Month + " " + "-" + " " + nextDayOfWeek + ", " + nextDay + " " + Month;
document.getElementById("room").innerHTML = "1 Room"+","+" "+"1 Guest";


//rooms addition logic
let counter = 2;

function incs(btn){
    // let ele = btn.parentElement.querySelector("#inc");
    // let span = document.getElementById("num");
    let span = btn.parentElement.querySelector("#num"); 
    let v = span.innerHTML;
    let num = parseInt(v);
    if(!isNaN(num) && num<3){
        let res =  num + 1;
        span.innerHTML = res;
    }
}

function desc(btn){
    // let ele = btn.parentElement.querySelector("#desc");
    // let span = document.getElementById("num");
    let span = btn.parentElement.querySelector("#num"); 
    let v = span.innerHTML;
    let num = parseInt(v);
    if(!isNaN(num) && num>1){
        let res =  num - 1;
        span.innerHTML = res;
    }
}

function addRoom(){
   
    const parentDiv = document.getElementById("addRooms");
    const newRoom = document.createElement("div");
    newRoom.className = "noOfRoom"
    newRoom.innerHTML=`
    <div class="roomNo"> Room ${counter++}  </div>
        <div class="btns">
            <button id="desc" onclick="desc(this)">-</button>
            <span id="num" >1</span>
            <button id="inc" onclick="incs(this)">+</button>
        </div>
    `;
    parentDiv.appendChild(newRoom);
}


function deleteRoom(){
    const parentDiv = document.getElementById("addRooms");
    if(parentDiv.children.length >= 1){
        parentDiv.removeChild(parentDiv.lastChild)
        counter--;
    }
}


    const room = document.querySelector("#room");
    const rooms = document.querySelector("#rooms");

    room.addEventListener('click', function () {
        rooms.style.display = rooms.style.display === 'none' ? 'block' : 'none';
    });


    function login(){
        window.location.href = "./oyo/loginPage.html"
    }