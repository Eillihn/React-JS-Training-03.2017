import { Converter } from './Converter';
import { UnitsService } from 'converter/UnitsService';

class MeasurementUnitsConverter {

    static createConverter(conversion = {}) {
        const rate = new UnitsService().getRate(conversion);

        return new Converter(rate);
    }
}

export { MeasurementUnitsConverter };