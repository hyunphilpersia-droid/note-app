import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section page-grid">
        <div className="hero-copy"><p className="eyebrow">Competitive profile / initiator</p><h1>Read the<br /><em>round.</em></h1><p className="hero-intro">Captain and IGL. I build the plan, find the opening, and make space for the team when the round gets loud.</p><Link className="text-link" href="/portfolio">Agent pool <span>↗</span></Link></div>
        <div className="hero-image image-frame image-hero" role="img" aria-label="Valorant initiator agents"><span className="image-caption">Initiator main</span></div>
      </section>
      <section className="manifesto page-grid narrow-section"><p className="section-number">[ PROFILE ]</p><div><p className="display-copy">Information wins rounds. Clear comms, disciplined utility, and a read on the enemy before they know they have been seen.</p><div className="rule-grid"><span>Comms</span><span>Utility</span><span>Clutch</span></div></div></section>
      <section className="feature-band"><div className="page-grid feature-grid"><div className="feature-image image-frame image-garden" role="img" aria-label="Red and black tactical arena backdrop" /><div className="feature-copy"><p className="eyebrow">Agent pool / initiator</p><h2>Make the first<br /><em>move count.</em></h2><p>Sova for the read. Breach for the hit. KAY/O for the shutdown. Fade when the team needs a whole site revealed.</p><Link className="text-link" href="/about">Meet the player <span>↗</span></Link></div></div></section>
    </main>
  );
}
