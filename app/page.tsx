import {
  CalendarDaysIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <main>
      <section className="bg-mediumTeal md:grid md:grid-cols-2 p-10 md:gap-10 md:items-center md:h-screen">
        <div className="flex flex-col md:order-1">
          <h1 className="font-headings text-white text-4xl md:text-6xl lg:text-7xl text-center leading-tight">
            Ordinacija za ultrazvučnu dijagnostiku Dr Rahović
          </h1>

          <a
            href="#zakazivanje-informacije"
            className="font-body text-white inline-block p-4 bg-darkTeal rounded-lg font-bold mx-auto my-5 md:my-10"
          >
            Zakazivanje i informacije
          </a>
        </div>

        <div className="bg-[url('/elen-sher-nbU4xF3YUbw-unsplash.jpg')] bg-cover bg-no-repeat h-96 md:h-full bg-center rounded-lg md:order-0"></div>
      </section>

      <section className="md:grid md:grid-cols-3 p-10 md:pr-0 md:gap-10 md:items-center">
        <div className="flex flex-col md:col-span-2">
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

        <div className="bg-[url('/elen-sher-qrTdlfGDRdI-unsplash.jpg')] bg-cover bg-no-repeat aspect-[2/3] rounded-lg md:rounded-l-lg"></div>
      </section>

      <section className="bg-lightTeal pt-10" id="zakazivanje-informacije">
        <h2 className="text-center font-headings text-6xl mb-10">Kontakt</h2>

        <div className="flex p-10 md:justify-center flex-wrap">
          <div className="flex items-center md:w-1/2 mb-20 justify-center">
            <CalendarDaysIcon className="text-darkTeal h-10" />

            <div className="ml-4">
              <h3 className="font-headings text-3xl">Radno vrijeme</h3>
              <p>Od ponedeljka do petka od 7:30 - 15:30h</p>
            </div>
          </div>

          <div className="flex items-center md:w-1/2 mb-20 justify-center">
            <PhoneIcon className="text-darkTeal h-10" />

            <div className="ml-4">
              <h3 className="font-headings text-3xl">Zakazivanje</h3>
              <p>
                Pozvati broj telefona{' '}
                <a className="font-bold" href="tel:+38269050055">
                  069 050 055
                </a>{' '}
                radnim danima od 8h do 16h.
              </p>
            </div>
          </div>

          <div className="flex items-center md:w-1/2 mb-10 justify-center">
            <MapPinIcon className="text-darkTeal h-10" />

            <div className="ml-4">
              <h3 className="font-headings text-3xl">Adresa</h3>
              <address className="not-italic">
                Voja Lješnjaka b.b.
                <br />
                Bijelo Polje
              </address>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-darkTeal text-white p-1 text-center font-body">
        &copy; {new Date().getFullYear()} Ordinacija za ultrazvučnu dijagnostiku
        Dr Rahović
      </footer>
    </main>
  )
}
