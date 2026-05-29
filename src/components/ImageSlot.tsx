import Image from "next/image";

type ImageSlotProps = {
  /** Centered prompt text shown while the slot is empty. */
  placeholder: string;
  /** Optional pill label pinned to the bottom-left (used inside browser frames). */
  slotLabel?: string;
  /** Provide these to render a real screenshot instead of the placeholder. */
  src?: string;
  alt?: string;
};

/** A labeled drop-in image slot. Renders a placeholder until a `src` is given,
 *  then swaps to an optimized next/image filling the frame (object-fit: cover). */
export function ImageSlot({ placeholder, slotLabel, src, alt }: ImageSlotProps) {
  return (
    <>
      <div className="shot" role="img" aria-label={src ? alt : placeholder}>
        {src ? (
          <Image src={src} alt={alt ?? ""} fill sizes="(max-width: 820px) 100vw, 50vw" />
        ) : (
          <>
            <svg
              className="shot__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-4.5-4.5L7 21" />
            </svg>
            <span className="shot__text">{placeholder}</span>
          </>
        )}
      </div>
      {slotLabel ? <span className="slot-label">{slotLabel}</span> : null}
    </>
  );
}
