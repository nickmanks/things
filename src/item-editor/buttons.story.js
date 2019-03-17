/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import EditorButtons from './buttons';
import testItems from '../testing/test-items';


storiesOf('Simple/EditorButtons', module)
  .add('with multiple items', ()=> (
    <EditorButtons
      selected={testItems['test-id-1']}
      onCloseModal={()=> null}
      onArchive={()=> null}
    />
  ));
