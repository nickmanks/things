import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Badge} from 'shards-react';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Brand from './brand';
import Search from './search';
import SortDropdown from './sort';
import './theme.scss';


const getArchivedCount = (items)=> {
  let count = 0;

  for (const key of Reflect.ownKeys(items)) {
    if (items[key].archived) {
      count += 1;
    }
  }

  return count;
};


const AppBar = ({archivedCount})=> (
  <header className={'app-bar-header'}>
    <div className={'app-flex-1'}>
      <Brand />
    </div>
    <div className={'app-flex-2'}>
      <Search />
    </div>
    <div className={'app-flex-3'}>
      <SortDropdown />
      <FontAwesomeIcon
        size={'2x'}
        className={'app-bar-archive-icon'}
        icon={faArchive}
      />
      <Badge
        className={'app-bar-archive-badge'}
        pill
        theme='primary'>
        {archivedCount}
      </Badge>
    </div>
  </header>
);
AppBar.propTypes = {
  archivedCount: PropTypes.number
};


const mapStateToProps = ({things})=> ({
  archivedCount: getArchivedCount(things.items)
});


export default connect(mapStateToProps)(AppBar);
