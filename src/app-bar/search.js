import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from 'shards-react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {setSearchValue} from '../things/actions';
import './theme.scss';


const Search = ({searchValue, updateSearch})=> (
  <InputGroup className={'app-bar-search'} size="lg" seamless>
    <InputGroupAddon type="prepend">
      <InputGroupText>
        <FontAwesomeIcon icon={faSearch} />
      </InputGroupText>
    </InputGroupAddon>
    <FormInput
      className="border-0"
      placeholder="Search..."
      value={searchValue ? searchValue : ''}
      onChange={(evt)=> updateSearch(evt.target.value)}
    />
  </InputGroup>
);
Search.propTypes = {
  searchValue: PropTypes.string,
  updateSearch: PropTypes.func
};


const mapStateToProps = ({things})=> ({
  searchValue: things.searchValue
});

const mapDispatchToProps = (dispatch)=> ({
  updateSearch: (value)=> {
    dispatch(setSearchValue(value));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
