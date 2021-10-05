let strictEquals = function (a,b) {
    if (a == b && typeof a == typeof b ) {
        return true;
    }
    return false;
}

console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));
console.log(strictEquals(0,-0));
console.log(strictEquals(-0,0));
console.log(strictEquals(1,"1"));
console.log(strictEquals(true,false));
console.log(strictEquals(false,false));
console.log(strictEquals("Water","oil"));
