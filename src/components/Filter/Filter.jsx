export const Filter = ({ onChange, filterValue }) => {
  return (
    <label>
      <input type="text" value={filterValue} onChange={onChange} />
    </label>
  );
};
