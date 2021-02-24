import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
background: rgbs(0,0,0,0.1);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
overflow: scroll;

${(isopen) => {
  
    if (isopen) {
    return css`
    opacity: 1;
    pointer-events:all;`
    }
  return css`
  opacity:0;
  pointer-events:none;
  `;
}}

opacity:0;
pointer-events: none;

opacity:0;
pointer-events: all;

`;

function Modal({ isOpen, onClose, childen}) {
  return (
    <ModalWrapper isopen={isOpen}
    onClick={() => {
      //isOpen = false;
      onClose();
    }}
    
    >
      {childen }
    </ModalWrapper>
  );
}
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    childen: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default Modal;
