module.exports = function toReadable (n) {
  let string = n.toString(),
  
   part, items, i, word, words;
  let from0to19 = ['','one','two','three','four', 'five','six','seven','eight', 'nine','ten','eleven','twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen','eighteen','nineteen'];
  
  let from20to90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
  let levels = [''];
  let begin = string.length;
  let end;
let blocks =[];
 let blockslength;

  if (parseInt(string) === 0) {
    return 'zero';
    }
   
  while (begin > 0) {
  end = begin;
  blocks.push(string.slice((begin = Math.max(0, begin - 3)), end));
  }
  
  blockslength = blocks.length;
  if (blockslength > levels.length) {
  return '';
  }
 
  words = [];
  for (i = 0; i < blockslength; i++) {
part = parseInt(blocks[i]);
  if (part) {
 
 items = blocks[i].split('').reverse().map(parseFloat);
 
  if (items[1] === 1) {
 items[0] += 10;
  }
 
  if ((word = levels[i])) {
  words.push(word);
  }
 
  if ((word = from0to19[items[0]])) {
  words.push(word);
  }
  
  if ((word = from20to90[items[1]])) {
  words.push(word);
  }
   

  if ((word = from0to19[items[2]])) {
  words.push(word + ' hundred');
  }
  }
  }
  return words.reverse().join(' ');
  }
  
  