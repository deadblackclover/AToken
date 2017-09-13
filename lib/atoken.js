function AToken(len) {
  if(!len){
    this.token_length = 8;
  }else{
    this.token_length = len;
  }
}

AToken.prototype.randomInteger = function(min, max){
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

AToken.prototype.generate = function(){
  let result = "";
  let symbol = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
  for(let i = 0; i < this.token_length; i++){
    result += symbol[this.randomInteger(0,35)];
  }
  return result;
}

module.exports = AToken;
