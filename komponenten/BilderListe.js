import jsondb from '../jsondb/pictures'
import Image from 'next/image'
import Link from 'next/link'


export default function BilderListe() {
  
  return (
    <div className='bilderDiv'>
        <div className="row row-cols-3 p-5">
            {jsondb.pictures.map((picture) => (
                <div className="mt-1 col" >
                       <Link href={`/produkte/${picture.url}`} passHref>
                         <Image variant="top" src={picture.bild} width={260} height={200} alt="Skizze" class="border border-white"/>
                       </Link>
                       <div className="card-body">
                          <h5 class="card-text border border-1 border-dark shadow mt-1" style={{backgroundColor: "white", display:" flex", overflow: "hidden", width:"250px"}}>{picture.title}</h5>
                       </div>
                     </div> 
            ))}
        </div>
      <br></br>
    </div> 
  )
}

