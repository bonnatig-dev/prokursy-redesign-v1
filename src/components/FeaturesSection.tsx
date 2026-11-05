import { useEffect, useRef, useState } from 'react'
import { Mark } from './Mark'

type Course = { name: string; duration?: string }

type Direction = {
  id: string
  title: string
  photo: string
  alt: string
  description: string
  courses: Course[]
}

const DIRECTIONS: Direction[] = [
  {
    id: 'hair',
    title: 'Парикмахерское искусство',
    photo: './images/dir-hair.webp',
    alt: 'Учебный зал с зеркалами и рабочими местами парикмахеров',
    description:
      'Стрижки, укладки, окрашивание и причёски. Учимся на оборудованных местах и профессиональных материалах.',
    courses: [
      { name: 'Парикмахер 4 разряда', duration: '6 мес' },
      { name: 'Парикмахер 5 разряда', duration: '1 мес' },
      { name: 'Причёски / обучение с нуля' },
      { name: 'Интенсивы по парикмахерскому искусству' },
    ],
  },
  {
    id: 'nails',
    title: 'Маникюр и педикюр',
    photo: './images/dir-nails.webp',
    alt: 'Учебный класс с партами и зеркалами',
    description:
      'Классика, комбинированный и аппаратный маникюр и педикюр, моделирование ногтей и короткие интенсивы.',
    courses: [
      { name: 'Мастер по маникюру 4 разряда', duration: '1,5 мес' },
      { name: 'Маникюр и педикюр 4 разряда', duration: '3 мес' },
      { name: 'Самозанятый мастер по маникюру', duration: '3 дня' },
      { name: 'Самозанятый мастер по педикюру', duration: '3 дня' },
      { name: 'Наращивание ногтей / дизайн ногтей' },
    ],
  },
  {
    id: 'visage',
    title: 'Визаж и брови',
    photo: './images/dir-visage.webp',
    alt: 'Теоретический класс с доской и схемами оформления бровей',
    description:
      'Визаж с нуля и для действующих мастеров, брови и наращивание ресниц — отдельными программами школы.',
    courses: [
      { name: 'Визажист 4 разряда' },
      { name: 'Визажист-стилист / свадебный стилист' },
      { name: 'Визаж для себя' },
      { name: 'BROW мастер / брови BAZA / архитектура бровей' },
      { name: 'Наращивание ресниц, в том числе объёмное 2D и 3D' },
    ],
  },
  {
    id: 'cosmo',
    title: 'Косметология и массаж',
    photo: './images/dir-cosmo.webp',
    alt: 'Кабинет с кушетками для косметологии и массажа',
    description:
      'Программы косметика, классический и spa-массаж, восковая депиляция и шугаринг.',
    courses: [
      { name: 'Косметик 4 разряда' },
      { name: 'Косметик 5 разряда' },
      { name: 'Классический массаж / spa-мастер' },
      { name: 'Восковая депиляция / шугаринг' },
    ],
  },
]

export function FeaturesSection() {
  const [active, setActive] = useState(0)
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[]
    if (!nodes.length) return

    const activeObs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const idx = nodes.indexOf(visible.target as HTMLElement)
        if (idx >= 0) setActive(idx)
      },
      { threshold: 0.6 },
    )

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = (entry.target as HTMLElement).dataset.id
          if (id) setRevealed((prev) => (prev[id] ? prev : { ...prev, [id]: true }))
        })
      },
      { threshold: 0.15 },
    )

    nodes.forEach((n) => {
      activeObs.observe(n)
      revealObs.observe(n)
    })
    return () => {
      activeObs.disconnect()
      revealObs.disconnect()
    }
  }, [])

  const scrollTo = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="directions" className="relative overflow-x-clip px-5 py-20 md:px-10 md:py-40 lg:px-16 lg:py-48">
      <img
        src="./images/features-bg.webp"
        alt=""
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="fixed inset-0 -z-10 bg-black/40" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-24 lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] xl:gap-48">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-32">
          <div>
            <h2 className="font-headline text-2xl font-normal leading-[1.2] text-white sm:text-3xl lg:text-[46px]">
              Направления, на которых мы учим
            </h2>
            <div className="mt-8 hidden flex-col gap-2 lg:flex">
              {DIRECTIONS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(i)}
                  className={`rounded-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                    active === i ? 'bg-black/20 text-white' : 'bg-black/20 text-white/40'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 hidden lg:block">
            <p className="text-sm font-medium text-white/80">
              Даты ближайших групп уточняйте по звонку. Instagram: bigoodi.school.by
            </p>
            <a
              href="tel:+375297113416"
              className="mt-4 inline-block rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              Записаться
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {DIRECTIONS.map((item, i) => {
            const shown = Boolean(revealed[item.id])
            return (
              <article
                key={item.id}
                data-id={item.id}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className={`rounded-3xl bg-black/20 p-6 backdrop-blur-sm transition-all duration-700 ease-out md:p-10 ${
                  shown ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <Mark fill="rgba(255,255,255,0.88)" ink="#321C04" />
                  <h3 className="font-headline text-xl font-medium text-white md:text-2xl">{item.title}</h3>
                </div>
                <div className="aspect-video overflow-hidden rounded-2xl bg-black/30">
                  <img src={item.photo} alt={item.alt} className="h-full w-full object-cover" />
                </div>
                <p className="mt-5 text-sm font-medium leading-relaxed text-white/60 md:text-base">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.courses.map((course) => (
                    <li
                      key={course.name}
                      className="flex items-baseline justify-between gap-4 text-sm font-medium text-white md:text-base"
                    >
                      <span>{course.name}</span>
                      {course.duration ? (
                        <span className="shrink-0 text-white/60">{course.duration}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
