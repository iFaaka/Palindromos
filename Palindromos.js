function palindrome(str) {
 
    let string = str.replace(/[^a-zA-Z0-9]/g, '');
    let lowerStr = string.toLowerCase();
     let reverseStr = lowerStr.split("")
     reverseStr.reverse()
     let finalReverse = reverseStr.join("")
   
   if(lowerStr === finalReverse){
     return true
   }
   else {
     return false
   }
   
   
   
    
    
   
   }
   
   console.log(palindrome("0_0 (: /-\ :) 0-0"));