import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();

    let inputDate = $('#date-input').val();
    console.log(inputDate);
    let age = new Years();


    $('.current-age').text(`Your Current age is: ${age.ageCalc(inputDate)}`);
    $('.mercury-age').text(`Your age on Mercury is:${age.mercuryCalc(inputDate)}`);
    $('.venus-age').text(`Your age on Venus is:${age.venusCalc(inputDate)}`);
    $('.mars-age').text(`Your age on Mars is:${age.marsCalc(inputDate)}`);
    $('.jupiter-age').text(`Your age on Jupiter is:${age.jupiterCalc(inputDate)}`);
  });
});
