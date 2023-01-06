import "./master.css"
export default function Buttons(){
  return(
<section>
<ListOfButtons/>

</section>
  )
}

// ********************************************
// Buttons
function ListOfButtons(){
  return(
    <div className=" d-none d-xl-flex row col-12 " id="listofbuttons">
<section className="d-flex   col-2 part">
  <span className=" d-none col-6  p-2 justify-content-center align-items-center border mr-1 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#A6B0C3" viewBox="0 0 24 24" style={{marginTop:"-2px"}} className="sc-aef7b723-0  fKbUaI"><path d="M21.288 8.9542L15.3871 8.05451L12.7512 2.44829C12.6745 2.31177 12.5653 2.19861 12.4342 2.11998C12.3031 2.04136 12.1547 2 12.0037 2C11.8527 2 11.7043 2.04136 11.5732 2.11998C11.442 2.19861 11.3328 2.31177 11.2561 2.44829L8.61526 8.05451L2.7143 8.9542C2.56041 8.9775 2.41581 9.04551 2.29684 9.15053C2.17786 9.25555 2.08927 9.3934 2.04106 9.54849C1.99286 9.70358 1.98697 9.86973 2.02406 10.0281C2.06115 10.1866 2.13975 10.3309 2.25095 10.4449L6.52188 14.8113L5.51436 20.978C5.4881 21.1388 5.50524 21.3041 5.56384 21.4552C5.62244 21.6063 5.72017 21.7372 5.84597 21.8331C5.97177 21.9289 6.12063 21.986 6.27571 21.9977C6.4308 22.0095 6.58592 21.9755 6.72355 21.8996L12.0012 18.9889L17.2788 21.8996C17.4164 21.9755 17.5715 22.0095 17.7266 21.9977C17.8817 21.986 18.0305 21.9289 18.1563 21.8331C18.2822 21.7372 18.3799 21.6063 18.4385 21.4552C18.4971 21.3041 18.5142 21.1388 18.488 20.978L17.4804 14.8113L21.7514 10.4449C21.8625 10.331 21.9412 10.1868 21.9783 10.0285C22.0155 9.87024 22.0098 9.7042 21.9617 9.54915C21.9137 9.39411 21.8254 9.25624 21.7066 9.1511C21.5878 9.04597 21.4434 8.97777 21.2897 8.9542H21.288Z"></path></svg>
  <span className="col-9 p-0 pl-1" >Watchlist</span>
  </span>
 
  <span className="col-8 d-flex p-2 justify-content-center align-items-center border mr-1 ">
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#a6b0c3" class="sc-aef7b723-0 fKbUaI"><path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#a6b0c3"></path><path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#a6b0c3"></path></svg>
  <span className="col-9 p-0 pl-1" >Watchlist</span>
  </span>
 
</section>
<Menu/>
    </div>
  )
}

// ********************************************
// menu 
function Menu(){
  return(
   <section id="Menus" className="col-10 row">
     <ul className="col-8 row  justify-content-between ml-1">
      <li className=""><a href="">Cryptocurrencies</a></li>
      <li><a href="">Categories</a></li>
      <li><a href="">DeFi</a></li>
      <li><a href="">NFT</a></li>
      <li><a href="">Metaverse</a></li>
      <li><a href="">Polkadot</a></li>
      <li><a href="">BNB Chain</a></li>
      <li><a href="">Solana</a></li>
      <li><a href="">Avlanche</a></li>
    </ul>
    <section className="col-4  row ml-4 p-0 justify-content-between">
      <div >
        <span>Show rows</span>
        <span className=" ml-1 selection">100<i class="bi bi-chevron-down"></i></span>
      </div>
      <span className=" ml-1 selection"><i class="bi bi-filter-left"></i> Filters</span>
      <span className=" ml-1 selection"><i class="bi bi-table"></i>Customize</span>
      <span className=" d-none ml-1 selection"><i class="bi bi-list"></i><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16699 2.66669C3.61471 2.66669 3.16699 3.1144 3.16699 3.66669V6.33335C3.16699 6.88564 3.61471 7.33335 4.16699 7.33335H6.83366C7.38594 7.33335 7.83366 6.88564 7.83366 6.33335V3.66669C7.83366 3.1144 7.38594 2.66669 6.83366 2.66669H4.16699ZM10.167 2.66669C9.61471 2.66669 9.16699 3.1144 9.16699 3.66669V6.33335C9.16699 6.88564 9.61471 7.33335 10.167 7.33335H12.8337C13.3859 7.33335 13.8337 6.88564 13.8337 6.33335V3.66669C13.8337 3.1144 13.3859 2.66669 12.8337 2.66669H10.167ZM9.16699 9.66669C9.16699 9.1144 9.61471 8.66669 10.167 8.66669H12.8337C13.3859 8.66669 13.8337 9.1144 13.8337 9.66669V12.3334C13.8337 12.8856 13.3859 13.3334 12.8337 13.3334H10.167C9.61471 13.3334 9.16699 12.8856 9.16699 12.3334V9.66669ZM4.16699 8.66669C3.61471 8.66669 3.16699 9.1144 3.16699 9.66669V12.3334C3.16699 12.8856 3.61471 13.3334 4.16699 13.3334H6.83366C7.38594 13.3334 7.83366 12.8856 7.83366 12.3334V9.66669C7.83366 9.1144 7.38594 8.66669 6.83366 8.66669H4.16699Z" fill="currentColor"></path></svg></span>
    </section>
   </section>
  )
}