import {useState as reactState} from 'react';

export default function useState(init) {
    const [state, setState] = reactState(init);

    function setter(newState) {
        setState({
            ...state,
            ...newState,
        });
    }

    return [state, setter];
}