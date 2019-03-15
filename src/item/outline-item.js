import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from 'shards-react';
import './theme.scss';


const OutlineItem = ()=> (
  <Card className={'outline-item'}>
    <CardHeader className={'outline-item-header'} />
    <CardBody className={'outline-item-body'}>
      <Button
        className={'outline-button'}
        outline pill
        theme="success"
      >
        New Thing
      </Button>
    </CardBody>
    <CardFooter className={'outline-item-footer'}>
    </CardFooter>
  </Card>
);

export default OutlineItem;
