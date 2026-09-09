/** A scoped recreation of the Hearth product UI with placeholder data (no real
 *  household details). Rendered inside the Hearth case-study browser frame.
 *  Styles live in globals.css (.hearth-mock). */
export function HearthMock() {
  return (
    <div className="hearth-mock">
      <div className="hm-rail">
        <div className="hm-brand">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect x="0" y="0" width="64" height="64" rx="16" fill="#1B1410" />
            <path
              d="M32 14 C 38 22, 44 28, 44 38 C 44 47, 38 52, 32 52 C 26 52, 20 47, 20 38 C 20 31, 24 27, 27 22 C 28.5 25, 30 27, 31 30 C 32 27, 32 20, 32 14 Z"
              fill="#E07856"
            />
            <ellipse cx="32" cy="42" rx="6" ry="7" fill="#F4B860" />
          </svg>
          <b>Hearth</b>
        </div>
        <div className="hm-nav active">
          <span className="ic" />
          Today
        </div>
        <div className="hm-nav">
          <span className="ic" />
          Calendar
        </div>
        <div className="hm-nav">
          <span className="ic" />
          Inbox
        </div>
        <div className="hm-nav">
          <span className="ic" />
          Travel
        </div>
        <div className="hm-nav">
          <span className="ic" />
          Kids
        </div>
        <div className="spacer" />
        <div className="hm-avatar">
          <span className="av" />
          <small>Household · admin</small>
        </div>
      </div>

      <div className="hm-canvas">
        <div className="hm-eyebrow">Tuesday · June 9</div>
        <div className="hm-greet">
          Good morning, <i>Sam.</i>
        </div>
        <div className="hm-sectitle">Today</div>
        <div className="hm-task done">
          <span className="hm-check" />
          <span className="t">School run · both kids</span>
          <span className="meta">7:50</span>
        </div>
        <div className="hm-task">
          <span className="hm-check" />
          <span className="t">Pack for Lisbon</span>
          <span className="pill">Travel</span>
        </div>
        <div className="hm-task">
          <span className="hm-check" />
          <span className="t">Confirm nanny’s hours</span>
          <span className="meta">in 20 min</span>
        </div>
        <div className="hm-cards">
          <div className="hm-card travel">
            <div className="lab">Trip</div>
            <div className="big">Lisbon · 12d</div>
          </div>
          <div className="hm-card kid">
            <div className="lab">Kids</div>
            <div className="big">Pickup · 3:15</div>
          </div>
        </div>
      </div>
    </div>
  );
}
