import { Years } from "./../js/calc.js";

$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    let inputDate = $('#date-input').val();
    let age = new Years();
    $('#output').show();

    $('.current-age').text(`Your Current age is: ${age.ageCalc(inputDate)}`);
    $('.years-left-earth').text(`${age.averageLifeExpectancy(inputDate)}`)

    $('.mercury-age').text(`Your age on Mercury is:${age.mercuryCalc(inputDate)}`);
    $('.years-left-mercury').text(`${age.mercuryAvgExpectancy(inputDate)}`)

    $('.venus-age').text(`Your age on Venus is:${age.venusCalc(inputDate)}`);
    $('.years-left-venus').text(`${age.venusAvgExpectancy(inputDate)}`)

    $('.mars-age').text(`Your age on Mars is:${age.marsCalc(inputDate)}`);
    $('.years-left-mars').text(`${age.marsAvgExpectancy(inputDate)}`)

    $('.jupiter-age').text(`Your age on Jupiter is:${age.jupiterCalc(inputDate)}`);
    $('.years-left-jupiter').text(`${age.jupiterAvgExpectancy(inputDate)}`)




  });
});
