/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
*/

var countAndSay = function(n) {

    function sayCount(i = 1, curr = '1') {


        if (i === n) {
            return curr;
        }


        let say = '';
        for (let x = 0; x < curr.length; x++) {
            let j = x;
            while (curr[j] === curr[j+1]) {
                j++;
            }

            say += '' + (j - x + 1) + curr[x];
            x = j;
        }

        return sayCount(i + 1, say);

    }

    return sayCount();
};