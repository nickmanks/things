import React from 'react';
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


const SortDropdown = ({open, sortType, onSetSort, setOpen})=> (
  <Dropdown
    open={open}
    toggle={()=> setOpen(!open)}
  >
    <DropdownToggle nav caret>
      Sort
    </DropdownToggle>
    <DropdownMenu className={'app-bar-dropdown'}>
      <DropdownItem
        className={'flex-dropdown'}
        onClick={
          ()=> onSetSort(sortType === SORT_NEWEST ? null : SORT_NEWEST)
        }
      >
        Created newest {
          sortType === SORT_NEWEST
            ? (<FormCheckbox className={'sort-checkbox'} checked={true} />)
            : null
        }
      </DropdownItem>
      <DropdownItem
        className={'flex-dropdown'}
        onClick={
          ()=> onSetSort(sortType === SORT_OLDEST ? null : SORT_OLDEST)
        }
      >
        Created oldest {
          sortType === SORT_OLDEST
            ? (<FormCheckbox className={'sort-checkbox'} checked={true} />)
            : null
        }
      </DropdownItem>
      <DropdownItem
        className={'flex-dropdown'}
        onClick={
          ()=> onSetSort(sortType === SORT_STATUS ? null : SORT_STATUS)
        }
      >
        Status {
          sortType === SORT_STATUS
            ? (<FormCheckbox className={'sort-checkbox'} checked={true} />)
            : null
        }
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
  onSetSort: (type)=> {
    dispatch(setSortType(type));
  },
  setOpen: (open)=> {
    dispatch(setSortOpen(open));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown);
