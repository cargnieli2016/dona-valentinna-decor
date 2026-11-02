import { createFileRoute } from "@tanstack/react-router";
import { Phone, PartyPopper, Baby, Heart, Sparkles, Cake, Gift } from "lucide-react";
import f005 from "@/assets/festa_005.webp.asset.json";
import f006 from "@/assets/festa_006.webp.asset.json";
import f007 from "@/assets/festa_007.webp.asset.json";
import f008 from "@/assets/festa_008.webp.asset.json";
import f009 from "@/assets/festa_009.webp.asset.json";
import f010 from "@/assets/festa_010.webp.asset.json";
import f011 from "@/assets/festa_011.webp.asset.json";
import f012 from "@/assets/festa_012.webp.asset.json";
import f013 from "@/assets/festa_013.webp.asset.json";

const BRAND = "Encanto Festas";
const PHONE = "(15) 9 8114-8383";
const WHATS = "https://wa.me/5515981148383?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20de%20decora%C3%A7%C3%A3o";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND} | Decoração de Festas` },
      { name: "description", content: "Decoração de festas infantis, adulto, chá de bebê, chá revelação, casamento e temas variados. Orçamento pelo WhatsApp." },
      { property: "og:title", content: `${BRAND} | Decoração de Festas` },
      { property: "og:description", content: "Festas infantis, chá de bebê, chá revelação, casamento e muito mais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: PartyPopper, t: "Festas Infantis" },
  { icon: Cake, t: "Festas Adulto" },
  { icon: Baby, t: "Chá de Bebê" },
  { icon: Gift, t: "Chá Revelação" },
  { icon: Heart, t: "Casamento" },
  { icon: Sparkles, t: "Temas Variados" },
];

const gallery = [
  { src: f005.url, t: "Gatinha Marie" },
  { src: f006.url, t: "Bluey" },
  { src: f009.url, t: "Chá de Bebê Ursinho" },
  { src: f008.url, t: "Astronauta" },
  { src: f007.url, t: "Bonequinha" },
  { src: f010.url, t: "Arca de Noé" },
  { src: f011.url, t: "Homem-Aranha" },
  { src: f012.url, t: "Brasil" },
  { src: f013.url, t: "Piquenique ao ar livre" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-display text-2xl font-semibold text-primary">{BRAND}</span>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#galeria" className="hover:text-primary">Galeria</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={`tel:+5515981148383`} className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Decoração de festas</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Transformamos o seu dia em <em className="text-primary">uma lembrança encantada</em>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Painéis, balões, cilindros e mesas decoradas com carinho para festas infantis, adulto, chá de bebê, chá revelação e casamentos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-full bg-whats px-7 py-3 font-semibold text-whats-foreground shadow-lg transition hover:opacity-90">
              Pedir orçamento no WhatsApp
            </a>
            <a href="#galeria" className="rounded-full border border-primary px-7 py-3 font-semibold text-primary transition hover:bg-muted">
              Ver decorações
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={f009.url} alt="Decoração chá de bebê ursinho" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
          <img src={f005.url} alt="Decoração infantil rosa" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
        </div>
      </section>

      <section id="servicos" className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">O que decoramos</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-semibold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Algumas festas que fizemos</h2>
        <p className="mt-2 text-center text-muted-foreground">Cada tema pensado nos mínimos detalhes</p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((g) => (
            <figure key={g.t} className="group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid">
              <img src={g.src} alt={`Decoração tema ${g.t}`} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/90 px-4 py-1 text-sm font-semibold">{g.t}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-primary py-16 text-center text-primary-foreground">
        <h2 className="text-3xl font-semibold md:text-4xl">Vamos montar a sua festa?</h2>
        <p className="mt-3 opacity-90">Fale com a gente e receba seu orçamento sem compromisso.</p>
        <a href={`tel:+5515981148383`} className="mt-6 block font-display text-3xl font-semibold">{PHONE}</a>
        <a href={WHATS} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-whats px-8 py-3 font-semibold text-whats-foreground shadow-lg">
          Chamar no WhatsApp
        </a>
      </section>

      <footer className="py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</footer>

      <a href={WHATS} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-whats text-whats-foreground shadow-xl">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
