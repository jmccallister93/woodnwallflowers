import "./Pricing.scss"
import price_list from "../src/Images/price_list.png"

const Pricing = () => {
    return ( 
        <div className="pricing">
            <h1 className="pricing__header">
                Pricing
            </h1>
        <img src={price_list} style={{ width: '50vw'}} alt="" />

        </div>
     );
}
 
export default Pricing;