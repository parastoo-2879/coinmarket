import "./local.css"
import "./master.css"

export default function Toptable() {
  return(
    <section id="top_wrapper">
      <Title/>
      <Slides/>
    </section>
  )
}

function Title (){

   function ShowNextPart(e){
  document.getElementById("slide_wrap").classList.toggle("toggleShow")
  e.target.children[0].classList.toggle("Movecircle")
   }


  return(
    <section id="title">
<div>
<h1>Today's Cryptocurrency Prices by Market Cap</h1>
<p>The global crypto market cap is $856.70B, a 0.28% increase over the last day.
  <a>Read More</a>
  </p>
</div>
<div className="d-flex h-50 justify-content-center align-items-center">
Hightlights  <span id="hl_button" onClick={ShowNextPart}><span id="circle"></span></span>
</div>
    </section>
  )
}


// ***********************************************
// Slides
function Slides(){
  return(
   <div id="slide_wrap" className="row">
     <section className=" slides    mb-2  mr-lg-4 ">
      <div>
        <header className="d-flex  justify-content-between">
         <div className="d-flex"><img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=8c2da88" alt="" /> <h5>Trending</h5></div>
         <a href=""> More <i class="bi bi-chevron-right"></i></a>
        </header>
      </div>
      <ul>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">1</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png" alt="" />
            <span className="pr-1 pl-1">STEPN</span>
            <span className="pr-1 pl-1 text-secondary">GMT</span>
          </div>
          <span className="d-flex col-2">0.66%</span>
        </li>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">2</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
            <span className="pr-1 pl-1">Bitcoin</span>
            <span className="pr-1 pl-1 text-secondary">BTC</span>
          </div>
          <span className="d-flex col-2">0.17%</span>
        </li>

        <li className="row  p-0 ">
          <div className="col-10 p-0">
            <span className="pr-2 pl-1 text-secondary">3</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="" />
            <span className="pr-1 pl-1">Solana</span>
            <span className="pr-1 pl-1 text-secondary">SOL</span>
          </div>
          <span className="d-flex col-2">0.07%</span>
        </li>
      </ul>
    </section>

     <section className=" slides   mb-2  mr-lg-4 ">
      <div>
        <header className="d-flex  justify-content-between">
         <div className="d-flex  "><img src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=8c2da88" alt="" className="mr-1"/> <h5>Recently Added</h5></div>
         <a href=""> More <i class="bi bi-chevron-right"></i></a>
        </header>
      </div>
      <ul>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">1</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22936.png" alt="" />
            <span className="pr-1 pl-1">STEPN</span>
            <span className="pr-1 pl-1 text-secondary">GMT</span>
          </div>
          <span className="d-flex col-2">0.66%</span>
        </li>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">2</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22935.png" alt="" />
            <span className="pr-1 pl-1">Bitcoin</span>
            <span className="pr-1 pl-1 text-secondary">BTC</span>
          </div>
          <span className="d-flex col-2">0.17%</span>
        </li>

        <li className="row  p-0 ">
          <div className="col-10 p-0">
            <span className="pr-2 pl-1 text-secondary">3</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22934.png" alt="" />
            <span className="pr-1 pl-1">Solana</span>
            <span className="pr-1 pl-1 text-secondary">SOL</span>
          </div>
          <span className="d-flex col-2">0.07%</span>
        </li>
      </ul>
    </section>

     <section className=" slides   mb-2    ">
      <div>
        <header className="d-flex  justify-content-between">
         <div className="d-flex  "><img src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=8c2da88" alt="" className="mr-1"/> <h5>Top Community Accounts</h5></div>
         <a href=""> More <i class="bi bi-chevron-right"></i></a>
        </header>
      </div>
      <ul>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">1</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22936.png" alt="" />
            <span className="pr-1 pl-1">STEPN</span>
            <span className="pr-1 pl-1 text-secondary">GMT</span>
          </div>
          <span className="d-flex col-2">0.66%</span>
        </li>
        <li className="row  p-0 ">
          <div className="col-10  p-0">
            <span className="pr-2 pl-1 text-secondary">2</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22935.png" alt="" />
            <span className="pr-1 pl-1">Bitcoin</span>
            <span className="pr-1 pl-1 text-secondary">BTC</span>
          </div>
          <span className="d-flex col-2">0.17%</span>
        </li>

        <li className="row  p-0 ">
          <div className="col-10 p-0">
            <span className="pr-2 pl-1 text-secondary">3</span>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/22934.png" alt="" />
            <span className="pr-1 pl-1">Solana</span>
            <span className="pr-1 pl-1 text-secondary">SOL</span>
          </div>
          <span className="d-flex col-2">0.07%</span>
        </li>
      </ul>
    </section>
   </div>
  )
}