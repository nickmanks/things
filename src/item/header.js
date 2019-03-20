import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CardHeader, Badge, FormInput} from 'shards-react';
import {dateDistanceStrict} from '../utils/dates';


const ItemHeader = ({name, created, onNameChange})=> {
  const [internalName, setInternalName] = useState(name);

  useEffect(()=> {
    setInternalName(name);
  }, [name]);

  return (
    <CardHeader>
      <div className={'item-header'}>
        <FormInput
          autoComplete={'new-password'}
          className={'item-name-input'}
          value={internalName ? internalName : ''}
          placeholder={'Name'}
          onChange={(evt)=> {
            const {target} = evt;
            setInternalName(target.value);
            onNameChange(target.value);
          }}
          onClick={(evt)=> evt.stopPropagation()}
        />
        <Badge className={'item-time-pill'} pill theme="light">
          {dateDistanceStrict(new Date(created))}
        </Badge>
      </div>
    </CardHeader>
  );
};
ItemHeader.propTypes = {
  name: PropTypes.string,
  created: PropTypes.number,
  onNameChange: PropTypes.func
};

export default ItemHeader;
