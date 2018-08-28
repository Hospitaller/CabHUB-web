/*nextPrime:
    for (var i = 2; i <= 100; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log(i); // простое
    }
*/

    nextPrime:
    var i = 1;
    while (i <= 100) {
        var j = 2
        while (j < i) {
            if (i % j == 0) break nextPrime;
        }
        console.log(i); // простое
        i++;
    }