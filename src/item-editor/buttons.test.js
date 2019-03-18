import React from 'react';
import {Button} from 'shards-react';
import EditorButtons from './buttons';
import {unwrappedShallow} from '../testing/helpers';
import testItems from '../testing/test-items';


describe('<EditorButtons />', ()=> {
  it('calls onDelete when archived item delete button is clicked', ()=> {
    const deleteFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorButtons
        selected={testItems['test-id-5']}
        onDelete={deleteFn}
      />
    );

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'delete')
      .prop('onClick')();

    expect(deleteFn).toHaveBeenCalledWith(testItems['test-id-5']);
  });

  it('calls onArchive with false when restore button is clicked', ()=> {
    const restoreFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorButtons
        selected={testItems['test-id-5']}
        onArchive={restoreFn}
      />
    );

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'restore')
      .prop('onClick')();

    expect(restoreFn).toHaveBeenCalledWith(testItems['test-id-5'], false);
  });

  it('calls onArchive with true when archive button is clicked', ()=> {
    const archiveFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorButtons
        selected={testItems['test-id-1']}
        onArchive={archiveFn}
      />
    );

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'archive')
      .prop('onClick')();

    expect(archiveFn).toHaveBeenCalledWith(testItems['test-id-1'], true);
  });

  it('calls onCloseModal when done button is clicked', ()=> {
    const closeFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorButtons
        selected={testItems['test-id-1']}
        onCloseModal={closeFn}
      />
    );

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'done')
      .prop('onClick')();

    expect(closeFn).toHaveBeenCalled();
  });
});
