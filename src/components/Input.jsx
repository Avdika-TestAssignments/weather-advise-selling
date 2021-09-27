import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, } from '../Styles/inputStyled';

const Input = (props) => {
  return (
    <>
      <StyledInput hasError={props.hasError} {...props} />
    </>
  )
}

Input.propTypes = {
  forwardedref: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
}

Input.defaultProps = {
  hasError: ''
}

export default Input;
