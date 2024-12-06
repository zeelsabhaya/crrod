import { Row, Col } from "react-bootstrap";
import Style2Card from "./Syle2Card";

const Style2 = () => {
    const data = [
        {
            img1: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg",
            title1: "Organic fresh lemon",
            name1: "Lorem ipsum dolor adipisicing elit.",
            price1: "$120.25",
            discount1: "$123.25",
        },
        {
            img1: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg",
            title1: "Organic fresh apple juice",
            name1: "Lorem ipsum dolor adipisicing elit.",
            price1: "$120.25",
            discount1: "$123.25",
        },
        {
            img1: "https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg",
            title1: "Organic fresh venila farm watermelon 5kg",
            name1: "Lorem ipsum dolor adipisicing elit.",
            price1: "$120.25",
            discount1: "$123.25",
        },
    ]
    return (
        <div className="container">
            <div className="section-products">
                <h2 className="text-center fw-bolder">Style 2</h2>
                <p className="Lorem text-center mb-5 pb-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                <Row className="d-flex flex-row">
                    {data.map((value) => (
                        <Col>
                            <Style2Card img1={value.img1} title1={value.title1} name1={value.name1} price1={value.price1} discount1={value.discount1} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
export default Style2;