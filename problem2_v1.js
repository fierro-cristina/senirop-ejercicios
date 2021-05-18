class NearPalindromesDiv1 {
    constructor(inputStr){
        this.inputStr = inputStr;
    }

    static solve(string){
        var string = string.inputStr;

        //Check if string is near-palindrome.
        var s = string.split("").sort();
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
                        //Since the string is not near-palindrome, try to convert it.
                        var nOperations = 0;
                        var first = 0;
                        var last = s.length -1;

                        var incremented = 0;

                        while(first < last){
                            if(s[first] !== s[last]){
                                //Choose characters with minimum cost (Unicode value) to increment
                                incremented = Math.min(string.charCodeAt(first++), string.charCodeAt(last--)) + 1;
                                nOperations++;
                            }
                        } 
                        return nOperations;
                    }
                    charIdx = 1;
                    charCount.push(0);
                } else if (charCount[charIdx] % 2 === 0) {
                    charCount[charIdx] = 0;
                }
            }
        }
        //If the string is already a near-palindrome, return 0 operations
        return 0;
    }
}

const a = new NearPalindromesDiv1('abcdef');

console.log(NearPalindromesDiv1.solve(a));