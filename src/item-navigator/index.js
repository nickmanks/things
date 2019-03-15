import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  FormTextarea,
  FormInput
} from 'shards-react';
import Item from '../item';
import OutlineItem from '../item/outline';
import {selectItem, updateItem} from '../things/actions';

/* eslint no-magic-numbers: 0 */


const getColumnItems = (itemA, itemB, itemC, itemD)=> {
  if (!itemA) {
    return (
      <Fragment>
        <Col>
          <OutlineItem />
        </Col>
      </Fragment>
    );
  }
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
const getRowItems = (items)=> {
  const rows = [];

  const keys = Reflect.ownKeys(items);

  for (let i = 0; i < keys.length; i += 4) {
    const itemA = items[keys[i]];
    const itemB = items[keys[i + 1]];
    const itemC = items[keys[i + 2]];
    const itemD = items[keys[i + 3]];

    const row = (
      <Row key={i}>
        {getColumnItems(itemA, itemB, itemC, itemD)}
      </Row>
    );

    rows.push(row);

    if (i >= keys.length - 4 && itemA && itemB && itemC && itemD) {
      rows.push(
        <Row key={i + 1}>
          <Col>
            <OutlineItem />
          </Col>
        </Row>
      );
    }
  }

  return rows;
};


const ItemNavigator = ({
  items, selected, onCloseModal, onDescriptionChange, onCategoryChange
})=> (
  <Fragment>
    {selected !== null &&
      <Modal size='lg' open={selected !== null} toggle={onCloseModal}>
        <ModalHeader>
          {selected.name}
        </ModalHeader>
        <ModalBody>
          <p> Category: </p>
          <FormInput
            value={selected.category}
            placeholder={selected.category}
            onChange={(evt)=> onCategoryChange(selected, evt.target.value)}
          />
          <p> Description: </p>
          <FormTextarea
            value={selected.description}
            placeholder={selected.description}
            onChange={(evt)=> onDescriptionChange(selected, evt.target.value)}
          />
        </ModalBody>
      </Modal>
    }
    <Container>
      {getRowItems(items)}
    </Container>
  </Fragment>
);
ItemNavigator.propTypes = {
  items: PropTypes.object,
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onCategoryChange: PropTypes.func
};


const mapStateToProps = ({things})=> ({
  items: things.items,
  selected: things.selected ? things.items[things.selected] : null
});

const mapDispatchToProps = (dispatch)=> ({
  onCloseModal: ()=> {
    dispatch(selectItem(null));
  },
  onDescriptionChange: (item, newDescription)=> {
    dispatch(updateItem({
      ...item,
      description: newDescription
    }));
  },
  onCategoryChange: (item, newCategory)=> {
    dispatch(updateItem({
      ...item,
      category: newCategory
    }));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemNavigator);
