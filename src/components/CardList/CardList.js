import React from 'react';
import { useSelector } from 'react-redux';

import { allCardsSelector } from '../../redux/selectors';

import Preloader from '../Preloader/Preloader';

import './CardList.css';

function CardList() {

    const { data: allCards, loading, error } = useSelector(allCardsSelector);

    console.log({ allCards })

    return (
        <main className="card-list">
            <section className='card-list__content'>
                {loading ?
                    <Preloader />
                    :
                    <ul className='card-list__list'>
                        Card List
                    </ul>
                }
                <span className={`card-list__error ${error && 'card-list__error_shown'}`}>{error?.message}</span>
            </section>
        </main>
    );
};

export default CardList;