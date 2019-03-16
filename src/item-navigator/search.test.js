import {scoreItems, sortItems} from './search';
import testItems from '../testing/test-items';


describe('Scoring searched items', ()=> {
  it('returns score of 1 if no search term', ()=> {
    const scoreFn = scoreItems(null);
    const item = {
      id: 'test-id',
      name: 'searchWord',
      description: 'Click to edit my description and category',
      category: 'Category',
      status: 'ready',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(1);
  });

  it('scores item name correctly', ()=> {
    const scoreFn = scoreItems('searchWord');
    const item = {
      id: 'test-id',
      name: 'searchWord',
      description: 'Click to edit my description and category',
      category: 'Category',
      status: 'ready',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(10);
  });

  it('scores item category correctly', ()=> {
    const scoreFn = scoreItems('searchWord');
    const item = {
      id: 'test-id',
      name: 'New item!',
      description: 'Click to edit my description and category',
      category: 'searchWord',
      status: 'ready',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(5);
  });

  it('scores item status correctly', ()=> {
    const scoreFn = scoreItems('searchWord');
    const item = {
      id: 'test-id',
      name: 'New item!',
      description: 'Click to edit my description and category',
      category: 'some category',
      status: 'searchWord',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(5);
  });

  it('scores item description correctly', ()=> {
    const scoreFn = scoreItems('searchWord');
    const item = {
      id: 'test-id',
      name: 'New item!',
      description: 'searchWord',
      category: 'some category',
      status: 'ready',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(1);
  });

  it('returns score of -1 if no matches', ()=> {
    const scoreFn = scoreItems('searchWord');
    const item = {
      id: 'test-id',
      name: 'New item!',
      description: 'some description',
      category: 'some category',
      status: 'ready',
      created: '1m'
    };

    const {score} = scoreFn(item);

    expect(score).toBe(-1);
  });
});


describe('Sorting searched items', ()=> {
  it('correctly sorts array based on status', ()=> {
    const testItemsArray = Reflect.ownKeys(testItems)
      .map((key)=> ({item: testItems[key]}));

    const sortFn = sortItems('status');

    expect(testItemsArray.sort(sortFn)).toEqual([
      {item: testItems['test-id-1']},
      {item: testItems['test-id-4']},
      {item: testItems['test-id-3']},
      {item: testItems['test-id-2']}
    ]);
  });
});
