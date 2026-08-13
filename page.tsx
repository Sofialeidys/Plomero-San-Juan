"use client";

import { FormEvent, useState } from "react";

const SITE = {
  name: "AquaPro PR",
  location: "Puerto Rico",
  whatsapp: "17870000000", // REEMPLAZAR con el número real, incluyendo código de país
  phoneDisplay: "(787) 000-0000",
};

const services = [
  ["01", "Plomería de emergencia", "Atención rápida para situaciones que no pueden esperar: tuberías rotas, desbordes y averías urgentes."],
  ["02", "Reparación de fugas", "Localizamos y reparamos escapes visibles u ocultos para proteger tu propiedad y evitar desperdicio de agua."],
  ["03", "Destapes profesionales", "Destape de fregaderos, lavamanos, inodoros y líneas sanitarias con equipo profesional."],
  ["04", "Calentadores de agua", "Instalación, diagnóstico y reparación de calentadores eléctricos, de tanque y sin tanque."],
  ["05", "Inodoros y grifería", "Instalación y reparación de inodoros, mezcladoras, duchas, válvulas y accesorios."],
  ["06", "Tuberías y repiping", "Reparación y reemplazo de líneas de agua y desagüe para hogares y comercios."],
  ["07", "Inspecciones", "Evaluaciones detalladas para compras, remodelaciones, daños o problemas recurrentes."],
  ["08", "Mantenimiento preventivo", "Planes programados para reducir averías, proteger equipos y mantener todo fluyendo."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function submitInquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      `Hola, ${SITE.name}. Me interesa solicitar servicio.`,
      "",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Dirección / área: ${data.get("area")}`,
      `Servicio: ${data.get("servicio")}`,
      `Urgencia: ${data.get("urgencia")}`,
      `Mensaje: ${data.get("mensaje") || "Sin detalles adicionales"}`,
    ].join("\n");
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label={`${SITE.name}, inicio`}>
          <span className="brand-mark">A</span><span>{SITE.name}</span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegación principal">
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Por qué nosotros</a>
          <a href="#areas" onClick={() => setMenuOpen(false)}>Áreas</a>
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Solicitar servicio</a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>☰</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Plomería confiable en Puerto Rico</div>
          <h1>Tu problema de plomería,<br/><em>resuelto como debe ser.</em></h1>
          <p>Servicio profesional, comunicación clara y soluciones duraderas para hogares y negocios. Cuando el agua no espera, nosotros tampoco.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">Solicitar servicio <b>↗</b></a>
            <a className="btn secondary" href={`tel:+${SITE.whatsapp}`}>Llamar ahora <b>→</b></a>
          </div>
          <div className="trust-row">
            <span><b>✓</b> Respuesta rápida</span><span><b>✓</b> Trabajo garantizado</span><span><b>✓</b> Servicio residencial y comercial</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Plomero profesional trabajando en una instalación moderna">
          <img src="/aquapro-hero.png" alt="Plomero profesional trabajando en una cocina moderna en Puerto Rico" />
          <div className="water-card"><span>24</span><div><strong>¿Emergencia?</strong><small>Estamos listos para ayudarte</small></div></div>
          <div className="hero-badge"><strong>24/7</strong><span>Servicio de<br/>emergencia</span></div>
        </div>
        <div className="hero-stats">
          <div><strong>24/7</strong><span>Disponibilidad<br/>para emergencias</span></div>
          <div><strong>100%</strong><span>Compromiso<br/>con la calidad</span></div>
          <div><strong>PR</strong><span>Servicio local<br/>en la isla</span></div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-head"><div><span className="kicker">LO QUE HACEMOS</span><h2>Soluciones que <em>sí resuelven.</em></h2></div><p>Desde un goteo molesto hasta una emergencia mayor, atendemos cada trabajo con el mismo cuidado, limpieza y profesionalismo.</p></div>
        <div className="services-grid">
          {services.map(([n, title, desc]) => <article className="service-card" key={n}><span className="number">{n}</span><div className="service-icon">{n === "01" ? "⚡" : n === "02" ? "◒" : n === "03" ? "↯" : n === "04" ? "♨" : n === "05" ? "⌁" : n === "06" ? "⌗" : n === "07" ? "⌕" : "✓"}</div><h3>{title}</h3><p>{desc}</p><a href="#contacto">Solicitar servicio <span>→</span></a></article>)}
        </div>
      </section>

      <section className="why" id="nosotros">
        <div className="why-art"><img src="/aquapro-service.png" alt="Plomero explicando una instalación de calentador a una clienta en Puerto Rico" /><div className="photo-label"><b>TRABAJO CLARO.</b><span>RESULTADOS QUE DAN TRANQUILIDAD.</span></div><div className="review-card"><div className="stars">★★★★★</div><p>“Llegaron a tiempo, explicaron todo y dejaron el área impecable.”</p><strong>— Cliente residencial</strong></div></div>
        <div className="why-copy"><span className="kicker light">LA DIFERENCIA AQUAPRO</span><h2>Buen servicio se nota<br/><em>antes de abrir la llave.</em></h2><p>Creemos que contratar a un plomero no debería sentirse complicado. Te mantenemos informado, cuidamos tu propiedad y hacemos el trabajo bien desde la primera vez.</p>
          <div className="check-list"><div><b>01</b><span><strong>Comunicación clara</strong><small>Te explicamos el problema y las opciones sin vueltas.</small></span></div><div><b>02</b><span><strong>Respeto por tu espacio</strong><small>Trabajo ordenado, limpio y cuidadoso.</small></span></div><div><b>03</b><span><strong>Soluciones duraderas</strong><small>Materiales de calidad y atención a cada detalle.</small></span></div></div>
        </div>
      </section>

      <section className="areas section" id="areas">
        <div><span className="kicker">SERVICIO LOCAL</span><h2>De aquí. Para servirte <em>aquí.</em></h2><p>Atendemos hogares, condominios, comercios y propiedades en el área metro y municipios cercanos. Pregúntanos por disponibilidad en tu zona.</p><div className="pills"><span>San Juan</span><span>Bayamón</span><span>Carolina</span><span>Guaynabo</span><span>Caguas</span><span>Trujillo Alto</span><span>Área metro</span></div></div>
        <div className="map-card"><div className="island">PR<span className="pin">●</span></div><small>COBERTURA DE SERVICIO</small></div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-intro"><span className="kicker light">HABLEMOS</span><h2>Cuéntanos qué está pasando.<br/><em>Nosotros nos encargamos.</em></h2><p>Completa el formulario y abriremos WhatsApp con todos los detalles listos para enviar. Fácil, rápido y sin compromiso.</p><div className="contact-note"><span>◉</span><div><strong>¿Necesitas ayuda urgente?</strong><small>Llámanos al {SITE.phoneDisplay}</small></div></div></div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          <div className="form-grid"><label>Nombre completo<input name="nombre" placeholder="Tu nombre" required /></label><label>Teléfono<input name="telefono" type="tel" placeholder="(787) 000-0000" required /></label><label className="wide">Dirección o área<input name="area" placeholder="Municipio, urbanización o sector" required /></label><label>Servicio solicitado<select name="servicio" required defaultValue=""><option value="" disabled>Selecciona un servicio</option>{services.map(([,title]) => <option key={title}>{title}</option>)}<option>Otro servicio</option></select></label><label>Urgencia<select name="urgencia" required defaultValue=""><option value="" disabled>¿Cuándo lo necesitas?</option><option>Emergencia — ahora</option><option>Hoy</option><option>En los próximos días</option><option>Estoy cotizando</option></select></label><label className="wide">Cuéntanos un poco más<textarea name="mensaje" rows={4} placeholder="Describe el problema o servicio que necesitas..." /></label></div>
          <button className="submit-btn" type="submit"><span className="wa-icon"><img src="https://cdn.simpleicons.org/whatsapp/128C7E" alt="" /></span><span><small>CONTINUAR EN</small>WhatsApp</span><b>→</b></button><small className="privacy">Al continuar, se abrirá WhatsApp con tu información prellenada. Tú decides cuándo enviarla.</small>
        </form>
      </section>

      <footer><a className="brand" href="#inicio"><span className="brand-mark">A</span><span>{SITE.name}</span></a><p>Plomería profesional para Puerto Rico.</p><div><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div><small>© 2026 {SITE.name}. Marca y datos demostrativos.</small></footer>
      <a className="whatsapp-float" href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hola, ${SITE.name}. Necesito ayuda con un servicio de plomería.`)}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><span className="wa-icon"><img src="https://cdn.simpleicons.org/whatsapp/128C7E" alt="" /></span><i><small>WHATSAPP</small>Escríbenos ahora</i></a>
    </main>
  );
}
