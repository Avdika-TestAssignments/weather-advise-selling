import React from 'react';

import { StyledInput, StyledButton} from '../Styles/inputStyled';

const InputForm = (props) => {
  const [value, setValue] = React.useState('');

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (value === '') {
      alert('Please enter City name,State or City name');
    } else {
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
      <StyledButton onClick={event => { submitValue(event) }}>
        {props.buttonText}
      </StyledButton>
    </form>
  )
}

export default InputForm;
