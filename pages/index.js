export default function Home() {
  return (
    <div style={{marginBottom:"100px"}}>
      <div className="HausCover" >
   

        <h1
          class="shadow shadow-5 rounded-5"
          style={{ fontFamily: "arial", color: "white" }}
        >
          FASZINATION TINY HÄUSER
        </h1>
        <div style={{ paddingBottom: "10px" }}>
          <hr class="border border-3 border-white rounded-3"></hr>
        </div>
        <p
          className="coverText"
          style={{ color: "white", fontFamily: "arial" }}
        >
          In den letzten Jahren hat sich eine wachsende Faszination <br />
          für Tiny Häuser entwickelt, da sie eine nachhaltige und <br />
          erschwingliche Alternative zu herkömmlichen Wohnhäusern darstellen.{" "}
          <br />
          Diese kleinen Häuser, die oft auf Rädern oder einer festen <br />
          Grundlage gebaut werden, haben typischerweise eine Größe <br />
          von 9 bis 38 Quadratmetern und sind somit optimal für Einzelpersonen{" "}
          <br />
          oder Paare, die ihr Leben vereinfachen möchten. <br /> <br />
          Trotz ihrer geringen Größe sind viele Tiny Häuser <br />
          funktional und stilvoll gestaltet. <br />
          Sie bieten clevere Aufbewahrungslösungen und multifunktionale Möbel,{" "}
          <br />
          um den begrenzten Raum optimal zu nutzen. <br />
          <br />
          Das steigende Interesse an Tiny Häusern hat auch die <br />
          Entwicklung innovativer Designs und Technologien vorangetrieben,{" "}
          <br />
          um das Leben in diesen kleinen Wohnungen noch komfortabler und
          effizienter zu gestalten.{" "}
        </p>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="kontaktText">
        <div>
          <h3
            className="coverText2"
            style={{ color: "white", fontFamily: "arial" }}
          >
            Fragen?
          </h3>
          <br />
          Kontaktieren Sie uns für einen Besichtigungstermin, <br />
          Anfragen zu unseren aktuellen Leistungen und für alle weiteren Fragen.
        </div>

        <div>
          <div
            href="/skizze"
            style={{ backgroundColor: "transparent" }}
            class="paper-btn btn-primary border border-white text-decoration-none shadow text-white"
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="mailto: johannkirr3110@gmail.com"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

   
    </div>
  );
}
