import Image from 'next/Image'
import HausSkizze from '../public/bilder/haus2.png'
import HausSkizze1 from '../public/bilder/haus1.png'

export default function Skizze() {
  return (
    <div>
      <div className="skizzeBild">
        <Image src={HausSkizze} alt="Card example image"></Image>
      </div>
      <div className="skizzeBild1">
        <Image src={HausSkizze1} alt="Card example image"></Image>
      </div>
      <p className="hollow">...<br></br>...<br></br>...<br></br>...</p>
    </div>
  )
}
