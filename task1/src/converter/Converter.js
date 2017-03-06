const DEFAULT_MULTIPLIER = 1;

class Converter {

    convert(singleVlaue, ...restValues) {
        let values = [].concat(singleVlaue, restValues),
            result = values.map(value => Number.parseInt(value) * this.getMultiplier());

        return typeof values[0] === 'string' ? result.map(value => '' + value) : result;
    }

    getMultiplier() {
        return DEFAULT_MULTIPLIER;
    }

}

export {
    Converter
};
