import "./Cell.css";

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  function handleClick(id) {
    if (winningMessage) return;
    if (cells.at(id) === "circle" || cells.at(id) === "cross") return;

    if (go === "circle") {
      hadleCellchange("circle");
      setGo("cross");
    }
    if (go === "cross") {
      hadleCellchange("cross");
      setGo("circle");
    }
  }

  function hadleCellchange(cellName) {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return cellName;
      } else {
        return cell;
      }
    });

    setCells(nextCells);
  }

  return (
    <div className="square" id={id} onClick={() => handleClick(id)}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
