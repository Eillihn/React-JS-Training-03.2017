import conversionData from 'converter/data/conversion-data.json';

const CONVERSION_DATA = 'conversion-data';

class UnitsService {

    constructor() {
        if (typeof UnitsService.instance_ === 'object') {
            return UnitsService.instance_;
        }
        UnitsService.instance_ = this;

        const lsUnits = localStorage.getItem(CONVERSION_DATA);

        if (!lsUnits) {
            this.saveRates(conversionData);
        }

        this.data = JSON.parse(lsUnits) || conversionData;
    }

    saveRates(rates) {
        localStorage.setItem(CONVERSION_DATA, JSON.stringify(rates));
    }

    getUnits(type) {
        if (!type) {
            return this.data;
        }

        const units = new Set();

        this.data.forEach(item => item.type === type && units.add(item.from));

        return [...units].map((name, id) => {
            return { id, name };
        });
    }

    addRate(rate) {
        this.addDirectRate(rate);
        this.addBackRate(rate);
        this.saveRates(this.data);
    }

    addDirectRate(rate) {
        rate.id = this.data.length;
        this.data.push(rate);
    }

    addBackRate(rate) {
        rate = Object.assign({}, rate, {
            from: rate.to,
            to: rate.from,
            rate: 1 / (rate.rate),
            id: this.data.length
        });
        this.data.push(rate);
    }

    findData({from, to}) {
        return this.data.find(data => data.from === from && data.to === to);
    }

    getRate(conversion) {
        const rateData = this.findData(conversion) || {};

        return rateData.rate;
    }

}

export { UnitsService };