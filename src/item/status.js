import React from 'react';
import PropTypes from 'prop-types';
import {CardFooter, Badge} from 'shards-react';


export const READY_STATUS = 'ready';
export const PROGRESS_STATUS = 'in progress';
export const DONE_STATUS = 'done';


const ItemStatus = ({status, onUpdateStatus})=> (
  <CardFooter>
    <div className={'item-status'}>
      <Badge
        className={'item-status-pill'}
        pill
        theme={status === READY_STATUS ? 'danger' : 'light'}
        onClick={(evt)=> {
          evt.stopPropagation();
          onUpdateStatus(READY_STATUS);
        }}
      >
        Ready
      </Badge>
      <Badge
        className={'item-status-pill'}
        pill
        theme={status === PROGRESS_STATUS ? 'warning' : 'light'}
        onClick={(evt)=> {
          evt.stopPropagation();
          onUpdateStatus(PROGRESS_STATUS);
        }}
      >
        In Progress
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
