import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProcedureBySlug, categories } from '../data/procedures';
import { getProcedureImage } from '../data/procedureImages';
import SectionSupertitle from '../components/SectionSupertitle';

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Constants ────────────────────────────────────────────────────────────────
const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const STEPS = [
  { id: 1, label: 'Service' },
  { id: 2, label: 'Date & Heure' },
  { id: 3, label: 'Vos informations' },
  { id: 4, label: 'Confirmation' },
];

const CATEGORY_LABELS: Record<string, string> = {
  corps: 'Chirurgie du Corps',
  visage: 'Chirurgie du Visage',
  esthetique: 'Médecine Esthétique',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isFriday(date: Date) { return date.getDay() === 5; }
function isPast(date: Date) {
  const today = new Date(); today.setHours(0,0,0,0);
  return date < today;
}
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
const MONTH_NAMES_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const DAY_NAMES_FR = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];

// ─── Step 1: Service Selection ────────────────────────────────────────────────
function StepService({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (!booking.service) return 'corps';
    const proc = getProcedureBySlug(booking.service);
    return proc?.category || 'corps';
  });

  return (
    <div>
      <p className="font-body text-[15px] font-light text-[var(--muted)] mb-8 max-w-[480px]">
        Sélectionnez l'intervention ou le soin pour lequel vous souhaitez prendre rendez-vous.
      </p>

      {/* Category tabs */}
      <div className="flex border-b border-[var(--line)] mb-8">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`font-body text-[12px] font-medium uppercase tracking-[0.1em] pb-3.5 px-5 -mb-px transition-colors duration-200 ${
              activeTab === key
                ? 'text-[var(--accent)] border-b-2 border-[var(--accent)]'
                : 'text-[var(--muted)] hover:text-[var(--dark)]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Procedure grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories[activeTab]?.procedures.map((proc) => {
            const selected = booking.service === proc.slug;
            return (
              <button
                key={proc.slug}
                onClick={() => setBooking({ ...booking, service: proc.slug, serviceLabel: proc.title })}
                className={`group relative overflow-hidden text-left transition-all duration-200 border-2 ${
                  selected
                    ? 'border-[var(--accent)] shadow-md'
                    : 'border-[var(--line)] hover:border-[var(--accent)]/50'
                }`}
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={getProcedureImage(proc.slug)}
                    alt={proc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  {selected && (
                    <div className="absolute inset-0 bg-[var(--accent)]/20" />
                  )}
                </div>
                <div className="p-3.5">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--accent)] mb-1">
                    {proc.categoryLabel}
                  </p>
                  <p className="font-display text-[16px] font-normal text-[var(--dark)]">{proc.title}</p>
                </div>
                {selected && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">✓</span>
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

// ─── Step 2: Date & Time ──────────────────────────────────────────────────────
function StepDateTime({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const canPrev = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());

  function prevMonth() {
    if (!canPrev) return;
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10">
      {/* Calendar */}
      <div>
        <p className="font-body text-[15px] font-light text-[var(--muted)] mb-6">
          Choisissez une date disponible. Le cabinet est fermé le vendredi.
        </p>

        <div className="bg-white border border-[var(--line)] p-6 max-w-[380px]">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              disabled={!canPrev}
              className={`w-8 h-8 flex items-center justify-center transition-colors duration-200 ${canPrev ? 'text-[var(--dark)] hover:text-[var(--accent)]' : 'text-[var(--line)] cursor-not-allowed'}`}
            >
              ‹
            </button>
            <p className="font-body text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--dark)]">
              {MONTH_NAMES_FR[viewMonth]} {viewYear}
            </p>
            <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200">
              ›
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAY_NAMES_FR.map((d) => (
              <div key={d} className={`text-center font-body text-[10px] font-medium uppercase tracking-[0.08em] pb-2 ${d === 'Ven' ? 'text-[var(--line)]' : 'text-[var(--muted)]'}`}>
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(viewYear, viewMonth, day);
              const past = isPast(date);
              const fri = isFriday(date);
              const selected = booking.date ? isSameDay(date, booking.date) : false;
              const disabled = past || fri;

              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => setBooking({ ...booking, date })}
                  className={`h-9 w-full flex items-center justify-center font-body text-[13px] transition-all duration-150 rounded-sm ${
                    selected
                      ? 'bg-[var(--accent)] text-white font-medium'
                      : disabled
                      ? 'text-[var(--line)] cursor-not-allowed'
                      : 'text-[var(--dark)] hover:bg-[var(--bg-alt)] hover:text-[var(--accent)]'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Time slots */}
      <div className="min-w-[200px]">
        <p className="font-body text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--dark)] mb-4">
          {booking.date
            ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]}`
            : 'Sélectionnez une date'}
        </p>
        {booking.date ? (
          <div className="space-y-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => setBooking({ ...booking, time: slot })}
                className={`w-full text-center font-body text-[14px] font-light py-3 border transition-all duration-200 ${
                  booking.time === slot
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                    : 'border-[var(--line)] text-[var(--dark)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {TIME_SLOTS.map((slot) => (
              <div key={slot} className="w-full py-3 border border-[var(--line)] opacity-25 rounded-sm" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Step 3: Personal Info ────────────────────────────────────────────────────
function StepInfo({ booking, setBooking }: { booking: BookingState; setBooking: (b: BookingState) => void }) {
  const inputCls = "w-full bg-transparent border-b border-[var(--line)] py-3.5 font-body text-[15px] font-light text-[var(--dark)] placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:outline-none transition-colors duration-200";
  const labelCls = "block font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--dark)] mb-2";

  return (
    <div className="max-w-[560px] space-y-7">
      <p className="font-body text-[15px] font-light text-[var(--muted)]">
        Ces informations nous permettront de confirmer votre rendez-vous.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelCls}>Nom</label>
          <input
            type="text"
            placeholder="Votre nom"
            value={booking.nom}
            onChange={e => setBooking({ ...booking, nom: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Prénom</label>
          <input
            type="text"
            placeholder="Votre prénom"
            value={booking.prenom}
            onChange={e => setBooking({ ...booking, prenom: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className={labelCls}>Téléphone</label>
        <input
          type="tel"
          placeholder="+213..."
          value={booking.telephone}
          onChange={e => setBooking({ ...booking, telephone: e.target.value })}
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>Email</label>
        <input
          type="email"
          placeholder="votre@email.com"
          value={booking.email}
          onChange={e => setBooking({ ...booking, email: e.target.value })}
          className={inputCls}
        />
      </div>
      <div>
        <label className={labelCls}>Notes (optionnel)</label>
        <textarea
          placeholder="Questions, précisions sur votre demande..."
          rows={4}
          value={booking.message}
          onChange={e => setBooking({ ...booking, message: e.target.value })}
          className={`${inputCls} resize-none`}
        />
      </div>
    </div>
  );
}

// ─── Step 4: Confirmation ─────────────────────────────────────────────────────
function StepConfirmation({ booking }: { booking: BookingState }) {
  const proc = getProcedureBySlug(booking.service);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[520px] mx-auto text-center py-8"
    >
      <motion.div
        className="w-16 h-16 rounded-full border-2 border-[var(--accent)] flex items-center justify-center mx-auto mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        <span className="font-display text-[28px] text-[var(--accent)]">✓</span>
      </motion.div>

      <h2 className="font-display text-[32px] md:text-[40px] font-normal text-[var(--dark)] mb-3">
        Demande envoyée
      </h2>
      <p className="font-body text-[15px] font-light text-[var(--muted)] leading-[1.75] mb-10">
        Merci {booking.prenom}. Votre demande de rendez-vous a bien été reçue. Nous vous confirmerons par téléphone dans les plus brefs délais.
      </p>

      {/* Summary card */}
      <div className="bg-[var(--bg-alt)] border border-[var(--line)] p-6 text-left space-y-4">
        {[
          { label: 'Service', value: booking.serviceLabel || proc?.title },
          {
            label: 'Date & Heure',
            value: booking.date
              ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]} ${booking.date.getFullYear()} à ${booking.time}`
              : '—',
          },
          { label: 'Nom', value: `${booking.prenom} ${booking.nom}` },
          { label: 'Téléphone', value: booking.telephone },
          { label: 'Email', value: booking.email },
        ].map((row) => (
          <div key={row.label} className="flex justify-between items-start gap-4 py-2 border-b border-[var(--line)] last:border-0">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--muted)] flex-shrink-0">
              {row.label}
            </span>
            <span className="font-body text-[14px] font-light text-[var(--dark)] text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <p className="font-body text-[12px] font-light text-[var(--muted)] mt-6">
        Cabinet Dr. Aib Amar · Garidi 2 Bât. 62, Kouba, Alger · +213 0557 969 174
      </p>
    </motion.div>
  );
}

// ─── Main BookingPage ─────────────────────────────────────────────────────────
export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get('service') || '';
  const proc = preService ? getProcedureBySlug(preService) : null;

  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    service: preService,
    serviceLabel: proc?.title || '',
    date: null,
    time: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
  });

  // sync when URL changes
  useEffect(() => {
    if (preService && preService !== booking.service) {
      const p = getProcedureBySlug(preService);
      setBooking(b => ({ ...b, service: preService, serviceLabel: p?.title || '' }));
    }
  }, [preService]);

  const canNext = () => {
    if (step === 1) return !!booking.service;
    if (step === 2) return !!booking.date && !!booking.time;
    if (step === 3) return !!(booking.nom && booking.prenom && booking.telephone && booking.email);
    return true;
  };

  function handleNext() {
    if (step < 4 && canNext()) setStep(s => s + 1);
  }
  function handleBack() {
    if (step > 1) setStep(s => s - 1);
  }

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };
  const [direction, setDirection] = useState(1);

  function goNext() { setDirection(1); handleNext(); }
  function goBack() { setDirection(-1); handleBack(); }

  const proc2 = booking.service ? getProcedureBySlug(booking.service) : null;
  const previewImg = proc2 ? getProcedureImage(proc2.slug) : null;

  return (
    <>
      {/* Header strip */}
      <section className="bg-[var(--bg-alt)] pt-32 md:pt-36 pb-10 px-6 md:px-12 border-b border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto">
          <SectionSupertitle>Rendez-vous</SectionSupertitle>
          <h1 className="font-display text-[36px] md:text-[52px] font-normal text-[var(--dark)] leading-[1.1] mt-2">
            Prendre rendez-vous
          </h1>

          {/* Steps indicator */}
          <div className="flex items-center gap-0 mt-10 max-w-[600px]">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-body text-[12px] font-medium transition-all duration-300 ${
                      step > s.id
                        ? 'bg-[var(--accent)] text-white'
                        : step === s.id
                        ? 'bg-[var(--dark)] text-white'
                        : 'bg-[var(--line)] text-[var(--muted)]'
                    }`}
                  >
                    {step > s.id ? '✓' : s.id}
                  </div>
                  <p className={`font-body text-[10px] font-medium uppercase tracking-[0.1em] mt-1.5 whitespace-nowrap hidden md:block transition-colors duration-300 ${step === s.id ? 'text-[var(--dark)]' : 'text-[var(--muted)]'}`}>
                    {s.label}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mx-2 transition-colors duration-300 ${step > s.id ? 'bg-[var(--accent)]' : 'bg-[var(--line)]'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-12 min-h-[60vh]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left — Step content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
              >
                <h2 className="font-display text-[26px] md:text-[32px] font-normal text-[var(--dark)] mb-8">
                  {step === 1 && 'Quel service vous intéresse ?'}
                  {step === 2 && 'Choisissez votre créneau'}
                  {step === 3 && 'Vos coordonnées'}
                  {step === 4 && 'Votre demande est confirmée'}
                </h2>

                {step === 1 && <StepService booking={booking} setBooking={setBooking} />}
                {step === 2 && <StepDateTime booking={booking} setBooking={setBooking} />}
                {step === 3 && <StepInfo booking={booking} setBooking={setBooking} />}
                {step === 4 && <StepConfirmation booking={booking} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Summary sidebar */}
          {step < 4 && (
            <div className="lg:sticky lg:top-[130px] space-y-4">
              {/* Service preview */}
              <div className="border border-[var(--line)] overflow-hidden">
                {previewImg ? (
                  <img src={previewImg} alt={proc2?.title} className="w-full h-36 object-cover" />
                ) : (
                  <div className="w-full h-36 bg-[var(--bg-alt)] flex items-center justify-center">
                    <p className="font-body text-[11px] text-[var(--muted)]">Aucun service sélectionné</p>
                  </div>
                )}
                <div className="p-4">
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent)] mb-1">
                    {proc2?.categoryLabel || 'Service'}
                  </p>
                  <p className="font-display text-[18px] font-normal text-[var(--dark)]">
                    {proc2?.title || '—'}
                  </p>
                </div>
              </div>

              {/* Booking summary */}
              <div className="border border-[var(--line)] p-4 space-y-3">
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] mb-3">Récapitulatif</p>
                {[
                  { label: 'Date', value: booking.date ? `${booking.date.getDate()} ${MONTH_NAMES_FR[booking.date.getMonth()]}` : '—' },
                  { label: 'Heure', value: booking.time || '—' },
                  { label: 'Nom', value: booking.nom || '—' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between">
                    <span className="font-body text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">{row.label}</span>
                    <span className="font-body text-[13px] font-light text-[var(--dark)]">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="bg-[var(--bg-alt)] p-4">
                <p className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] mb-2">Contact direct</p>
                <p className="font-body text-[14px] font-light text-[var(--dark)]">+213 0557 969 174</p>
                <p className="font-body text-[12px] font-light text-[var(--muted)] mt-1">Lun–Jeu & Sam</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation bar */}
      {step < 4 && (
        <div className="sticky bottom-0 z-50 bg-white border-t border-[var(--line)] px-6 md:px-12 py-4">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            <button
              onClick={goBack}
              disabled={step === 1}
              className={`font-body text-[12px] font-medium uppercase tracking-[0.12em] px-6 py-3 border border-[var(--line)] transition-all duration-200 ${
                step === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[var(--dark)] text-[var(--dark)]'
              }`}
            >
              ← Retour
            </button>

            <div className="flex items-center gap-2">
              {STEPS.slice(0, 3).map(s => (
                <div key={s.id} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${step === s.id ? 'bg-[var(--accent)]' : step > s.id ? 'bg-[var(--accent)]/40' : 'bg-[var(--line)]'}`} />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={!canNext()}
              className={`font-body text-[12px] font-medium uppercase tracking-[0.12em] px-8 py-3 transition-all duration-200 ${
                canNext()
                  ? 'bg-[var(--accent)] text-white hover:bg-[var(--dark)]'
                  : 'bg-[var(--line)] text-[var(--muted)] cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Confirmer →' : 'Suivant →'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
