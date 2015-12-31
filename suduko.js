function doneOrNot(board){
  //your code here
  //check rows
  if(!checkRows(board) || !checkColumns(board) || !checkRegions(board)){
    return "Try again!";
  } else {
    return "Finished!";
  }
}
function checkRows(board){
  for(var i =0 ; i< 9; ++i){
    var map = {};
    for(var j = 0 ; j < 9; ++j) map[board[i][j]] = "w00t";// the key is all we really care about to get a unique set          
    if(!check1to9(map))return false;
  }
  return true;
}

//check columns
function checkColumns(board){
  for(var j = 0 ; j < 9; ++j){
    var map = {};
    for(var i =0 ; i < 9; ++i) map[board[i][j]] = "hot darn";// the key is all we really care about to get a unique set
    if(!check1to9(map)) return false;  
  }  
  return true;  
}

//check regions

function checkRegions(board){

  var r1 = [1,3,1,3];//xxyy
  var r2 = [4,6,1,3];
  var r3 = [7,9,1,3];
  
  var r4 = [1,3,4,6];//xxyy
  var r5 = [4,6,4,6];
  var r6 = [7,9,4,6];
  
  var r7 = [1,3,7,9];//xxyy
  var r8 = [4,6,7,9];
  var r9 = [7,9,7,9];
  
  if(!checkRegion(board, r1)) return false;
  if(!checkRegion(board, r2)) return false;
  if(!checkRegion(board, r3)) return false;
  if(!checkRegion(board, r4)) return false;
  if(!checkRegion(board, r5)) return false;
  if(!checkRegion(board, r6)) return false;
  if(!checkRegion(board, r7)) return false;
  if(!checkRegion(board, r8)) return false;
  if(!checkRegion(board, r9)) return false;
  
  
  
  return true;
}

function checkRegion(board, region){
  var x1 = region[0];
  var x2 = region[1];
  var y1 = region[2];
  var y2 = region[3];
  var map = {};
  for(var x = x1; x <= x2; ++x){
    for(var y = y1; y <= y2; ++y){
      map[board[y-1][x-1]] = "boom-bap";
    }
  }
  if(!check1to9(map)) {
    return false;
  } else {
    return true;
  }
}





function check1to9(map){
  for(var i = 1; i <= 9; ++i){
    if(!(i in map))  return false;    
  }
  return true;
}
