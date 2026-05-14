import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProcedureBySlug, categories } from '../data/procedures';
import { getProcedureImage } from '../data/procedureImages';

// ─── Types ─────────────────────────────────────────────────────────────────
interface BookingState {
  service: string;
  serviceLabel: string;
  date: Date | null;
  time: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message: string;
}

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const MONTH_NAMES_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const DAY_NAMES_FR = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const CATEGORY_LABELS: Record<string, string> = {
  corps: 'Chirurgie du Corps',
  visage: 'Chirurgie du Visage',
  esthetique: 'Médecine Esthétique',
};
const STEPS = [
  { id: 1, label: 'Service' },
  { id: 2, label: 'Date & Heure' },
  { id: 3, label: 'Coordonnées' },
  { id: 4, label: 'Confirmation' },
];

// ─── Helpers ────────────────────────────────────────────────────────────────
function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDayOfMonth(y: number, m: number) { return new Date(y, m, 1).getDay(); }
function isFriday(d: Date) { return d.getDay() === 5; }
function isPast(d: Date) { const t = new Date(); t.setHours(0,0,0,0); return d < t; }
function isSameDay(a: Date, b: Date) {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
}

// ─── Step 1: Service ────────────────────────────────────────────────────────
function StepService({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const proc = booking.service ? getProcedureBySlug(booking.service) : null;
  const [activeTab, setActiveTab] = useState<string>(proc?.category || 'corps');

  return (
    <div>
      <p className="font-body text-[15px] font-light text-[var(--muted)] mb-8">
        Sélectionnez l'intervention pour laquelle vous souhaitez prendre rendez-vous.
      </p>
      <div className="flex flex-wrap border-b border-[var(--line)] mb-8">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={`font-body text-[11px] font-medium uppercase tracking-[0.1em] pb-3.5 px-5 -mb-px transition-colors duration-200 ${activeTab===key ? 'text-[var(--accent)] border-b-2 border-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--dark)]'}`}>
            {label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity:0,y:6 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories[activeTab]?.procedures.map((proc) => {
            const selected = booking.service === proc.slug;
            return (
              <button key={proc.slug} onClick={() => setBooking({ ...booking, service: proc.slug, serviceLabel: proc.title })}
                className={`group relative overflow-hidden text-left transition-all duration-200 border-2 ${selected ? 'border-[var(--accent)] shadow-md' : 'border-[var(--line)] hover:border-[var(--accent)]/50'}`}>
                <div className="h-24 overflow-hidden">
                  <img src={getProcedureImage(proc.slug)} alt={proc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                  {selected && <div className="absolute inset-0 bg-[var(--accent)]/15" />}
                </div>
                <div className="p-3">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)] mb-0.5">{proc.categoryLabel}</p>
                  <p className="font-display text-[15px] font-normal text-[var(--dark)]">{proc.title}</p>
                </div>
                {selected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">✓</span>
                  </div>
                )}
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Step 2: Date & Time ────────────────────────────────────────────────────
function StepDateTime({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const canPrev = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());
  function prevMonth() { if (!canPrev) return; if (viewMonth===0){setViewMonth(11);setViewYear(y=>y-1);}else setViewMonth(m=>m-1); }
  function nextMonth() { if (viewMonth===11){setViewMonth(0);setViewYear(y=>y+1);}else setViewMonth(m=>m+1); }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
      <div>
        <p className="font-body text-[14px] font-light text-[var(--muted)] mb-6">Choisissez une date disponible. Le cabinet est fermé le vendredi.</p>
        <div className="bg-white border border-[var(--line)] p-5 max-w-[360px]">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-5">
            <button onClick={prevMonth} disabled={!canPrev}
              className={`w-8 h-8 flex items-center justify-center text-lg transition-colors duration-150 ${canPrev ? 'text-[var(--dark)] hover:text-[var(--accent)]' : 'text-[var(--line)] cursor-not-allowed'}`}>‹</button>
            <p className="font-body text-[13px] font-medium uppercase tracking-[0.1em] text-[var(--dark)]">
              {MONTH_NAMES_FR[viewMonth]} {viewYear}
            </p>
            <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center text-lg text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-150">›</button>
          </div>
          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAY_NAMES_FR.map((d) => (
              <div key={d} className={`text-center font-body text-[9px] font-medium uppercase tracking-[0.06em] pb-2 ${d==='Ven' ? 'text-[var(--line)]' : 'text-[var(--muted)]'}`}>{d}</div>
            ))}
          </div>
          {/* Days */}
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({length:firstDay}).map((_,i)=><div key={`e${i}`}/>)}
            {Array.from({length:daysInMonth}).map((_,i)=>{
              const day=i+1;
              const date=new Date(viewYear,viewMonth,day);
              const past=isPast(date), fri=isFriday(date);
              const selected=booking.date?isSameDay(date,booking.date):false;
              const disabled=past||fri;
              return (
                <button key={day} disabled={disabled} onClick={()=>setBooking({...booking,date})}
                  className={`h-9 w-full flex items-center justify-center font-body text-[13px] transition-all duration-100 ${selected ? 'bg-[var(--accent)] text-white font-medium' : disabled ? 'text-[var(--line)] cursor-not-allowed' : 'text-[var(--dark)] hover:bg-[var(--bg-alt)] hover:text-[var(--accent)]'}`}>
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Time slots */}
      <div>
        <p className="font-body text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--dark)] mb-4">
          {booking.date ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]}` : 'Sélectionnez une date'}
        </p>
        <div className="space-y-2">
          {TIME_SLOTS.map((slot) => (
            <button key={slot} disabled={!booking.date} onClick={()=>setBooking({...booking,time:slot})}
              className={`w-full text-center font-body text-[13px] font-light py-2.5 border transition-all duration-150 ${
                booking.time===slot ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                : !booking.date ? 'border-[var(--line)] text-[var(--line)] cursor-not-allowed'
                : 'border-[var(--line)] text-[var(--dark)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Info ───────────────────────────────────────────────────────────
function StepInfo({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const iCls = "w-full bg-transparent border-b border-[var(--line)] py-3.5 font-body text-[15px] font-light text-[var(--dark)] placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:outline-none transition-colors duration-200";
  const lCls = "block font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--dark)] mb-2";
  return (
    <div className="max-w-[520px] space-y-7">
      <p className="font-body text-[14px] font-light text-[var(--muted)]">Ces informations nous permettront de confirmer votre rendez-vous par téléphone.</p>
      <div className="grid grid-cols-2 gap-7">
        <div><label className={lCls}>Nom</label><input type="text" placeholder="Votre nom" value={booking.nom} onChange={e=>setBooking({...booking,nom:e.target.value})} className={iCls}/></div>
        <div><label className={lCls}>Prénom</label><input type="text" placeholder="Votre prénom" value={booking.prenom} onChange={e=>setBooking({...booking,prenom:e.target.value})} className={iCls}/></div>
      </div>
      <div><label className={lCls}>Téléphone</label><input type="tel" placeholder="+213..." value={booking.telephone} onChange={e=>setBooking({...booking,telephone:e.target.value})} className={iCls}/></div>
      <div><label className={lCls}>Email</label><input type="email" placeholder="votre@email.com" value={booking.email} onChange={e=>setBooking({...booking,email:e.target.value})} className={iCls}/></div>
      <div><label className={lCls}>Notes (optionnel)</label><textarea placeholder="Vos questions ou précisions..." rows={4} value={booking.message} onChange={e=>setBooking({...booking,message:e.target.value})} className={`${iCls} resize-none`}/></div>
    </div>
  );
}

// ─── Step 4: Confirmation ───────────────────────────────────────────────────
function StepConfirmation({ booking }: { booking: BookingState }) {
  return (
    <motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="max-w-[500px] mx-auto text-center py-8">
      <motion.div className="w-16 h-16 rounded-full border-2 border-[var(--accent)] flex items-center justify-center mx-auto mb-8"
        initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',stiffness:200,delay:0.2}}>
        <span className="font-display text-[26px] text-[var(--accent)]">✓</span>
      </motion.div>
      <h2 className="font-display text-[34px] md:text-[40px] font-normal text-[var(--dark)] mb-3">Demande envoyée</h2>
      <p className="font-body text-[15px] font-light text-[var(--muted)] leading-[1.75] mb-10">
        Merci {booking.prenom}. Votre demande a bien été reçue. Nous vous confirmerons par téléphone dans les plus brefs délais.
      </p>
      <div className="bg-[var(--bg-alt)] border border-[var(--line)] p-6 text-left space-y-3">
        {[
          { label:'Service', value: booking.serviceLabel },
          { label:'Date', value: booking.date ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]} ${booking.date.getFullYear()}` : '—' },
          { label:'Heure', value: booking.time || '—' },
          { label:'Nom', value: `${booking.prenom} ${booking.nom}` },
          { label:'Téléphone', value: booking.telephone },
          { label:'Email', value: booking.email },
        ].map(row=>(
          <div key={row.label} className="flex justify-between items-start gap-4 py-2 border-b border-[var(--line)] last:border-0">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)] flex-shrink-0">{row.label}</span>
            <span className="font-body text-[13px] font-light text-[var(--dark)] text-right">{row.value}</span>
          </div>
        ))}
      </div>
      <p className="font-body text-[11px] font-light text-[var(--muted)] mt-5">
        Dr. Aib Amar · Garidi 2 Bât. 62, Kouba, Alger · +213 0557 969 174
      </p>
    </motion.div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get('service') || '';
  const preProc = preService ? getProcedureBySlug(preService) : null;

  // If coming from a procedure page → start at step 2 (date/time)
  const initialStep = preService && preProc ? 2 : 1;

  const [step, setStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    service: preService,
    serviceLabel: preProc?.title || '',
    date: null, time: '',
    nom: '', prenom: '', email: '', telephone: '', message: '',
  });

  // Re-sync if URL param changes
  useEffect(() => {
    const p = preService ? getProcedureBySlug(preService) : null;
    if (p) {
      setBooking(b => ({ ...b, service: preService, serviceLabel: p.title }));
      setStep(2);
    } else {
      setStep(1);
    }
  }, [preService]);

  const canNext = () => {
    if (step === 1) return !!booking.service;
    if (step === 2) return !!booking.date && !!booking.time;
    if (step === 3) return !!(booking.nom && booking.prenom && booking.telephone && booking.email);
    return true;
  };

  function goNext() { if (canNext() && step < 4) { setDirection(1); setStep(s=>s+1); } }
  function goBack() { if (step > 1) { setDirection(-1); setStep(s=>s-1); } }

  const proc2 = booking.service ? getProcedureBySlug(booking.service) : null;
  const previewImg = proc2 ? getProcedureImage(proc2.slug) : null;

  const slideV = {
    enter: (d:number) => ({ opacity:0, x:d*30 }),
    center: { opacity:1, x:0 },
    exit: (d:number) => ({ opacity:0, x:d*-30 }),
  };

  return (
    <>
      {/* Header strip */}
      <section className="bg-white border-b border-[var(--line)] pt-[72px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)] mb-2">Rendez-vous</p>
          <h1 className="font-display text-[36px] md:text-[48px] font-normal text-[var(--dark)]">Prendre rendez-vous</h1>

          {/* Step indicator */}
          <div className="flex items-center mt-8 max-w-[540px]">
            {STEPS.map((s, i) => {
              const done = step > s.id;
              const active = step === s.id;
              // Step 1 is always "done" if we started from step 2
              const forceDone = s.id === 1 && initialStep === 2 && step >= 2;
              return (
                <div key={s.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-body text-[11px] font-medium transition-all duration-300 ${
                      done || forceDone ? 'bg-[var(--accent)] text-white'
                      : active ? 'bg-[var(--dark)] text-white'
                      : 'bg-[var(--line)] text-[var(--muted)]'}`}>
                      {done || forceDone ? '✓' : s.id}
                    </div>
                    <p className={`font-body text-[9px] font-medium uppercase tracking-[0.1em] mt-1.5 hidden md:block ${active ? 'text-[var(--dark)]' : 'text-[var(--muted)]'}`}>{s.label}</p>
                  </div>
                  {i < STEPS.length-1 && (
                    <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${done || forceDone ? 'bg-[var(--accent)]' : 'bg-[var(--line)]'}`}/>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg-alt)] py-12 md:py-16 px-6 md:px-10 min-h-[60vh]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Step content */}
          <div className="bg-white border border-[var(--line)] p-8 md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={step} custom={direction} variants={slideV} initial="enter" animate="center" exit="exit" transition={{duration:0.28, ease:[0.25,1,0.5,1]}}>
                <h2 className="font-display text-[24px] md:text-[30px] font-normal text-[var(--dark)] mb-8">
                  {step===1 && 'Quel service vous intéresse ?'}
                  {step===2 && 'Choisissez votre créneau'}
                  {step===3 && 'Vos coordonnées'}
                  {step===4 && 'Votre demande est confirmée'}
                </h2>
                {step===1 && <StepService booking={booking} setBooking={setBooking}/>}
                {step===2 && <StepDateTime booking={booking} setBooking={setBooking}/>}
                {step===3 && <StepInfo booking={booking} setBooking={setBooking}/>}
                {step===4 && <StepConfirmation booking={booking}/>}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          {step < 4 && (
            <div className="space-y-4 lg:sticky lg:top-[88px]">
              {/* Service card */}
              <div className="bg-white border border-[var(--line)] overflow-hidden">
                <div className="h-32 overflow-hidden">
                  {previewImg
                    ? <img src={previewImg} alt={proc2?.title} className="w-full h-full object-cover"/>
                    : <div className="w-full h-full bg-[var(--bg-alt)] flex items-center justify-center"><p className="font-body text-[11px] text-[var(--muted)]">Aucun service</p></div>}
                </div>
                <div className="p-4">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)] mb-0.5">{proc2?.categoryLabel || '—'}</p>
                  <p className="font-display text-[17px] font-normal text-[var(--dark)]">{proc2?.title || 'Service non sélectionné'}</p>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white border border-[var(--line)] p-4 space-y-3">
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">Récapitulatif</p>
                {[
                  { label:'Date', value: booking.date ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]}` : '—' },
                  { label:'Heure', value: booking.time || '—' },
                  { label:'Nom', value: booking.nom ? `${booking.prenom} ${booking.nom}` : '—' },
                ].map(row=>(
                  <div key={row.label} className="flex justify-between border-t border-[var(--line)] pt-2 first:border-0 first:pt-0">
                    <span className="font-body text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">{row.label}</span>
                    <span className="font-body text-[12px] font-light text-[var(--dark)]">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Contact direct */}
              <div className="bg-[var(--accent)] p-4 text-white">
                <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-white/70 mb-1">Contact direct</p>
                <p className="font-body text-[15px] font-light">+213 0557 969 174</p>
                <p className="font-body text-[11px] font-light text-white/60 mt-0.5">Lun–Jeu et Samedi</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Nav bar */}
      {step < 4 && (
        <div className="sticky bottom-0 z-50 bg-white border-t border-[var(--line)] px-6 md:px-10 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            <button onClick={goBack} disabled={step===1}
              className={`font-body text-[11px] font-medium uppercase tracking-[0.12em] px-6 py-3 border transition-all duration-200 ${step===1 ? 'opacity-25 cursor-not-allowed border-[var(--line)]' : 'border-[var(--dark)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-white'}`}>
              ← Retour
            </button>
            <div className="flex items-center gap-1.5">
              {[1,2,3].map(n=>(
                <div key={n} className={`rounded-full transition-all duration-300 ${step===n ? 'w-5 h-1.5 bg-[var(--accent)]' : step>n ? 'w-1.5 h-1.5 bg-[var(--accent)]/40' : 'w-1.5 h-1.5 bg-[var(--line)]'}`}/>
              ))}
            </div>
            <button onClick={goNext} disabled={!canNext()}
              className={`font-body text-[11px] font-medium uppercase tracking-[0.12em] px-8 py-3 transition-all duration-200 ${canNext() ? 'bg-[var(--accent)] text-white hover:bg-[var(--dark)]' : 'bg-[var(--line)] text-[var(--muted)] cursor-not-allowed'}`}>
              {step===3 ? 'Confirmer →' : 'Suivant →'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
