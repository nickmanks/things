import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Modal,
  ModalBody,
  ModalHeader,
  FormTextarea,
  FormInput
} from 'shards-react';
import {selectItem, updateItem} from '../things/actions';


const EditorModal = ({
  selected, onCloseModal, onDescriptionChange, onCategoryChange
})=> (
  <Fragment>
    {selected &&
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
  </Fragment>
);
EditorModal.propTypes = {
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onCategoryChange: PropTypes.func
};


const mapStateToProps = ({things})=> ({
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


export default connect(mapStateToProps, mapDispatchToProps)(EditorModal);
