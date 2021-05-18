//Check if input string is near-palindrome
function isNearPalindrome(inputStr) {
    var s = inputStr.split("").sort();
    var char = "";
    var nextChar = "";
    var charCount = [ 0 ];
    var charIdx = 0;
    for ( var i = 0; i < s.length; i++) {
        char = s[i];
        nextChar = s[i + 1] || "";
        charCount[charIdx]++;
        if (char !== nextChar) {
            if (charCount[charIdx] % 2 === 1) {
                if (charCount.length > 1) {
                    return false;
                }
                charIdx = 1;
                charCount.push(0);
            } else if (charCount[charIdx] % 2 === 0) {
                charCount[charIdx] = 0;
            }
        }
    }
    return true;
}

//Calculate number of operations to convert string to near-palindrome.
function solve(inputStr){

    if(isNearPalindrome(inputStr) === false){
        var s = inputStr.split("").sort();
        
        var nOperations = 0;
        var first = 0;
        var last = s.length -1;

        var incremented = 0;

        while(first < last){
            if(s[first] !== s[last]){
                incremented = Math.min(inputStr.charCodeAt(first++), inputStr.charCodeAt(last--)) + 1;
                nOperations++;
            }
        } 
        return nOperations;
    }
    else {
        return -1;
    }
}

console.log(solve('hello'));