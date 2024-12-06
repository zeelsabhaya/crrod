import { Col } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="footer bg-light border-top">
            <div className="container">
                <div className="d-flex mb-5 pb-5">
                    <Col xs={4}>
                        <div className="footer-logo">
                            <img className="pb-3" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
                            <p className="logo-text color-text">Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                        </div>
                        <div className="location-icon d-flex  mb-2">
                            <HiOutlineLocationMarker size={27} className="text-success pt-1" />
                            <p className="color-text location-text ps-2">51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</p>
                        </div>
                        <div className="mail-icon d-flex mb-4">
                            <RiMailSendLine size={27} className="text-success pt-1" />
                            <p className="color-text ps-1 m-0">example@email.com</p>
                        </div>
                        <div className="mail-icon d-flex mb-2">
                            <FaPhone size={22} className="text-success pt-1" />
                            <p className="color-text ps-2 m-0">+91 123 4567890</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <h6 className="fw-bold fs-5">Company</h6>
                        <nav>
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link color-text" href="#">About us</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Delivery Information</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Privacy Policy</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Terms & Conditions</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">contact Us</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Support Center</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={2}>
                        <h6 className="fw-bold fs-5">Category</h6>
                        <nav>
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link color-text" href="#">Dairy & Bakery</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Fruits & Vegetable</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Snack & Spice</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Juice & Drinks</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Chicken & Meat</a></li>
                                <li className="nav-item"><a className="nav-link color-text" href="#">Fast Food</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={4} className="d-flex flex-column justify-content-between">
                        <h6 className="fw-bold fs-5">Subscribe Our Newsletter</h6>
                        <form className="border bg-white d-flex justify-content-between align-items-center rounded">
                            <input type="text" placeholder="Search here..." className="ps-3" />
                            <button className="btn"><IoIosSend size={25} /></button>
                        </form>
                        <div className="all-bts my-4">
                            <button className="bg-white border p-0 rounded mx-2"><RiFacebookLine className="py-2" size={34} /></button>
                            <button className="bg-white border p-0 rounded mx-2"><RiTwitterXFill className="py-2" size={34} /></button>
                            <button className="bg-white border p-0 rounded mx-2"><FaDribbble className="py-2" size={34} /></button>
                            <button className="bg-white border p-0 rounded mx-2"><FaInstagram className="py-2" size={34} /></button>
                        </div>
                        <div className="d-flex flex-row">
                            <Col>
                                <div className="img overflow-hidden rounded">
                                    <img className="" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div className="img overflow-hidden rounded">
                                    <img className="" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div className="img overflow-hidden rounded">
                                    <img className="" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div className="img overflow-hidden rounded">
                                    <img className="" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg" alt="" />
                                </div>
                            </Col>
                            <Col>
                                <div className="img overflow-hidden rounded">
                                    <img className="" src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" alt="" />
                                </div>
                            </Col>
                        </div>
                    </Col>
                </div>
                <div className="border-top">
                    <p className="text-center fs-6 p-3 m-0">
                    © 2024 <span className="text-success text-bold">Carrot</span>, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;