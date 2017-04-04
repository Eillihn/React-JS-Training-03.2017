import undoable from 'redux-undo';

const getRandomColor = () => {
    const LIGHT_COLOR_RANGE = '9ABCDEF';
    const LIGHT_COLOR_RANGE_LENGTH = LIGHT_COLOR_RANGE.length;
    const COLOR_VALUE_LENGTH = 6;
    let color = '#';

    for (let i = 0; i < COLOR_VALUE_LENGTH; i++) {
        color += LIGHT_COLOR_RANGE[Math.floor(Math.random() * LIGHT_COLOR_RANGE_LENGTH)];
    }
    return color;
};

const log = (state, action) => {
    switch (action.type) {
        case 'ADD_LOG_MESSAGE':
            return {
                id: action.id,
                timestamp: Date.now(),
                conversion: action.conversion,
                color: getRandomColor()
            };
        default:
            return state;
    }
};

const logger = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOG_MESSAGE':
            return [
                ...state,
                log(undefined, action)
            ];
        default:
            return state;
    }
};

const undoableLogger = undoable(logger);

export default undoableLogger;