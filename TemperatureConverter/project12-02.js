"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: James Furlough
      Date: 11/9/2024  

      Filename: project12-02.js
*/

// Sets fahrenhiet equal to celsius
$("input#cValue").change( e => {
    // gets what farenhiet should be
    let celsius = $(e.target).val();
    let fahrenheit = ((celsius * 1.8) + 32);
    // changes fValue to current fahrenheit
    $("input#fValue").val((fahrenheit).toFixed(0));
}) ;

// Sets celsius equal to fahrenhiet
$("input#fValue").change( e => {
    // gets what celsius should be
    let fahrenheit = $(e.target).val();
    let celsius = ((fahrenheit - 32) / 1.8);
    // changes cValue to current celsius
    $("input#cValue").val((celsius).toFixed(0));
}) ;


