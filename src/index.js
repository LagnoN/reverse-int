module.exports = function reverse (n) {
    n = Math.abs(n);
    let x = n.toString(10);
    let y = '';
    let len = x.length;
    while (len > 0) {
        y = y + x[len-1];
        len--;
    }
    return parseInt(y, 10);
}
