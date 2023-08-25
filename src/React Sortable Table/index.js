import Table from "./Components/Table";
import "./index.css";
import dataTwo from "./Data/Data2.json";
import dataOne from "./Data/Data1.json";

const ReactSortableTable = () => {
  const columnsOne = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Email", accessor: "email", sortable: false },
    { label: "Gender", accessor: "gender", sortable: true },
    { label: "Age", accessor: "age", sortable: true },
    { label: "Start date", accessor: "start_date", sortable: true },
  ];
  const columnsTwo = [
    { label: "Name", accessor: "name", sortable: true },
    { label: "Country", accessor: "country", sortable: true },
    { label: "GitHub username", accessor: "github_username", sortable: true },
    { label: "Course price", accessor: "money", sortable: true },
  ];

  return (
    <div className="table_container">
      <h1>Sortable table with React</h1>
      <Table caption="ONE" data={dataOne} columns={columnsOne} />
      <Table caption="TWO" data={dataTwo} columns={columnsTwo} />
    </div>
  );
};

export default ReactSortableTable;
