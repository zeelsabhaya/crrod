import { Col, Row } from "react-bootstrap";
import Style1Card from "./Style1Card";

const Style1 = () => {
    const cartData = [
        {
            img: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg",
            text: "Best snakes with hazel nut pack 200gm",
            price: "$145",
            discount: "$150",
        },
        {
            img: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg",
            text: "Fresh organic apple 1kg simla marming",
            price: "$120.25",
            discount: "$123.25",
        },
        {
            img: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg",
            text: "Organic fresh venila farm watermelon 5kg",
            price: "$50.30",
            discount: "$72.60",
        },
        {
            img: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/10.jpg",
            text: "Sweet crunchy nut mix 250gm pack",
            price: "$120.25",
            discount: "$123.25",
        },
    ]
    return (
        <>
            <div className="container">
                <div className="section-products">
                    <h2 className="text-center fw-bolder">Style 1</h2>
                    <p className="Lorem text-center mb-5 pb-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    <Row  className="d-flex flex-row">
                        {cartData.map((user) => (
                            <Col>
                                <Style1Card  img={user.img} text={user.text} price={user.price} discount={user.discount} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Style1;