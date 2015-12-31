function zero(f) {
  if(f){
    return f[0](f[1], 0);
  } else {
    return Number(0);
  }
}
function one(f) {
  if(f){
    return f[0](f[1], 1);
  } else {
    return Number(1);
  }
}
function two(f) {
  if(f){
    return f[0](f[1], 2);
  } else {
    return Number(2);
  }
}
function three(f) {
  if(f) {
    return f[0](f[1], 3);
  } else {//huh
    return Number(3);
  }
}
function four(f) {
  if(f){
    return f[0](f[1], 4);
  } else {//if no param is passed
    return Number(4);
  }
}
function five(f) {
  if(f){
    return f[0](f[1], 5);
  } else {//if no param is passed
    return Number(5);
  }
}
function six(f) {
  if(f){    
    return f[0](f[1], 6);
  } else {//if no param is passed
    return Number(6);
  }
}
function seven(f) {
  if(f){
    return f[0](f[1], 7);
  } else {//if no param is passed
    return Number(7);
  }
}
function eight(f) {
  if(f){
    return f[0](f[1], 8);
  } else {//if no param is passed
    return Number(8);
  }
}
function nine(f) {
  if(f){
    return f[0](f[1], 9);
  } else {//if no param is passed
    return Number(9);
  }

}

var plus = function plus(right, left) {
  if(left != null){
    return Number(left) + Number(right);
  } else {
    return [plus, right];
  }
}
var minus = function minus(right, left) {
  if(left != null){
    return Number(left) - Number(right);
  } else {
    return [minus, right];
  }
}
var times = function times(right, left) {
  if(left != null){
    return Number(left) * Number(right);
  } else {
    return [times, right];
  }
  
}
var dividedBy =  function dividedBy(right, left) {
  if(left != null){
    return Number(left) / Number(right);
  } else {
    return [dividedBy, right];
  }
}
