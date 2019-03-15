import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubtitle,
  Badge,
  FormInput
} from 'shards-react';
import './theme.scss';


const TodoItem = ({task})=> {
  const {name, category, description, created} = task;

  return (
    <Card className={'item'}>
      <CardHeader>
        <div className={'item-header'}>
          <FormInput className={'item-name-input'} placeholder={name} />
          <Badge className={'item-time-pill'} pill theme="secondary">
            {created}
          </Badge>
        </div>
      </CardHeader>
      <CardBody className={'item-body'}>
        <CardSubtitle>{category}</CardSubtitle>
        {description}
      </CardBody>
      <CardFooter>
        <div className={'item-status'}>
          <Badge className={'item-status-pill'} pill theme='success'>
            Done
          </Badge>
          <Badge className={'item-status-pill'} pill theme='light'>
            In Progress
          </Badge>
          <Badge className={'item-status-pill'} pill theme='light'>
            Ready
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
TodoItem.propTypes = {
  task: PropTypes.object
};


export default TodoItem;
