import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormCheckbox
} from 'shards-react';
import {setSortType, setSortOpen} from '../things/actions';
import './theme.scss';


export const SORT_NEWEST = 'newest';
export const SORT_OLDEST = 'oldest';
export const SORT_STATUS = 'status';
export const SORT_DUE = 'due';
export const SORT_ARCHIVED = 'archived';


export const CheckBox = ({show})=> (
  <Fragment>
    {show &&
      <FormCheckbox
        className={'sort-checkbox'}
        checked={true}
        id='sort-checkbox'
      />
    }
  </Fragment>
);
CheckBox.propTypes = {
  show: PropTypes.bool
};


const SortDropdown = ({open, sortType, onSetSort, setOpen})=> (
  <Dropdown
    open={open}
    toggle={()=> setOpen(!open)}
  >
    <DropdownToggle nav caret className={'app-bar-sort-dropdown'}>
      Sort
    </DropdownToggle>
    <DropdownMenu className={'app-bar-dropdown'}>
      <DropdownItem
        id='newest'
        className={'flex-dropdown'}
        onClick={()=> onSetSort(sortType, SORT_NEWEST)}
      >
        Created newest <CheckBox show={sortType === SORT_NEWEST} />
      </DropdownItem>
      <DropdownItem
        id='oldest'
        className={'flex-dropdown'}
        onClick={()=> onSetSort(sortType, SORT_OLDEST)}
      >
        Created oldest <CheckBox show={sortType === SORT_OLDEST} />
      </DropdownItem>
      <DropdownItem
        id='due'
        className={'flex-dropdown'}
        onClick={()=> onSetSort(sortType, SORT_DUE)}
      >
        Due date <CheckBox show={sortType === SORT_DUE} />
      </DropdownItem>
      <DropdownItem
        id='status'
        className={'flex-dropdown'}
        onClick={()=> onSetSort(sortType, SORT_STATUS)}
      >
        Status <CheckBox show={sortType === SORT_STATUS} />
      </DropdownItem>
      <DropdownItem
        id='archived'
        className={'flex-dropdown'}
        onClick={()=> onSetSort(sortType, SORT_ARCHIVED)}
      >
        Archived <CheckBox show={sortType === SORT_ARCHIVED} />
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
SortDropdown.propTypes = {
  open: PropTypes.bool,
  sortType: PropTypes.string,
  onSetSort: PropTypes.func,
  setOpen: PropTypes.func
};


const mapStateToProps = ({things})=> ({
  open: things.sortOpen,
  sortType: things.sortType
});

const mapDispatchToProps = (dispatch)=> ({
  onSetSort: (oldType, newType)=> {
    dispatch(setSortType(oldType === newType ? null : newType));
  },
  setOpen: (open)=> {
    dispatch(setSortOpen(open));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown);
