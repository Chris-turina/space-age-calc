import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    let inputDate = $('#date-input').val();
    let age = new Years();
    // age.ageCalc(inputDate);

    $('.current-age').append(`${age.ageCalc(inputDate)}`)
    $('.mercury-age').append(`${age.mercuryCalc(inputDate)}`)
    $('.venus-age').append(`${age.venusCalc(inputDate)}`)
    $('.mars-age').append(`${age.marsCalc(inputDate)}`)
    $('.jupiter-age').append(`${age.jupiterCalc(inputDate)}`)
  })
});
