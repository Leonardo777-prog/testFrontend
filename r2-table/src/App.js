import { Table } from "./components/Table";

const DataTable = [
  {
    lorem1: "Vestibulum ante ipsum",
    lorem2: "Vestibulum ante ipsum",
    lorem3: "Vestibulum ante ipsum",
    lorem4: "Vestibulum ante ipsum",
    lorem5: "Vestibulum ante ipsum",
    lorem6: "Vestibulum ante ipsum",
    lorem7: "Vestibulum ante ipsum",
  }, {
    lorem1: "Vestibulum ante ipsum",
    lorem2: "Vestibulum ante ipsum",
    lorem3: "Vestibulum ante ipsum",
    lorem4: "Vestibulum ante ipsum",
    lorem5: "Vestibulum ante ipsum",
    lorem6: "Vestibulum ante ipsum",
    lorem7: "Vestibulum ante ipsum",
  }, {
    lorem1: "Vestibulum ante ipsum",
    lorem2: "Vestibulum ante ipsum",
    lorem3: "Vestibulum ante ipsum",
    lorem4: "Vestibulum ante ipsum",
    lorem5: "Vestibulum ante ipsum",
    lorem6: "Vestibulum ante ipsum",
    lorem7: "Vestibulum ante ipsum",
  }, {
    lorem1: "Vestibulum ante ipsum",
    lorem2: "Vestibulum ante ipsum",
    lorem3: "Vestibulum ante ipsum",
    lorem4: "Vestibulum ante ipsum",
    lorem5: "Vestibulum ante ipsum",
    lorem6: "Vestibulum ante ipsum",
    lorem7: "Vestibulum ante ipsum",
  }, {
    lorem1: "Vestibulum ante ipsum",
    lorem2: "Vestibulum ante ipsum",
    lorem3: "Vestibulum ante ipsum",
    lorem4: "Vestibulum ante ipsum",
    lorem5: "Vestibulum ante ipsum",
    lorem6: "Vestibulum ante ipsum",
    lorem7: "Vestibulum ante ipsum",
  },
]

const App = () => {
  return (
    <>
      <h1>Ejercicio 1 </h1>
      <main className="contenedor">
        <div className="contenedor-table">
          <Table headings={["Lorem 1", "Lorem 2", "Lorem 3", "Lorem 4", "Lorem 5", "Lorem 6", "Lorem 7",]} data={DataTable} />
        </div>
      </main>
    </>
  );
};

export default App;
