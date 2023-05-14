import {useRouter} from 'next/router'
import jsonInside from '../../jsondb/inside'
import Link from 'next/link'
import Image from 'next/image'


export default function bilderListe() {

    const router = useRouter()
    const {inside} = router.query
    const picture = jsonInside.inside.find((a) => a.url === inside)

    if(picture) {

  return (
    <div>
      <div className="bildDecoration">
        <div className="urlBild">
            <Link href="/inside">
                <Image className='border border-4 border-white shadow' src={picture.bild} alt={picture.name} width={410} height={540} />
            </Link>
            <div className="card-body">
                  <h4 style={{color: "black", backgroundColor:"white", width:"auto"}} className="card-title mt-2 border border-dark ">{picture.title}</h4>
                  <p className="card-text border border-dark" style={{backgroundColor: "white", width:"440px", padding:"10px"}}>{picture.beschreibung}</p>
                  <p><Link href="/inside" className="paper-btn btn-secondary text-decoration-none">zurück</Link></p>
                  <p className="hollow">...<br></br>...<br></br>...<br></br>...</p>      
            </div>
        </div>
    </div>
    </div>
  )
  }
}