// your code here
let str=' Hello World!'
str=str.trim();
function firstWord() {
	let result=""
for(let i=0;i<str.length;i++){
	if(str[i]==" "){
	 	break;
	}
    else{
        result=result+str[i]
    }
}
return result	
}