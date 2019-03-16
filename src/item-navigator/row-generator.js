import React, {Fragment} from 'react';
import {Row, Col} from 'shards-react';
import Item from '../item';
import OutlineItem from '../item/outline';


const NUMBER_OF_COLUMNS = 4;


const getColumnItems = (itemA, itemB, itemC, itemD)=> {
  if (!itemB) {
    return (
      <Fragment>
        <Col>
          <Item item={itemA} />
        </Col>
        <Col>
          <OutlineItem />
        </Col>
      </Fragment>
    );
  }
  if (!itemC) {
    return (
      <Fragment>
        <Col>
          <Item item={itemA} />
        </Col>
        <Col>
          <Item item={itemB} />
        </Col>
        <Col>
          <OutlineItem />
        </Col>
      </Fragment>
    );
  }
  if (!itemD) {
    return (
      <Fragment>
        <Col>
          <Item item={itemA} />
        </Col>
        <Col>
          <Item item={itemB} />
        </Col>
        <Col>
          <Item item={itemC} />
        </Col>
        <Col>
          <OutlineItem />
        </Col>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Col>
        <Item item={itemA} />
      </Col>
      <Col>
        <Item item={itemB} />
      </Col>
      <Col>
        <Item item={itemC} />
      </Col>
      <Col>
        <Item item={itemD} />
      </Col>
    </Fragment>
  );
};

// eslint-disable-next-line max-statements
export const getRowItems = (items)=> {
  const rows = [];

  for (let i = 0; i < items.length; i += NUMBER_OF_COLUMNS) {
    const itemA = items[i];
    const itemB = items[i + 1];
    const itemC = items[i + 2];
    // eslint-disable-next-line no-magic-numbers
    const itemD = items[i + 3];

    const row = (
      <Row key={i}>
        {getColumnItems(itemA, itemB, itemC, itemD)}
      </Row>
    );

    rows.push(row);

    if (
      i >= items.length - NUMBER_OF_COLUMNS
      && itemA && itemB && itemC && itemD
    ) {
      rows.push(
        <Row key={i + 1}>
          <Col>
            <OutlineItem />
          </Col>
        </Row>
      );
    }
  }

  if (!items.length > 0) {
    rows.push(
      <Row key='alone'>
        <Col>
          <OutlineItem />
        </Col>
      </Row>
    );
  }

  return rows;
};
