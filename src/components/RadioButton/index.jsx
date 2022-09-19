

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className="radio-label">
      <input className="radio-button" type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioButton