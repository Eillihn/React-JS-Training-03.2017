import * as Converter from './converter';

class MeasurementUnitsConverter {

    static createConverter(conversion = {
        from: 'cm',
        to: 'mm'
    }) {
        return new Converter[this.getConverterName(conversion)]();
    }

    static getConverterName(conversion) {
        return `${conversion.from.toUpperCase()}To${conversion.to.toUpperCase()}Converter`;
    }

}

export {
    MeasurementUnitsConverter
};
