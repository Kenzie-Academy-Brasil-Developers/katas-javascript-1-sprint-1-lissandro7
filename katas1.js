function oneThroughTwenty() {
   
  
  let volta = [];

  for (let inicio = 1 ; inicio <= 20; inicio++){

    

    console.log(inicio)

    
  }
   
}

console.log(oneThroughTwenty());

function evensToTwenty() {
  let i = 1;
  while(i<=20){

    if(i%2 == 0){
      console.log(i);
    }
    i++;
  }

  }
  


console.log(evensToTwenty());

function oddsToTwenty() {
    
  let c = 1;
  while (c<=20){
    if(c%2 == 1 ){
      console.log(c)

    }
    c++;

  }
   
}

console.log(oddsToTwenty());

function multiplesOfFive() {
    
let i =1;
while(i<=100){

  if(i%5 == 0){

    console.log(i)

  }

  i++;
}

}

console.log(multiplesOfFive());

function squareNumbers() {

    let perf = [1,4,9,16,25,36,49,64,81,100]

    let c = 0;
    while(c <= perf.length){

      console.log(perf[c]);
      c++;
    }
  

 // So não sei se esta correto mas foi a respota mais proxima que consegui fazer

  
    
}

console.log(squareNumbers());

function countingBackwards() {
    
  let inicio = [];
  for (let i = 20 ; i >= 1 ; i--){

    console.log(i);
  }
  
}

console.log(countingBackwards());

function evenNumbersBackwards() {
 
    let i = 20;
    while(i>=1){

      if(i%2 == 0){

        console.log(i)
      }
        i--;
    }
 
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
    
        let i = 20;
        while(i>=1){

          if(i%2 == 1){

            console.log(i)
          }

          i--;
        }
}

  console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
    let i = 100;
    while(i>=1){
      if(i%5 == 0){
        console.log(i);
      }
      i--
    }



}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
      let quadrado = [100,81,64,49,36,25,16,9,4,1]

      let i = 0

      while(i <= quadrado.length){

            console.log(quadrado[i]);
            i++;        
      }



}

console.log(squareNumbersBackwards());

