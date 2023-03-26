import ContactForm from "./form/form";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";
import GlobalStyle from "./globalStyled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export default function App() {
  
  const items = useSelector(getContacts);
  const filterItems = useSelector(getFilter);

  const normalizedFilter = filterItems.toLowerCase();
  let filtredComponents = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
          {filtredComponents.length > 0 && <ContactList />}
      </div>
    );
  }


