import ListItem from "../listItem/listItem";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteBtn } from "redux/contactSlice";
    
export default function ContactList() {

    const dispatch = useDispatch();

    const items = useSelector(getContacts);
    const filterItems = useSelector(getFilter);

  const normalizedFilter = filterItems.toLowerCase();
  let filtredComponents = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  const deleteClick = (name) => {
    dispatch(deleteBtn(name))
  }
        return (
            <ul>
                {filtredComponents.map(item =>
                (
                    <ListItem key={item.name}
                        name={item.name} number={item.number} deleteClick = {deleteClick} ></ListItem>
                )
                    )}
            </ul>
        )
    }