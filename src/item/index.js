import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubtitle,
  Badge,
  FormInput
} from 'shards-react';
import {updateItem, selectItem} from '../things/actions';
import './theme.scss';


const Item = ({item, onNameChange, onUpdateStatus, onEditItem})=> {
  const {name, category, description, created, status} = item;

  return (
    <Card className={'item'}>
      <CardHeader>
        <div className={'item-header'}>
          <FormInput
            className={'item-name-input'}
            value={name}
            placeholder={name}
            onChange={(evt)=> onNameChange(item, evt.target.value)}
          />
          <Badge className={'item-time-pill'} pill theme="secondary">
            {created}
          </Badge>
        </div>
      </CardHeader>
      <CardBody className={'item-body'} onClick={()=> onEditItem(item)}>
        <CardSubtitle>{category}</CardSubtitle>
        {description}
      </CardBody>
      <CardFooter>
        <div className={'item-status'}>
          <Badge
            className={'item-status-pill'}
            pill
            theme={status === 'ready' ? 'danger' : 'light'}
            onClick={(evt)=> {
              evt.stopPropagation();
              onUpdateStatus(item, 'ready');
            }}
          >
            Ready
          </Badge>
          <Badge
            className={'item-status-pill'}
            pill
            theme={status === 'progress' ? 'warning' : 'light'}
            onClick={(evt)=> {
              evt.stopPropagation();
              onUpdateStatus(item, 'progress');
            }}
          >
            In Progress
          </Badge>
          <Badge
            className={'item-status-pill'}
            pill
            theme={status === 'done' ? 'success' : 'light'}
            onClick={(evt)=> {
              evt.stopPropagation();
              onUpdateStatus(item, 'done');
            }}
          >
            Done
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
Item.propTypes = {
  item: PropTypes.object,
  onNameChange: PropTypes.func,
  onUpdateStatus: PropTypes.func,
  onEditItem: PropTypes.func
};


const mapStateToProps = ()=> ({});

const mapDispatchToProps = (dispatch)=> ({
  onNameChange: (item, newName)=> {
    dispatch(updateItem({
      ...item,
      name: newName
    }));
  },
  onUpdateStatus: (item, newStatus)=> {
    dispatch(updateItem({
      ...item,
      status: newStatus
    }));
  },
  onEditItem: (item)=> {
    dispatch(selectItem(item.id));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Item);
