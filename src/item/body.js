import React from 'react';
import PropTypes from 'prop-types';
import {CardBody, CardSubtitle} from 'shards-react';


const ItemBody = ({category, description, onEditItem})=> (
  <CardBody className={'item-body'} onClick={()=> onEditItem()}>
    <CardSubtitle>{category}</CardSubtitle>
    {description}
  </CardBody>
);
ItemBody.propTypes = {
  category: PropTypes.string,
  description: PropTypes.string,
  onEditItem: PropTypes.func
};

export default ItemBody;
