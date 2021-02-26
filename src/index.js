module.exports = function toReadable (number) {
    
    let str = "";
    let hundred, dozens, numeric;
    
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
             'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
          if (number === 0) return "zero";

    hundred = (number - number % 100) / 100;
	dozens = (number % 100 - number % 10) / 10;
	numeric = number % 10
   
              if (hundred > 0) {
                str += units[hundred] + " hundred";
 
		if (dozens === 0) {
             (numeric === 0)? str += "" : str += " " + units[numeric];
		} else if (dozens < 2) {
                  str += " " + units[number % 100]; 
               } else {
                    (numeric === 0)? str += " " + tens[dozens] : str += " " + tens[dozens] + " " + units[numeric];
                 }
          
              } else if (dozens === 0) {
                   str += units[numeric];
              } else if (dozens < 2) {
                     str += units[number % 100];
                     } else { 
                         (numeric === 0)? str += tens[dozens] : str += tens[dozens] + " " + units[numeric]; 
                     }
       return str;
}              
