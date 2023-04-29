import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onCloseModal, largeImage, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImage} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   static propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//     largeImage: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { largeImage, tags } = this.props;

//     return createPortal(
//       <div className="overlay" onClick={this.handleBackdropClick}>
//         <div className="modal">
//           <img src={largeImage} alt={tags} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
