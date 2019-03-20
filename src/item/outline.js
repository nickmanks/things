import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from 'shards-react';
import uuidV4 from 'uuid/v4';
import {now} from '../utils/dates';
import {updateItem, setSortType} from '../things/actions';
import {PENDING_STATUS} from './status';
import './theme.scss';


const createNewItem = ()=> ({
  id: uuidV4(),
  name: null,
  description: null,
  category: null,
  status: PENDING_STATUS,
  archived: false,
  archivedDate: null,
  due: null,
  created: now().getTime()
});


const OutlineItem = ({onNewThing})=> (
  <Card className={'outline-item'}>
    <CardHeader className={'outline-item-header'} />
    <CardBody className={'outline-item-body'}>
      <Button
        className={'outline-button'}
        outline pill
        theme="success"
        onClick={onNewThing}
      >
        New Thing
      </Button>
    </CardBody>
    <CardFooter className={'outline-item-footer'}>
    </CardFooter>
  </Card>
);
OutlineItem.propTypes = {
  onNewThing: PropTypes.func
};

const mapStateToProps = ()=> ({});

const mapDispatchToProps = (dispatch)=> ({
  onNewThing: ()=> {
    dispatch(
      updateItem(createNewItem())
    );
    dispatch(setSortType(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OutlineItem);
