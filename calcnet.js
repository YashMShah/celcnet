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
  var colorb = '#0000FF';
  var colorr = '#FF0000';
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
            setTimeout(function(){
				document.getElementById("Iinput").textContent='Sending to A: ' +test;},TimeOut());
                
            console.log(test);

              let lhsrhs = test.split('=');
      console.log(lhsrhs);
	  
	  setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorb},TimeOut());
 
      setTimeout(function(){
		  document.getElementById("Ainput").textContent= 'Sending to E:' +lhsrhs[1];
	  },TimeOut());
	  
	  setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorr},TimeOut());
 
	  
	  
	  setTimeout(function(){
				document.getElementById("ITOA").style.borderColor = colorr;
				document.getElementById("ATOE").style.borderColor = colorb;
				},TimeOut());
			

              EVI.push(lhsrhs[1]);
              E();
				 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());
 

             console.log('avo=' + AVO);
              var sum = AVO.shift();
              IVO.push(sum);
         setTimeout(function(){
			 
			 document.getElementById("Aoutput").textContent='Setting ' + lhsrhs[0] + " to " +sum;
			 },TimeOut());

              d.set(lhsrhs[0], sum);
			   setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorb},TimeOut());
				setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorr},TimeOut());
 
              setTimeout(function(){document.getElementById("Ioutput").textContent= 'Answer Received: '+sum;},TimeOut());
			
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
          		 setTimeout(function(){
					 document.getElementById("Einput").textContent= 'Sending to T1: ' +term;
					 document.getElementById("ITOA").style.borderColor = colorr;
					 document.getElementById("ATOE").style.borderColor = colorb;
					 },TimeOut());
	
					 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());

                      T1VI.push(term);
                      T1()
					 setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr},TimeOut());
 
                  } else {
            setTimeout(function(){
				document.getElementById("Einput").textContent='Sending to T2: ' + term;
				},TimeOut());
				
					 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr;document.getElementById("ETOT2").style.borderColor = colorb;},TimeOut());


                      T2VI.push(term);
                      T2();
					  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr},TimeOut());
 
                  }
                  counter++;
              })
        
              
          }
          
          while (!EVO.length < 1 || !EVO == undefined) {
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
              setTimeout(function(){document.getElementById("Eoutput").textContent='Sending Return: ' + sum;},TimeOut());

              
          }
          
          setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorb},TimeOut());
 
          return;
		  
          
          
          
      }
      
      function T1(){
          while(!T1VI.length < 1 || !T1VI == undefined){
              let term = T1VI.shift();
              console.log("term is " + term)
              let factors = term.split('*');
              let resultMul = 1;
              setTimeout(function(){
					 
					 document.getElementById("ETOT1").style.borderColor = colorb;
    				 },TimeOut());
              for (let i = 0; i < factors.length; i++) {
                  if (!isNaN(factors[i])) {
                      resultMul = resultMul * factors[i];
                  } else if (factors[i].length > 1) {
					  
				
              setTimeout(function(){
				  document.getElementById("T1input").textContent='Sending to P machine: ' +factors[i];
				  },TimeOut());
				
				setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr;
				  },TimeOut());
				  
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorr;
				  },TimeOut());
				  
                      PVI.push(factors[i])
                      P(1);
                      
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorr;
				  },TimeOut());
				
				
                      console.log("Out of P with x = 4  ");
                      resultMul = resultMul * T1VO.shift();
                      console.log("result is " + resultMul);
                  } else {
                      resultMul = resultMul * d.gett(factors[i]);
                  }
              }
             setTimeout(function(){ document.getElementById("T1output").textContent='Sending Return: ' + resultMul;},TimeOut());
              EVO.push(resultMul);
			  setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorb},TimeOut());
 
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
               setTimeout(function(){ 
			   document.getElementById("T2input").textContent='Sending to P machine: ' + factors[i];
			   },TimeOut());
			   
			   setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr;
				  },TimeOut());
				  
				setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  
				setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorr;
				  },TimeOut());
				
                      PVI.push(factors[i])
                      P(2);
					  
					  setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorr;
				  },TimeOut());
                      resultMul = resultMul * T2VO.shift();
                      console.log("result is " + resultMul);
                  } else {
                      resultMul = resultMul * d.gett(factors[i]);
                  }
              }
	         setTimeout(function(){ document.getElementById("T2output").textContent= 'Sending Return: ' +resultMul;},TimeOut());
              EVO.push(resultMul);
			  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorb},TimeOut());
 
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
              
      setTimeout(function(){document.getElementById("Pinput").textContent='Sending Return: ' + val;},TimeOut());
              return;
              
      }
  }	
  function TimeOut() {
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
