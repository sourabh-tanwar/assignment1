//Write a program to find whether a given year is a leap year or not.
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(2020));
  console.log(isLeapYear(2021));
  console.log(isLeapYear(2000)); 
  console.log(isLeapYear(1900)); 
  
//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }
  
  console.log(celsiusToFahrenheit(0));  
  console.log(fahrenheitToCelsius(32));  






  //Write a program to find the factorial of a number.
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
