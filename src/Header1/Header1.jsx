

// requirements


import "./master.css"
import "./local.css"




/***************************************************************************************************** */

// Output
export default function Topheader(){
  return(
<header id="header-top" className=" col-12 p-0 m-0">
<Whole/>
</header>
  )
}
/************************************************************************************************************ */

// whole Elements gathering in this componenet

function Whole(){
  return(
    <header className="row col-12 p-0 m-0 ">
  <ListOfItems/>
  <RightComp/>
    </header>
  )
}

/********************************************************************************************************** */

// left component
// list items in topheader

function ListOfItems(){
  return(
    <ul id="ListOfItems" className="row col-12 col-lg-9   p-0 m-0">
      <li className="  col-2 col-lg-1 p-0 m-0 row"><span className="col-12 d-flex justify-content-center  h-100">Cryptos:<a href="">21,929</a></span></li>

      <li className="  col-2 col-lg-1 p-0 m-0 row"><span className="col-12 p-0 d-flex justify-content-center ml-1 ml-lg-3 h-100">Exchanges:<a href="">528</a></span></li>

      <li className="  col-4 col-lg-3 p-0 m-0 ml-lg-0 row"><span className="col-12 d-flex p-0 justify-content-center h-100">Market Cap:<a href="">$868,254,861,904</a></span></li>

      <li className="  col-4 col-lg-2 p-0 m-0 row"><span className=" col-12 d-flex justify-content-start justify-content-lg-center  h-100">24hVol: <a href="">$35,558,925,618</a></span></li>

      <li className="  d-none d-lg-flex col-3 p-0 m-0 row"><span className="col-12 d-flex justify-content-center  h-100">Dominance:<a href="">BTC: 38.3% ETH:18.3%</a></span></li>

      <li className="d-none d-lg-flex col-lg-2 p-0 m-0 row position-relative"id="last-li"><span className="col-12 d-flex justify-content-center  h-100"><i class="bi bi-fuel-pump-fill pr-1"></i>ETH Gas:<a href="">12Gwei<i class="bi bi-chevron-down"></i></a> </span>
      
      <ul id="submenu1">
        <li>
      <div id="p1">
        <section>
          <span>Slow</span>
          <h5>26 Gwei</h5>
          <span>~195 secs</span>
        </section>
        <section>
          <span>Standard</span>
        <h5>27 Gwei</h5>
        <span>~145 secs</span>
        </section>
        <section>
          <span>Fast</span>
        <h5>30 Gwei</h5><span>~45 secs</span></section>
      </div>
      <div id="p2">
        <h6>Powered by Etherscan</h6>
      </div>

        </li>
      </ul>
      
      </li>
    </ul>
  )
}
/************************************************************************************************************ */

// right component

function RightComp(){
  return(
    <section className="d-none d-xl-flex  col-lg-3  m-0 h-100 ">
      <PrimarySettings />
      <Buttons />
    </section>
  )
}

/*********************************************************************************************************** */

// primary settings
let flag=1
function open1(e){
  // console.log(e.target)
 if(flag%2){
  // alert("off")
  document.getElementById("list").style.display="block"
  // e.target.setAttribute("data-status","on")
}else{
  // alert("on")
  document.getElementById("list").style.display="none"
  // e.target.setAttribute("data-status","off")   
}
flag++
}
function PrimarySettings(){

function open2(){
  document.getElementById("back").style.display="block"
  console.log(document.getElementById("back"))
}
  return(
    <section id="sett" className="col-6 row p-0 m-0">

<span className="col-4" onClick={open1} id="selec" data-status="off" ><span>English</span> <i class="bi bi-caret-down-fill"></i>

</span>
<Languages/>
<span className="col-5"onClick={open2}><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="" />USD <i class="bi bi-caret-down-fill"></i></span>
<Currency/>
<span className="col-1"><i class="bi bi-moon-fill"></i></span>
    </section>
  )
}

/************************************************************************************************************ */

// login & signup 

function Buttons(){
  return(
<section className=" row align-items-center p-0 m-0 col-6 h-100 justify-content-center" id="button">
  <img src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg" alt="" id="diamond" />
  <span id="log" className="btn mr-1 border border-primary col-5">LogIn</span>
  <span id="sign" className="btn btn-primary col-5">SignUp</span>
  
</section>
  )
}

/********************************************************************************************************* */


// languages

function Languages (){

 function menu(e){
  // alert(e.target.innerText)
  document.getElementById("inp").value = e.target.innerText
 setTimeout(() => {
  document.getElementById("list").style.display="none"
  // document.getElementById("selec").setAttribute("data-status","off")   
  flag++
  // alert(document.getElementById("selec").children[0].innerText)
  document.getElementById("selec").children[0].innerText=e.target.children[0].innerText
 }, 400);
 

 }

 function Search(){
let val = document.getElementById("inp").value
let _li = document.querySelectorAll("#lang ul>li")
_li.forEach((item)=>{
  if(item.innerText.toLowerCase().indexOf(val)!= -1){

    item.style.display="block"
  }else{
    item.style.display="none"
  }
})
}
  return( 
   <section id="list">
<div id="input"> <input type="text" placeholder="Search" id="inp" onInput={Search}  /></div>
     <div id="wrap">
  <div id="scroll">
        
  <div id="lang">

  <section>
    <p>Popular languages</p>
    <ul>
      <li onClick={menu}>English <span>EN</span> </li>
      <li onClick={menu}>Русский  <span>RU</span> </li>
      <li onClick={menu}>Tiếng Việt  <span>VI</span> </li>
      <li onClick={menu}>Türkçe  <span>TR</span> </li>
      <li onClick={menu}>Español  <span>ES</span> </li>
    </ul>
  </section>
  <section id="all-lang">
    <p>All languages</p>
    <ul>
      <li onClick={menu}>لْعَرَبِيَّةُ  <span>AR</span> </li>
      <li onClick={menu}>български  <span>BG</span> </li>
      <li onClick={menu}>Čeština <span> CS </span> </li>
      <li onClick={menu}>Dansk  <span>DA</span> </li>
      <li onClick={menu}>Deutsch  <span>DE</span> </li>
      <li onClick={menu}>ελληνικά  <span>EL</span> </li>
      <li onClick={menu}>English  <span>EN</span> </li>
      <li onClick={menu}>Español  <span>ES</span> </li>
      <li onClick={menu}>Suomeksi  <span>FI</span> </li>
      <li onClick={menu}>Français   <span>FR</span> </li>
      <li onClick={menu}>हिन्दी  <span>HI </span> </li>
      <li onClick={menu}>Magyar <span>HU </span> </li>
      <li onClick={menu}>Bahasa Indonesia  <span>ID  </span> </li>
      <li onClick={menu}>Italiano<span>IT</span> </li>
      <li onClick={menu}>日本語<span>JA</span> </li>
      <li onClick={menu}>한국어<span>KO</span> </li>
      <li onClick={menu}>Nederlands<span>NL</span> </li>
      <li onClick={menu}>Norsk<span>NO</span> </li>
      <li onClick={menu}>Język polski<span> PL</span> </li>
      <li onClick={menu}>Português Brasil<span> PT-BR</span> </li>
      <li onClick={menu}>Română <span> RO</span> </li>
      <li onClick={menu}>Русский <span> RU</span> </li>
      <li onClick={menu}>Slovenčina  <span> SK</span> </li>
      <li onClick={menu}>Svenska  <span> SV</span> </li>
      <li onClick={menu}>ไทย  <span> TH</span> </li>
      <li onClick={menu}>Türkçe <span> TR</span> </li>
      <li onClick={menu}>Українська <span> UK</span> </li>
      <li onClick={menu}>اُردُو <span> UR</span> </li>
      <li onClick={menu}>Tiếng Việt <span> VI</span> </li>
      <li onClick={menu}>简体中文 <span> ZH</span> </li>
      <li onClick={menu}>繁體中文 <span> ZH-TW</span> </li>
    </ul>
  </section>
 </div>
  </div>
</div>

   </section>
  )
}


/******************************************************************************* */

// Select currency

function Currency() {
  function close1(){
    document.getElementById("back").style.display="none"
  }
  function search2(){
   let val= document.getElementById("search2").value
   let h6 = document.querySelectorAll("ul>li>div>h6")
   console.log(h6)
   h6.forEach((item)=>{
    // console.log(item.innerText)
    if(item.innerText.toLowerCase().indexOf(val)!= -1){
     item.parentElement.parentElement.style.display="flex"
    }else{
      item.parentElement.parentElement.style.display="none"
    }
   })
  }
  return(
  <div id="back">
      <section id="currency">
<header>
  <h3>Select Currency</h3>
  <i class="bi bi-x-lg" id="close" onClick={close1}></i>
</header>
<input type="text" placeholder="Search" id="search2" onInput={search2} />
<section id="main">
 
<div id="pop-cur">
<header>Popular currencies</header>
<ul>
  <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
  <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/EUR.svg" alt="" />
    <div>
      <h6>Euro</h6>
      <span>EUR - €</span>
    </div>
    </li>
  <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/GBP.svg" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
  <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
  <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
</ul>
</div>
<div id="bitcoinUnits">
<header>Bitcoin Units</header>
  <ul><li><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
  <div><h6>Bits</h6>
  <span>BITS</span></div>
  </li>
 <li><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
  <div><h6>Satoshi</h6>
  <span>SATS</span></div>
  </li></ul>
</div>
<div id="Fiat-cur">
<header>Fiat currencies</header>
  <ul> <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/AUD.svg" alt="" />
  <div><h6>Australian Dollar</h6>
  <span>AUD - $</span></div>
  </li>
 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/BRL.svg" alt="" />
  <div><h6>Brazilian Real</h6>
  <span>BRL - R$</span></div>
  </li>
 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/CAD.svg" alt="" />
  <div><h6>Canadian Dollar</h6>
  <span>CAD - R$</span></div>
  </li>
 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/CHF.svg" alt="" />
  <div><h6>Swiss Franc</h6>
  <span>CHF - FR</span></div>
  </li>
  
 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/CLP.svg" alt="" />
  <div><h6>Chilean Peso</h6>
  <span>CLP - $</span></div>
  </li>

 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/CNY.svg" alt="" />
  <div><h6>Chinese Yuan</h6>
  <span>CNY - ¥</span></div>
  </li>

 <li><img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/CZK.svg" alt="" />
  <div><h6>Czech Koruna</h6>
  <span>CZK - KČ</span></div>
  </li>

<li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/DKK.svg" alt="" />
    <div>
      <h6>Danish Krone</h6>
      <span>DKK - KR</span>
    </div>
    </li>

<li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/EUR.svg" alt="" />
    <div>
      <h6>Euro</h6>
      <span>EUR - €</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/GBP.svg" alt="" />
    <div>
      <h6>Pound Sterling</h6>
      <span>GBP - £</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/HKD.svg" alt="" />
    <div>
      <h6>Hong Kong Dollar</h6>
      <span>HKD - $</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/HUF.svg" alt="" />
    <div>
      <h6>Hungarian Forint</h6>
      <span>HUF - FT</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/IDR.svg" alt="" />
    <div>
      <h6>Indonesian Rupiah</h6>
      <span>IDR - RP</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/ILS.svg" alt="" />
    <div>
      <h6>Israeli New Shekel</h6>
      <span>ILS - ₪</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/INR.svg" alt="" />
    <div>
      <h6>Indian Rupee</h6>
      <span>INR - ₹</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/JPY.svg" alt="" />
    <div>
      <h6>Japanese Yen</h6>
      <span>JPY - ¥</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/KRW.svg" alt="" />
    <div>
      <h6>South Korean Won</h6>
      <span>KRW - ₩</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/MXN.svg" alt="" />
    <div>
      <h6>Mexican Peso</h6>
      <span>MXN - $</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/MYR.svg" alt="" />
    <div>
      <h6>Malaysian Ringgit</h6>
      <span>MYR - RM</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/NOK.svg" alt="" />
    <div>
      <h6>Norwegian Krone</h6>
      <span>NOK - KR</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/NZD.svg" alt="" />
    <div>
      <h6>New Zealand Dollar</h6>
      <span>NZD - $</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/PHP.svg" alt="" />
    <div>
      <h6>Philippine Peso</h6>
      <span>PHP -  ₱</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/PKR.svg" alt="" />
    <div>
      <h6>Pakistani Rupee</h6>
      <span>PKR - Rs</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/PLN.svg" alt="" />
    <div>
      <h6>Polish Złoty</h6>
      <span>PLN - Zł</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/RUB.svg" alt="" />
    <div>
      <h6>Russian Ruble</h6>
      <span>RUB - ₽</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/SEK.svg" alt="" />
    <div>
      <h6>Swedish Krona </h6>
      <span>SEK - KR</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/SGD.svg" alt="" />
    <div>
      <h6>Singapore Dollar </h6>
      <span>SGD - S$</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/THB.svg" alt="" />
    <div>
      <h6>Thai Baht </h6>
      <span>THB - ฿</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/TRY.svg" alt="" />
    <div>
      <h6>Turkish Lira </h6>
      <span>TRY - ₺</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/TWD.svg" alt="" />
    <div>
      <h6>New Taiwan Dollar </h6>
      <span>TWD - NT$</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/ZAR.svg" alt="" />
    <div>
      <h6>South African Rand</h6>
      <span>ZAR - R</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/VND.svg" alt="" />
    <div>
      <h6>Vietnamese Dong</h6>
      <span>VND - ₫</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/MAD.svg" alt="" />
    <div>
      <h6>Moroccan Dirham</h6>
      <span>MAD - MAD</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/IRR.svg" alt="" />
    <div>
      <h6>Iranian Rial</h6>
      <span>IRR - IRR</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/ARS.svg" alt="" />
    <div>
      <h6>Argentine Peso</h6>
      <span>ARS - ARS</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/RON.svg" alt="" />
    <div>
      <h6>Romanian Leu</h6>
      <span>RON - RON</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/UAH.svg" alt="" />
    <div>
      <h6>Ukrainian Hryvnia</h6>
      <span>UAH - UAH</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/NGN.svg" alt="" />
    <div>
      <h6>Nigerian Naira</h6>
      <span>NGN - NGN</span>
    </div>
    </li>
  
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/AED.svg" alt="" />
    <div>
      <h6>United Arab Emirates Dirham</h6>
      <span>AED - AED</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/COP.svg" alt="" />
    <div>
      <h6>Colombian Peso</h6>
      <span>COP - COP</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/EGP.svg" alt="" />
    <div>
      <h6>Egyptian Pound</h6>
      <span>EGP - EGP</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/SAR.svg" alt="" />
    <div>
      <h6>Saudi Riyal</h6>
      <span>SAR - SAR</span>
    </div>
    </li>
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/BDT.svg" alt="" />
    <div>
      <h6>Bangladeshi Taka</h6>
      <span>BDT - BDT</span>
    </div>
    </li>
  
  
    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/GHS.svg" alt="" />
    <div>
      <h6>Ghanaian Cedi</h6>
      <span>GHS - GHS</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/BGN.svg" alt="" />
    <div>
      <h6>Bulgarian Lev</h6>
      <span>BGN - BGN</span>
    </div>
    </li>

    <li>
    <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/VES.svg" alt="" />
    <div>
      <h6>Sovereign Bolivar</h6>
      <span>VES - VES</span>
    </div>
    </li>

  </ul>
</div>
<div id="crypto-cur">
<header>Cryptocurrencies</header>
  <ul><li><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
  <div><h6>Bits</h6>
  <span>BITS</span></div>
  </li>

 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="" />
    <div>
      <h6>United State Dollar</h6>
      <span>USD - $</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="" />
    <div>
      <h6>Cardano</h6>
      <span>ADA</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="" />
    <div>
      <h6>Binance Coin</h6>
      <span>BNB</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="" />
    <div>
      <h6>Polkadot</h6>
      <span>DOT</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="" />
    <div>
      <h6>XRP</h6>
      <span>XRP</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png" alt="" />
    <div>
      <h6>Chainlink</h6>
      <span>LINK</span>
    </div>
    </li>

 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="" />
    <div>
      <h6>Litecoin</h6>
      <span>LTC</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/512.png" alt="" />
    <div>
      <h6>Stellar</h6>
      <span>XLM</span>
    </div>
    </li>

 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png" alt="" />
    <div>
      <h6>Bitcoin Cash</h6>
      <span>BCH</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" alt="" />
    <div>
      <h6>Uniswap</h6>
      <span>UNI</span>
    </div>
    </li>
    
 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="" />
    <div>
      <h6>Dogecoin</h6>
      <span>DOGE</span>
    </div>
    </li>

 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png" alt="" />
    <div>
      <h6>Smooth Love Potion</h6>
      <span>SLP</span>
    </div>
    </li>

 <li>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png" alt="" />
    <div>
      <h6>Axie Infinity</h6>
      <span>AXS</span>
    </div>
    </li>
    
    
    </ul>
</div>
</section>

    </section>
  </div>
  )
}


