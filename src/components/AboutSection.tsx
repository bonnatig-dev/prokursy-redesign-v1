import { MapPin, Phone } from 'lucide-react'
import { Mark } from './Mark'

const MAP =
  'https://yandex.ru/maps/?text=%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F%2C%206%D0%93'

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 rounded-t-[25px] bg-[#F6E4CF] py-20 md:py-32">
      <div className="shell">
        <p className="mx-auto max-w-lg text-center text-base leading-relaxed text-[#321C04] md:text-lg">
          Мы работаем в Витебске больше 15 лет. Готовим мастеров для сети парикмахерских «БиGOODи» и
          по заявкам предприятий — с теорией и практикой на живых моделях.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+375297113416"
            className="inline-flex items-center gap-3 rounded-full bg-[#321C04] py-2 pl-2 pr-5 text-[#FFF9F2] transition-colors hover:bg-[#1F1003]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#321C04]">
              <Phone size={16} />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide">Позвонить</span>
          </a>
          <a
            href={MAP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#D9C4AA] py-2 pl-2 pr-5 text-[#321C04] transition-colors hover:bg-[#CEBA9E]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#321C04]">
              <MapPin size={16} />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide">Как добраться</span>
          </a>
        </div>
      </div>

      <div className="mt-16 flex w-full items-center gap-0.5">
        <span className="h-2 w-2 rounded-full bg-[#D9C4AA]" />
        <span className="h-[2px] flex-1 bg-[#D9C4AA]" />
        <span className="h-2 w-2 rounded-full bg-[#D9C4AA]" />
      </div>

      <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-start">
          <Mark />
          <p className="font-headline text-xs font-semibold uppercase tracking-widest text-[#321C04]">
            Учебный
            <br />
            центр
          </p>
        </div>
        <p className="font-headline text-2xl font-normal leading-[1.3] text-[#321C04] sm:text-3xl md:text-4xl lg:text-[42px]">
          Учебный центр ведёт ЧТПУП «БелОксиС». Занятия сочетают теорию и практику на моделях: на
          курсах косметика и классического массажа практика составляет около 70%. Есть обучение с
          присвоением разряда, короткие курсы «для старта» или «для себя», повышение квалификации,
          семинары и мастер-классы.
        </p>
      </div>
    </section>
  )
}
