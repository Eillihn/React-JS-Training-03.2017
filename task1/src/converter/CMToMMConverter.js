import {
    Converter
} from './Converter';

const MULTIPLIER = 10;

class CMToMMConverter extends Converter {

    getMultiplier(value) {
        return MULTIPLIER;
    }

}

export {
    CMToMMConverter
};
