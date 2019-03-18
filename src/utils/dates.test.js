import {getTimeTo} from './dates';


describe('Getting time to in words', ()=> {
  it('uses "ago" for dates in the past and "from now" for future dates', ()=> {
    expect(
      getTimeTo(
        new Date(new Date().getTime() - 10000)
      ).includes('ago')
    ).toBe(true);

    expect(
      getTimeTo(
        new Date(new Date().getTime() + 10000)
      ).includes('from now')
    ).toBe(true);
  });
});
