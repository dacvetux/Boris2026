const LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=100046824773381&sk=about',
  instagram: 'https://www.instagram.com/boris.sovic2026/',
  telegram: '#',
};

const profileFacts = [
  'Predsednik študentske organizacije Univerze v Mariboru',
  'Prorektor študent UM',
  'Magistriral na FERI-ju!',
  'Edini študent, dobitnik zlate plakete UM!',
];

const roles = [
  'Vodil priprave na plebiscit v Mariboru',
  'Prvi državni sekretar za energetiko',
  'Poslanec v državnem zboru',
  '2× župan Maribora',
  'Podpredsednik Odbora regij EU',
  'Veleposlanik',
  'Predsednik uprave velike družbe',
];

const mandates = [
  '~10.000 novih delovnih mest',
  'Manj brezposelnosti',
  'Močne investicije v infrastrukturo',
  'Nekaj tisoč stanovanj',
  'Gospodarski vzpon mesta',
];

const todayStatsOne = [
  'Manj učencev, manj dijakov',
  '28% manj študentov',
  'Od 2008 do 2024: Slovenija +51.415 delovnih mest',
  'Od 2008 do 2024: Maribor –2.413 delovnih mest',
  'Od 2014 do 2024: 31% manj stanovanj kot slovensko povprečje',
  '47% manj investicij na prebivalca',
  '68% višji dolg na prebivalca v letu 2024',
];

const todayStatsTwo = [
  'Močna centralizacija: od treh novih delovnih mest sta dve v Ljubljani.',
  'Plače so v Mariboru že 4,6 % nižje od slovenskega povprečja (največja negativna razlika v dveh desetletjih)',
  'Razvojno zaostajanje za Slovenijo se veča',
];

const needs = [
  'Decentralizacija delovnih mest',
  'Več investicij, manj zadolževanja',
  'Več stanovanj',
  'Več priložnosti za mlade',
  'Usklajeno delovanje države in mesta',
];

const socialLinks = [
  { label: 'Facebook', href: LINKS.facebook, className: 'bg-[#24377e] text-white' },
  { label: 'Instagram', href: LINKS.instagram, className: 'bg-[#e32238] text-white' },
  { label: 'Telegram', href: LINKS.telegram, className: 'bg-[#90a8c2] text-[#0f1535]' },
];

const portrait = '/boris-placeholder.svg';
const archivePhoto = '/boris-placeholder.svg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#20264d] text-white">
      <style>{`
        .shadow-text { text-shadow: 6px 6px 0 rgba(10,15,45,.35); }
        .section-dot-bg {
          background-image:
            radial-gradient(circle at 20px 20px, rgba(167,193,225,.35) 2px, transparent 0),
            radial-gradient(circle at 70px 60px, rgba(224,34,56,.18) 2px, transparent 0);
          background-size: 80px 80px, 90px 90px;
        }
        .brush {
          background: linear-gradient(90deg, rgba(227,36,57,.9), rgba(36,55,126,.85));
          filter: saturate(110%);
        }
      `}</style>

      <header className="relative overflow-hidden border-b border-white/10 section-dot-bg">
        <div className="absolute inset-x-0 top-0 h-6 bg-[#e32238]" />

        <div className="absolute inset-x-0 top-24 hidden h-24 opacity-90 lg:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-full">
              <div className="absolute left-0 right-0 top-8 h-3 bg-[#e32238]" />
              <div className="absolute left-[5%] top-0 h-20 w-1 rounded bg-[#e32238]" />
              <div className="absolute left-[28%] top-0 h-20 w-1 rounded bg-[#e32238]" />
              <div className="absolute left-[52%] top-0 h-20 w-1 rounded bg-[#e32238]" />
              <div className="absolute left-[77%] top-0 h-20 w-1 rounded bg-[#e32238]" />
              <div className="absolute left-0 right-0 top-10 flex items-start justify-between gap-3">
                <div className="h-20 w-[32%] rounded-t-full border-t-[18px] border-[#e32238]" />
                <div className="h-24 w-[32%] rounded-t-full border-t-[18px] border-[#e32238]" />
                <div className="h-20 w-[32%] rounded-t-full border-t-[18px] border-[#e32238]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-16 md:grid-cols-[1.1fr_.9fr] md:items-end md:pt-24">
          <div className="z-10">
            <div className="mb-6 inline-block rotate-[-5deg] bg-[#90a8c2] px-5 py-3 text-lg font-black uppercase tracking-wide text-white shadow-lg md:text-2xl">
              Za Maribor
            </div>

            <h1 className="shadow-text max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-8xl lg:text-[8.5rem]">
              Boris
              <br />
              Sovič
            </h1>

            <div className="mt-8 max-w-3xl text-2xl font-black uppercase leading-none sm:text-3xl md:text-5xl">
              <div>Razmišljaj</div>
              <div>Pametno.</div>
              <div>
                Pridi <span className="text-[#e32238]">volit!</span>
              </div>
            </div>

            <div className="mt-8 inline-flex rounded-full bg-[#e32238] px-6 py-4 text-xl font-black uppercase leading-none text-white shadow-2xl sm:text-2xl md:text-4xl">
              Volitve 22.3.
            </div>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-[#24377e] opacity-70 blur-2xl" />
              <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-white/10 to-transparent">
                <img src={portrait} alt="Boris Sovič" className="h-auto w-full object-cover grayscale" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="text-2xl font-black uppercase leading-none md:text-3xl">
                  Boris <span className="block">Sovič</span>
                </div>
                <div className="border-[6px] border-white bg-[#e32238] px-5 py-3 text-3xl font-black uppercase leading-none text-white shadow-xl">
                  SD
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 bg-[#0f1535]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div>
                  <div className="inline-block bg-[#e32238] px-4 py-2 text-sm font-black uppercase tracking-wide text-white md:text-base">
                    Podpri kampanjo zdaj
                  </div>
                  <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-white md:text-6xl">
                    Pridi volit.
                    <br />
                    Deli vsebino.
                    <br />
                    Vključi se v pogovor.
                  </h2>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
                    Pridi volit 22.3. in pomagaj, da Maribor dobi močno zastopstvo v državnem zboru. Deli vsebino iz Facebook in Instagram strani Borisa Soviča ter se vključi v skupino Telegram za pogovor v živo.
                  </p>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} className={`block rounded-2xl px-6 py-5 text-center text-xl font-black uppercase tracking-wide shadow-xl transition hover:scale-[1.01] md:text-2xl ${item.className}`}>
                      {item.label}
                    </a>
                  ))}
                  <p className="pt-2 text-sm text-white/55 md:text-base">V kodi dodaj povezave v objektu LINKS.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#9fb9d3] text-[#24377e]">
          <div className="absolute inset-0 opacity-20"><div className="section-dot-bg h-full w-full" /></div>
          <div className="relative mx-auto max-w-6xl px-6 py-18 text-center md:py-24">
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Kdo je Boris Sovič?</h2>
            <p className="mx-auto mt-6 max-w-5xl text-2xl font-black uppercase leading-tight md:text-5xl">In zakaj bi ga moral poznati</p>
            <div className="mx-auto mt-4 inline-block bg-[#24377e] px-5 py-3 text-3xl font-black uppercase text-white md:text-6xl">Vsak Mariborčan?</div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#173564] section-dot-bg">
          <div className="brush absolute left-0 top-20 h-20 w-full opacity-60" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1fr_.95fr] md:items-center md:py-20">
            <div>
              <h3 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                Od študentskega voditelja
                <br />
                do <span className="text-[#e32238]">župana mesta</span>
              </h3>

              <div className="mt-10 max-w-xl rotate-[-2deg] bg-[#f4f0e8] p-6 text-[#111827] shadow-2xl">
                <ul className="space-y-4 text-xl font-medium leading-snug md:text-2xl">
                  {profileFacts.map((fact) => (
                    <li key={fact} className="border-b border-[#24377e]/30 pb-2 last:border-b-0">• {fact}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rotate-[4deg] overflow-hidden rounded-md bg-white p-4 shadow-2xl">
                <img src={archivePhoto} alt="Arhivska fotografija Borisa Soviča" className="h-auto w-full max-w-sm object-cover grayscale" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#596187] section-dot-bg">
          <div className="mx-auto max-w-6xl px-6 py-18 md:py-20">
            <div className="grid gap-5 md:grid-cols-2">
              {roles.map((item, index) => (
                <div key={item} className={`p-5 text-2xl font-black uppercase leading-tight shadow-xl md:text-4xl ${index === 3 || index === 4 ? 'bg-[#e32238] text-white' : 'bg-[#173564] text-white'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#113868] section-dot-bg">
          <div className="absolute inset-x-0 top-0 hidden h-24 opacity-70 md:block">
            <div className="mx-auto max-w-7xl px-6">
              <div className="relative h-24">
                <div className="absolute left-0 right-0 top-8 h-2 bg-[#8cd7a2]" />
                <div className="absolute left-0 right-0 top-10 flex items-start justify-between gap-3">
                  <div className="h-16 w-[32%] rounded-t-full border-t-[14px] border-[#8cd7a2]" />
                  <div className="h-20 w-[32%] rounded-t-full border-t-[14px] border-[#8cd7a2]" />
                  <div className="h-16 w-[32%] rounded-t-full border-t-[14px] border-[#8cd7a2]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-6 py-18 text-center md:py-24">
            <h3 className="text-3xl font-black uppercase text-[#8cd7a2] md:text-5xl">V njegovih mandatih:</h3>
            <div className="mx-auto mt-10 max-w-4xl space-y-5">
              {mandates.map((item, index) => (
                <div key={item} className="text-3xl font-black uppercase leading-tight md:text-6xl">
                  <span className={`${index % 2 === 0 ? 'bg-[#b0e7b8] text-[#14385f]' : 'text-[#90a8c2]'} inline-block px-4 py-2`}>{item}</span>
                  {index !== mandates.length - 1 && <span className="ml-3 text-[#8cd7a2]">✓</span>}
                </div>
              ))}
            </div>
            <div className="mt-12 text-4xl font-black uppercase text-[#8cd7a2] md:text-7xl">Renesansa</div>
            <div className="text-4xl font-black uppercase text-white md:text-7xl">Štajerske metropole</div>
          </div>
        </section>

        <section className="bg-[#1b1018] section-dot-bg">
          <div className="mx-auto max-w-6xl px-6 py-18 md:py-20">
            <h3 className="text-center text-4xl font-black uppercase text-[#e32238] md:text-6xl">Danes?</h3>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                {todayStatsOne.map((item, idx) => (
                  <div key={item} className={`text-2xl font-black uppercase leading-tight md:text-4xl ${idx === 0 ? 'text-[#b9a8b6]' : 'text-white'}`}>
                    <span className={`${idx === 2 ? 'bg-[#00a98f]' : idx > 2 ? 'bg-[#e32238]' : idx === 1 ? 'bg-[#e32238]' : ''} inline-block px-3 py-2`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {todayStatsTwo.map((item) => (
                  <div key={item} className="text-2xl font-black uppercase leading-tight md:text-5xl">
                    <span className="inline-block bg-[#e32238] px-3 py-2 text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#8ea8d5] text-[#24377e] section-dot-bg">
          <div className="mx-auto max-w-6xl px-6 py-18 md:py-20">
            <h3 className="text-center text-4xl font-black uppercase leading-tight md:text-7xl">Maribor potrebuje</h3>
            <div className="mx-auto mt-4 inline-block bg-[#5f6a9c] px-5 py-3 text-center text-4xl font-black uppercase text-[#e32238] shadow-xl md:text-7xl">Močno zastopstvo</div>
            <p className="mt-3 text-center text-2xl font-black uppercase md:text-5xl">v državnem zboru</p>

            <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end">
              <div className="space-y-4">
                {needs.map((item) => (
                  <div key={item} className="text-2xl font-black uppercase leading-tight text-white md:text-5xl"><span className="mr-3 text-[#e32238]">✓</span>{item}</div>
                ))}
              </div>

              <div className="flex flex-col items-center md:items-end">
                <img src={portrait} alt="Boris Sovič" className="w-full max-w-sm rounded-[1.5rem] object-cover grayscale shadow-2xl" />
                <div className="mt-6 w-full max-w-sm">
                  <div className="flex items-end justify-between gap-4 text-white">
                    <div className="text-4xl font-black uppercase leading-none md:text-6xl">Boris<div className="text-2xl md:text-4xl">za</div></div>
                    <div className="text-right text-4xl font-black uppercase leading-none md:text-6xl">Sovič<div className="text-2xl md:text-4xl">Maribor</div></div>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="rounded-full bg-[#e32238] px-5 py-4 text-2xl font-black uppercase text-white shadow-xl md:text-4xl">Volitve 22.3.</div>
                    <div className="border-[6px] border-white bg-[#e32238] px-5 py-3 text-3xl font-black uppercase leading-none text-white shadow-xl">SD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
