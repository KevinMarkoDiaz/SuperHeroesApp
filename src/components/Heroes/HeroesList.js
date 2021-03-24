import React from 'react'
import { getheroesbybublisher } from '../../selectors/getheroesbypublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getheroesbybublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map(heroe => (
                    <HeroeCard
                        key={heroe.id}
                        {...heroe}


                    />
                ))
            }
        </div>
    )
};
