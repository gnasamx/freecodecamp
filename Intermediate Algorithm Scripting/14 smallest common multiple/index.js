function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);