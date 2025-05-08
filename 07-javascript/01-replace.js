const replaceItems = (input) => {
  const gold = new RegExp("gold", "i");
  const wander = new RegExp("wander", "i");

  input = input.replace(gold, "SHINY");
  input = input.replace(wander, "roam");
  return input;
};

console.log(replaceItems("All that is gold does not glitter"));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems("Wisdom is better than silver or GOLD."));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems("Not all those who Wander are lost"));
// expected: 'Not all those who roam are lost'
