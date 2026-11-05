import { useEffect, useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const LINKS = [
  { href: '#directions', label: 'Направления' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#howto', label: 'Как записаться' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
]

const MAP =
  'https://yandex.ru/maps/?text=%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F%2C%206%D0%93'

const ADDRESS = 'Витебск, ул. Белорусская, 6Г, офис 7, 2 этаж'
const HOURS = 'Будни 09:00–18:00 / обед 13:00–14:00'
const EMAIL = 'beloksis@mail.ru'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const solid = scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-[#FFF9F2] text-[#321C04] shadow-sm' : 'bg-black/35 text-white backdrop-blur-md'
      }`}
    >
      <div className="shell">
        <div
          className={`hidden items-center justify-between gap-4 border-b py-2 text-xs font-medium lg:flex ${
            solid ? 'border-[#321C04]/15' : 'border-white/20'
          }`}
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a href="tel:+375297113416" className="inline-flex items-center gap-1.5 hover:opacity-80">
              <Phone size={13} />
              +375 (29) 711-34-16
            </a>
            <span aria-hidden="true">/</span>
            <a href="tel:+375295113416" className="inline-flex items-center gap-1.5 hover:opacity-80">
              +375 (29) 511-34-16
            </a>
            <span aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} />
              {HOURS}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a href={MAP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80">
              <MapPin size={13} />
              {ADDRESS}
            </a>
            <span aria-hidden="true">/</span>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:opacity-80">
              <Mail size={13} />
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#hero" className="font-headline shrink-0 text-xl font-bold tracking-tight">
            БиGOODи
          </a>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Разделы сайта">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:opacity-70">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+375297113416"
            className={`hidden rounded-full px-5 py-2 text-sm font-medium transition-colors lg:inline-flex ${
              solid ? 'bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003]' : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            Записаться
          </a>

          <button
            type="button"
            className="relative h-10 w-10 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 transition-transform duration-300 ${
                solid ? 'bg-[#321C04]' : 'bg-white'
              } ${open ? 'rotate-45' : '-translate-y-[5px]'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 transition-transform duration-300 ${
                solid ? 'bg-[#321C04]' : 'bg-white'
              } ${open ? '-rotate-45' : 'translate-y-[5px]'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-[calc(100vh-4rem)]' : 'max-h-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
      >
        <div className="shell max-h-[calc(100vh-4rem)] overflow-y-auto pb-8 pt-1">
          <nav className="flex flex-col border-t border-[#321C04]/15 pt-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-3 text-base font-medium text-[#321C04]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 space-y-3 border-t border-[#321C04]/15 pt-4 text-sm text-[#321C04]">
            <a href="tel:+375297113416" className="flex items-center gap-2">
              <Phone size={16} />
              +375 (29) 711-34-16
            </a>
            <a href="tel:+375295113416" className="flex items-center gap-2">
              <Phone size={16} />
              +375 (29) 511-34-16
            </a>
            <p className="flex items-center gap-2">
              <Clock size={16} />
              {HOURS}
            </p>
            <a href={MAP} target="_blank" rel="noreferrer" className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {ADDRESS}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
              <Mail size={16} />
              {EMAIL}
            </a>
            <a
              href="tel:+375297113416"
              onClick={close}
              className="mt-2 inline-flex rounded-full bg-[#321C04] px-5 py-2.5 text-sm font-medium text-[#FFF9F2]"
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
