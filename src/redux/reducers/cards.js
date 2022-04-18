
import { FAILURE, REQUEST, SUCCESS, GET_ALL_CARDS } from "../actions/actionTypes";

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_CARDS + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ALL_CARDS + SUCCESS:
            return { ...state, data: action.payload, loading: false, error: null };
        case GET_ALL_CARDS + FAILURE:
            return { ...state, data: null, loading: false, error: action.payload };
        default:
            return state;
    };
};

export default user;