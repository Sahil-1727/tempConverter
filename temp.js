function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    document.getElementById("outputkelvin").innerHTML = ((valNum-32)*5/9)+273.15;
  }
  function temperatureConverter1(valNum1) {
    valNum1 = parseFloat(valNum1);
    document.getElementById("outputFahrenheit").innerHTML=(valNum1*1.8)+32;
    document.getElementById("outputkelvin1").innerHTML= valNum1+273.15;
  
  }
  function temperatureConverter2(valNum2) {
valNum2 = parseFloat(valNum2);
document.getElementById("outputFahrenheit1").innerHTML= ((valNum2-273.15)*1.8)+32;
document.getElementById("outputCelsius1").innerHTML= valNum2 - 273.15;
  
  }