import React from "react";
import StudentList from "./components/organisms/StudentList";
import Layout from "./components/templates/Layout";

const App = () => {
  return (
    <Layout>
      <StudentList />
    </Layout>
  );
};

export default App;
