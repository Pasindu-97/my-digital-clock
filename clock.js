function time() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let hourString = hour.toString();
  let minuteString = minute.toString();
  let secondString = second.toString();
  
  let names = ['zero','one','two','three','four','five','six','seven','eight','nine']

  //let String = [hourString,minuteString,secondString]

  /*for (let i=0; i<=String.length; i++){
    if (string[i].length==1){
      let n1 = document.querySelector('.number-1');
      n1.classList.add("zero")
  
      let n2 = document.querySelector('.number-2');
      n2.classList.add(names[hourString[0]]);
    }
  
    else{
      let n1 = document.querySelector('.number-1');
      n1.classList.add(names[hourString[0]])
    
      let n2 = document.querySelector('.number-2');
      n2.classList.add(names[hourString[1]]);
    }
  }*/
  //console.log(hourString,minuteString,secondString)
  
  if (hourString.length==1){
    let n1 = document.querySelector('.number-1');
    n1.classList="number-1 "+"number "+"zero"

    let n2 = document.querySelector('.number-2');
    n2.classList="number-2 "+"number "+ names[hourString[0]];
  }

  else{
    let n1 = document.querySelector('.number-1');
    n1.classList="number-1 "+"number "+ names[hourString[0]]
  
    let n2 = document.querySelector('.number-2');
    n2.classList="number-2 "+"number "+names[hourString[1]];
  }

  if (minuteString.length==1){
    let n1 = document.querySelector('.number-3');
    n1.classList = "number-3 "+"number "+ 'zero'

    let n2 = document.querySelector('number-4');
    console.log(n2)
    n2.classList ="number-4 "+"number "+names[minuteString[0]];
  }

  else{
    let n1 = document.querySelector('.number-3');
    n1.classList="number-3 "+"number "+names[minuteString[0]];

    let n2 = document.querySelector('.number-4');
    n2.classList="number-4 "+"number "+names[minuteString[1]];
  }

  if (secondString.length==1){
    let n1 = document.querySelector('.number-5');
    n1.classList="number-5 "+"number "+ "zero"

    let n2 = document.querySelector('.number-6');
    n2.classList="number-6 "+"number "+names[second];
  }
  
  else{
    let n1 = document.querySelector('.number-5');
    n1.classList="number-5 "+"number "+names[secondString[0]];
    
  
    let n2 = document.querySelector('.number-6');
    n2.classList="number-6 "+"number "+names[secondString[1]];
    console.log(n2)
  }

}

setInterval(time,1000)
