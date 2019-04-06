//let  d;
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
$(document).ready(function () {

    initdata();
    //let mContainer = new Container();
    // mContainer.A('Z=5*X^2+7*X*Y+3*Y^2+1');
    var input = [];
    input.push('Z=5*X^2+7*Y^3+X*Y') //Z = 107, when {x = 3, y = 2} 
    input.push('A=Z*2+100')//A=314, from previous Z(107)
    //mContainer.I(allInputs);
	I(input);
    // mContainer.A('Z=5*X^2+7*Y^3+X*Y+Z');
    // mContainer.A('Z=5*X^2+7*Y^3');
});

function initdata(){
//var d = new D();
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
			alert("Printing Statement" + expression);
        })
		while (!IVI < 1 || !IVI == undefined) {
            var expre = IVI.shift();
            alert('Inside I machine sending to A: ' + expre);
            AVI.push(expre);
            A();
			
			
			
            var sum = IVO.shift();
            alert('Inside I machine and we got back: ' + sum);
        }
    }
	
	function A(){
		
		while(!AVI < 1 || !AVI == undefined){
			let lhsrhs = AVI.shift().split('=');
			alert('Inside A machine sending to E:' + lhsrhs[1]);
			EVI.push(lhsrhs[1]);
			E();
			
			
			var sum = AVO.shift();
            IVO.push(sum);
            alert('Inside A machine setting ' + lhsrhs[0] + " to " + sum);
            d.set(lhsrhs[0], sum);
            
		}
		
		
	}
	
	function E(){
		while(!EVI < 1 || !EVI == undefined){
			
			// check for free machine
			
			let terms = EVI.shift().split('+');
			explen = terms.length;
			console.log("Expre len " + explen);
			let counter = 1;
            terms.forEach((term) => {
                console.log("term sent is " + term)
                if (counter % 2 != 0) {
                    alert('Inside E sending to T1: ' + term);
                    T1VI.push(term);
                    T1()
                } else {
                    alert('Inside E sending to T2: ' + term);
                    T2VI.push(term);
                    T2();
                }
                counter++;
            })
			

            return;
			
			
		}
		
		while (!EVO < 1 || !EVO == undefined) {
            //console.log("size is " + this.oQueueE.messages())
            let sum = 0;
            if (EVO.length == explen) {
                while (!EVO < 1 || !EVO == undefined) {
                    sum += EVO.shift();
                }
                console.log(sum);
            } else {
                break;
            }
            alert('Inside E machine sending back ' + sum);
            AVO.push(sum);
        }
		
		
		return;
		
		
		
	}
	
	function T1(){
		console.log("Inside T1");
		while(!T1VI < 1 || !T1VI == undefined){
			let term = T1VI.shift();
            console.log("term is " + term)
            let factors = term.split('*');
            let resultMul = 1;
			
			for (let i = 0; i < factors.length; i++) {
                if (!isNaN(factors[i])) {
                    resultMul = resultMul * factors[i];
                } else if (factors[i].length > 1) {
                    alert('Inside T1 machine sending to P machine: ' + factors[i]);
                    PVI.push(factors[i])
                    P(1);
					
					console.log("Out of P with x = 4  ");
					// need to change
                    resultMul = resultMul * T1VO.shift();
                    console.log("result is " + resultMul);
                    // resultMul = resultMul * this.P();
                } else {
                    resultMul = resultMul * d.gett(factors[i]);
                }
            }
            alert('Inside T1 machine sending back ' + resultMul);
            EVO.push(resultMul);
            E();
            
		
		}
		
	}
	
	function T2(){
		console.log("Inside T2");
		while(!T2VI < 1 || !T2VI == undefined){
			let term = T2VI.shift();
            console.log("term is " + term)
            let factors = term.split('*');
            let resultMul = 1;
			
			for (let i = 0; i < factors.length; i++) {
                if (!isNaN(factors[i])) {
                    resultMul = resultMul * factors[i];
                } else if (factors[i].length > 1) {
                    alert('Inside T1 machine sending to P machine: ' + factors[i]);
                    PVI.push(factors[i])
                    P(2);
					resultMul = resultMul * T2VO.shift();
                    console.log("result is " + resultMul);
                    // resultMul = resultMul * this.P();
                } else {
                    resultMul = resultMul * d.gett(factors[i]);
                }
            }
            alert('Inside T2 machine sending back ' + resultMul);
            EVO.push(resultMul);
            E();
            
		
		}
		
	}
	
function P(variable){
	while(!PVI < 1 || !PVI == undefined){
		//console.log('factor is ' + this.iQueueP.front())
		//console.log(PVI.shift());
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
            
            alert('Inside P machine sending back: ' + val);
			return;
            
	}
}	

