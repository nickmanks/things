import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'shards-react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './theme.scss';
import logo from '../favicon.png';


const AppBar = ()=> (
  <header className={'app-bar-header'}>
    <div className={'app-flex-1'}>
      <a className={'app-bar-logo'}>
        <img className={'app-bar-logo-img'} src={logo} />
        <h4 className={'app-bar-logo-name'}> things </h4>
      </a>
    </div>
    <div className={'app-flex-2'}>
      <InputGroup className={'app-bar-search'} size="lg" seamless>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroupText>
        </InputGroupAddon>
        <FormInput className="border-0" placeholder="Search..." />
      </InputGroup>
    </div>
    <div className={'app-flex-1'}>
      <Dropdown
        open={true}
        toggle={()=> null}
      >
        <DropdownToggle nav caret>
          Sort
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Created newest</DropdownItem>
          <DropdownItem>Created oldest</DropdownItem>
          <DropdownItem>Status</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </header>
);

export default AppBar;
