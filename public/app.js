let time = 60;
let resultElement = document.getElementById("result");
let timerElement = document.getElementById("timer");

setInterval(()=>{
  time--;
  timerElement.innerText = time;

  if(time === 20){          // 40 sec pehle result show
      fetch("/rng")
      .then(res=>res.json())
      .then(data=>{
          resultElement.innerHTML = data.number;
      });
  }

  if(time === 0){
      time = 60;
      resultElement.innerHTML = "Waiting...";
  }

},1000);