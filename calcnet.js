// Javascript file includes logic
//Authors: Abbas Gulabiwala, Srikanth Krishna Kolli, Yash Shah
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
  var delay = 1000;
var timedelay = (new Date()).getTime();
  var d = new D();
  var IVI = [];
  var IVO = [];
  var AVI = [];
  var AVO = [];
  var EVI = [];
  var EVO = [];
  var expressionlength;
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
          })
          while (!IVI.length < 1 || !IVI == undefined) {
              var expre = IVI.shift();
              AVI.push(expre);
		       A();
              
              
              
              var addtn = IVO.shift();
          }
      }
      
      function A(){
          //var i =0 ;
          while(!AVI.length < 1 || !AVI == undefined){
            let test = AVI.shift();
            setTimeout(function(){
				document.getElementById("Iinput").textContent='Sending to A: ' +test;},TimeOut());
                

              let exprsides = test.split('=');
	  
	  setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorb},TimeOut());
 
      setTimeout(function(){
		  document.getElementById("Ainput").textContent= 'Sending to E:' +exprsides[1];
	  },TimeOut());
	  
	  setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorr},TimeOut());
 
	  
	  
	  setTimeout(function(){
				document.getElementById("ITOA").style.borderColor = colorr;
				document.getElementById("ATOE").style.borderColor = colorb;
				},TimeOut());
			

              EVI.push(exprsides[1]);
              E();
				 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());
 

              var addtn = AVO.shift();
              IVO.push(addtn);
         setTimeout(function(){
			 
			 document.getElementById("Aoutput").textContent='Setting ' + exprsides[0] + " to " +addtn;
			 },TimeOut());

              d.set(exprsides[0], addtn);
			   setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorb},TimeOut());
				setTimeout(function(){document.getElementById("ITOA").style.borderColor = colorr},TimeOut());
 
              setTimeout(function(){document.getElementById("Ioutput").textContent= 'Answer Received: '+addtn;},TimeOut());
			
		  }
          
          
      }
      
      function E(){
          while(!EVI.length < 1 || !EVI == undefined){
              
              let words = EVI.shift().split('+');
              expressionlength = words.length;
              let cnt = 1;
              words.forEach((word) => {
                  if (cnt % 2 != 0) {
          		 setTimeout(function(){
					 document.getElementById("Einput").textContent= 'Sending to T1: ' +word;
					 document.getElementById("ITOA").style.borderColor = colorr;
					 document.getElementById("ATOE").style.borderColor = colorb;
					 },TimeOut());
	
					 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());

                      T1VI.push(word);
                      T1()
					 setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr},TimeOut());
 
                  } else {
            setTimeout(function(){
				document.getElementById("Einput").textContent='Sending to T2: ' + word;
				},TimeOut());
				
					 setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr;document.getElementById("ETOT2").style.borderColor = colorb;},TimeOut());


                      T2VI.push(word);
                      T2();
					  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr},TimeOut());
 
                  }
                  cnt++;
              })
        
              
          }
          
          while (!EVO.length < 1 || !EVO == undefined) {
              let addtn = 0;
              if (EVO.length == expressionlength) {
                  while (!EVO.length < 1 || !EVO == undefined) {
                      addtn += EVO.shift();
                  }
              } else {
                  break;
              }
              AVO.push(addtn);
              setTimeout(function(){document.getElementById("Eoutput").textContent='Sending Return: ' + addtn;},TimeOut());

              
          }
          
          setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ATOE").style.borderColor = colorb},TimeOut());
 
          return;
		  
          
          
          
      }
      
      function T1(){
          while(!T1VI.length < 1 || !T1VI == undefined){
              let word = T1VI.shift();
              let parts = word.split('*');
              let tresult = 1;
              setTimeout(function(){
					 
					 document.getElementById("ETOT1").style.borderColor = colorb;
    				 },TimeOut());
              for (let i = 0; i < parts.length; i++) {
                  if (!isNaN(parts[i])) {
                      tresult = tresult * parts[i];
                  } else if (parts[i].length > 1) {
					  
				
              setTimeout(function(){
				  document.getElementById("T1input").textContent='Sending to P machine: ' +parts[i];
				  },TimeOut());
				
				setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr;
				  },TimeOut());
				  
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorr;
				  },TimeOut());
				  
                      PVI.push(parts[i])
                      P(1);
                      
				setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  setTimeout(function(){document.getElementById("T2TOP").style.borderColor = colorr;
				  },TimeOut());
				
				
                      tresult = tresult * T1VO.shift();
                  } else {
                      tresult = tresult * d.gett(parts[i]);
                  }
              }
             setTimeout(function(){ document.getElementById("T1output").textContent='Sending Return: ' + tresult;},TimeOut());
              EVO.push(tresult);
			  setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ETOT1").style.borderColor = colorb},TimeOut());
 
              return;
          
          }
          
      }
      
      function T2(){
          while(!T2VI.length < 1 || !T2VI == undefined){
              let word = T2VI.shift();
              let parts = word.split('*');
              let tresult = 1;
              
              for (let i = 0; i < parts.length; i++) {
                  if (!isNaN(parts[i])) {
                      tresult = tresult * parts[i];
                  } else if (parts[i].length > 1) {
               setTimeout(function(){ 
			   document.getElementById("T2input").textContent='Sending to P machine: ' + parts[i];
			   },TimeOut());
			   
			   setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr;
				  },TimeOut());
				  
				setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  
				setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorr;
				  },TimeOut());
				
                      PVI.push(parts[i])
                      P(2);
					  
					  setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorb;
				  },TimeOut());
				  
				  setTimeout(function(){document.getElementById("T1TOP").style.borderColor = colorr;
				  },TimeOut());
                      tresult = tresult * T2VO.shift();
                  } else {
                      tresult = tresult * d.gett(parts[i]);
                  }
              }
	         setTimeout(function(){ document.getElementById("T2output").textContent= 'Sending Return: ' +tresult;},TimeOut());
              EVO.push(tresult);
			  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorr},TimeOut());
 
			  setTimeout(function(){document.getElementById("ETOT2").style.borderColor = colorb},TimeOut());
 
              return;
          
          }
          
      }
      
  function P(variable){
      while(!PVI.length < 1 || !PVI == undefined){
          let powernum = PVI.shift().split('^');
          let pval = 0;
          if (isNaN(powernum[0])) {
                  pval = Math.pow(d.gett(powernum[0]), powernum[1]);
              } else {
                  pval = Math.pow(powernum[0], powernum[1]);
              }
          if(variable == 1) {
			  
                  T1VO.push(pval);
              }
              else {
				
                  T2VO.push(pval);
              }
              
      setTimeout(function(){document.getElementById("Pinput").textContent='Sending Return: ' + pval;},TimeOut());
              return;
              
      }
  }
  
  //https://www.w3schools.com/jsref/met_win_settimeout.asp
//timeout function to delay the displaying of elements in the machines.
  function TimeOut() {
    var time = (new Date()).getTime();
    if(time > timedelay) {
        timedelay = time + delay;
    }
    else {
        timedelay = timedelay + delay;
    }
    return timedelay - time;
}
