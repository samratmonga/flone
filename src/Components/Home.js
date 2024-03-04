import React, { useRef, useState, useEffect } from "react";
import "../Assets/Styles/Home.scss";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";
import Table from "../Assets/Images/table-wood-pine.png";
import chair from "../Assets/Images/nancy-chair.png";
import deco from "../Assets/Images/art-deco-home.png";
import gamla from '../Assets/Images/gamla.jpg'
import product1 from "../Assets/Images/p-1.jpg";
import product2 from "../Assets/Images/p-2.jpg";
import product3 from "../Assets/Images/p-3.jpg";
import product4 from "../Assets/Images/p-4.jpg";
import product5 from "../Assets/Images/300x300.jpg";
import modalImg from '../Assets/Images/modal-img.jpg';
import DecoHome from '../Assets/Images/decoHome.jpg';
import card from '../Assets/Images/card-1.jpg';
import card2 from '../Assets/Images/card-2.jpg';
import card3 from '../Assets/Images/card-3.jpg';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// mui icon
import AddIcon from "@mui/icons-material/Add";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  // const [timeRemaining, setTimeRemaining] = useState({
  //   days: '07',
  //   hours: 23,
  //   minutes: 18,
  //   seconds: 40
  // });

  const initialTime = {
    days: 7,
    hours: 23,
    minutes: 18,
    seconds: 40
  };
  const [timeRemaining, setTimeRemaining] = useState(initialTime);


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // for local stroage 

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  const decrement = () => {
    // Check if count is greater than 0 before decrementing
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [showShopDiv, setShowShopDiv] = useState(false);


  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true)
  const onCloseModal2 = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const onOpenModal3 = () => setOpen3(true)
  const onCloseModal3 = () => setOpen3(false);
  const [open4, setOpen4] = useState(false);
  const onOpenModal4 = () => setOpen4(true)
  const onCloseModal4 = () => setOpen4(false);
  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true)
  const onCloseModal5 = () => setOpen5(false);


  useEffect(() => {
    const startTime = new Date().getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const elapsedTime = now - startTime;
      const { days, hours, minutes, seconds } = initialTime;
      const totalSeconds = (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds) - Math.floor(elapsedTime / 1000);

      if (totalSeconds <= 0) {
        clearInterval(interval);
        setTimeRemaining(initialTime);
      } else {
        const remainingDays = Math.floor(totalSeconds / (24 * 60 * 60)).toString().padStart(2, '0');
        const remainingHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)).toString().padStart(2, '0');
        const remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60).toString().padStart(2, '0');
        const remainingSeconds = (totalSeconds % 60).toString().padStart(2, '0');

        setTimeRemaining({
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);






  return (
    <>
      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item for-chair active">
              {/* <img src="..." className="d-block w-100" alt="..."/> */}
              <div className="container">
                <div className="about-chair" data-aos='fade-up'>
                  <div className="first-heading">
                    <h5>
                      {" "}
                      Chair <br /> Collection <br /> 2024
                    </h5>
                  </div>
                  <h2 className="yellow-underline">
                    {" "}
                    Welcome to <br />
                    Helendo Store{" "}
                  </h2>

                  <div className="description">
                    Many Dekstop Publishing packages and web pages editors now
                    use lorem insup in theri default model
                  </div>
                  <div className="shop-btn">
                    <NavLink className="shop-link">
                      {" "}
                      Shop Now <EastIcon />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item for-sofa">
              <div className="container">
                <div className="about-chair" data-aos='fade-up'>
                  <div className="first-heading">
                    <h5>
                      {" "}
                      Chair <br /> Collection <br /> 2024
                    </h5>
                  </div>
                  <h2 className="yellow-underline">
                    {" "}
                    Welcome to <br />
                    Helendo Store{" "}
                  </h2>

                  <div className="description">
                    Many Dekstop Publishing packages and web pages editors now
                    use lorem insup in theri default model
                  </div>
                  <div className="shop-btn">
                    <NavLink className="shop-link">
                      {" "}
                      Shop Now <EastIcon />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item for-cups">
              <div className="container">
                <div className="about-chair" data-aos='fade-up'>
                  <div className="first-heading">
                    <h5>
                      {" "}
                      Chair <br /> Collection <br /> 2024
                    </h5>
                  </div>
                  <h2 className="yellow-underline">
                    {" "}
                    Welcome to <br /> Helendo Store
                  </h2>

                  <div className="description">
                    Many Dekstop Publishing packages and web pages editors now
                    use lorem insup in theri default model
                  </div>
                  <div className="shop-btn">
                    <NavLink className="shop-link">
                      {" "}
                      Shop Now <EastIcon />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* section-2  */}
      <div className="more-chairs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="chair-img">
                <img src={chair} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-nacy-chair">
                <p>Featured product </p>
                <h1 className="chair-heading"> Nancy chair </h1>

                <div className="necy-des">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia.
                </div>
                <div className="outity-btn">
                  <NavLink className="price-btn"> Only $90</NavLink>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="row mt-5">
              <div className="col-md-6 ">
                <div className="about-nacy-chair">
                  <p>Featured product </p>
                  <h1 className="chair-heading">Table Wood Pine </h1>

                  <div className="necy-des">
                    Crafted from exquisite pine wood, our tables seamlessly
                    blend timeless beauty with durable functionality. Each piece
                    showcases the natural grain patterns.
                  </div>
                  <div className="outity-btn">
                    <NavLink className="price-btn"> Only $90</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="chair-img">
                  <img src={Table} alt="" />
                </div>
              </div>
            </div>

            {/* glass  */}
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="chair-img">
                  <img src={deco} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-nacy-chair">
                  <p>Featured product </p>
                  <h1 className="chair-heading"> Art Deco Home </h1>

                  <div className="necy-des">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia.
                  </div>
                  <div className="outity-btn">
                    <NavLink className="price-btn"> Only $90</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="best-selling">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className=" heading"> Best Selling </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="swiper-slider">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={40}
                  pagination={{
                    clickable: true,
                  }}
                  // modules={[Pagination]}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide id="siper">
                    <div className="image-container">
                      <img src={product5} alt="" style={{ width: "280px" }} />
                      <div className="overlay">
                        <button className="button child bounce" onClick={onOpenModal}> <AddIcon /></button>
                        <button className="button child bounce">
                          <LocalMallIcon />
                        </button>
                        <button className="button child bounce">
                          <FavoriteBorderIcon />
                        </button>
                      </div>
                    </div>
                    <div className="swiper-heading">Amini Doler particular</div>
                    <div className="swiper-price">$10.00</div>
                  </SwiperSlide>
                  <SwiperSlide id="siper">
                    <div className="image-container ">
                      <img src={product1} alt="" style={{ width: "280px" }} />

                      <div className="overlay">
                        <button className="button child bounce" onClick={onOpenModal2}> <AddIcon /></button>
                        <button className="button child bounce">
                          <LocalMallIcon />
                        </button>
                        <button className="button child bounce">
                          <FavoriteBorderIcon />
                        </button>
                      </div>
                    </div>
                    <div className="swiper-heading">Art Deco Home</div>
                    <div className="swiper-price">$30.00</div>
                  </SwiperSlide>

                  <SwiperSlide id="siper">
                    <div className="image-container ">
                      <img src={product2} alt="" style={{ width: "280px" }} />
                      <div className="overlay">
                        <button onClick={onOpenModal3} className="button child bounce">
                          <AddIcon />
                        </button>
                        <button className="button child bounce">
                          <LocalMallIcon />
                        </button>
                        <button className="button child bounce">
                          <FavoriteBorderIcon />
                        </button>
                      </div>
                    </div>
                    <div className="swiper-heading">Artifical Potted Plant</div>
                    <div className="swiper-price">$40.00</div>{" "}
                  </SwiperSlide>

                  <SwiperSlide id="siper">
                    <div className="image-container">
                      <img src={product3} alt="" style={{ width: "280px" }} />

                      <div className="overlay">
                        <button onClick={onOpenModal4} className="button child bounce"><AddIcon /></button>
                        <button className="button child bounce">
                          <LocalMallIcon />
                        </button>
                        <button className="button child bounce">
                          <FavoriteBorderIcon />
                        </button>
                      </div>
                    </div>
                    <div>
                    </div>
                    <div className="swiper-heading">Dark Grenn Jug</div>
                    <div className="swiper-price">$19-$17.00</div>
                  </SwiperSlide>
                  <SwiperSlide id="siper">
                    <div className="image-container">
                      <img src={product4} alt="" style={{ width: "280px" }} />
                      <div className="overlay">
                        <button onClick={onOpenModal5} className="button child bounce">
                          <AddIcon />
                        </button>
                        <button className="button child bounce">
                          <LocalMallIcon />
                        </button>
                        <button className="button child bounce">
                          <FavoriteBorderIcon />
                        </button>
                      </div>
                    </div>
                    <div className="swiper-heading">Drinking Glasses</div>
                    <div className="swiper-price">$30.00</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="all-modals">
          <Modal open={open} onClose={onCloseModal} center>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-img">
                    <img src={modalImg} alt="" className="img-fluid" />
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="modal-content">
                    <div className="modal-heading">
                      <h2> Animi Dolor Pariatur</h2>
                    </div>
                    <div className="modal-price">
                      $10.00
                    </div>
                    <div className="availability">
                      Available : <span> In-Stock </span>
                    </div>
                    <div className="modal-des">
                      At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.
                    </div>
                    <div className="inc-dec-btn">
                      <button className="counter-button">
                        <i class="fa-solid fa-minus" onClick={decrement}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
                      </button>
                      <button className="add-to-cart"> Add to cart </button>
                      <button className="heart-btn"> <FavoriteBorderIcon className="favourate" /> </button>
                    </div>
                    <div className="other-pro-detail">
                      <p>SKU : <span>500</span> </p>
                      <p>categories: <span>Accessory Decoration Furniture</span></p>
                      <p> Tags : <span>Accessories chair Glass Deco Table </span></p>
                    </div>
                    <div className="share">
                      <p>Share this items </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          {/* second modal  */}
          <Modal open={open2} onClose={onCloseModal2} center>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-img">
                    <img src={DecoHome} alt="" className="second-pro" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content">
                    <div className="modal-heading">
                      <h2> Art Deco Home</h2>
                    </div>
                    <div className="modal-price">
                      $30.00
                    </div>
                    <div className="availability">
                      Available : <span> In-Stock </span>
                    </div>
                    <div className="modal-des">
                      At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.
                    </div>
                    <div className="inc-dec-btn">
                      <button className="counter-button">
                        <i class="fa-solid fa-minus" onClick={decrement}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
                      </button>
                      <button className="add-to-cart"> Add to cart </button>
                      <button className="heart-btn"> <FavoriteBorderIcon className="favourate" /> </button>
                    </div>
                    <div className="other-pro-detail">
                      <p>SKU : <span>500</span> </p>
                      <p>categories: <span>Accessory Decoration Furniture</span></p>
                      <p> Tags : <span>Accessories chair Glass Deco Table </span></p>
                    </div>
                    <div className="share">
                      <p>Share this items: </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          {/* third-modal */}
          <Modal open={open3} onClose={onCloseModal3} center>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-img">
                    <img src={gamla} alt="" className="second-pro" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content">
                    <div className="modal-heading">
                      <h2> Artificial potted plant</h2>
                    </div>
                    <div className="modal-price">
                      $40.00
                    </div>
                    <div className="availability">
                      Available : <span> out-of-stock</span>
                    </div>
                    <div className="modal-des">
                      At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.
                    </div>
                    <div className="inc-dec-btn">
                      <button className="counter-button">
                        <i class="fa-solid fa-minus" onClick={decrement}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
                      </button>
                      <button className="add-to-cart"> Add to cart </button>
                      <button className="heart-btn"> <FavoriteBorderIcon className="favourate" /> </button>
                    </div>
                    <div className="other-pro-detail">
                      <p>SKU : <span>500</span> </p>
                      <p>categories: <span>Accessory Decoration Furniture</span></p>
                      <p> Tags : <span>Accessories chair Glass Deco Table </span></p>
                    </div>
                    <div className="share">
                      <p>Share this items: </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          {/* third-modal-end  */}
          {/* fourt-moda */}
          <Modal open={open4} onClose={onCloseModal4} center>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-img">
                    <img src={product3} alt="" className="second-pro" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content">
                    <div className="modal-heading">
                      <h2>Dark Green Jug</h2>
                    </div>
                    <div className="modal-price">
                      $19.00 - $17.10
                    </div>
                    <div className="availability">
                      Available : <span> In-Stock </span>
                    </div>
                    <div className="modal-des">
                      At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.
                    </div>
                    <div className="inc-dec-btn">
                      <button className="counter-button">
                        <i class="fa-solid fa-minus" onClick={decrement}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
                      </button>
                      <button className="add-to-cart"> Add to cart </button>
                      <button className="heart-btn"> <FavoriteBorderIcon className="favourate" /> </button>
                    </div>
                    <div className="other-pro-detail">
                      <p>SKU : <span>500</span> </p>
                      <p>categories: <span>Accessory Decoration Furniture</span></p>
                      <p> Tags : <span>Accessories chair Glass Deco Table </span></p>
                    </div>
                    <div className="share">
                      <p>Share this items: </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* modal five  */}
          <Modal open={open5} onClose={onCloseModal5} center>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-img">
                    <img src={product4} alt="" className="second-pro" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content">
                    <div className="modal-heading">
                      <h2> Drinking Glasses</h2>
                    </div>
                    <div className="modal-price">
                      $40.00
                    </div>
                    <div className="availability">
                      Available : <span> In-Stock </span>
                    </div>
                    <div className="modal-des">
                      At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.
                    </div>
                    <div className="inc-dec-btn">
                      <button className="counter-button">
                        <i class="fa-solid fa-minus" onClick={decrement}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={() => increment()}></i>
                      </button>
                      <button className="add-to-cart"> Add to cart </button>
                      <button className="heart-btn"> <FavoriteBorderIcon className="favourate" /> </button>
                    </div>
                    <div className="other-pro-detail">
                      <p>SKU : <span>500</span> </p>
                      <p>categories: <span>Accessory Decoration Furniture</span></p>
                      <p> Tags : <span>Accessories chair Glass Deco Table </span></p>
                    </div>
                    <div className="share">
                      <p>Share this items: </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>
      {/* deco-sec  */}
      <div className="section-deco">
        <div className="deco-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="deco-heading">
                  <h1> Deco Collection  <span>50% OFF</span></h1>
                </div>
                <div className="deco-des">
                  <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those.  <br />Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum </p>
                </div>
                <div className="downgrading-counter">
                  <div className="time-count-down d-flex">
                    <div className="c-time">
                      <h2 style={{ fontWeight: 600 }}>{timeRemaining.days}</h2>
                      <h4>Days</h4>
                    </div>
                    <h2>:</h2>
                    <div className="c-time">
                      <h2 style={{ fontWeight: 600 }}>{timeRemaining.hours}</h2>
                      <h4>Hours</h4>
                    </div>
                    <h2>:</h2>
                    <div className="c-time">
                      <h2 style={{ fontWeight: 600 }}>{timeRemaining.minutes}</h2>
                      <h4>Minutes</h4>
                    </div>
                    <h2>:</h2>
                    <div className="c-time">
                      <h2 style={{ fontWeight: 600 }}>{timeRemaining.seconds}</h2>
                      <h4>Seconds</h4>
                    </div>
                  </div>
                </div>
                {/* <div className="deco-btn">
                  <NavLink > Shop Now </NavLink>
                </div> */}
                <div className="deco-btn" onMouseOver={() => setShowShopDiv(!showShopDiv)}>
                  <NavLink to="#">Shop Now</NavLink>
                </div>
                {showShopDiv && <div className="shop-div">Click here to shop</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-blogs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-heading">
                <h1> Our Blog</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-2">
                <div className="card-img">
                  <img src={card} alt="" />
                </div>
                <p className="card-heading">
                  Unique product that will  impress your home
                  in 2024
                </p>
                <div class="before-after-line"></div>

                <div className="card-des">
                  <p> january 21 , 2024 / Admin / in deco</p>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card-1">
                <div className="card-img">
                  <img src={card2} alt="" />
                </div>
                <p className="card-heading">
                  Navy Blue & White Striped Area Rugs
                </p>
                <div class="before-after-line"></div>

                <div className="card-des">
                  <p> january 21 , 2024 / Admin / in deco</p>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card-1">
                <div className="card-img">
                  <img src={card3} alt="" />

                </div>
                <p className="card-heading">
                  Helendo White Coated Staircase Floating
                </p>
                <div class="before-after-line"></div>

                <div className="card-des">
                  <p> january 21 , 2024 / Admin / in deco</p>
                </div>
              </div>
            </div>
            {/* card two  */}
            {/* card-two  */}
          </div>
        </div>
      </div>
      <div className="our-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="news-div">
                <div className="news-heading">
                  <h1> Our Newsletter </h1>
                </div>
                <div className="news-input">
                  <input type="text" placeholder="Enter email address" />
                  <button> Subscribe </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <CountdownTimer /> */ }
    </>
  );
}
