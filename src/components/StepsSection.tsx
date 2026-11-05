const STEPS = [
  {
    n: '01',
    text: 'Позвоните Евгении: +375 (29) 711-34-16 или +375 (29) 511-34-16. Предварительная запись нужна до визита.',
  },
  {
    n: '02',
    text: 'Приезжайте с паспортом в будни с 09:00 до 18:00, обед с 13:00 до 14:00. Ждём вас на ул. Белорусской, 6Г, офис 7, 2 этаж.',
  },
  {
    n: '03',
    text: 'Заключаете договор. С собой: паспорт, его копия и 2 фото.',
  },
  {
    n: '04',
    text: 'Оплата или предоплата — условия расскажем при записи. Дальше теория и практика по выбранному курсу. Группы бывают утренние, дневные, вечерние и выходного дня, это зависит от направления.',
  },
]

export function StepsSection() {
  return (
    <section id="howto" className="relative z-10 bg-[#FFF9F2] py-20 md:py-28">
      <div className="shell">
        <p className="text-sm font-medium uppercase tracking-widest text-[#321C04]/70">Как проходит обучение</p>
        <h2 className="mt-2 font-headline text-3xl text-[#321C04] md:text-5xl">От звонка до первого занятия</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-3xl border border-[#321C04]/10 bg-[#F6E4CF] p-6 md:p-8">
              <span className="font-headline text-sm font-semibold tracking-widest text-[#321C04]/60">{step.n}</span>
              <p className="mt-3 text-base leading-relaxed text-[#321C04] md:text-lg">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
