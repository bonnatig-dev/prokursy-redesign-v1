const FAQ = [
  {
    q: 'Как записаться?',
    a: 'Позвоните, затем приезжайте с паспортом. Можно выбрать утро, день или выходной.',
  },
  {
    q: 'Нужно ли приводить моделей?',
    a: 'На большинстве практических курсов да: модели нужно привести с собой.',
  },
  {
    q: 'Помогают ли с работой?',
    a: 'На курсах с разрядом помогаем с трудоустройством, в том числе в сеть «БиGOODи». Как это устроено на выбранном направлении, расскажем при записи.',
  },
  {
    q: 'Какой документ выдают?',
    a: 'После «Архитектуры бровей» и «PRO наращивания» выдаём сертификат. По разрядным программам документ уточним при записи.',
  },
  {
    q: 'Где вы находитесь?',
    a: 'Для записи приезжайте в Витебск, ул. Белорусская, 6Г, офис 7, 2 этаж. Также в наших контактах встречаются ул. Белорусская, 6а, офис 16 и ул. Зеньковой, 1, офис 3г/6. Актуальный адрес лучше подтвердить по телефону.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative z-10 bg-[#F6E4CF] py-20 md:py-28">
      <div className="shell">
        <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/70">Вопросы</p>
        <h2 className="mt-2 font-headline text-3xl text-[#321C04] md:text-5xl">Частые вопросы</h2>
        <div className="mt-10 divide-y divide-[#321C04]/15 border-y border-[#321C04]/15">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-headline text-lg text-[#321C04] [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-[#321C04]/40 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-[#321C04]/80 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
