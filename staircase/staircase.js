//input: integer, n, denoting the size of the staircase
//output: print a staircase of size n symbols and spaces
/*example n = 4
   #
  ##
 ###
####
*/

function staircase (n) {
    let result = '';
    for(let i = 0; i < n; i++) {
        for (let space = 0;space < n - (i + 1); space++) {
            result = result + ' ';
        }
        for (let step = n - (i + 1); step < n; step++) {
            result = result + '#';
        }
        result = result + '\n';
    }
    console.log(result);
}



staircase(4);
staircase(12);