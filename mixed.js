// Defined message components: Adjectives, Verbs, and Nouns Arrays
const adjectives = [ 'Inspiring', 'Motivational', 'Courageous', 'Empowering'];
const verbs = ['encourages', 'motivates', 'inspires', 'empowers'];
const nouns = ['you', 'people', 'dreamers', 'achievers'];

//Function that combines random elements from each array to form a message.

function generateRandomMessage() {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} message that ${randomVerb} ${randomNoun}.`;

}

//Test code

console.log(generateRandomMessage());
