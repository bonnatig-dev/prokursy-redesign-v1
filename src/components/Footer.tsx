export function Footer() {
  return (
    <footer className="relative z-10 bg-[#321C04] py-10 text-[#FFF9F2]">
      <div className="shell flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-headline text-base">БиGOODи / учебный центр, Витебск</p>
        <p>ЧТПУП «БелОксиС» / УНН 391261401</p>
        <a href="tel:+375297113416" className="hover:opacity-80">
          +375 (29) 711-34-16
        </a>
      </div>
    </footer>
  )
}
