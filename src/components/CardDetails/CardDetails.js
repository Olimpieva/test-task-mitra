import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getCardDetails } from '../../redux/selectors';
import Preloader from '../Preloader/Preloader';

import './CardDetails.css';

function CardDetails(props) {

    const { id: currentCardId } = useParams();
    const currentCard = useSelector(state => getCardDetails(state, currentCardId));

    if (!currentCard) {
        return <Preloader />
    }

    return (
        <div className='card-details-page'>
            <Container className='card-details-page__content'>
                <Card className='card-details'>
                    <Card.Img variant="top" src={currentCard.url} />
                    <Card.Body>
                        <Card.Text>{currentCard.id}</Card.Text>
                        <Card.Text>{currentCard.title}</Card.Text>
                        <Link to={`/cards`}>
                            <Button variant="primary">Назад</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>

    );
};

export default CardDetails;