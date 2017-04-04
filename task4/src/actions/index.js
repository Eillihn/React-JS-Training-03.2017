let nextMessageId = 0;

export const addLogMessage = conversion => ({
    type: 'ADD_LOG_MESSAGE',
    id: nextMessageId++,
    conversion
});