import "./card.css";
import ButtonActive from "../widgets/Button";
import InputCustom from "../input/Input";


function Card () {
    return (
        <div className="card">
            <div className="card-details">
                <div className="details">
                    <h2>Bill</h2>
                    <div className="details-icon">
                        <div>
                             <p>$</p>
                        </div>
                        <InputCustom type="number" placeholder="142.55" />
                    </div>
                    <ButtonActive />
                    <h2>Number of People</h2>
                    <div className="details-icon3">
                        <InputCustom type="number" placeholder="5" />
                    </div>
                </div>
                <div className="details">
                    <div className="culc">
                        <div className="row">
                            <div className="amout">
                                <p>Tip Amount</p>
                                <p>/ person</p>
                            </div>
                                <h2>$ 4.82</h2>
                        </div>
                        <div className="row">
                            <div className="amout">
                                <p>Total</p>
                                <p>/ person</p>
                            </div>
                                <h2>$ 32.79</h2>
                        </div>
                        <button type="submit">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card