import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from "react-bootstrap";

import { allCardsSelector } from '../../redux/selectors';
import CardListItem from '../CardListItem/CardListItem';
import Preloader from '../Preloader/Preloader';

import './CardList.css';

function CardList() {

    const { data: allCards, loading } = useSelector(allCardsSelector);

    return (
        <Container className='card-list'>
            <Row xs={4} md={6} className="g-24">
                {loading ?
                    <Preloader />
                    :
                    allCards?.map(card => {
                        return (
                            <Col key={card.id} className='card-list__item'>
                                <CardListItem card={card} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default CardList;