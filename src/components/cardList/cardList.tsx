import React from 'react';
import { Card, Monster } from '../card/card';

import './cardList.css';

interface CardListProps {
    monsters: Monster[];
    children?: React.ReactNode;
}

const CardList : React.FC<CardListProps> = (props) =>
(
    <div className="card-list">
    {
        props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
    }
    </div>
);

export default CardList;