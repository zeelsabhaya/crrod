import Style4Card from "./Style4Card";


const Style4=()=>{
    return(
        <div className="container">
            <div className="section-products mb-5 pb-5">
                <h2 className="text-center fw-bolder">Style 4</h2>
                <p className="Lorem text-center mb-5 pb-4 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                {/* <Row className="d-flex flex-row">
                    {data.map((value) => (
                        <Col>
                            <Style3Card img1={value.img1} title1={value.title1} name1={value.name1} price1={value.price1} discount1={value.discount1} />
                        </Col>
                    ))}
                </Row> */}
                <Style4Card/>
            </div>
        </div>
    )
}
export default Style4;