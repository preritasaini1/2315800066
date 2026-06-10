function getPriority(type) {

    const priorities = {
        Placement: 3,
        Result: 2,
        Event: 1
    };

    return priorities[type] || 0;
}

module.exports = getPriority;