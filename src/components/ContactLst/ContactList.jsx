export const ContactLst = ({ visibleName }) => {
  return (
    <ul>
      {visibleName.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
};
