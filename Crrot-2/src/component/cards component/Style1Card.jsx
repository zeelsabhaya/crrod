import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Style1Card = ({img,text,price,discount}) => {
    return (
        <>
            <div className="cards card p-3">
                <img className="rounded" src={img} alt="" />
                <div className="shoping position-absolute rounded-circle border bg-secondary-subtle d-flex justify-content-center align-items-center">
                    <BiShoppingBag className="shoping-icon" size={20} />
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center py-4">
                    <span className="snacks">snacks</span>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                        <FaStar className="pe-1 star" size={20}/>
                        <FaStar className="pe-1 star" size={20}/>
                        <FaStar className="pe-1 star" size={20}/>
                        <FaStar className="pe-1 star" size={20}/>
                        <FaStar className="pe-1 star" size={20}/>
                        <p className="m-0 ps-2">(5.0)</p>
                    </div>
                    <p className="fw-semibold text-center"style={{fontSize:'17px',}}>{text}</p>
                    <h5 className="text-success">{price} <span className="text-decoration-line-through fs-6 text-secondary">{discount}</span></h5>
                </div>
            </div>
        </>
    )
}

export default Style1Card;