import React from 'react';
import PropTypes from 'prop-types';
import {CardFooter, Badge} from 'shards-react';


export const PENDING_STATUS = 'pending';
export const PROGRESS_STATUS = 'in progress';
export const DONE_STATUS = 'done';


const ItemStatus = ({status, onUpdateStatus})=> (
  <CardFooter>
    <div className={'item-status'}>
      <Badge
        className={'item-status-pill'}
        pill
        theme={status === PENDING_STATUS ? 'danger' : 'light'}
        onClick={(evt)=> {
          evt.stopPropagation();
          onUpdateStatus(PENDING_STATUS);
        }}
      >
        Pending
      </Badge>
      <Badge
        className={'item-status-pill'}
        pill
        theme={status === DONE_STATUS ? 'success' : 'light'}
        onClick={(evt)=> {
          evt.stopPropagation();
          onUpdateStatus(DONE_STATUS);
        }}
      >
        Done
      </Badge>
    </div>
  </CardFooter>
);
ItemStatus.propTypes = {
  status: PropTypes.string,
  onUpdateStatus: PropTypes.func
};

export default ItemStatus;
