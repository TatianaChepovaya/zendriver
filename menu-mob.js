$(document).ready(function () {
  //   console.log("ready!");
  $('.mobile__menu-btn').on('click', function () {
    //  alert();
    $('.mobile__menu-btn').toggleClass('active')
    $('.header__main').toggleClass('active')
    $('.header__line').toggleClass('active')
    $('.mobile__menu-container').toggleClass('active')
    $('.menu').toggleClass('active')
    $('.menu').prependTo('.mobile__menu-container .container')
  })
})
