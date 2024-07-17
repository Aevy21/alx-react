import { Map } from 'immutable';

// Creating the initial Immutable Map
const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Creating ap2 by modifying values from map
const map2 = map.withMutations(mutableMap => {
    mutableMap.set(2, 'Benjamin');
    mutableMap.set(4, 'Olivia');
});

export default map;
export default map2;
