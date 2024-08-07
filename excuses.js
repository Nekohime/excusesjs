/**
 * ExcuseGenerator class for generating random excuses.
 * Public Domain / CC0-1.0
 * Credit appreciated but not required.
 * https://nekohime.net
 */
export default class ExcuseGenerator {
  /**
    * Creates an instance of ExcuseGenerator.
    * @constructor
    */
  constructor() {
    this.apology = ['Sorry, ', 'Uh oh, ', 'Ugh, ', 'Awesome, ', 'Sooo... ', ''];
    this.x = [
      'my Dog', 'my Cat', 'my Fox', 'my Bitcoins', 'my Mom', 'my Dad',
      'my Computer', 'my Slave', 'my Sister', 'my Brother', 'my Grandma',
      'my Grandpa', 'my Best Friend', 'my Girlfriend', 'my Boyfriend',
      'my Partner', 'my MIL', 'my Cousin', 'my Dumbass friend', 'my Senpai',
      'my Avatar', 'my Mistress', 'I', 'a Dwarf', 'my Homework',
    ];
    this.y = [
      'died', 'vomited', 'threw up everywhere', 'crashed',
      'ate my Chocolate Cake', 'destroyed my Switch', 'broke my door',
      'broke my wrist', 'stole my money', 'ate my money', 'called me Shirley',
      'stole my Phone', 'burnt down the House', 'disappeared', 'got drunk',
      'passed out', 'stole my pickles', 'punched a hole in the wall',
      'noticed me', 'got Isekai\'d', 'fell down the stairs', 'peed everywhere',
      'stole my Panties!', 'fucking stabbed me!', 'dug a hole', 'ate my dog',
      'moved to Canada', 'bit my finger', 'broke down crying',
    ];
    this.excuses = [];
  }

  /**
   * Generates a specified number of excuses.
   * @param {number} numOfExcuses - The number of excuses to generate.
   * @return {string[]} An array of generated excuses.
   */
  getExcuses(numOfExcuses) {
    for (let i = 1; i <= numOfExcuses; i++) {
      const pickApology = this.getRandomElement(this.apology);
      const pickX = this.getRandomElement(this.x);
      const pickY = this.getRandomElement(this.y);
      this.excuses.push(
          this.capitalizeFirstLetter(
              pickApology + pickX + ' just ' + pickY + '<br>\n',
          ),
      );
    }
    this.removeDupes(this.excuses);

    return this.excuses;
  }

  /**
   * Picks a random element from an array.
   * @param {Array} arr - The input array.
   * @return {*} A randomly selected element from the array.
   */
  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Capitalizes the first letter of a string.
   * @param {string} str - The input string.
   * @return {string} The input string with the first letter capitalized.
   */
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Removes duplicate elements from an array.
   * @param {Array} arr - The input array.
   * @return {Array} The input array with duplicate elements removed.
   */
  removeDupes(arr) {
    return Array.from(new Set(arr));
  }

  /**
   * Clears the generated excuses array.
   */
  clearExcuses() {
    this.excuses = [];
  }
}
