const CriptoHistorial = ({history}) => {
    return (
        <div className="history-table">
            <table>
            <thead>
                <tr>
                <th>Fecha</th>
                <th>Precio (USD)</th>
                </tr>
            </thead>
            <tbody>
                {history && history.map(({priceUsd, date}) => (
                <tr key={date}>
                    <td>{new Date(date).toLocaleDateString()}</td>
                    <td>${parseFloat(priceUsd).toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default CriptoHistorial