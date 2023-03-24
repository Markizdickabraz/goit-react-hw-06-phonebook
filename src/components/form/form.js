// import { useState } from "react";
import { FormBtn, FormStyled, InputStyled, LabelStyled } from "./FormStyled";
import PropTypes from 'prop-types';
import { name } from 'redux/nameSlice';
import { number } from "redux/numberSlice";
import { useSelector, useDispatch } from "react-redux";
import { getName, getNumber } from "redux/selectors";

export default function ContactForm(props) {

    const dispatch = useDispatch();
    const nameSelector = useSelector(getName);
    const numberSelector = useSelector(getNumber);
    
    let data = []
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    const handleChacge = e => {
                switch (e.currentTarget.name) {
            case 'name':
                dispatch(name(e.currentTarget.value));
                break;
            case 'number':
                dispatch(number(e.currentTarget.value));
                break;
            default: return;
           } 
    }
    
     data = { name: nameSelector, number: numberSelector}
    
    const formSubmit = (e) => {
        e.preventDefault();
        props.onSubmitFunc(data)
        reset();
        
    }
  
    const reset = () => {
        dispatch(name(''))
        dispatch(number(''))
}
    
return (
  <FormStyled onSubmit={formSubmit}>
          <LabelStyled>Name
             <InputStyled
              type="text"
              name="name"
              value={nameSelector}
              onChange = {handleChacge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </LabelStyled>

          <LabelStyled>number
            <InputStyled
                type="tel"
                name="number"
                value={numberSelector}
                onChange = {handleChacge}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
          </LabelStyled>
    <FormBtn disabled={!name || !number} type='submit'>Add contact</FormBtn>
        </FormStyled>
)
}

FormStyled.propTypes = {
    onSubmitFunc : PropTypes.func
}
