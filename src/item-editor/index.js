import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Modal, ModalHeader} from 'shards-react';
import EditorInputs from './inputs';
import EditorButtons from './buttons';
import {selectItem, updateItem, deleteItem} from '../things/actions';
import {now} from '../utils/dates';
import './theme.scss';


const ItemEditor = ({
  selected, onCloseModal, onDescriptionChange, onCategoryChange, onDateChange,
  onArchive, onDelete
})=> (
  <Fragment>
    {selected &&
      <Modal size='lg' open={selected !== null} toggle={onCloseModal}>
        <ModalHeader>
          {selected.name}
        </ModalHeader>
        <EditorInputs
          selected={selected}
          onDateChange={onDateChange}
          onCategoryChange={onCategoryChange}
          onDescriptionChange={onDescriptionChange}
        />
        <EditorButtons
          selected={selected}
          onCloseModal={onCloseModal}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      </Modal>
    }
  </Fragment>
);
ItemEditor.propTypes = {
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
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
  },
  onDateChange: (item, newDate)=> {
    dispatch(updateItem({
      ...item,
      due: newDate.getTime()
    }));
  },
  onArchive: (item, archived)=> {
    dispatch(updateItem({
      ...item,
      archived,
      archivedDate: now().getTime()
    }));
    dispatch(selectItem(null));
  },
  onDelete: (item)=> {
    dispatch(deleteItem(item));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);
