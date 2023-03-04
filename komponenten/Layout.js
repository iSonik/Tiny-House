// import Head from 'next/Head'
import Navigation from '../komponenten/Navigation'
import Fusszeile from '../komponenten/Fusszeile'


export default function Layout({children}) {
  return (
    <div>
      {/* <Head>
        <title>Tiny Haus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Navigation/>
        <div className="container">
          {children}
        </div>
      <Fusszeile/>
    </div>
  )
}
