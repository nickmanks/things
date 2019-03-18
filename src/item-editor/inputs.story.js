/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import EditorInputs from './inputs';
import testItems from '../testing/test-items';


storiesOf('Simple/EditorInputs', module)
  .add('with multiple items', ()=> (
    <EditorInputs
      selected={testItems['test-id-1']}
      onDateChange={()=> null}
      onCategoryChange={()=> null}
      onDescriptionChange={()=> null}
    />
  ));
