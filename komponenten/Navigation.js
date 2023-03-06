import Link from 'next/link'
import Image from 'next/Image'


export default function Navigation() {
 
  return (
  
    
    <div className=" sticky-top d-flex justify-content-center" style={{paddingTop: "20px"}}>
    
    <div className="linkDiv">
    
          <div className="link">
          <Link href="/inspiration" class="paper-btn btn-primary-outline text-decoration-none text-black" >
            Die Inspiration
          </Link>
          </div>
    
          <div className="link">
          <Link href="/bilder" class="paper-btn btn-primary-outline text-decoration-none text-black" >
            Bilder
          </Link>
          </div>
    
          <div className="link">
          <Link href="/skizze" class="paper-btn btn-primary-outline text-decoration-none text-black" >
            Skizzen
          </Link>
          </div>

          <div className="link">
          <Link href="/harteArbeit" class="paper-btn btn-primary-outline text-decoration-none text-black" >
            Die Arbeit
          </Link>
          </div>

          <div className="link">
          <Link href="/harteArbeit" class="paper-btn btn-primary-outline text-decoration-none text-black" >
            Material
          </Link>
          </div>

        </div>
    
     
  </div>
  
  )
  
}

