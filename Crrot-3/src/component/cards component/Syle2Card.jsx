import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
const Style2Card = ({ img1, title1, name1, price1, discount1 }) => {
    return (
        <div className="cards2 card p-3">
            <img className="rounded" src={img1} alt="" />
            <div className="shoping2 position-absolute rounded-circle border bg-white d-flex justify-content-center align-items-center">
                <BiShoppingBag className="shoping-icon" size={20} />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center py-4">
                <p className="fw-semibold text-center mb-2 " style={{ fontSize: '17px', }}>{title1}</p>
                <span className="snacks">{name1}</span>
                <div className="d-flex p-2 justify-content-center align-items-center">
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                    <FaStar className="pe-1 star" size={20} />
                </div>
                <h5 className="text-success">{price1}<span className="text-decoration-line-through fs-6 text-secondary">{discount1}</span></h5>
            </div>
        </div>
    )
}
export default Style2Card;