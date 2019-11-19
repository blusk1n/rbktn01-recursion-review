// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(name) {
	var array = [] ;
	var content = document.body.children
	if(document.body.classList.contains(name)){
					array.push(document.body)
				}
	function look(nodes){
		for(var i = 0 ; i<nodes.length;i++){
				if(nodes[i].classList.contains(name)){
					array.push(nodes[i])
				}
				if(nodes[i].children !== undefined){
					look(nodes[i].children)
				}
		}	
	}	
	look(content)
	console.log(array + "1")
		return array

}



