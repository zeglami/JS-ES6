//Functional programming
    //Higher order function: function of other function 
    //OR function return other function(examples: map(),filter())
function sing(callback){
    console.log("la la la la la la")
    if(callback instanceof Function){
      callback() 
    }
  }
  function meow(){
    console.log("meow meow meow")
  
  }
  console.log("sing(meow)")
  sing(meow)
  console.log("sing()")
  sing()
  console.log("sing(anonymous function)")
  sing(function(){console.log("halala o halala")})
  console.log("sing(arrow function)")
  sing(()=>console.log("hana hana"))


  // CLASICAL function in return 
function multiplier(factor,x){
    return factor*x
}

function multiplier2(factor){

    return function(x){
        return factor*x
    }
}


let doubler=multiplier2(2)
let tripler=multiplier2(3)

console.log("doubler(4)")
console.log(doubler(4))

console.log("tripler(5)")
console.log(tripler(5))

// ARROW in return 

console.log("ARROW in return ")
function multiplier3(factor){

    return x=>factor*x
    
}


let doubler3=multiplier3(2)
let tripler3=multiplier3(3)

console.log("doubler3(4)")
console.log(doubler3(4))

console.log("tripler3(5)")
console.log(tripler3(5))

