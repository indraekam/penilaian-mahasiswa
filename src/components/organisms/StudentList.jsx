import React, { useState, useCallback } from "react";
import StudentRow from "../molecules/StudentRow";
import ButtonSave from "../atoms/ButtonSave";

const initialStudents = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Mahasiswa ${i + 1}`,
  scores: { 1: 1, 2: 2, 3: 6, 4: 10 },
}));

const StudentList = () => {
  const [students, setStudents] = useState(initialStudents);

  const handleScoreChange = useCallback((id, aspect, value) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, scores: { ...student.scores, [aspect]: value } }
          : student
      )
    );
  }, []);

  return (
    <div>
      <h2 className="text-center text-primary mb-4">Aplikasi Penilaian Mahasiswa</h2>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>Nama</th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentRow key={student.id} student={student} onChange={handleScoreChange} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <ButtonSave students={students} />
      </div>
    </div>
  );
};

export default StudentList;
