const DEFAULT_RATE = 1;

class Converter {
    
    constructor(rate = DEFAULT_RATE) {
        this.rate = rate;
    }

    convert(singleVlaue, ...restValues) {
        let values = [].concat(singleVlaue, restValues),
            result = this.convertArray(values);

        return this.processConvertedValues(values, result);
    }

    convertArray(values) {
        return values.map(value => {
            const parsedValue = Number.parseFloat(value);
            return Number.isNaN(parsedValue)
                ? ''
                : this.processNumber(parsedValue * this.rate);
        });
    }

    processNumber(value) {
        return this.isFloat(value) ? value.toFixed(3) : value;
    }

    isFloat(value) {
        return value % 1 !== 0;
    }

    processConvertedValues(values, result) {
        return typeof values[0] === 'string'
            ? result.map(value => '' + value)
            : result;
    }

}

export { Converter };