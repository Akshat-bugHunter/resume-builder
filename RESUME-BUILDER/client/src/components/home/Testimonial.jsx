import { BookUser } from "lucide-react";
import Title from "./Title";

const CARDS_DATA = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    text: "Radiant made undercutting all of our competitors an absolute breeze.",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    text: "The speed and reliability have completely transformed how our team deploys copy.",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    text: "Intuitive interface, fast workflows, and unmatched customer support.",
  },
  {
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Morgan Smith",
    handle: "@morgancodes",
    text: "Seamless integration with our existing stack. Couldn't recommend it more.",
  },
];

const VerifiedBadge = () => (
  <svg
    className="mt-0.5 fill-green-500 shrink-0"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
    />
  </svg>
);

const TestimonialCard = ({ card }) => (
  <div className="p-4 rounded-lg mx-4 shadow-sm hover:shadow-md border border-slate-100 bg-white transition-all duration-200 w-72 shrink-0 select-none">
    <div className="flex items-center gap-3">
      <img
        className="size-11 rounded-full object-cover"
        src={card.image}
        alt={card.name}
        loading="lazy"
      />
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1">
          <p className="font-medium text-sm text-slate-900 truncate">{card.name}</p>
          <VerifiedBadge />
        </div>
        <span className="text-xs text-slate-500 truncate">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm pt-3 text-slate-700 leading-snug line-clamp-3">
      {card.text}
    </p>
  </div>
);

const MarqueeRow = ({ reverse = false }) => {
  // Duplicate array 3-4 times if cardsData is short to guarantee continuous loop width
  const loopCards = [...CARDS_DATA, ...CARDS_DATA, ...CARDS_DATA, ...CARDS_DATA];

  return (
    <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-24 md:w-36 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div
        className={`marquee-inner flex transform-gpu min-w-max py-4 hover:[animation-play-state:paused] ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {loopCards.map((card, index) => (
          <TestimonialCard key={`${card.handle}-${index}`} card={card} />
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-24 md:w-36 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonials" className="pb-12 scroll-mt-12 overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 rounded-full px-4 py-1 border border-green-200/60 ">
          <BookUser className="size-4 stroke-green-600" />
          <span>Testimonials</span>
        </div>

        <Title
          title="Don't just take our words"
          description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."
        />
      </div>

      <div className="flex flex-col gap-2">
        <MarqueeRow reverse={false} />
        <MarqueeRow reverse={true} />
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .marquee-inner {
          animation: marqueeScroll 35s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;