var decodeString = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let charStr = '';
    let numStr = '';
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      while (stack[stack.length - 1] !== '[') {
        charStr = stack.pop() + charStr;
      }
      stack.pop();
      while (!isNaN(stack[stack.length - 1])) {
        numStr = stack.pop() + numStr;
      }
      numStr = Number(numStr);
      stack.push(charStr.repeat(numStr));
    } 
  }
  return stack.join('');
}