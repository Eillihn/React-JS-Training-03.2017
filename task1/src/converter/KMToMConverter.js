import {
    Converter
} from './Converter';
const MULTIPLIER = 1000;

class KMToMConverter extends Converter {

    getMultiplier(value) {
        return MULTIPLIER;
    }

}

export {
    KMToMConverter
};
