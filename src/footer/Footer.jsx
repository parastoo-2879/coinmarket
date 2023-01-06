import "./master.css"
export default function Footer(){
  return(
    <section>
<Footer1/>
<Footer2/>
    </section>
  )
}
// *******************************************
function Footer1(){
  return(
    <section className="row p-3 p-lg-5 m-0   align-items-center" id="footer1">
      <div className="col-12 col-lg-6 row p-0 m-0   "><p className="col-12 texts mb-5 pt-5">Be the first to know about
<strong> crypto news every day</strong></p>
<span className="col-12 mb-5">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</span>
<button className="btn btn-primary col-12 col-lg-3 subscribe ">Subscribe now</button>
</div>

<figure className=" col-12 col-lg-6">
  <img src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=8c2da88" alt="" className="col-12"/>
</figure>
    </section>
  )
}

// *******************************************

function Footer2(){
  return(
    <footer>
      <section className="row p-3 p-lg-5 m-0">
        <figure className=" col-12 col-lg-6">
          <img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=8c2da88" alt="" />
        </figure>
        <div className=" col-12 col-lg-6 row m-0   justify-content-around">
<div className=" col-5 col-lg-3 p-0 ">
  <h5 className="mb-3">Products</h5>
  <ul className=" col-12 p-0">
    <li className="mb-3"><a href="" className=" d-flex w-100">Blockchain Explorer</a></li>
    <li className="mb-3"><a href="" >Crypto API</a></li>
    <li className="mb-3"><a href="" >Crypto Indices</a></li>
    <li className="mb-3"><a href="" >Jobs Board</a></li>
    <li className="mb-3"><a href="" >Sitemap</a></li>
  </ul>
</div>
<div className="col-5 col-lg-3 p-0 ">
  <h5 className="mb-3">Company</h5>
  <ul className="col-12 p-0">
    <li className="mb-3"><a href="">About us</a></li>
    <li className="mb-3"><a href="">Terms of use</a></li>
    <li className="mb-3"><a href="">Privacy Policy</a></li>
    <li className="mb-3"><a href="">Community Rules</a></li>
    <li className="mb-3"><a href="">Disclaimer</a></li>
    <li className="mb-3"><a href="">Methodology</a></li>
    <li className="mb-3"><a href="">Careers</a><span id="hire">we're hiring!</span></li>
  </ul>
        </div>
        <div className="col-5 col-lg-3 p-0 ">
  <h5 className="mb-3">Support</h5>
  <ul className="col-12 p-0">
    <li className="mb-3"><a href="">Request Form</a></li>
    <li className="mb-3"><a href="">Contact Support</a></li>
    <li className="mb-3"><a href="">FAQ</a></li>
    <li className="mb-3"><a href="">Glossary</a></li>
  </ul>
</div>
        <div className="col-5 col-lg-3 p-0 ">
  <h5 className="mb-3">Social</h5>
  <ul className="col-12 p-0">
    <li className="mb-3"><a href="">Facebook</a></li>
    <li className="mb-3"><a href="">Twitter</a></li>
    <li className="mb-3"><a href="">Telegram</a></li>
    <li className="mb-3"><a href="">Instagram</a></li>
    <li className="mb-3"><a href="">Interactive Chat</a></li>
  </ul>
</div>
</div>

      </section>
      <p className="col-12">© 2022 CoinMarketCap. All rights reserved</p>
    </footer>
  )
}