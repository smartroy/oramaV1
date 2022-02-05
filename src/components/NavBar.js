import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom"
const NavBar = (props) => {
  const navItems = props.navItems;
  const navContents = navItems.map((item) =>
    <li className="nav-item px-4" key={item.name}>
      {/* <a className="nav-link" href={item.link}>{item.name}</a> */}
      <Link to={item.link} className="nav-link">{item.name}</Link>
    </li>
  );
  const [withColor, setColor] = useState('transparent');

  const toggleColor = () => {
    if (window.pageYOffset > 100) {
      setColor('#C7F1ED');
    } else {
      setColor('transparent');
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleColor);
    return () => {
      window.removeEventListener("scroll", toggleColor);
    };
  }, []);
  return (
    // <nav className="navbar navbar-expand-lg navbar-light fixed-top oramaNav" style={{ backgroundColor: `${withColor}` }}>
    //   <div className="container-fluid">
    //     <a className="navbar-brand oramaNav-icon" href="#"><img src="/oramaWeb/imgs/oramadick.png" width="40" height="40" style={{ right: "50%" }} /></a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse oramaNav-menu" id="navbarColor03">
    //       <ul className="navbar-nav ms-auto nav-fill">
    //         {navContents}
    //         <li className="nav-item dropdown px-4">
    //           <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" id="oramaDropdown">More</a>

    //           <div className="dropdown-menu dropdown-menu-right" aria-labelledby="oramaDropdown">
    //             {/* <div className="sub-nav-row">
    //               <div className="sub-nav-col">

    //                 <a className="dropdown-item " href="#">
    //                   <div className="sub-nav-box">
    //                     <p>Action</p>
    //                   </div>
    //                 </a>
    //                 <a className="dropdown-item " href="#">
    //                   <div className="sub-nav-box">
    //                     <p>Action2</p>
    //                   </div>
    //                 </a>

    //               </div>
    //               <div className="sub-nav-col">

    //                 <a className="dropdown-item " href="#">
    //                   <div className="sub-nav-box">
    //                     <p>Action3</p>
    //                   </div>
    //                 </a>
    //                 <a className="dropdown-item " href="#">
    //                   <div className="sub-nav-box">
    //                     <p>Action4</p>
    //                   </div>
    //                 </a>

    //               </div>
    //             </div> */}
    //             <div>
    //               <div class="dropdown-header">Development</div>
    //               <a class="dropdown-item" href="#">Bespoke software</a>
    //               <a class="dropdown-item" href="#">Mobile apps</a>
    //               <a class="dropdown-item" href="#">Websites</a>
    //             </div>
    //             <div>
    //               <div class="dropdown-header">Professional Services</div>
    //               <a class="dropdown-item" href="#">Project rescue</a>
    //               <a class="dropdown-item" href="#">Source code recovery</a>
    //               <a class="dropdown-item" href="#">Application support &amp; maintenance</a>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top oramaNav" id="myNavbar" style={{ backgroundColor: `${withColor}` }}>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <a href="#" class="navbar-brand"><img src="/oramaV1/imgs/oramadick.png" width="40" height="40" style={{ right: "50%" }} /></a>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ml-auto nav-fill">


          {navContents}

          <li class="nav-item px-4 dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="servicesDropdown">

              <div class="d-md-flex align-items-start justify-content-start">
                <div style={{ paddingLeft: "1px" }}>

                  {/* <a class="dropdown-item" href="#">
                    <div class="panel panel-default">
                      <div class="panel-body">News</div>
                    </div>
                  </a> */}
                  <a class="dropdown-item" href="/oramaV1#oramaNews">
                    <div class="card text-white " >
                      <div class="card-header">News</div>
                    </div>
                  </a>
                  <a class="dropdown-item" href="/oramaV1#oramaPartner">
                    <div class="card text-white " >
                      <div class="card-header">Partner</div>
                    </div>
                  </a>
                  {/* <a class="dropdown-item" href="#">Websites</a> */}
                </div>
                <div style={{ paddingLeft: "1px" }}>
                  {/* <div class="dropdown-header">Professional Services</div>
                  <a class="dropdown-item" href="#">Project rescue</a>
                  <a class="dropdown-item" href="#">Source code recovery</a>
                  <a class="dropdown-item" href="#">Application support &amp; maintenance</a> */}
                  <a class="dropdown-item" href="/oramaV1#oramaTech">
                    <div class="card text-white " >
                      <div class="card-header">Tech</div>
                    </div>
                  </a>
                  <a class="dropdown-item" href="/oramaV1#">
                    <div class="card text-white " >
                      <div class="card-header">Join Us</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </li>

        </ul>
      </div>
    </nav >
  )
}

export default NavBar
