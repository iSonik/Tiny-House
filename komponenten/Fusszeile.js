import Image from "next/image"
import Link from 'next/link'


export default function Fusszeile() {
    return (
      <div >
      <div className="d-flex justify-content-center fixed-bottom text-secondary bg-white">
        <h6 className="footer"> ✉️ email@gmail.com | 
        {/* <Link href="http://google.com">
          <Image src={"/../public/bilder/instagram.png"} width={20} height={20}></Image>
          </Link> */}
          </h6>
      </div>
      </div>
    )
  }