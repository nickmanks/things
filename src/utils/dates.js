import {distanceInWordsStrict} from 'date-fns';


export const now = ()=> new Date();

export const dateDistance = (date)=> distanceInWordsStrict(
  // TODO add in some more smarts to differentiate between days, hrs, months
  date, new Date(), {unit: 'd', partialMethod: 'floor'}
);
