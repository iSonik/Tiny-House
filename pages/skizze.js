import Image from 'next/image'
import HausSkizze from '../public/bilder/haus2.png'
import HausSkizze1 from '../public/bilder/haus1.png'

export default function Skizze() {
  return (
    <div>
      <div className="skizzeBild">
        <img src={HausSkizze} alt="Card example image"></img>
      </div>
      <div className="skizzeBild1">

        <Image src={HausSkizze1}  fill alt="Card example image"></Image>
      </div>
      <p className="hollow">...<br></br>...<br></br>...<br></br>...</p>
    </div>
  )
}
