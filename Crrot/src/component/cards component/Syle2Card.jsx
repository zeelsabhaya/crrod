import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
const Style2Card = () => {
    return (
        <div className="cards2 card p-3">
            <img className="rounded" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" alt="" />
            <div className="shoping2 position-absolute rounded-circle border bg-secondary-subtle d-flex justify-content-center align-items-center">
                <BiShoppingBag className="shoping-icon" size={20} />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center py-4">
                <span className="snacks">snacks</span>
                <div className="d-flex p-2 justify-content-center align-items-center">
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                </div>
                <p className="fw-semibold text-center" style={{ fontSize: '17px', }}>Lorem ipsum dolor adipisicing elit.</p>
                <h5 className="text-success">$120.25 <span className="text-decoration-line-through fs-6 text-secondary">$123.25</span></h5>
            </div>
        </div>
    )
}
export default Style2Card;