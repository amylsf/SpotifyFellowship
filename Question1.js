var sortByStrings = function(s, t) {
  let output = '';
  let letters = {};

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] ? letters[s[i]]++ : letters[s[i]] = 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (letters[t[j]]) {
      output += t[j].repeat(letters[t[j]]);
    }
  }

  return output;
}