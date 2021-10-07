/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const lonelyinteger = (a) => {
    a.sort();
    for(let i = 0; i < a.length; i++) {
        if(a[i] === a[i +1]) {
            i = a.lastIndexOf(a[i]);
            continue;
        } else {
            console.log(a[i]);
            return a[i];
        }
    }

}


//////////////////////////////////////////////////////
const lonelyinteger = (a) => {
    return a.find(n => a.indexOf(n) === a.lastIndexOf(n))
}
