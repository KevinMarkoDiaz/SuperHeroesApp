import { heroes } from "../data/heroes";


const getheroebyid = (id) => {

    return heroes.find(hero => hero.id === id)

};