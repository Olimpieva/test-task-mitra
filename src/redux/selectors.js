export const allCardsSelector = state => state.cards;

export const getCardDetails = (state, cardId) => state.cards.data?.find(card => card.id === +cardId);