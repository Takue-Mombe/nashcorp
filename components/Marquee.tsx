import { marqueeItems } from "@/data/content";

export function Marquee() {
  const loopItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="marquee-track">
        {loopItems.map((item, index) => (
          <div className="marquee-item" key={`${item}-${index}`}>
            {item} <span className="tick-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
