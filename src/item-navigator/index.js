import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormTextarea,
  FormInput
} from 'shards-react';
import {getRowItems} from './row-generator';
import {findItems, sortItems} from './search';
import {selectItem, updateItem} from '../things/actions';


const getItems = (items, search, sort)=> Reflect.ownKeys(items)
  .map((key)=> items[key]) // get items in array form
  .map(findItems(search)) // map search scores
  .filter(({score})=> score !== -1) // filter items that contain search term
  .sort(sortItems(sort)) // sort the items based on score
  .map(({item})=> item); // return only the items themselves


const ItemNavigator = ({
  items, selected, onCloseModal, onDescriptionChange, onCategoryChange
})=> (
  <Fragment>
    {selected !== null &&
      <Modal size='lg' open={selected !== null} toggle={onCloseModal}>
        <ModalHeader>
          {selected.name}
        </ModalHeader>
        <ModalBody>
          <p> Category: </p>
          <FormInput
            value={selected.category}
            placeholder={selected.category}
            onChange={(evt)=> onCategoryChange(selected, evt.target.value)}
          />
          <p> Description: </p>
          <FormTextarea
            value={selected.description}
            placeholder={selected.description}
            onChange={(evt)=> onDescriptionChange(selected, evt.target.value)}
          />
        </ModalBody>
      </Modal>
    }
    <Container>
      {getRowItems(items)}
    </Container>
  </Fragment>
);
ItemNavigator.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onCategoryChange: PropTypes.func
};


const mapStateToProps = ({things})=> ({
  items: getItems(things.items, things.searchValue, things.sortType),
  selected: things.selected ? things.items[things.selected] : null
});

const mapDispatchToProps = (dispatch)=> ({
  onCloseModal: ()=> {
    dispatch(selectItem(null));
  },
  onDescriptionChange: (item, newDescription)=> {
    dispatch(updateItem({
      ...item,
      description: newDescription
    }));
  },
  onCategoryChange: (item, newCategory)=> {
    dispatch(updateItem({
      ...item,
      category: newCategory
    }));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemNavigator);
