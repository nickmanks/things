import React from 'react';
import PropTypes from 'prop-types';
import {CardHeader, Badge, FormInput} from 'shards-react';
import {dateDistanceStrict} from '../utils/dates';


const ItemHeader = ({name, created, onNameChange})=> (
  <CardHeader>
    <div className={'item-header'}>
      <FormInput
        className={'item-name-input'}
        value={name}
        placeholder={name}
        onChange={(evt)=> onNameChange(evt.target.value)}
        onClick={(evt)=> evt.stopPropagation()}
      />
      <Badge className={'item-time-pill'} pill theme="light">
        {dateDistanceStrict(new Date(created))}
      </Badge>
    </div>
  </CardHeader>
);
ItemHeader.propTypes = {
  name: PropTypes.string,
  created: PropTypes.number,
  onNameChange: PropTypes.func
};

export default ItemHeader;
