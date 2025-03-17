import React from "react";
import SelectInput from "../atoms/SelectInput";

const StudentRow = ({ student, onChange }) => {
  return (
    <tr>
      <td>{student.name}</td>
      {[1, 2, 3, 4].map((aspect) => (
        <td key={aspect}>
          <SelectInput
            value={student.scores[aspect]}
            onChange={(e) => onChange(student.id, aspect, Number(e.target.value))}
          />
        </td>
      ))}
    </tr>
  );
};

export default StudentRow;
