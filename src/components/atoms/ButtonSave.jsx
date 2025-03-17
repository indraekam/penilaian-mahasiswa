import React from "react";

const ButtonSave = ({ students }) => {
  const handleSave = () => {
    const result = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {},
    };

    students.forEach((student) => {
      Object.keys(student.scores).forEach((aspect) => {
        result[`aspek_penilaian_${aspect}`][`mahasiswa_${student.id}`] =
          student.scores[aspect];
      });
    });

    console.log("Output JSON:", JSON.stringify(result, null, 2));
    alert("Data berhasil disimpan! Cek Console.");
  };

  return (
    <button className="btn btn-primary" onClick={handleSave}>
      Simpan
    </button>
  );
};

export default React.memo(ButtonSave);
