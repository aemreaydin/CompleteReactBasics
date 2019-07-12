import React from 'react';

import './card.css';

export interface Monster {
    name: string;
    email: string;
    id: number;
}
interface CardProps {
    monster: Monster;
    children?: React.ReactNode;
}

export const Card : React.FC<CardProps> = (props: CardProps) =>
(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Monster"/>
        <h1>{props.monster.name}</h1>
        <h4>{props.monster.email}</h4>
    </div>
);
