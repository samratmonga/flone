// import React from 'react'
// import Navbar from '../Components/Navbar'
// import { NavLink } from 'react-router-dom'
// // icon
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// //images
// import product1 from "../Assets/Images/p-1.jpg";




// export default function Whistle({ wishlist }) {

//     return (
//         <div>
//             <Navbar />
//             <div className="main-whistle">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="for-flexment">
//                                 <div className="whistle-heading">
//                                     <h1> Wishlist</h1>
//                                 </div>
//                                 <div className="nav-list d-flex">
//                                     <li> <NavLink to='/'> Home</NavLink></li>
//                                     <span> / </span>
//                                     <li> <NavLink to='Home'> WHISLISTS</NavLink></li>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             {/* <div className="middle-whishlist">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="for-empty">
//                                 <div className="fav-icon">
//                                     <FavoriteBorderIcon className='big-fav' />
//                                 </div>
//                                <div className="text-center">
//                                <div className="an-alert">
//                                 No items found in wishlist.
//                                 </div>
//                                 <div className="continue-btn">
//                                     <NavLink to='/' className="con-btn"> 
//                                     <ArrowBackIcon className='back-btn'/>
//                                     Continue Shoping</NavLink>
//                                 </div>

//                                </div>
//                             </div>j

//                         </div>
//                     </div>

//                 </div>
//             </div> */}
//             <div className="real-whisting">
//                 <div className="container">

//                     <div className="product-heading">
//                         <div className="row">
//                             <div className="col-4"> Product</div>
//                             <div className="col-4">Unit price </div>
//                             <div className="col-4"> confirm</div>
//                             <div className="col-4">
//                                 <div className="abt-prd">
//                                     <div className="prd-img">
//                                         <img src={product1} alt="" className='img-fluid'/>
//                                     </div>
//                                     <p>
//                                         Animi Dolor Pariatur </p>
//                                 </div>
//                             </div>
//                             <div className="col-4">
//                                 <div className="price">
//                                     $30
//                                 </div>

//                             </div>
//                             <div className="col-4">
//                                 <div className="buy-btn">
//                                     <NavLink>Buy Now</NavLink>
//                                 </div>
//                             </div> 



//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }}

// {/* // import React from 'react';
// // import Navbar from '../Components/Navbar';
// // import { NavLink } from 'react-router-dom';
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import product1 from "../Assets/Images/p-1.jpg";

// // export default function Whistle({ wishlist }) { */} */}
// {/* //     return (
// //         <div>
// //             <Navbar />
// //             <div className="main-whistle">
// //                 <div className="container">
// //                     <div className="row">
// //                         <div className="col-12">
// //                             <div className="for-flexment">
// //                                 <div className="whistle-heading">
// //                                     <h1> Wishlist</h1>
// //                                 </div>
// //                                 <div className="nav-list d-flex">
// //                                     <li> <NavLink to='/'> Home</NavLink></li>
// //                                     <span> / </span>
// //                                     <li> <NavLink to='/whishlist'> WHISLISTS</NavLink></li>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="real-whisting">
// //                 <div className="container">
// //                     <div className="product-heading">
// //                         <div className="row">
// //                             <div className="col-4"> Product</div>
// //                             <div className="col-4">Unit price </div>
// //                             <div className="col-4"> confirm</div>
// //                         </div>
// //                     </div>
// //                     {wishlist && wishlist.map((product, index) => (
// //                         <div className="row" key={index}>
// //                             <div className="col-4">
// //                                 <div className="abt-prd">
// //                                     <div className="prd-img">
// //                                         <img src={product1} alt="" className='img-fluid'/>
// //                                     </div>
// //                                     <p>{product.name}</p>
// //                                 </div>
// //                             </div>
// //                             <div className="col-4">
// //                                 <div className="price">
// //                                     <span className='price-item'>{product.price}</span>
// //                                 </div>
// //                             </div>
// //                             <div className="col-4">
// //                                 <div className="buy-btn">
// //                                     <NavLink>Buy Now</NavLink>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// } */}

import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
// icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//images
import product1 from "../Assets/Images/p-1.jpg";

export default function Whistle({ wishlist }) {

    return (
        <div>
            <Navbar />
            <div className="main-whistle">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="for-flexment">
                                <div className="whistle-heading">
                                    <h1> Wishlist</h1>
                                </div>
                                <div className="nav-list d-flex">
                                    <li> <NavLink to='/'> Home</NavLink></li>
                                    <span> / </span>
                                    <li> <NavLink to='/whishlist'> WHISLISTS</NavLink></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-whishlist">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="for-empty">
                                <div className="fav-icon">
                                    <FavoriteBorderIcon className='big-fav' />
                                </div>
                                <div className="text-center">
                                    <div className="an-alert">
                                        No items found in wishlist.
                                    </div>
                                    <div className="continue-btn">
                                        <NavLink to='/' className="con-btn">
                                            <ArrowBackIcon className='back-btn' />
                                            Continue Shopping</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="real-whisting">
                <div className="container">
                    <div className="product-heading">
                        <div className="row">
                            <div className="col-4"> Product</div>
                            <div className="col-4">Unit price </div>
                            <div className="col-4"> confirm</div>
                            <div className="col-4">
                                <div className="abt-prd">
                                    <div className="prd-img">
                                        <img src={product1} alt="" className='img-fluid' />
                                    </div>
                                    <p>
                                        Animi Dolor Pariatur </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="price">
                                    $30
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="buy-btn">
                                    <NavLink>Buy Now</NavLink>
                                </div>
                            </div>


                        </div>
                    </div>

                    {wishlist && wishlist.map((product, index) => (
                        <div className="row" key={index}>
                            <div className="col-4">
                                <div className="abt-prd">
                                    <div className="prd-img">
                                        <img src={product1} alt="" className='img-fluid' />
                                    </div>
                                    <p>{product.name}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="price">
                                    <span className='price-item'>{product.price}</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="buy-btn">
                                    <NavLink>Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
