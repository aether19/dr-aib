import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';


const interventionOptions = [
  'Sélectionnez...',
  'Prothèse Mammaire',
  'Réduction Mammaire',
  'Remonter les seins',
  'Liposuccion',
  'Gynécomastie',
  'Abdominoplastie',
  'Silhouette Lift',
  'Reconstruction Plastique',
  'Rhinoplastie',
  'Oreilles Décollées',
  'Lifting',
  'Lifting Cervico-Facial',
  'Blépharoplastie',
  'Greffe Capillaire',
  'Botox',
  'Acide Hyaluronique',
  'Peeling',
  'Cernes',
  'Microdermabrasion',
  'Soins Après Chirurgie',
  'Soins Après Grossesse',
  'Autre',
];

const schedule = [
  { day: 'Dimanche — Jeudi', hours: '9h00 — 17h00' },
  { day: 'Vendredi', hours: 'Fermé' },
  { day: 'Samedi', hours: 'Sur rendez-vous' },
];

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  intervention: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    intervention: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-transparent border-b border-[var(--line)] py-3.5 font-body text-[16px] font-light text-[var(--dark)] placeholder:text-[var(--muted)] placeholder:opacity-50 focus:border-[var(--accent)] focus:outline-none transition-colors duration-200";
  const labelClass = "block font-body text-[12px] font-normal uppercase tracking-[0.12em] text-[var(--dark)] mb-2";

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-alt)] pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <SectionSupertitle>Contact</SectionSupertitle>
          <AnimatedHeading
            centered
            size="page"
            lines={[
              { text: 'Prenons' },
              { text: 'rendez-vous', italicWord: 'rendez-vous' },
            ]}
          />
          <ScrollReveal delay={0.3}>
            <p className="font-body text-[16px] md:text-[17px] font-light text-[var(--muted)] mt-5 max-w-[480px] mx-auto leading-[1.7]">
              Le Dr. Aib Amar vous reçoit à Alger pour une consultation personnalisée. Chaque parcours commence par une conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form & Coordonnées */}
      <section className="bg-[var(--bg)] py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
          {/* Left - Form */}
          <div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-[640px] space-y-7"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <ScrollReveal delay={0}>
                      <label className={labelClass}>NOM</label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className={inputClass}
                      />
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                      <label className={labelClass}>PRÉNOM</label>
                      <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        required
                        className={inputClass}
                      />
                    </ScrollReveal>
                  </div>

                  <ScrollReveal delay={0.12}>
                    <label className={labelClass}>EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className={inputClass}
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={0.18}>
                    <label className={labelClass}>TÉLÉPHONE</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+213..."
                      required
                      className={inputClass}
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={0.24}>
                    <label className={labelClass}>TYPE D'INTERVENTION</label>
                    <select
                      name="intervention"
                      value={form.intervention}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      {interventionOptions.map((opt) => (
                        <option key={opt} value={opt === 'Sélectionnez...' ? '' : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <label className={labelClass}>MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande ou posez vos questions..."
                      rows={5}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </ScrollReveal>

                  <ScrollReveal delay={0.36}>
                    <button
                      type="submit"
                      className="w-full max-w-[640px] bg-[var(--accent)] text-[var(--white)] font-body text-[13px] font-normal uppercase tracking-[0.12em] py-[18px] hover:bg-[var(--accent-light)] transition-colors duration-300 mt-3"
                    >
                      Envoyer la demande
                    </button>
                  </ScrollReveal>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[400px] mx-auto text-center py-20"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--accent)] flex items-center justify-center mx-auto">
                    <span className="font-display text-[24px] font-light text-[var(--accent)]">&#10003;</span>
                  </div>
                  <h3 className="font-display text-[28px] md:text-[32px] font-light text-[var(--dark)] mt-6">
                    Merci pour votre message
                  </h3>
                  <p className="font-body text-[16px] font-light text-[var(--muted)] mt-3">
                    Nous vous recontactons dans les plus brefs délais pour confirmer votre rendez-vous.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right - Coordonnées */}
          <ScrollReveal direction="right" distance={30} duration={0.8} className="lg:border-l lg:border-[var(--line)] lg:border-opacity-60 lg:pl-12">
            <div className="space-y-10">
              {/* Contact */}
              <div>
                <SectionSupertitle>Contact</SectionSupertitle>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-[var(--muted)]">Téléphone</p>
                    <p className="font-body text-[18px] md:text-[20px] font-light text-[var(--dark)] mt-1.5">+213 0557 969 174</p>
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-[var(--muted)]">Email</p>
                    <p className="font-body text-[18px] md:text-[20px] font-light text-[var(--dark)] mt-1.5">info@chirurgieesthetique-dz.com</p>
                  </div>
                  <div>
                    <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-[var(--muted)]">Adresse</p>
                    <p className="font-body text-[18px] md:text-[20px] font-light text-[var(--dark)] mt-1.5">Garidi 2 Bât. 62, Kouba, Alger 16000</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="pt-8 border-t border-[var(--line)]">
                <SectionSupertitle>Localisation</SectionSupertitle>
                <div className="w-full mt-5 overflow-hidden rounded-sm border border-[var(--line)]" style={{height: '280px'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.123456789!2d3.0711!3d36.7325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26b3ff3d59d%3A0x0!2sGaridi+2%2C+Kouba%2C+Alger!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Dr. Aib Amar"
                  />
                </div>
                <p className="font-body text-[13px] font-light text-[var(--muted)] mt-4">
                  Garidi 2 Bâtiment 62, Kouba, Alger 16000 — accessible en voiture et transport en commun.
                </p>
              </div>

              {/* Horaires */}
              <div className="pt-8 border-t border-[var(--line)]">
                <SectionSupertitle>Horaires</SectionSupertitle>
                <div className="mt-5 space-y-0">
                  {schedule.map((row, i) => (
                    <div key={i} className="flex justify-between py-2.5 border-b border-[var(--line)] border-opacity-40">
                      <span className="font-body text-[14px] font-light text-[var(--dark)]">{row.day}</span>
                      <span className="font-body text-[14px] font-light text-[var(--muted)]">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
