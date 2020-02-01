export default class ColorGame {
  randomColorGenerator() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  }

  generateMathRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  randomColorForDisplayAndOptions() {
    return [
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator()
    ];
  }

  randomColorForDisplayAndOptionsForHardMode() {
    return [
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator(),
      this.randomColorGenerator()
    ];
  }

  checkForWin(mainDisplayColor, optionColor) {
    if (mainDisplayColor === optionColor) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
}
