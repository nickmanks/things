import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Badge} from 'shards-react';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Brand from './brand';
import Search from './search';
import SortDropdown from './sort';
import {isMobile, isTablet} from '../device-info/utils';
import './theme.scss';


const getArchivedCount = (items)=> {
  let count = 0;

  for (const key of Reflect.ownKeys(items)) {
    if (items[key] && items[key].archived) {
      count += 1;
    }
  }

  return count;
};


const AppBar = ({archivedCount, mobile})=> (
  <header className={'app-bar-header'}>
    <div className={'app-flex-1'}>
      <Brand mobile={mobile} />
    </div>
    <div className={'app-flex-2'}>
      <Search mobile={mobile} />
    </div>
    <div className={'app-flex-3'}>
      <SortDropdown mobile={mobile} />
      {!mobile &&
        <Fragment>
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
        </Fragment>
      }

    </div>
  </header>
);
AppBar.propTypes = {
  archivedCount: PropTypes.number,
  mobile: PropTypes.bool
};


const mapStateToProps = ({things, browser, device})=> ({
  archivedCount: getArchivedCount(things.items),
  mobile: isMobile(browser) || isTablet(device)
});


export default connect(mapStateToProps)(AppBar);
