import Navigation from '../komponenten/Navigation'
import Fusszeile from '../komponenten/Fusszeile'


export default function Layout({children}) {
  return (
    <div>
      <Navigation/>
        <div className="container">
          {children}
        </div>
      <Fusszeile/>
    </div>
  )
}
