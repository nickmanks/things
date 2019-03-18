import {distanceInWordsStrict, distanceInWords} from 'date-fns';


/* eslint no-magic-numbers: 0 */


export const now = ()=> new Date();


const getUnits = (date)=> {
  if (new Date().getTime() - date.getTime() < 3.6e+6) {
    return 'm';
  }

  if (new Date().getTime() - date.getTime() < 3.6e+6 * 24) {
    return 'h';
  }

  return 'd';
};

export const dateDistanceStrict = (date)=> `${distanceInWordsStrict(
  date, new Date(), {
    unit: getUnits(date),
    partialMethod: 'floor'
  }
).replace(/\D/g, '')}${getUnits(date)}`;

export const dateDistance = (date)=> distanceInWords(date, new Date());

export const getTimeTo = (date)=> {
  const diff = date.getTime() - new Date().getTime();

  if (diff < 0) {
    return `${dateDistance(date)} ago`;
  }

  return `${dateDistance(date)} from now`;
};
