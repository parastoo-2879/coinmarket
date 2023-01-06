



import "./master.css"
import logo from "./../img/logo.jpg"





export default function Bottomheader(){
return(
  <header className="row justify-content-between p-0 m-0 "id="Bottomheader">
<Logo/>
<MobileMenu/>
<Menu />
<Search/>
<Hammenu/>
  </header>
)
}
// *****************************************************

// logo

function Logo(){
  return(
    <figure className="col-5 col-lg-2 h-100  d-flex align-items-center ">
      <img src={logo} alt="CoinMarketCap" className="img-fluid " />
    </figure>
  )
}
// **********************************************

// menu

function Menu(){
  return(
    <nav className="d-none d-lg-block col-lg-6  h-100" id="main-menu">
      <ul className="row align-items-center h-100 ">
        <li className="col-3 h-100 d-flex align-items-center"id="Cryptocurrencies"><a href="" >Cryptocurrencies</a>
        <Submenu1/>
        </li>
        <li className="col-2 h-100 d-flex align-items-center" id="exchange"><a href="">Exchange</a>
        <Submenu2/>
        </li>
        <li className="col-2 h-100 d-flex align-items-center" id="Community"><a href="">Community</a>
        <Submenu3/>
        </li>
        <li className="col-2 h-100 d-flex align-items-center" id="Products"><a href="">Products</a>
        <Submenu4/>
        </li>
        <li className="col-2 h-100 d-flex align-items-center" id="learn"><a href="">Learn</a>
        <Submenu5/>
        </li>
      </ul>
    </nav>
  )
}


// *********************************************

// search

function Search(){
  return(
    <section className="d-none d-lg-flex col-lg-4 row  h-100 m-0 align-items-center justify-content-around" id="search-sec">
<span className="col-3 row">
  <span>Watchlist</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="#A6B0C3" height="24px" width="24px" viewBox="0 0 24 24" class="sc-aef7b723-0 fKbUaI">
    <path d="M21.288 8.9542L15.3871 8.05451L12.7512 2.44829C12.6745 2.31177 12.5653 2.19861 12.4342 2.11998C12.3031 2.04136 12.1547 2 12.0037 2C11.8527 2 11.7043 2.04136 11.5732 2.11998C11.442 2.19861 11.3328 2.31177 11.2561 2.44829L8.61526 8.05451L2.7143 8.9542C2.56041 8.9775 2.41581 9.04551 2.29684 9.15053C2.17786 9.25555 2.08927 9.3934 2.04106 9.54849C1.99286 9.70358 1.98697 9.86973 2.02406 10.0281C2.06115 10.1866 2.13975 10.3309 2.25095 10.4449L6.52188 14.8113L5.51436 20.978C5.4881 21.1388 5.50524 21.3041 5.56384 21.4552C5.62244 21.6063 5.72017 21.7372 5.84597 21.8331C5.97177 21.9289 6.12063 21.986 6.27571 21.9977C6.4308 22.0095 6.58592 21.9755 6.72355 21.8996L12.0012 18.9889L17.2788 21.8996C17.4164 21.9755 17.5715 22.0095 17.7266 21.9977C17.8817 21.986 18.0305 21.9289 18.1563 21.8331C18.2822 21.7372 18.3799 21.6063 18.4385 21.4552C18.4971 21.3041 18.5142 21.1388 18.488 20.978L17.4804 14.8113L21.7514 10.4449C21.8625 10.331 21.9412 10.1868 21.9783 10.0285C22.0155 9.87024 22.0098 9.7042 21.9617 9.54915C21.9137 9.39411 21.8254 9.25624 21.7066 9.1511C21.5878 9.04597 21.4434 8.97777 21.2897 8.9542H21.288Z"></path></svg></span>
<span className="col-3 row">
  <span>Portfolio</span>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#a6b0c3" class="sc-aef7b723-0 fKbUaI"><path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#a6b0c3"></path><path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#a6b0c3"></path></svg>
</span>
<input type="text" placeholder="Search" className="col-6 h-50" />
    </section>
  )
}

// *********************************************
//  submenu1

function Submenu1(){
  return(
    <ul id="submenu11">
      <li className="row">
<div className="col-6">
  <header><h5>CRYPTOCURRENCIES</h5></header>
  <ul>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg" alt="" /><a href="">Ranking</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg" alt="" /><a href="">Recently Added</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg" alt="" /><a href="">Categories</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg" alt="" /><a href="">Spotlight</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg" alt="" /><a href="">Gainers & Losers</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg" alt="" /><a href="">Global Charts</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg" alt="" /><a href="">Historical Snapshots</a></li>
  </ul>
</div>
<div className="col-6">
<section>
<header><h5>NFT</h5></header>
  <ul>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg" alt="" /><a href="">Overall NFT Stats</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg" alt="" /><a href="">Top Collections</a></li>
    <li><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="40" width="40" viewBox="0 0 40 40" class="sc-aef7b723-0 hykNgA"><svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#16C784"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 9.33325C12.2065 9.33325 11.8334 9.70635 11.8334 10.1666V10.9999H11C10.0796 10.9999 9.33337 11.7461 9.33337 12.6666V20.9999C9.33337 21.9204 10.0796 22.6666 11 22.6666H21C21.9205 22.6666 22.6667 21.9204 22.6667 20.9999V12.6666C22.6667 11.7461 21.9205 10.9999 21 10.9999H20.1667V10.1666C20.1667 9.70635 19.7936 9.33325 19.3334 9.33325C18.8731 9.33325 18.5 9.70635 18.5 10.1666V10.9999H13.5V10.1666C13.5 9.70635 13.1269 9.33325 12.6667 9.33325ZM12.6667 13.4999C12.2065 13.4999 11.8334 13.873 11.8334 14.3333C11.8334 14.7935 12.2065 15.1666 12.6667 15.1666H19.3334C19.7936 15.1666 20.1667 14.7935 20.1667 14.3333C20.1667 13.873 19.7936 13.4999 19.3334 13.4999H12.6667Z" fill="white"></path></svg></svg>
<a href="">Upcoming Sales</a></li>
  </ul>
</section>

<section>
<header><h5>On Chain Data</h5></header>
  <ul>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexscan.svg" alt="" /><a href="">Dex Pairs</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRanking.svg" alt="" /><a href="">Chain Ranking</a></li>
  </ul>
</section>
</div>

<div className="col-8">
  <ul>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPriceEstimateIcon.svg" alt="" /><a href="">Price Estimates</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPolkadotIcon.svg" alt="" /><a href="">Polkadot Parachains </a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuLegalIcon.svg" alt="" /><a href="">Legal Tender Countries</a></li>
    <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg" alt="" /><a href="">Fiats / Companies Rankings</a></li>
  </ul>
</div>
      </li>
    </ul>
  )
}

// *********************************************

function Submenu2(){
  return(
    <ul id="submenu22" className="submenu p-0">
      <li className="row">
        <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg" alt="" />
        <a href="">Spot</a>
      </li>
      <li className="row">
        <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg" alt=""/>
        <a href="">Derivatives</a>
      </li>
      <li className="row">
        <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg" alt="" />
        <a href="">DEX</a>
      </li>
      </ul>
  )
}

// ********************************************

// submenu3
function  Submenu3(){
  return(
    <ul className="submenu" id="submenu33">
<li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg" alt="" />
<a href="">Feeds</a></li>
<li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg" alt="" />
<a href="">Article</a></li>
    </ul>
  )
}

// **********************************************
// submenu4

function Submenu4(){
  return(
    <ul id="submenu44">
    <li className="row">
<div className="col-4">
<header><h5>PRODUCTS</h5></header>
<ul>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg" alt="" /><a href="">Converter</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMobileAppIcon.svg" alt="" /><a href="">Mobile Apps</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg" alt="" /><a href="">Blockchain Explorer</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuJobsBoardIcon.svg" alt="" /><a href="">Jobs Board</a></li>
</ul>
</div>
<div className="col-4">
<header><h5>CAMPAIGNS</h5></header>
<ul>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg" alt="" /><a href="">Free Airdrops</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg" alt="" /><a href="">Diamond Rewards</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuReferralIcon.svg" alt="" /><a href="">Referral Program</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg" alt="" /><a href="">Learn & Earn</a></li>
</ul>
</div>
<div className="col-4">
<header><h5>CALENDARS</h5></header>
<ul>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg" alt="" /><a href="">ICO Calendar</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg" alt="" /><a href="">Events Calendar</a></li>
</ul>
</div>
<div className="col-4">
<ul>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.light.svg" alt="" /><a href="">Crypto API</a></li>
  <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.light.svg" alt="" /><a href="">Site Widgets</a></li>
</ul>
</div>
</li>
</ul>
  )
}

// ********************************************
// submenu5
 function Submenu5(){
  return(
    <ul id="submenu55">
<li>
  <div><ul>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg" alt="" />
      <a href="">Alexandria</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg" alt="" />
      <a href="">News</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg" alt="" />
      <a href="">Research</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConferenceIcon.svg" alt="" />
      <a href="">Conference</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg" alt="" />
      <a href="">Videos</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMarketUpdatesIcon.svg" alt="" />
      <a href="">Market Updates</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg" alt="" />
      <a href="">Glossary</a>
    </li>
    <li>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBuyIcon.svg" alt="" />
      <a href="">Where to Buy</a>
    </li>
    
    </ul></div>
    <div>
      <ul>
        <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsletterIcon.light.svg" alt="" />
        <a href="">Newsletter</a></li>
        <li><img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMethodologyIcon.light.svg" alt="" />
        <a href="">Methodology</a></li>
      </ul>
    </div>
</li>
    </ul>
  )
 }
//  *****************************************************************
// Mobile menu
function MobileMenu(){
  function ShowList(){
document.getElementById("hamMenu").style.transform="translateX(0)"
  }
  return(
<>
<section className=" d-flex justify-content-between align-items-center  m-0 p-0 d-lg-none col-3 h-100 "
    id="Mobile">
      <i className="bi bi-search"></i>
      <img src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg" alt=""  />
      <i className="bi bi-list" onClick={ShowList}></i>
    </section>

</>
  )
}

// Hammenu
function Hammenu(){

  function Close(){
document.getElementById("hamMenu").style.transform="translateX(-100%)"
  }

  function showitemslist(e){
    let divs = document.querySelectorAll("#hamMenu section>ul>li>div")
    divs.forEach((val)=>{
      val.setAttribute("data-status","off")
      if(val.getAttribute("data-status")=="off"){
        val.style.display="none"
      }
    })
    e.target.nextElementSibling.style.display="block"
    e.target.nextElementSibling.setAttribute("data-status","on")
  
    // console.log(divs)
  }

  return(
    <menu className="w-100 m-0 p-0 d-lg-none " id="hamMenu">
    <header className="row border m-0 p-0 justify-content-between align-items-center ">
      <figure className="h-100 m-0">
        <img src={logo} alt="" />
      </figure>
      <i className="bi bi-x-lg col-2" onClick={Close}></i>
    </header>
    <section>
      <ul className="col-12 m-0 p-0 ">
        <li className="col-12 "  >
          <h5 onClick={showitemslist}>Cryptocurrencies</h5>
          <div className="col-12 row p-0 m-0 ">
            <header className="col-12  ">
              <h5 className="text-secondary">CRYPTOCURRENCIES</h5>
            </header>
            <ul className="col-12">
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Ranking</h5>
              </li>
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Recently Added</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Categories</h5>
              </li>
              <li className="row col-12  mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Spotlight</h5>
              </li>
              <li className="row col-12 mb-1   p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Gainers & Losers</h5>
              </li>
              <li className="row col-12   mb-1 p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Global Charts</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Historical Snapshots</h5>
              </li>
              <hr />
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPriceEstimateIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Price Estimates</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPolkadotIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Polkadot Parachains</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuLegalIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Legal Tender Countries</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Fiat / Companies Rankings</h5>
              </li>
           <li className="col-12 m-0 p-0 mt-3">
           <h5 className="text-secondary mb-3">NFT</h5>
            </li>
            <li className="row col-12 p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Overall NFT Stats</h5>
              </li>
            <li className="row col-12 p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Top Collections</h5>
              </li>
            <li className="row col-12 p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Upcoming Sales</h5>
              </li>
        <hr />
        <li className="col-12 m-0 p-0">
           <h5 className="text-secondary mt-3">On Chain Data</h5>
            </li>
            <li className="row col-12 p-0 mt-3 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Chain Ranking</h5>
              </li>
           

            </ul>
          </div>
        </li>

        <li className="col-12" >
        <h5 onClick={showitemslist}>Exchange</h5>
          <div className="col-12 row p-0 m-0 ">
            <ul className="col-12">
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Spot</h5>
              </li>
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Derivatives</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">DEX</h5>
              </li>
            </ul>
          </div>
        </li>

        <li className="col-12">
        <h5 onClick={showitemslist}>Community</h5>
          <div className="col-12 row p-0 m-0 ">
            <ul className="col-12">
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Feeds</h5>
              </li>
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Article</h5>
              </li>
            </ul>
          </div>
        </li>

        <li className="col-12 ">
          <h5 onClick={showitemslist}>Products</h5>
          <div className="col-12 row p-0 m-0 ">
            <header className="col-12  ">
              <h5 className="text-secondary">PRODUCTS</h5>
            </header>
            <ul className="col-12">
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Converter</h5>
              </li>
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMobileAppIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Mobile App</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Blockchain Explorer</h5>
              </li>
              <li className="row col-12  mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuJobsBoardIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Jobs Board</h5>
              </li>
              <hr />
              <li className="row col-12 mb-1   p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.light.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Crypto API</h5>
              </li>
              <li className="row col-12   mb-1 p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.light.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Site Widgets</h5>
              </li>
              <li className="col-12 m-0 p-0 mt-3">
           <h5 className="text-secondary mb-3">COMPAIGNS</h5>
            </li>





              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Free Airdrops</h5>
              </li>
              <hr />
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Diamond Rewards</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuReferralIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Referral Program</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Learn & Earn</h5>
              </li>
              <hr />
              <li className="col-12 m-0 p-0 mt-3">
           <h5 className="text-secondary mb-3">CALENDARS</h5>
            </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">ICO Calendar</h5>
              </li>
        
            <li className="row col-12 p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Events Calendar</h5>
              </li>
            </ul>
          </div>
        </li>

        <li className="col-12 ">
          <h5  onClick={showitemslist}>Learn</h5>
          <div className="col-12 row p-0 m-0 ">
            <ul className="col-12">
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Alexandria</h5>
              </li>
              <li className="row mb-1 col-12  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">News</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Research</h5>
              </li>
              <li className="row col-12  mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConferenceIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Conference</h5>
              </li>
              <li className="row col-12 mb-1   p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Videos</h5>
              </li>
              <li className="row col-12   mb-1 p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMarketUpdatesIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Market Updates</h5>
              </li>
              <li className="row col-12 mb-1  p-0">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Glossary</h5>
              </li>
             
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBuyIcon.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Where to Buy</h5>
              </li>
              <hr />
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsletterIcon.light.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Newsletter</h5>
              </li>
              <li className="row col-12   p-0 mb-1">
                <figure className="col-2  d-flex align-items-center m-0 justify-content-end">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMethodologyIcon.light.svg" alt="" />
                </figure>
                <h5 className="col-10 d-flex align-items-center">Methodology</h5>
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </section>
  </menu>
  )
}
