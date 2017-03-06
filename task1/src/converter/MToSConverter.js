import {
    Converter
} from './Converter';

const MULTIPLIER = 60;

class MToSConverter extends Converter {

  getMultiplier(value) {
      return MULTIPLIER;
  }

}

export {
    MToSConverter
};
