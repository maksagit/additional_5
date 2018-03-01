module.exports = function check(str, bracketsConfig) {
  var lengthStr = str.length;
  
  var i, symbol, tmpSymbol, tmpStack = [], openingBrackets = [], closingBrackets = [];
  
  bracketsConfig.map(element => {
	  openingBrackets.push(element[0]); 
    closingBrackets.push(element[1]);
    // console.log('openingBrackets: ',openingBrackets)
    // console.log('closingBrackets: ', closingBrackets)
   
  });

 tmpStack.push(str[0]);

 for (i = 1; i < lengthStr; i++) 
 {
    symbol = str[i];
    // console.log('symbol ', symbol)

  if (openingBrackets.indexOf(symbol) >= 0) //search
    {
    if (openingBrackets.indexOf(symbol) >= 0 && closingBrackets.indexOf(symbol) >=0) 
      {
			if (symbol == tmpStack[tmpStack.length-1]) {
				tmpStack.pop(); 
				continue;} 
		  }
	    
    tmpStack.push(symbol);
    // console.log ('tmpStack', tmpStack)

    } 
  else if (closingBrackets.indexOf(symbol) >= 0) 
    {

      tmpSymbol = openingBrackets[closingBrackets.indexOf(symbol)];
      if (tmpStack.length === 0 || (tmpStack.pop() !== tmpSymbol)) 
      {
        return false;
      }
      
    }
  }
  
  if (tmpStack.length !== 0) {return false;} 

  return true;
}
