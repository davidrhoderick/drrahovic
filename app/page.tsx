export default function Home() {
  return (
    <main>
      <section className="bg-mediumTeal grid grid-cols-2 p-10 gap-10 items-center">
        <div className="bg-black h-96 rounded-lg"></div>

        <div className="flex flex-col">
          <h1 className="font-headings text-white text-7xl text-center leading-tight">
            Ordinacija za ultrazvučnu dijagnostiku Dr Rahović
          </h1>

          <a
            href="#zakazivanje-informacije"
            className="font-body text-white inline-block p-4 bg-darkTeal rounded-lg font-bold mx-auto my-10"
          >
            Zakazivanje i informacije
          </a>
        </div>
      </section>

      <section className="grid grid-cols-3 p-10 pr-0 gap-10 items-center">
        <div className="flex flex-col col-span-2">
          <h2 className="font-headings text-darkTeal text-6xl text-center leading-tight mb-5">
            Vršimo sledeće preglede
          </h2>

          <ul className="text-center text-xl leading-loose">
            <li>Eho pregled abdomena</li>
            <li>Eho urotrakta</li>
            <li>Eho bubrega</li>
            <li>Eho testisa</li>
            <li>Eho mekih tkiva vrata</li>
            <li>Eho dojki</li>
            <li>Eho kukova kod djece</li>
            <li>Eho mokraćne bešike i prostate</li>
            <li>Eho mekih tkiva</li>
            <li>Kolor dopler KS vrata</li>
            <li>Kolor dopler KS donnih ekstremiteta</li>
            <li>Kolor dopler KS gornjih ekstremiteta</li>
            <li>Kolor dopler renalnih arterija</li>
            <li>Kolor dopler splenoportalnog sistema</li>
          </ul>
        </div>

        <div className="bg-black h-96 rounded-l-lg"></div>
      </section>

      <section className="bg-lightTeal">
        <h2 className="text-center">Kontakt</h2>

        <div className="grid grid-cols-2"></div>
      </section>
    </main>
  )
}
