/**
 * Shuffles the array using the Fisher-Yates algorithm
 * @param {Array} array Array to shuffle
 * @returns {Array} Shuffled array
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const shuffledArray = shuffle(array);
 * console.log(shuffledArray); // [3, 5, 2, 1, 4]
 */
function shuffle(array) {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default shuffle;
