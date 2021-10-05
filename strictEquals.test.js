let strictEquals = function (a,b) {
    if (isNaN(a) && isNaN(b)) {
      return false;
    } else if (isNaN(a/b)) {
      return true;
    } else {
      return Object.is(a,b);
    }
}

/*
console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));
console.log(strictEquals(0,-0));
console.log(strictEquals(-0,0));
console.log(strictEquals(1,"1"));
console.log(strictEquals(true,false));
console.log(strictEquals(false,false));
console.log(strictEquals("Water","oil"));
*/


describe("function strictEquals", function (n1,n2) {

  test ("when it receives 1 and 1, it should return true", () => {
    // Arrange
    const n1=1;
    const n2=1;
    const expected = true;
    // Act
    const result = strictEquals(n1, n2);
    // Assert 
    expect(result).toBe(expected);
  });

  test ("when it receives NaN and NaN, it should return false", () => {	
    const n1 = NaN;
    const n2 = NaN;
    const expected = false;
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives 0 and -0, it should return true", () => {
    const n1 = 0;
    const n2 = -0;
    const expected = true;
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives -0 and 0, it should return true", () => {
    const n1 = -0;
    const n2 = 0;
    const expected = true; 
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives 1 and \"1\" it should return false", () => {
    const n1 = 1;
    const n2 = "1";
    const expected = false; 
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives true and false it should return false", () => {
    const n1 = true;
    const n2 = false;
    const expected = false; 
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives false and false it should return true", () => {
    const n1 = false;
    const n2 = false;
    const expected = true; 
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

  test ("when it receives \"Water\" and \"oil\" it should return false", () => {
    const n1 = "Water";
    const n2 = "oil";
    const expected = false; 
    const result = strictEquals(n1, n2);
    expect(result).toBe(expected);
  });

});