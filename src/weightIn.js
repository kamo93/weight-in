
export default function weightIn(num) {

  let convertThis = num;
  let factor = 2.204;

  let toNumberTest = (num) => {
    if (!isNaN(num)) {
      return parseFloat(num);
    } else {
      return new TypeError(`${num} is not number neither a string object`);
    }
  };

  let kilograms = () => {
    try {
      let numToConvert = toNumberTest(convertThis);
      if (numToConvert !== 0) {
        return Number((numToConvert / factor).toFixed(3));
      } else {
        return 0;
      }
    } catch (err) {
      return err;
    }
  };

  let pounds = () => {
    try {
      let numToConvert = toNumberTest(convertThis);
      return Number((numToConvert * factor).toFixed(3));
    } catch (err) {
      return err;
    }
  };

  return {
    kilograms: kilograms,
    pounds: pounds
  };
}
