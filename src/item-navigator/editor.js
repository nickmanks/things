import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormTextarea,
  FormInput,
  Button
} from 'shards-react';
import DatePicker from 'react-datepicker';
import {selectItem, updateItem} from '../things/actions';
import {getTimeTo, now} from '../utils/dates';
import './theme.scss';


const EditorModal = ({
  selected, onCloseModal, onDescriptionChange, onCategoryChange, onDateChange,
  onArchive
})=> (
  <Fragment>
    {selected &&
      <Modal size='lg' open={selected !== null} toggle={onCloseModal}>
        <ModalHeader>
          {selected.name}
        </ModalHeader>
        <ModalBody>
          <div className={'editor-created'}>
            <b>created {getTimeTo(new Date(selected.created))}</b>
          </div>
          <p> Due: </p>
          <DatePicker
            className={'editor-date-picker'}
            selected={new Date(selected.due)}
            onChange={(date)=> onDateChange(selected, date)}
            minDate={new Date()}
            dateFormat="dd/MM/yy"
          />
          <p> Category: </p>
          <FormInput
            className={'editor-category'}
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
        <ModalFooter>
          {selected.archived
            ? (
              <Button
                id='restore'
                pill
                outline
                theme={'primary'}
                onClick={()=> onArchive(selected, false)}
              >
                Restore
              </Button>
            ) : (
              <Button
                id='archive'
                pill
                outline
                theme={'primary'}
                onClick={()=> onArchive(selected, true)}
              >
              Archive
              </Button>
            )}
          <Button
            id='done'
            pill
            theme={'primary'}
            onClick={()=> onCloseModal()}
          >
            Done
          </Button>
        </ModalFooter>
      </Modal>
    }
  </Fragment>
);
EditorModal.propTypes = {
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onArchive: PropTypes.func
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
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(EditorModal);
