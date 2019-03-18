import React from 'react';
import PropTypes from 'prop-types';
import {CardBody, CardSubtitle} from 'shards-react';
import {getTimeTo} from '../utils/dates';
import './theme.scss';


const ItemBody = ({category, description, due})=> (
  <CardBody className={'item-body'}>
    {due &&
      <CardSubtitle className={'item-subtitle'}>
        Due {getTimeTo(new Date(due))}
      </CardSubtitle>
    }
    <div>
      <b>{category}</b>
      <div className={'item-description'}>
        {description}
      </div>
    </div>
    <div className={'item-body-bottom-fade'} />
  </CardBody>
);
ItemBody.propTypes = {
  category: PropTypes.string,
  description: PropTypes.string,
  due: PropTypes.number
};

export default ItemBody;
