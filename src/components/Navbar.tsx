import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#directions', label: 'Направления' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Контакты' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="absolute top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
          <a href="#hero" className="font-headline text-lg font-bold tracking-tight text-black">
            БиGOODи.
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
            className="relative ml-1 h-9 w-9 rounded-full"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-black transition-transform duration-300 ${
                open ? 'rotate-45' : '-translate-y-[5px]'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-black transition-transform duration-300 ${
                open ? '-rotate-45' : 'translate-y-[5px]'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
            />
          </button>
        </div>

        <nav
          className={`mt-3 w-56 origin-top rounded-2xl bg-white p-2 shadow-lg transition-all duration-300 ${
            open
              ? 'pointer-events-auto animate-fade-in-down scale-100 opacity-100 translate-y-0'
              : 'pointer-events-none scale-95 opacity-0 -translate-y-2'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)' }}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-black hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
