$(function(){
    $('.menu__btn').on('click',function(){
        $('.header__menu-list').toggleClass('header__menu-list--active')
    });
});




// const  countDownEl = document.getElementById("countdown");
// var time  = 1555200000;
// setInterval(updateCountdown, 1000);

// function updateCountdown(){
//     var days = Math.floor(time / (1000 * 60 * 60 *24));
//     var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((time % (1000 * 60 )) / 1000);
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     countDownEl.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
//     time--;
// }