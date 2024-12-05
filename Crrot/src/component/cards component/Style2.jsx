import Style2Card from "./Syle2Card";

const Style2=()=>{
    return(
        <div className="container">
        <div className="section-products">
            <h2 className="text-center fw-bolder">Style 2</h2>
            <p className="Lorem text-center mb-5 pb-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
            {/* <Row  className="d-flex flex-row">
                {cartData.map((user) => (
                    <Col>
                        <Style1Card  img={user.img} text={user.text} price={user.price} discount={user.discount} />
                    </Col>
                ))}
            </Row> */}
            <Style2Card/>
        </div>
    </div>
    )
}
export default Style2;