import { HearthMock } from "./HearthMock";
import { ImageSlot } from "./ImageSlot";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="work__head reveal">
          <div>
            <span className="eyebrow eyebrow--plain section-label">
              02 — Selected work
            </span>
            <h2 className="h-sec" style={{ marginTop: "18px" }}>
              Three we’re proud to put our name on.
            </h2>
          </div>
          <p className="prose" style={{ maxWidth: "42ch" }}>
            Small studio, real range. Each of these started as a sketch and
            shipped to production.
          </p>
        </div>

        {/* CASE 1 — HEARTH (rendered product UI) */}
        <article className="case" id="case-hearth">
          <div className="case__media reveal">
            <div className="frame">
              <div className="frame__bar">
                <div className="frame__dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="frame__url">hearth.app/today</span>
              </div>
              <div className="frame__body">
                <HearthMock />
              </div>
            </div>
          </div>
          <div className="case__text reveal">
            <span className="case__index" style={{ color: "rgb(0, 0, 0)" }}>
              Case 01 — built with Hearth design system
            </span>
            <h3 className="case__name">Hearth</h3>
            <p className="case__what">A calm operating system for family life.</p>
            <dl className="case__facts">
              <div className="case__fact">
                <dt>Problem</dt>
                <dd>
                  Families run on a dozen apps and a shared mental load that
                  never logs off. The plan lives in one head and breaks the
                  moment that head is busy.
                </dd>
              </div>
              <div className="case__fact">
                <dt>What we built</dt>
                <dd>
                  One warm home for today’s plan, the calendar, inbox, travel
                  and the kids — with AI that triages the noise and surfaces
                  only what needs a decision.
                </dd>
              </div>
              <div className="case__fact case__fact--out">
                <dt>Outcome</dt>
                <dd>
                  Daily-active families and a visibly lighter mental load — the
                  rare household app people open before coffee.
                </dd>
              </div>
            </dl>
          </div>
        </article>

        {/* CASE 2 — PERSONAL OS (image slot) */}
        <article className="case case--flip" id="case-personal-os">
          <div className="case__media reveal">
            <div className="frame">
              <div className="frame__bar">
                <div className="frame__dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="frame__url">personal-os.app</span>
              </div>
              <div className="frame__body">
                <ImageSlot
                  placeholder="Drop a Personal OS screenshot"
                  slotLabel="Image slot · Personal OS screenshot"
                />
              </div>
            </div>
          </div>
          <div className="case__text reveal">
            <span className="case__index">Case 02</span>
            <h3 className="case__name">Personal OS</h3>
            <p className="case__what">Your second brain, finally shipped.</p>
            <dl className="case__facts">
              <div className="case__fact">
                <dt>Problem</dt>
                <dd>
                  Notes everywhere, recall nowhere. The tools meant to help you
                  think clearly never quite fit one person’s head.
                </dd>
              </div>
              <div className="case__fact">
                <dt>What we built</dt>
                <dd>
                  A private, fast knowledge OS — capture anything, link it
                  automatically, then ask plain-language questions across
                  everything you’ve ever saved.
                </dd>
              </div>
              <div className="case__fact case__fact--out">
                <dt>Outcome</dt>
                <dd>
                  From scattered notes to instant recall — the daily driver its
                  owner now refuses to work without.
                </dd>
              </div>
            </dl>
          </div>
        </article>

        {/* CASE 3 — CRYPTO LEADS (image slot) */}
        <article className="case" id="case-crypto-leads">
          <div className="case__media reveal">
            <div className="frame">
              <div className="frame__bar">
                <div className="frame__dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="frame__url">cryptoleads.xyz/signals</span>
              </div>
              <div className="frame__body">
                <ImageSlot
                  placeholder="Drop a Crypto Leads screenshot"
                  slotLabel="Image slot · Crypto Leads screenshot"
                />
              </div>
            </div>
          </div>
          <div className="case__text reveal">
            <span className="case__index">Case 03</span>
            <h3 className="case__name">Crypto Leads</h3>
            <p className="case__what">On-chain pipeline intelligence.</p>
            <dl className="case__facts">
              <div className="case__fact">
                <dt>Problem</dt>
                <dd>
                  The best crypto deals surface on-chain long before they hit a
                  deck. Most teams find out once it’s already priced in.
                </dd>
              </div>
              <div className="case__fact">
                <dt>What we built</dt>
                <dd>
                  A signals engine that watches wallets, contracts and flows in
                  real time, then turns the noise into a ranked, qualified
                  pipeline.
                </dd>
              </div>
              <div className="case__fact case__fact--out">
                <dt>Outcome</dt>
                <dd>
                  Signal hours ahead of the timeline — deals reached while
                  they’re still a rumour, not a headline.
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
