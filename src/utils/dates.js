import {distanceInWordsStrict, distanceInWords, format} from 'date-fns';


export const now = ()=> new Date();

export const dateDistanceStrict = (date)=> distanceInWordsStrict(
  // TODO add in some more smarts to differentiate between days, hrs, months
  date, new Date(), {
    // eslint-disable-next-line no-magic-numbers
    unit: new Date().getTime() - date.getTime() > 3.6e+6
      ? 'd' : 'h',
    partialMethod: 'floor'
  }
);

export const dateDistance = (date)=> distanceInWords(
  // TODO add in some more smarts to differentiate between days, hrs, months
  date, new Date()
);


export const formatDate = (date)=> format(date, 'DD/MM/YY');

export const getTimeTo = (date)=> {
  const diff = date.getTime() - new Date().getTime();

  if (diff < 0) {
    return `${dateDistance(date)} ago`;
  }

  return `${dateDistance(date)} from now`;
};
