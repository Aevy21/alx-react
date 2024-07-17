import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    // Convert the plain object to an Immutable Map
    const immutableObject = fromJS(object);
    // Get the value at the specified path
    return immutableObject.getIn(array);
}
