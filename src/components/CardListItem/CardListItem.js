import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './CardListItem.css';

function CardListItem({ card }) {

    console.log(card)

    return (
        <Card className='card-item' >
            <Card.Img className='card-item__image' src={card.url} />
            <Link to={`/cards/${card.id}`}>
                <Button className='card-item__button_details'>Details</Button>
            </Link>
        </Card>
    );
};

export default CardListItem;