// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	 var res = [];
  	if(typeof obj === "string") {
  		return  '"' + obj + '"';
  	}
  	else if(typeof obj === "boolean" || typeof obj === "number" || obj === null){
  		return String(obj)
  	}
  	else if(obj === undefined || typeof obj==="function"){
  		return "null"
  	}
  	 



  	 if(Array.isArray(obj) === true){
  		obj.forEach(function(element,i){
  			res.push(stringifyJSON(element))
  		})	
  		 return '[' + res + ']'	
  		}

  	if(typeof obj ==="object"){
  		for (var key in obj){
  			if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue ;
      	}
  			 res.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
  		}
  		return '{' + res + '}'
  	}



  	
  	  
}  ;
