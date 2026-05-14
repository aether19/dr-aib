import SEO from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';

const schedule = [
  { day: 'Dimanche', hours: '9h00 — 17h00' },
  { day: 'Lundi', hours: '9h00 — 17h00' },
  { day: 'Mardi', hours: '9h00 — 17h00' },
  { day: 'Mercredi', hours: '9h00 — 17h00' },
  { day: 'Jeudi', hours: '9h00 — 17h00' },
  { day: 'Vendredi', hours: 'Fermé' },
  { day: 'Samedi', hours: 'Sur rendez-vous' },
];

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ nom: '', email: '', telephone: '', sujet: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const iCls = "w-full bg-transparent border-b border-[var(--line)] py-3.5 font-body text-[15px] font-light text-[var(--dark)] placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:outline-none transition-colors duration-200";
  const lCls = "block font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--dark)] mb-2";

  return (
    <>
      <SEO
        title="Contact — Prendre rendez-vous à Alger"
        description="Contactez le Dr. Aib Amar pour une consultation en chirurgie esthétique à Alger. Cabinet à Garidi 2, Bâtiment 62, Kouba, Alger 16000. Tél: +213 0557 969 174."
        canonical="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact — Dr. Aib Amar",
          "url": "https://www.chirurgieesthetique-dz.com/contact"
        }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--dark)] pt-[72px]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1600&q=90"
            alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <SectionSupertitle light>Contact</SectionSupertitle>
            <AnimatedHeading light size="page"
              lines={[{ text: 'Parlons de' }, { text: 'votre projet', italicWord: 'votre projet' }]}/>
            <ScrollReveal delay={0.3}>
              <p className="font-body text-[16px] font-light text-white/65 mt-5 max-w-[440px] leading-[1.75]">
                Le Dr. Aib Amar vous reçoit à Alger pour une consultation personnalisée et confidentielle.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Link to="/booking"
                className="inline-flex mt-8 items-center font-body text-[11px] font-medium uppercase tracking-[0.14em] bg-[var(--accent)] text-white px-7 py-3.5 hover:bg-white hover:text-[var(--accent)] transition-all duration-300">
                Prendre rendez-vous →
              </Link>
            </ScrollReveal>
          </div>

          {/* Quick contact info cards */}
          <ScrollReveal direction="right" distance={30} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: '📞', label: 'Téléphone', value: '+213 0557 969 174', sub: 'Lun–Jeu, Sam' },
                { icon: '✉', label: 'Email', value: 'info@chirurgieesthetique-dz.com', sub: 'Réponse sous 24h' },
                { icon: '📍', label: 'Adresse', value: 'Garidi 2 Bât. 62', sub: 'Kouba, Alger 16000' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/15 p-4">
                  <p className="text-xl mb-2">{item.icon}</p>
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.16em] text-white/55 mb-1">{item.label}</p>
                  <p className="font-body text-[13px] font-light text-white leading-snug">{item.value}</p>
                  <p className="font-body text-[11px] text-white/45 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main grid: form + info ── */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">

          {/* Left — Contact form */}
          <div>
            <SectionSupertitle>Formulaire de contact</SectionSupertitle>
            <h2 className="font-display text-[30px] md:text-[38px] font-normal text-[var(--dark)] mb-10">
              Envoyez-nous un message
            </h2>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" onSubmit={handleSubmit} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-7 max-w-[560px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label className={lCls}>Nom complet</label>
                      <input type="text" name="nom" value={form.nom} onChange={handleChange}
                        placeholder="Votre nom" required className={iCls}/>
                    </div>
                    <div>
                      <label className={lCls}>Téléphone</label>
                      <input type="tel" name="telephone" value={form.telephone} onChange={handleChange}
                        placeholder="+213..." className={iCls}/>
                    </div>
                  </div>
                  <div>
                    <label className={lCls}>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="votre@email.com" required className={iCls}/>
                  </div>
                  <div>
                    <label className={lCls}>Sujet</label>
                    <select name="sujet" value={form.sujet} onChange={handleChange} className={`${iCls} appearance-none cursor-pointer`}>
                      <option value="">Sélectionnez un sujet...</option>
                      <option>Demande de renseignements</option>
                      <option>Rhinoplastie</option>
                      <option>Prothèse Mammaire</option>
                      <option>Liposuccion</option>
                      <option>Botox / Acide Hyaluronique</option>
                      <option>Lifting</option>
                      <option>Greffe Capillaire</option>
                      <option>Autre intervention</option>
                    </select>
                  </div>
                  <div>
                    <label className={lCls}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre demande ou posez vos questions..." rows={5} required
                      className={`${iCls} resize-none`}/>
                  </div>
                  <button type="submit"
                    className="w-full max-w-[560px] bg-[var(--accent)] text-white font-body text-[12px] font-medium uppercase tracking-[0.14em] py-4 hover:bg-[var(--dark)] transition-colors duration-300">
                    Envoyer le message
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
                  className="max-w-[400px] py-12">
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] flex items-center justify-center mb-6">
                    <span className="font-display text-[22px] text-[var(--accent)]">✓</span>
                  </div>
                  <h3 className="font-display text-[28px] font-normal text-[var(--dark)] mb-3">Message envoyé</h3>
                  <p className="font-body text-[15px] font-light text-[var(--muted)] leading-[1.75]">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Info panel */}
          <ScrollReveal direction="right" distance={24} duration={0.8}>
            <div className="space-y-0 border border-[var(--line)]">
              {/* Cabinet */}
              <div className="p-6 border-b border-[var(--line)]">
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4">Cabinet</p>
                <p className="font-display text-[22px] font-normal text-[var(--dark)] mb-1">Dr. Aib Amar</p>
                <p className="font-body text-[13px] font-light text-[var(--muted)]">Chirurgie Plastique & Esthétique</p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-0.5">📍</span>
                    <p className="font-body text-[14px] font-light text-[var(--dark)]">Garidi 2 Bâtiment 62<br/>Kouba, Alger 16000</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">📞</span>
                    <p className="font-body text-[14px] font-light text-[var(--dark)]">+213 0557 969 174</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-0.5">✉</span>
                    <p className="font-body text-[13px] font-light text-[var(--dark)] break-all">info@chirurgieesthetique-dz.com</p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="p-6 border-b border-[var(--line)]">
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4">Horaires</p>
                <div className="space-y-0">
                  {schedule.map((row) => (
                    <div key={row.day} className={`flex justify-between py-2 border-b border-[var(--line)] last:border-0 ${row.hours==='Fermé' ? 'opacity-40' : ''}`}>
                      <span className="font-body text-[13px] font-light text-[var(--dark)]">{row.day}</span>
                      <span className={`font-body text-[13px] font-light ${row.hours==='Fermé' ? 'text-red-400' : 'text-[var(--muted)]'}`}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RDV CTA */}
              <div className="p-6 bg-[var(--accent)]">
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-white/70 mb-2">Rendez-vous</p>
                <p className="font-display text-[19px] font-normal text-white mb-4">Prêt à consulter ?</p>
                <Link to="/booking"
                  className="inline-flex items-center font-body text-[11px] font-medium uppercase tracking-[0.12em] bg-white text-[var(--accent)] px-5 py-2.5 hover:bg-[var(--dark)] hover:text-white transition-all duration-250">
                  Réserver un créneau →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-[var(--bg-alt)] px-6 md:px-10 py-12">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Localisation</p>
          <h3 className="font-display text-[24px] font-normal text-[var(--dark)] mb-6">
            Garidi 2 Bâtiment 62, Kouba, Alger
          </h3>
          <div className="w-full overflow-hidden border border-[var(--line)]" style={{ height: '380px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.123456789!2d3.0711!3d36.7325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26b3ff3d59d%3A0x0!2sGaridi+2%2C+Kouba%2C+Alger!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Cabinet Dr. Aib Amar"/>
          </div>
        </div>
      </section>
    </>
  );
}
