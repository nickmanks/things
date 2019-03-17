import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from 'shards-react';
import {getRowItems} from './row-generator';
import {scoreItems, sortItems} from './search';


// Relatively naive search implementation could be refactored if
// performance becomes and issue on larger sets (unlikely)
// Worst case O(n^2) from sort
const getItems = (items, search, sort, archived)=> Reflect.ownKeys(items)
  .map((key)=> items[key]) // get items in array form
  .map(scoreItems(search)) // map search scores
  .filter(({item})=> item && item.archived === archived)
  .filter(({score})=> score !== -1) // filter items that contain search term
  .sort(sortItems(sort)) // sort the items based on score
  .map(({item})=> item); // return only the items themselves


const ItemNavigator = ({items})=> (
  <Container>
    {getRowItems(items)}
  </Container>
);
ItemNavigator.propTypes = {
  items: PropTypes.array
};


const mapStateToProps = ({things})=> ({
  items: getItems(
    things.items,
    things.searchValue,
    things.sortType,
    things.sortType === 'archived'
  ),
  selected: things.selected ? things.items[things.selected] : null
});


export default connect(mapStateToProps)(ItemNavigator);
