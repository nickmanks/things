import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ModalBody, FormTextarea, FormInput, FormCheckbox} from 'shards-react';
import DatePicker from 'react-datepicker';
import {getTimeTo} from '../utils/dates';
import './theme.scss';


const DESCRIPTION_LENGTH = 500;


const EditorInputs = ({
  selected, onDateChange, onCategoryChange, onDescriptionChange
})=> {
  const {created, due, category, description} = selected;

  const [internalCategory, setInternalCategory] = useState(category);
  const [internalDescription, setInternalDescription] = useState(description);

  return (
    <ModalBody>
      <div className={'editor-created'}>
        <b>created {getTimeTo(new Date(created))}</b>
      </div>
      <p> Due: </p>
      <div className={'editor-date-picker-container'}>
        <DatePicker
          className={
            due
              ? 'editor-date-picker'
              : 'editor-date-picker-disabled'
          }
          selected={due ? new Date(due) : new Date()}
          onChange={(date)=> onDateChange(selected, date.getTime())}
          dateFormat="dd/MM/yy"
          disabled={due === null}
        />
        <FormCheckbox
          id={'editor-date-picker-checkbox'}
          className={'editor-date-picker-checkbox'}
          checked={due !== null}
          onChange={
            ()=> onDateChange(selected, due ? null : new Date().getTime())
          }
        />
      </div>
      <p> Category: </p>
      <FormInput
        id={'editor-category'}
        className={'editor-category'}
        value={internalCategory === null ? '' : internalCategory}
        placeholder={'Category'}
        onChange={(evt)=> {
          const {target} = evt;
          setInternalCategory(target.value);
          onCategoryChange(selected, target.value);
        }}
      />
      <p>
        Description ({
          internalDescription ? internalDescription.length : 0
        }/{DESCRIPTION_LENGTH}):
      </p>
      <FormTextarea
        value={internalDescription === null ? '' : internalDescription}
        placeholder={'Description'}
        onChange={(evt)=> {
          const {target} = evt;
          const boundString = target.value.substring(0, DESCRIPTION_LENGTH);
          setInternalDescription(boundString);
          onDescriptionChange(selected, boundString);
        }}
      />
    </ModalBody>
  );
};
EditorInputs.propTypes = {
  selected: PropTypes.object,
  onDateChange: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onDescriptionChange: PropTypes.func
};


export default EditorInputs;
