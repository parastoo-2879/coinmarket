import './master.css'

export default function Lists(){
  return(
    <section id="items" className='row col-12 '>

<span className=' col-1 d-flex justify-content-center'>#</span>
<span className=' col-2 col-lg-1 d-flex justify-content-center'>Name</span>
<span className=' col-4 col-lg-2 d-flex justify-content-center'>Price</span>
<span className=' col-4 col-lg-2 d-flex justify-content-center'>1h%</span>
<span className=' d-none d-lg-flex col-lg-2  justify-content-center'>24h%</span>
<span className=' d-none d-lg-flex col-lg-2 justify-content-center'>7d%</span>
<span className=' d-none d-lg-flex col-lg-2 justify-content-center'>Volume(24h)</span>


    </section>
  )
}
