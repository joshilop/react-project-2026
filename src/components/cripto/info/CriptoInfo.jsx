const CriptoInfo = ({cripto}) => {
    return (
        <div className="main-content">
            <header className="cripto-header">
                <h1>{cripto.name}</h1>
                <span className="symbol">{cripto.symbol}</span>
            </header>

            <section className="info-card">
                <div className="detail-item">
                <span className="label">Precio Actual</span>
                <span className="value price">${parseFloat(cripto.priceUsd).toFixed(2)}</span>
                </div>
                <div className="detail-item">
                <span className="label">Variación (24h)</span>
                <span className={`value percent ${parseFloat(cripto.changePercent24Hr) >= 0 ? "positivo" : "negativo"}`}>
                    {parseFloat(cripto.changePercent24Hr).toFixed(2)}%
                </span>
                </div>
                <div className="detail-item">
                <span className="label">Market Cap</span>
                <span className="value">${parseFloat(cripto.marketCapUsd).toLocaleString()}</span>
                </div>
            </section>
        </div>
    )
}
export default CriptoInfo