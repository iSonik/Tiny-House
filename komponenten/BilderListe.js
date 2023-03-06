import jsondb from '../jsondb/pictures'
import Image from 'next/image'
import Link from 'next/link'


export default function BilderListe() {
  
  return (
    <div className='bilderDiv'>
        <div  className="row row-cols-3 mt-5">
            {jsondb.pictures.map((picture) => (
                <div className="mt-1 col" >
                  
                       <Link href={`/produkte/${picture.url}`} passHref>
                         <Image variant="top" src={picture.bild} width={180} height={100} class="border border-white" layout="responsive"/>
                       </Link>
                       <div class="card-body">
                          <h5 class="card-text border border-1 border-dark shadow mt-1" style={{backgroundColor: "white", display:" flex", overflow: "hidden"}}>{picture.title}</h5>
                       </div>
                     </div> 
            ))}
        </div>
      <br></br>
    </div> 
  )
}

