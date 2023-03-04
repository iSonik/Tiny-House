import Image from 'next/image'
import bild1 from '../public/bilder/cardBilder/bild1.jpg'
import Link from 'next/link'

export default function dieArbeit() {

  return (
    <div>
      <div class="row">
        <div class="collapsible">
            <input id="collapsible5" type="radio" name="collapsible"></input>
            <label for="collapsible5">First</label>
            <div class="collapsible-body">
            <Image className="bild1" src={bild1} width={710} height={840} quality={20}></Image>
            <div class="card-body">
                  <h4 style={{color: "black", backgroundColor:"white", width:"auto"}} class="card-title mt-2 border border-dark ">Feinarbeiten!</h4>
                  <p class="card-text border border-dark" style={{backgroundColor: "white", width:"600px"}}>Auch bei einem neuen Anhänger werden die Schweißnähte bei der Produktion nicht begradigt, daher muss man sie selber abschleifen, damit die Platten eben aufliegen</p>
            </div>
            </div>
        </div>
        <div class="collapsible">
            <input id="collapsible6" type="radio" name="collapsible"></input>
            <label for="collapsible6">Second</label>
            <div class="collapsible-body">
            <span>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola...</span>
            </div>
        </div>
        </div>
    </div>
  )
}

