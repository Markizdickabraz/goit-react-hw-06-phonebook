import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";
import { filter } from "redux/filterSlice";
import {add, deleteBtn } from "redux/contactSlice"
import { useDispatch,useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export default function App() {
  
  const items = useSelector(getContacts);
  // const contacts = items.value;
  const filterItems = useSelector(getFilter)

  const dispatch = useDispatch();

  const deleteClick = (name) => {
    dispatch(deleteBtn(name))
  }

  const formSubmitHandler = (data) => {
    const filterdContacts = items.map(contact => contact.name);
    const someName = filterdContacts.some(name => name === data.name);
      if (someName) {
      return alert(`${data.name}, is already in contacts`);
      } 
          dispatch(add(data));
  }

  const chengeFilter = e => {
    dispatch(filter(e.currentTarget.value))
  }

  const normalizedFilter = filterItems.toLowerCase();
  let filtredComponents = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmitFunc={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filterItems} onChange={chengeFilter} />
          {filtredComponents.length > 0 && <ContactList items={filtredComponents} onDeleteClick={deleteClick} />}
      </div>
    );
  }


