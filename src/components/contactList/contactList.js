import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteBtn } from "redux/contactSlice";
import { ConstactListStyled, ListItemStyled } from './contactListStyled';

    
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
            <>
                {filtredComponents.map(item =>
                (
                    <ConstactListStyled key={item.name}
                        >
                         <ListItemStyled key={item.name}> <span> {item.name} : {item.number}</span> <button type="button" onClick = {()=>{deleteClick(item.name)}}>Delete</button></ListItemStyled>
                        </ConstactListStyled>
                )
                    )}
            </>
        )
    }