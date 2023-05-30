function Table({data, config, keyFn}) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>

    });
    // renders each cell by mapping through the column
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label}>{column.render(rowData)}</td>
        });

        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });
    return (
        <table className="table-auto border=spaceing-2">
          <thead>
            <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
          <tbody>{renderedRows}</tbody>
        </table>
      );
}

export default Table;