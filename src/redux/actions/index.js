import { FAILURE, GET_ALL_CARDS, REQUEST, SUCCESS } from "./actionTypes";

export const getAllCards = () => ({ type: GET_ALL_CARDS + REQUEST });
export const getAllCardsSuccess = (payload) => ({ type: GET_ALL_CARDS + SUCCESS, payload });
export const getAllCardsFailure = (payload) => ({ type: GET_ALL_CARDS + FAILURE, payload });