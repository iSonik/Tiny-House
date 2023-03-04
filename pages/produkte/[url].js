import {useRouter} from 'next/router'
import jsondb from '../../jsondb/pictures'
import Link from 'next/link'
import Image from 'next/image'

export default function Produktseite() {

    const router = useRouter()
    const {url} = router.query
    const picture = jsondb.pictures.find((a) => a.url === url)
    if(picture) {

  return (

    <div>
      <div className="bildDecoration">
        <div className="urlBild">
            <Link href="/harteArbeit">
                <Image className='border border-4 border-white shadow' src={picture.bild} alt={picture.name} width={710} height={840} />
            </Link>
            <div class="card-body">
                  <h4 style={{color: "black", backgroundColor:"white", width:"auto"}} class="card-title mt-2 border border-dark ">{picture.title}</h4>
                  <p class="card-text border border-dark" style={{backgroundColor: "white", width:"600px"}}>{picture.beschreibung}</p>
                  <p><Link href="/harteArbeit" class="paper-btn btn-secondary text-decoration-none">zurück</Link></p>
                  <p className="hollow">...<br></br>...<br></br>...<br></br>...</p>      
            </div>
        </div>
    </div>
    </div>
  )
    }
    else { 
      return (
<></>      )
    }
}
