import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TEACHERS = [
  {
    name: 'Мария Зуева',
    role: 'Тренер / массаж, косметик',
    photo: './teachers/zueva.webp',
    bio: 'Врач, массажист с 10-летним стажем, косметик, мастер тейпирования, основатель spa-студии. Победитель чемпионата Беларуси по spa-массажу (2015).',
  },
  {
    name: 'Ольга Седловская',
    role: 'Маникюр, педикюр, моделирование ногтей',
    photo: './teachers/sedlovskaya.webp',
    bio: 'Преподаватель по маникюру, педикюру и моделированию ногтей. Стаж преподавания 8 лет, мастер 5 разряда, инструктор международной компании RuNail. Лауреат и призёр конкурсов «Роза ветров» и чемпионата Беларуси по моделированию ногтей.',
  },
  {
    name: 'Евгения Сивакова',
    role: 'Парикмахерское искусство',
    photo: './teachers/sivakova.webp',
    bio: 'Технолог профессиональной косметики для волос Constant Delight и Nexxt. Парикмахер 4 разряда.',
  },
  {
    name: 'Инесса Шевченко',
    role: 'Косметик, восковая депиляция',
    photo: './teachers/shevchenko-i.webp',
    bio: 'Косметик 5 разряда. Преподаватель практической части по программе «Косметик» и преподаватель по программе «Восковая депиляция».',
  },
]

export function TeachersSection() {
  const scroller = useRef<HTMLDivElement>(null)
  const drag = useRef({ down: false, startX: 0, startLeft: 0 })

  const slideBy = useCallback((dir: number) => {
    const el = scroller.current
    if (!el) return
    const slide = el.querySelector<HTMLElement>('[data-slide]')
    if (!slide) return
    const style = getComputedStyle(el)
    const gap = parseFloat(style.columnGap || style.gap || '16') || 16
    el.scrollBy({ left: dir * (slide.offsetWidth + gap), behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = scroller.current
    if (!el) return

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('a,button')) return
      drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft }
      el.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!drag.current.down) return
      el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX)
    }
    const onPointerUp = () => {
      drag.current.down = false
    }
    const onKey = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement) && document.activeElement !== el) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        slideBy(1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        slideBy(-1)
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    el.addEventListener('keydown', onKey)
    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
      el.removeEventListener('keydown', onKey)
    }
  }, [slideBy])

  return (
    <section id="teachers" className="relative z-10 bg-[#F6E4CF] py-20 md:py-28">
      <div className="shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/70">Преподаватели</p>
            <h2 className="mt-2 font-headline text-3xl text-[#321C04] md:text-5xl">Наши преподаватели</h2>
            <p className="mt-3 max-w-xl text-[#321C04]/80">
              Наш преподавательский состав: профессиональные педагоги и мастера.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => slideBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#321C04]/20 text-[#321C04] hover:bg-[#D9C4AA]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={() => slideBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#321C04]/20 text-[#321C04] hover:bg-[#D9C4AA]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TEACHERS.map((t) => (
            <article
              data-slide
              key={t.name}
              className="w-[calc(100%-56px)] shrink-0 snap-start rounded-3xl border border-[#321C04]/10 bg-[#FFF9F2] sm:w-[calc((100%-16px)/2)] min-[1200px]:w-[calc((100%-48px)/4)]"
            >
              <div className="mx-auto mt-[18px] aspect-[3/4] w-1/2 overflow-hidden rounded-2xl bg-[#F6E4CF]">
                <img src={t.photo} alt={t.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="p-5">
                <h3 className="font-headline text-lg text-[#321C04]">{t.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#321C04]/70">{t.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#321C04]/80">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
