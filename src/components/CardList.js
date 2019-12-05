import React from 'react';
import Card from '../components/Card';

function CardList({ robots }) {
    const robotsCards = robots.map(robot => (
        <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
        />
    ));
    return <div>{robotsCards}</div>;
}

export default CardList;
