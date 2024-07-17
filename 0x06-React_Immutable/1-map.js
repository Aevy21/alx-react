const { fromJS } = require('immutable');

function getImmutableObject(object) {
    const immutableMap = fromJS(object);

    immutableMap.customMap = function(mapperFn) {
        return this.map(mapperFn);
    };

    return immutableMap;
}

module.exports = {
    getImmutableObject
};
