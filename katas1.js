function oneThroughTwenty() {
   
  
  let volta = [];

  for (let inicio = 1 ; inicio <= 20; inicio++){

      volta.push(inicio)
    
  }
  return volta;
}

console.log(oneThroughTwenty());

function evensToTwenty() {
  
  let armazenar = [];
  for(let c = 1; c<=20; c++){
  if(c % 2 === 0){

    armazenar.push(c);

    }
    
  }
  return armazenar;
}

 
  
console.log(evensToTwenty());

function oddsToTwenty() {
    
    let armazenar = [];

    for(let c = 1;c <= 20; c++){
    if(c%2 == 1 ){
      
      armazenar.push(c)

    
    

  }
  
}
return armazenar;
}

console.log(oddsToTwenty());

function multiplesOfFive() {
    
    let armazenar = [];

    for(let c = 1 ;c <= 100 ;c++){
    if(c%5 == 0){

    armazenar.push(c)

  }

  
}
return armazenar;
}

console.log(multiplesOfFive());

function squareNumbers() {

    let perf = [];

    for (let c = 1 ; c<=10 ;c ++) {

        perf.push(c * c)
    } 

  

      return perf;
      
    }
  

 // So não sei se esta correto mas foi a respota mais proxima que consegui fazer

  
console.log(squareNumbers());

function countingBackwards() {
    
  let inicio = [];
  for (let c = 20 ; c >= 1 ; c--){

    inicio.push(c);
  }
  return inicio
}

console.log(countingBackwards());

function evenNumbersBackwards() {
 
    let armazenar = [];

    for(let c = 20 ; c >=1 ; c--){
      if(c % 2 === 0){
      
      armazenar.push(c);

    }
  }
    return armazenar;
  }

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
    
        let armazenar = [];

        for(let c = 20; c >= 1; c--){
       

          if(c % 2 === 1){

            armazenar.push(c)
          }
        }
        return armazenar;
}

  console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
    let armazenar = [];
    for(let c = 100; c>=5; c--){
      if(c % 5 === 0){
        armazenar.push(c);

      }

    }
    return armazenar;
  }

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
      let armazenar = [];

      for(let c = 10 ;c >=1; c--){
        armazenar.push(c * c);

      }

      return armazenar;

    }

    console.log(squareNumbersBackwards());