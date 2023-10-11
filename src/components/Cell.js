import "./Cell.css";

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        hadleCellchange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        hadleCellchange("cross");
        setGo("circle");
      }
    }
  };

  const hadleCellchange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });

    setCells(nextCells);

    console.log(nextCells);
  };

  return (
    // <div className="square" id={id} onClick={!winningMessage && handleClick}>
    <div
      className="square"
      id={id}
      onClick={!winningMessage ? handleClick : undefined}
    >
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
