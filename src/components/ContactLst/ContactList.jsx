export const ContactLst = ({ visibleName, onDelete }) => {
  return (
    <ul>
      {visibleName.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => onDelete(contact.id)}> Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
