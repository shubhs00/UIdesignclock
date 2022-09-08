//  setInterval(() => {
//      date = new Date();
//      htime = date.geHours();
//      mtime = date.getMinutes();
//      stime = date.getSeconds();
//      hrotation = 30*htime + mtime/2;
//      mrotation = 6*mtime;
//      srotation = 6*stime;

//      hour.style.tranform = `rotate(${hrotation}deg)`
//      minute.style.tranform = `rotate(${mrotation}deg)`
//      second.style.tranform = `rotate(${srotation}deg)`
// }, 1000);


// const deg = 6 ;
// const hour = document.querySelector("hour");
// const min = document.querySelector("minute");
// const sec = document.querySelector("second")


// setInterval(() => {
//   let day = new Date ();
//   let hh = get.hour() * 30;
//   let mn = get.minute() * deg;
//   let sc = get.second() * deg;

//  hour.style.tranform =  `rotatez(${(hh) +  (mm/12)}deg)`
//  minute.style.tranform =  `rotatez(${mn}deg)`
//  sec.style.tranform =  `rotatez(${sc}deg)`

// })
 

let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");


setInterval(()=> {
    let time = new Date ();
    let hr = time.getHours();
    let mn = time.getMinutes();
    let sc = time.getSeconds();

    // Maths
   let h = hr*30 + mn/2;
   let m = mn*6;
   let s = sc*6;
 
// Dom manipulation
hour.style.transform = `rotate(${h}deg)`;
min.style.transform = `rotate(${m}deg)`;
sec.style.transform = `rotate(${s}deg)`


},1000)