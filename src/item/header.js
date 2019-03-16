import React from 'react';
import PropTypes from 'prop-types';
import {CardHeader, Badge, FormInput} from 'shards-react';


const ItemHeader = ({name, created, onNameChange})=> (
  <CardHeader>
    <div className={'item-header'}>
      <FormInput
        className={'item-name-input'}
        value={name}
        placeholder={name}
        onChange={(evt)=> onNameChange(evt.target.value)}
      />
      <Badge className={'item-time-pill'} pill theme="secondary">
        {created}
      </Badge>
    </div>
  </CardHeader>
);
ItemHeader.propTypes = {
  name: PropTypes.string,
  created: PropTypes.string,
  onNameChange: PropTypes.func
};

export default ItemHeader;
