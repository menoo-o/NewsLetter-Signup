// .msg{
    // display: none;
// }

const container = document.querySelector('.container');
const btn = document.querySelector('#myBtn');
const pgBtn = document.querySelector('#pgBtn')

btn.addEventListener('click', function(){
    event.preventDefault();
    location.href = "http://127.0.0.1:5500/page2.html";
});

pgBtn.addEventListener('click', function(){
    location.href = "http://127.0.0.1:5500/page3.html";
});
