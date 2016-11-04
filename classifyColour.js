var classifyColour = function(input, classifiers){
  var minDiff = null;
  var minDiffIndex = null;
  
  var calculateDiff = function(hex1,hex2){
    var int1 = [parseInt(hex1.substring(1,3),16),parseInt(hex1.substring(3,5),16),parseInt(hex1.substring(5,7),16)];
    var int2 = [parseInt(hex2.substring(1,3),16),parseInt(hex2.substring(3,5),16),parseInt(hex2.substring(5,7),16)];
    return Math.abs(int1[0]-int2[0])+Math.abs(int1[1]-int2[1])+Math.abs(int1[2]-int2[2]);
  };
  
  for(var i in classifiers){
    var diff = calculateDiff(input,classifiers[i]);
    if(diff < minDiff || minDiff === null){
      minDiff = diff;
      minDiffIndex = i;
    }
  }
  return classifiers[minDiffIndex];
};