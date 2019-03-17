import React from 'react';
import PropTypes from 'prop-types';
import {ModalFooter, Button} from 'shards-react';
import './theme.scss';


const EditorButtons = ({selected, onCloseModal, onArchive, onDelete})=> (
  <ModalFooter>
    {selected.archived &&
      <Button
        id='delete'
        pill
        outline
        theme={'danger'}
        onClick={()=> onDelete(selected)}
      >
        Delete
      </Button>
    }
    {selected.archived
      ? (
        <Button
          id='restore'
          pill
          outline
          theme={'primary'}
          onClick={()=> onArchive(selected, false)}
        >
          Restore
        </Button>
      ) : (
        <Button
          id='archive'
          pill
          outline
          theme={'primary'}
          onClick={()=> onArchive(selected, true)}
        >
        Archive
        </Button>
      )}
    <Button
      id='done'
      pill
      theme={'primary'}
      onClick={()=> onCloseModal()}
    >
      Done
    </Button>
  </ModalFooter>
);
EditorButtons.propTypes = {
  selected: PropTypes.object,
  onCloseModal: PropTypes.func,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
};


export default EditorButtons;
