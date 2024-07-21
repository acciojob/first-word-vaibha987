function firstWord(s) {
  // your code here
	function firstWord(str) {
    // Trim leading and trailing whitespace
    str = str.trim();
    
    // Find the index of the first space
    let index = str.indexOf(' ');
    
    // If no space found, return the whole string
    if (index === -1) {
        return str;
    }
    
    // Otherwise, return the substring up to the first space
    return str.substring(0, index);
}
}

// Do not change the code below

//const s = prompt("Enter String:");
//alert(firstWord(s));
