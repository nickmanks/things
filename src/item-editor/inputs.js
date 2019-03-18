import React from 'react';
import PropTypes from 'prop-types';
import {ModalBody, FormTextarea, FormInput} from 'shards-react';
import DatePicker from 'react-datepicker';
import {getTimeTo} from '../utils/dates';
import './theme.scss';


const EditorInputs = ({
  selected, onDateChange, onCategoryChange, onDescriptionChange
})=> (
  <ModalBody>
    <div className={'editor-created'}>
      <b>created {getTimeTo(new Date(selected.created))}</b>
    </div>
    <p> Due: </p>
    <DatePicker
      className={'editor-date-picker'}
      selected={new Date(selected.due)}
      onChange={(date)=> onDateChange(selected, date)}
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
);
EditorInputs.propTypes = {
  selected: PropTypes.object,
  onDateChange: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onDescriptionChange: PropTypes.func
};


export default EditorInputs;
