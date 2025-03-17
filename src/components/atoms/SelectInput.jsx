import React from "react";

const SelectInput = ({ value, onChange }) => {
  return (
    <select className="form-select" value={value} onChange={onChange}>
      {Array.from({ length: 10 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
};

export default React.memo(SelectInput);
