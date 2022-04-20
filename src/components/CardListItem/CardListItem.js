import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './CardListItem.css';

function CardListItem({ card }) {

    return (
        <Card className='card-item' >
            <Card.Img className='card-item__image' src={card.url} />
            <Card.ImgOverlay>
                <Link to={`/cards/${card.id}`}>
                    <Button size="sm" className='card-item__button_details'>Подробнее</Button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CardListItem;