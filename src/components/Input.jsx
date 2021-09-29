import React from 'react';

import { StyledInput, StyledButton } from '../Styles/inputStyled';

const InputForm = (props) => {
  const [value, setValue] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (value === '') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form>
      <StyledInput
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={changeValue}
        autoComplete="off"
      />
      {showAlert ? <div>
        Please enter City name,State or City name
      </div> : null}
      <StyledButton onClick={event => { submitValue(event) }}>
        {props.buttonText}
      </StyledButton>
    </form>
  )
}

export default InputForm;
