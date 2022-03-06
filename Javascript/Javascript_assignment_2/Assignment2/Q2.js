function double(v) {
    return v * 2;
  }
  function square(v) {
    return v * v;
  }
  var compose = function compose(f1, f2) {
    return function (value) {
      return f1(f2(value));
    };
  };
  var f1 = compose(square, double);
  var f2 = compose(double, square);
  document.write(f1(5));
  document.write(f1(10));
  document.write(f2(5));
  document.write(f2(10));