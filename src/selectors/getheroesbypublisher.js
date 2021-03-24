import { heroes } from "../data/heroes";


export const getheroesbybublisher = (publisher) => {

    const publisherValid = ['DC Comics', 'Marvel Comics'];

    if (!publisherValid.includes(publisher)) {
        throw new Error(`El publisher: ${publisher} ingresado no es Valido`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

};