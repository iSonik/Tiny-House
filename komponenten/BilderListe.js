import jsondb from '../jsondb/pictures'
import Image from 'next/image'
import Link from 'next/link'


export default function BilderListe() {
  
  return (
    <div className='bilderDiv'>
       
            {jsondb.pictures.map((picture) => (
                <div className="einzelBild">
                    <Link href={`/produkte/${picture.url}`} passHref>
                        <Image variant="top" src={picture.bild} width={260} height={200} alt="Skizze" class="border border-white"/>
                    </Link>   
                  <h5 class="card-text border border-1 border-dark shadow" style={{backgroundColor: "white", display:" flex", overflow: "hidden", width:"250px"}}>{picture.title}</h5>    
                </div> 
            ))}
        
    </div> 
  )
}

