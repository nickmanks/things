import React, {Fragment} from 'react';
import {Container, Row, Col} from 'shards-react';
import AppBar from '../app-bar';
import Item from '../item';
import OutlineItem from '../item/outline-item';

import './theme.scss';


const App = ()=> (
  <Fragment>
    <AppBar />
    <div className={'app-container'}>
      <Container>
        <Row>
          <Col>
            <Item
              task={{
                name: 'Today do things',
                category: 'thing',
                description: 'Nunc quis nisl ac justo elementum sagittis in quis justo.',
                created: '12m'
              }}
            />
          </Col>
          <Col>
            <Item
              task={{
                name: 'Thing is due',
                category: 'due',
                description: 'Nunc quis nisl ac justo elementum sagittis in quis justo.',
                created: '2d'
              }}
            />
          </Col>
          <Col>
            <Item
              task={{
                name: 'Create a thing',
                category: 'create',
                description: 'Nunc quis nisl ac justo elementum sagittis in quis justo.',
                created: '3h'
              }}
            />
          </Col>
          <Col>
            <OutlineItem />
          </Col>
        </Row>
      </Container>
    </div>
  </Fragment>
);

export default App;
