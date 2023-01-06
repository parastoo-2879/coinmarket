import React from "react";
import ReactDOM from 'react-dom'
// import Main from "./App";
import Topheader from "./Header1/Header1.jsx";
import Bottomheader from "./Header2/Header2.jsx"
import Tabletop from "./topofTable/Topoftable.jsx";
import Buttons from "./Buttons/button.jsx";
import Lists from "./Items/Items.jsx";
import CoinMarket from "./table/Table.jsx";
import Footer from "./footer/Footer.jsx"

// import Test from "./test/test.jsx"
// Fonts
import"./fonts/Inter-Light.ttf"
import"./fonts/Inter-Bold.ttf"
import"./fonts/Inter-Medium.ttf"
import"./fonts/Inter-SemiBold.ttf"


import "./global.css"

const temp = ReactDOM.createRoot(document.getElementById('root'))
temp.render(
 <main>
 <Topheader/>
 <Bottomheader/>
 {/* <Test/> */}
 <Tabletop/>
 <Buttons/>
 <Lists/>
 <CoinMarket/>
 <Footer/>
 </main>
)

