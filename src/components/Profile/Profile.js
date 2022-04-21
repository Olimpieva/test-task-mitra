import React from "react";
import { Card, CardGroup, Container, ListGroupItem, Navbar } from "react-bootstrap";

import { ReactComponent as GithubLogo } from '../../images/Github.svg';
import { ReactComponent as MoviesLogo } from '../../images/movies-logo.svg';
import { ReactComponent as MestoLogo } from '../../images/mesto-logo.svg';

import './Profile.css';

function Profile() {
    return (
        <div className="profile-page">
            <Container className="profile-page__content">
                <Card className="profile">
                    <Card.Header>Обо мне</Card.Header>
                    <Card.Body>
                        <Card.Title>Олимпиева Наталья</Card.Title>
                        <Card.Text>Web разработчик</Card.Text>
                        <Card.Text>HTML, CSS, Javascript, React, Redux, Redux-Thunk, Redux-Saga, Node.JS, Express, Mongo</Card.Text>
                        <Card.Title>Проекты</Card.Title>
                        <CardGroup>
                            <Card>
                                <a href="https://search-save-movie.nomoredomains.rocks/" rel="noreferrer" target="_blank" className="profile__link">
                                    <Card.Img variant="top" src={require('../../images/movies-preview.png')} />
                                </a>
                                <Card.Body>
                                    <Card.Title>Сервис поиска фильмов Search&Save</Card.Title>
                                    <Card.Text>
                                        Fullstack разработка на React/Express приложения для поиска фильмов со следующими возможностями:
                                        регистрация, авторизация, редактирование профиля, поиск фильмов, добавление/удаление фильмов в/из избранное.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Navbar >
                                        <Navbar.Brand href="https://search-save-movie.nomoredomains.rocks/" className="profile__link">
                                            <MoviesLogo className='profile__logo' />Link to project
                                        </Navbar.Brand>
                                        <Navbar.Brand href="https://github.com/Olimpieva/movies-explorer-frontend" className="profile__link">
                                            <GithubLogo className='profile__logo' />Link to github
                                        </Navbar.Brand>
                                    </Navbar>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <a href="https://search-save-movie.nomoredomains.rocks/" rel="noreferrer" target="_blank" className="profile__link">
                                    <Card.Img variant="top" src={require('../../images/mesto-preview.png')} />
                                </a>
                                <Card.Body>
                                    <Card.Title>Сервис-галерея для изображений Mesto</Card.Title>
                                    <Card.Text>
                                        Fullstack разработка на React/Express приложения для изображений со следующими возможностями:
                                        регистрация, авторизация, редактирование профиля, добавление/удаление изображений с описанием, система лайков.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Navbar >
                                        <Navbar.Brand href="https://mesto-project.nomoredomains.rocks/" className="profile__link">
                                            <MestoLogo className='profile__logo' />Link to project
                                        </Navbar.Brand>
                                        <Navbar.Brand href="https://github.com/Olimpieva/react-mesto-api-full" className="profile__link">
                                            <GithubLogo className='profile__logo' />Link to github
                                        </Navbar.Brand>
                                    </Navbar>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <a href="https://github.com/Olimpieva/tallinn-delivery" rel="noreferrer" target="_blank" className="profile__link">
                                    <Card.Img variant="top" src={require('../../images/tallin-preview.png')} />
                                </a>
                                <Card.Body>
                                    <Card.Title>Сервис доставки Tallin Delivery</Card.Title>
                                    <Card.Text>
                                        Pазработка frontend части приложения на React для тестирования QA /* поэтому проект пока не задеплоен */ на основе сервиса доставки
                                        со следующими возможностями: авторизация, создание заказа, поиск заказа, отслеживание заказа.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Navbar >
                                        <Navbar.Brand href="https://github.com/Olimpieva/tallinn-delivery" className="profile__link">
                                            <GithubLogo className='profile__logo' />Link to github
                                        </Navbar.Brand>
                                    </Navbar>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Card.Body>
                    <Card.Footer>
                        <ListGroupItem><Card.Link href="https://t.me/kusochek_tortika">Telegram</Card.Link></ListGroupItem>
                        <ListGroupItem><Card.Link href="mailto:ukurennyi-koshak@yandex.ru">Mail</Card.Link></ListGroupItem>
                        <ListGroupItem><Card.Link href="https://github.com/Olimpieva">Github</Card.Link></ListGroupItem>
                    </Card.Footer>

                </Card>
            </Container>
        </div >
    );
};

export default Profile;