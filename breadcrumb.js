function generateBC(url, separator) {
//your code here
  url = cleanUpUrl(url);
  var urlArray = url.split("/");
  if(atHome(urlArray)) {//no segments
    return '<span class="active">HOME</span>';
  }
  
  var ret = '';
  var partialUrl = '/';
  
  for(var i = 0; i < urlArray.length; ++i){
    if(i==0){//first segment        
      ret += '<a href="'+partialUrl+'">HOME</a>'
    } else {//the rest of the segments
      if(i == urlArray.length - 1){//last segment          
        ret += separator;
        var s = urlArray[i].toUpperCase();
        s = (s.indexOf(".")>-1) ? s.substring(0,s.indexOf(".")) : s;//drop any file extension
        s = truncateSegment(s);                    
        ret += '<span class="active">'+s+'</span>';
      } else {
        ret += separator;
        if(i == urlArray.length - 2){
          var s = urlArray[i + 1].toUpperCase();
          s = (s.indexOf(".")>-1) ? s.substring(0,s.indexOf(".")) : s;
          if(s=="INDEX"){
            var s = urlArray[i].toUpperCase();
            s = truncateSegment(s);
            ret += '<span class="active">'+s+'</span>';
            break;
          } else  {
            partialUrl += urlArray[i]+'/';
            var s = urlArray[i].toUpperCase();
            s = truncateSegment(s);                    
            ret += '<a href="'+partialUrl+'">'+s+'</a>';
          }          
        } else {
          partialUrl += urlArray[i]+'/';
          var s = urlArray[i].toUpperCase();
            s = truncateSegment(s);
          ret += '<a href="'+partialUrl+'">'+s+'</a>';
        }
      }     
    }
  }
  return ret;
}

function truncateSegment(s){
  if (s.length > 30){
              
      var sArray = s.split("-");
      if(sArray.length > 1){
        s = '';
        for(var j = 0;  j < sArray.length; ++j){
          var t = sArray[j];
          if(checkWord(t)){
            s += t.substring(0,1);
          }
        }
        console.log(">30 s=" + s);
      }
    } else {        
      var sArray = s.split("-");
      if(sArray.length > 1){
        s = '';
        for(var j = 0;  j < sArray.length; ++j){              
          s += (j==sArray.length - 1)?sArray[j]:sArray[j] + " ";            
        }
        console.log(s);
      }
    }
    return s;      
}
  
function atHome(urlArray){
  return (urlArray.length == 1);
}
  
function cleanUpUrl(url){
  url = (url.indexOf("//")> -1) ? url.substring(url.indexOf("//") + 2, url.length) : url;
  url = (url.indexOf("?") > -1) ? url.substring(0, url.indexOf("?")) : url;
  url = (url.indexOf("#") > -1) ? url.substring(0, url.indexOf("#")) : url;
  url = (url.lastIndexOf("/")==url.length - 1)?url.substring(0, url.length - 1):url;    
  return url;
}

function checkWord(s){
  var array = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
  for(var i = 0; i < array.length; ++i){
    if(array[i].toUpperCase()==s){
      return false;
    }
  }
  return true;
}
