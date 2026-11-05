import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const MAP =
  'https://yandex.ru/maps/?text=%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F%2C%206%D0%93'

export function ContactsSection() {
  return (
    <section id="contact" className="relative z-10 bg-[#FFF9F2] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/70">Запись</p>
          <h2 className="mt-2 font-headline text-3xl text-[#321C04] md:text-5xl">Позвоните или приезжайте в учебный центр</h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#321C04]/80">
            Предварительная запись по телефону. Директор учебного центра Евгения отвечает в будни с
            09:00 до 18:00, обед с 13:00 до 14:00. Суббота и воскресенье — выходные.
          </p>
          <div className="mt-8 space-y-4">
            <a href="tel:+375297113416" className="flex items-center gap-3 text-xl font-medium text-[#321C04]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F6E4CF]">
                <Phone size={18} />
              </span>
              +375 (29) 711-34-16
            </a>
            <a href="tel:+375295113416" className="flex items-center gap-3 text-xl font-medium text-[#321C04]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F6E4CF]">
                <Phone size={18} />
              </span>
              +375 (29) 511-34-16
            </a>
            <p className="flex items-start gap-3 text-[#321C04]/80">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6E4CF] text-[#321C04]">
                <Clock size={18} />
              </span>
              <span>
                Магазин «БиGOODи»: +375 (29) 210-25-05, будни 09:00–18:00, суббота 10:00–16:00.
              </span>
            </p>
            <p className="flex items-start gap-3 text-[#321C04]/80">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6E4CF] text-[#321C04]">
                <Mail size={18} />
              </span>
              <span>
                <a href="mailto:beloksis@mail.ru" className="underline-offset-2 hover:underline">
                  beloksis@mail.ru
                </a>
                {' / '}
                <a href="mailto:Eugenia_beloksis@mail.ru" className="underline-offset-2 hover:underline">
                  Eugenia_beloksis@mail.ru
                </a>
                . Мы в Instagram: bigoodi.school.by
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-[#F6E4CF] p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-[#321C04]" size={20} />
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/60">Для записи</p>
                <p className="mt-1 text-lg text-[#321C04]">
                  210001, Витебск, ул. Белорусская, 6Г, офис 7, 2 этаж
                </p>
                <a
                  href={MAP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-[#321C04] underline underline-offset-4"
                >
                  Открыть на карте
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#321C04]/10 p-6 text-[#321C04]">
            <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/60">Ещё один адрес</p>
            <p className="mt-2">ул. Белорусская, 6а, офис 16, 3 этаж</p>
          </div>
          <div className="rounded-3xl border border-[#321C04]/10 p-6 text-[#321C04]">
            <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/60">Ещё один адрес</p>
            <p className="mt-2">ул. Зеньковой, 1, офис 3г/6, 4 этаж</p>
          </div>
          <p className="text-sm text-[#321C04]/70">
            Адреса указаны так, как сейчас на сайте. Актуальный лучше подтвердить по телефону.
          </p>
          <p className="text-sm text-[#321C04]/70">
            Юридические данные: ЧТПУП «БелОксиС» / УНН 391261401. Факс: 8 0212 35-98-01
          </p>
        </div>
      </div>
    </section>
  )
}
