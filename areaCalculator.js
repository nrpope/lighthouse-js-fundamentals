function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    //rectangle area = length x width
    return length * width;
  } else {
    return undefined;
  }
}

function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    // triangle area = base x height / 2
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius) {
  if (radius > 0) {
    // circle area = Pi x r^2
    return Math.PI * radius * radius;
  }
}
