import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card} from 'shards-react';
import ItemHeader from './header';
import ItemBody from './body';
import ItemStatus from './status';
import {updateItem, selectItem} from '../things/actions';
import {debouncedUpdate} from '../item-editor';
import './theme.scss';


const Item = ({item, onNameChange, onUpdateStatus, onEditItem})=> {
  const {name, category, description, due, created, status} = item;

  return (
    <Card className={'item'} onClick={()=> onEditItem(item)}>
      <ItemHeader
        name={name}
        created={created}
        onNameChange={(value)=> onNameChange(item, value)}
      />
      <ItemBody
        category={category}
        description={description}
        due={due}
      />
      <ItemStatus
        status={status}
        onUpdateStatus={(value)=> onUpdateStatus(item, value)}
      />
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
    debouncedUpdate(item, 'name', newName, dispatch);
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
