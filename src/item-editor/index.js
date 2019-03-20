import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Modal, ModalHeader, FormInput} from 'shards-react';
import EditorInputs from './inputs';
import EditorButtons from './buttons';
import {selectItem, updateItem, deleteItem} from '../things/actions';
import {now} from '../utils/dates';
import debounce from '../utils/debounce';
import './theme.scss';


const DEBOUNCE_DELAY = 500;

const handleUpdate = (item, field, value, dispatch)=> {
  dispatch(updateItem({
    ...item,
    [field]: value
  }));
};

export const debouncedUpdate = debounce(handleUpdate, DEBOUNCE_DELAY);


const ItemEditor = ({
  selected, onCloseModal, onNameChange, onDescriptionChange, onCategoryChange,
  onDateChange, onArchive, onDelete
})=> {
  const [internalName, setInternalName] = useState(null);

  useEffect(()=> {
    setInternalName(selected ? selected.name : null);
  }, [selected]);

  return (
    <Fragment>
      {selected &&
        <Modal size='lg' open={selected !== null} toggle={onCloseModal}>
          <ModalHeader className={'editor-header'}>
            <FormInput
              size='lg'
              id={'editor-name'}
              className={'editor-name'}
              autoComplete={'new-password'}
              value={internalName ? internalName : ''}
              placeholder={'Name'}
              onChange={(evt)=> {
                const {target} = evt;
                setInternalName(target.value);
                onNameChange(selected, target.value);
              }}
            />
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
};
ItemEditor.propTypes = {
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onNameChange: PropTypes.func,
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
  onNameChange: (item, newName)=> {
    debouncedUpdate(item, 'name', newName, dispatch);
  },
  onDescriptionChange: (item, newDescription)=> {
    debouncedUpdate(item, 'description', newDescription, dispatch);
  },
  onCategoryChange: (item, newCategory)=> {
    debouncedUpdate(item, 'category', newCategory, dispatch);
  },
  onDateChange: (item, newDate)=> {
    dispatch(updateItem({
      ...item,
      due: newDate
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
