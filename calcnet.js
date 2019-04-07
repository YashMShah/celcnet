class D {
    constructor() {
      this.variable1 = {};
    }
    gett(key) {
      return this.variable1[key];
    }
    set(key,value) {
      this.variable1[key] = value;
    }
  }
  var wait = 1000;
var currentWait = (new Date()).getTime();
  var d = new D();
  var IVI = [];
  var IVO = [];
  var AVI = [];
  var AVO = [];
  var EVI = [];
  var EVO = [];
  var explen;
  var T1VI = [];
  var T1VO = [];
  var T2VI = [];
  var T2VO = [];
  var PVI = [];
  initdata();  
  function initdata(){
  d.set("A",1);
  d.set("B",2);
  d.set("C",3);
  d.set("D",4);
  d.set("E",1);
  d.set("F",1);
  d.set("G",1);
  d.set("H",1);
  d.set("I",1);
  d.set("J",1);
  d.set("K",1);
  d.set("L",1);
  d.set("M",1);
  d.set("N",1);
  d.set("O",1);
  d.set("P",1);
  d.set("Q",1);
  d.set("R",1);
  d.set("S",1);
  d.set("T",1);
  d.set("U",1);
  d.set("V",1);
  d.set("W",1);
  d.set("X",2);
  d.set("Y",3);
  d.set("Z",4);
  }
  
  
    function I(statement) {
          statement.forEach((expression) => {
              IVI.push(expression);
              console.log(IVI);
          })
          while (!IVI.length < 1 || !IVI == undefined) {
              var expre = IVI.shift();
           console.log(expre);
              AVI.push(expre);
              console.log(AVI);
		       A();
              
              
              
              var sum = IVO.shift();
          }
      }
      
      function A(){
          //var i =0 ;
          while(!AVI.length < 1 || !AVI == undefined){
            let test = AVI.shift();
            setTimeout(function(){document.getElementById("Ii-expr").textContent='Inside I machine sending to A: ' +test;},getWaitTime());
                
            console.log(test);

              let lhsrhs = test.split('=');
      console.log(lhsrhs);
      setTimeout(function(){document.getElementById("Ai-expr").textContent= 'Inside A machine sending to E:' +lhsrhs[1];},getWaitTime());

              EVI.push(lhsrhs[1]);
              E();


             console.log('avo=' + AVO);
              var sum = AVO.shift();
              IVO.push(sum);
         setTimeout(function(){document.getElementById("Ao-expr").textContent='Inside A machine setting ' + lhsrhs[0] + " to " +sum;},getWaitTime());

              d.set(lhsrhs[0], sum);
              setTimeout(function(){document.getElementById("Io-expr").textContent= 'Inside I machine and we got back: '+sum;},getWaitTime());
          }
          
          
      }
      
      function E(){
          while(!EVI.length < 1 || !EVI == undefined){
              
              
              let terms = EVI.shift().split('+');
              explen = terms.length;
              console.log('terms' + terms);
              console.log("Expre len " + explen);
              let counter = 1;
              terms.forEach((term) => {
                  console.log("term sent is " + term)
                  if (counter % 2 != 0) {
          		 setTimeout(function(){ document.getElementById("E-expr").textContent= 'Inside E sending to T1: ' +term;},getWaitTime());

                      T1VI.push(term);
                      T1()
                  } else {
            setTimeout(function(){document.getElementById("E-expr").textContent='Inside E sending to T2: ' + term;},getWaitTime());

                      T2VI.push(term);
                      T2();
                  }
                  counter++;
              })
        
              
          }
          
          while (!EVO.length < 1 || !EVO == undefined) {
              console.log('inside second while E');
              let sum = 0;
              if (EVO.length == explen) {
                  while (!EVO.length < 1 || !EVO == undefined) {
                      sum += EVO.shift();
                  }
                  console.log(sum);
              } else {
                  break;
              }
              AVO.push(sum);
              setTimeout(function(){document.getElementById("Eo-expr").textContent='Inside E machine sending back ' + sum;},getWaitTime());

              
          }
          
          
          return;
          
          
          
      }
      
      function T1(){
          while(!T1VI.length < 1 || !T1VI == undefined){
              let term = T1VI.shift();
              console.log("term is " + term)
              let factors = term.split('*');
              let resultMul = 1;
              
              for (let i = 0; i < factors.length; i++) {
                  if (!isNaN(factors[i])) {
                      resultMul = resultMul * factors[i];
                  } else if (factors[i].length > 1) {
              setTimeout(function(){ document.getElementById("T1-expr").textContent='Inside T1 machine sending to P machine: ' +factors[i];},getWaitTime());
                      PVI.push(factors[i])
                      P(1);
                      
                      console.log("Out of P with x = 4  ");
                      resultMul = resultMul * T1VO.shift();
                      console.log("result is " + resultMul);
                  } else {
                      resultMul = resultMul * d.gett(factors[i]);
                  }
              }
             setTimeout(function(){ document.getElementById("T1o-expr").textContent='Inside T1 machine sending back ' + resultMul;},getWaitTime());
              EVO.push(resultMul);
              return;
          
          }
          
      }
      
      function T2(){
          while(!T2VI.length < 1 || !T2VI == undefined){
              let term = T2VI.shift();
              let factors = term.split('*');
              let resultMul = 1;
              
              for (let i = 0; i < factors.length; i++) {
                  if (!isNaN(factors[i])) {
                      resultMul = resultMul * factors[i];
                  } else if (factors[i].length > 1) {
               setTimeout(function(){ document.getElementById("T2-expr").textContent='Inside T1 machine sending to P machine: ' + factors[i];},getWaitTime());
                      PVI.push(factors[i])
                      P(2);
                      resultMul = resultMul * T2VO.shift();
                      console.log("result is " + resultMul);
                  } else {
                      resultMul = resultMul * d.gett(factors[i]);
                  }
              }
             setTimeout(function(){ document.getElementById("T2o-expr").textContent= 'Inside T2 machine sending back ' +resultMul;},getWaitTime());
              EVO.push(resultMul);
              return;
          
          }
          
      }
      
  function P(variable){
      while(!PVI.length < 1 || !PVI == undefined){
          let numPow = PVI.shift().split('^');
          let val = 0;
          console.log("calc power for " + numPow[0] + " ^ " + numPow[1])
          if (isNaN(numPow[0])) {
                  console.log(numPow[0]);
                  console.log(d);
                  val = Math.pow(d.gett(numPow[0]), numPow[1]);
              } else {
                  val = Math.pow(numPow[0], numPow[1]);
              }
          if(variable == 1) {
                  T1VO.push(val);
              }
              else {
                  T2VO.push(val);
              }
              
      setTimeout(function(){document.getElementById("Pi-expr").textContent='Inside P machine sending back: ' + val;},getWaitTime());
              return;
              
      }
  }	
  function getWaitTime() {
    var now = (new Date()).getTime();
    //If we passed the current wait time, then wait from now
    if(now > currentWait) {
        currentWait = now + wait;
    }
    //A set time is still ongoing, then wait when that is completed
    else {
        currentWait = currentWait + wait;
    }
    return currentWait - now;
}