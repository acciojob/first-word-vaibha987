// your code here
// Approach 1
function firstWord(s) {
	s=s.trim()
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
/*
// Approach 2
function firstWord(s) {
    s = s.trim();
    let index = s.indexOf(' ');
    if (index === -1) {
        return s;
    }
    return s.substring(0, index);
}
const s = prompt("Enter String:");
alert(firstWord(s));
*/
}
