import {
    MeasurementUnitsConverter
} from './MeasurementUnitsConverter';

console.log(`
  Default Converter, value = 1 (cm to mm): ${MeasurementUnitsConverter.createConverter().convert(1)}
  Default Converter, value = '1' (cm to mm): ${MeasurementUnitsConverter.createConverter().convert('1')}
  Default Converter, value = 1,2,3 (cm to mm): ${MeasurementUnitsConverter.createConverter().convert(1,2,3)}
  Default Converter, value = [1,2,3] (cm to mm): ${MeasurementUnitsConverter.createConverter().convert([1,2,3])}
  From cm to mm Converter, value = 2: ${MeasurementUnitsConverter.createConverter({from: 'cm', to: 'mm'}).convert(2)}
  From km to m Converter, value = 3: ${MeasurementUnitsConverter.createConverter({from: 'km', to: 'm'}).convert(3)}
  From m to s Converter, value = 4: ${MeasurementUnitsConverter.createConverter({from: 'm', to: 's'}).convert(4)}
`);
console.log(MeasurementUnitsConverter.createConverter().convert(1));
console.log(MeasurementUnitsConverter.createConverter().convert('1'));
