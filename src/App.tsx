import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { FeaturesSection } from './components/FeaturesSection'
import { TeachersSection } from './components/TeachersSection'
import { StepsSection } from './components/StepsSection'
import { FaqSection } from './components/FaqSection'
import { ContactsSection } from './components/ContactsSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <main>
      <section id="hero" className="relative mb-[-25px] h-screen overflow-hidden">
        <img
          src="./images/hero-classroom.webp"
          alt="Учебный класс «БиGOODи»: зеркала и рабочие места"
          className="absolute inset-0 h-full w-full origin-center object-cover motion-safe:animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/20" />
        <Navbar />
        <div className="shell relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <h1 className="text-center font-headline text-5xl font-normal leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[96px]">
            Учимся на живых
            <br />
            <em
              className="not-italic"
              style={{ fontFamily: "'Inter Tight', Arial, sans-serif", fontStyle: 'italic' }}
            >
              моделях
            </em>
            , не на слайдах
          </h1>
          <p className="mx-auto mt-5 max-w-[420px] text-center text-sm font-medium text-white/80 md:text-base">
            Учебный центр «БиGOODи» в Витебске: больше 15 лет готовим мастеров. Около 70% времени на
            профильных курсах — практика.
          </p>
          <div className="mx-auto mt-8 flex items-center rounded-xl bg-black/25 py-1 pl-6 pr-1 backdrop-blur-md">
            <p className="hidden pr-4 text-sm font-medium text-white sm:block">
              Предварительная запись по телефону / группы уточняйте при звонке
            </p>
            <p className="pr-4 text-sm font-medium text-white sm:hidden">Запись по телефону</p>
            <a
              href="tel:+375297113416"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              Записаться
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      <FeaturesSection />
      <TeachersSection />
      <StepsSection />
      <FaqSection />
      <ContactsSection />
      <Footer />
    </main>
  )
}
