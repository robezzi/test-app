import coin from "../../assets/coin.png"
function Balance() {
    return (
        <> 
            <div className="balance">
                <div className="content-width">
                    <ul>
                        <li>
                            <p>TRADING CAPITAL</p>
                        </li>
                        <li><p>1.00865 <span>BTC</span></p></li>
                        <li>
                            <div>
                                <p>BALANCE:</p>
                                <span>10 850</span>
                                <img src={coin}/>
                            </div>
                            <div>
                                <p>ON HOLD: </p>
                                <span>24 000</span>
                                <img src={coin}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        )
  }
  
  export default Balance