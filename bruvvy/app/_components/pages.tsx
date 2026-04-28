'use client';

import React, { useState } from 'react';
import { ProductCard, PostCard, PhCard, SectionHeader, CheckIcon } from './shared';

/* ─── HOME ─────────────────────────────────────────────────── */
type Navigate = (page: string) => void;

export function HomePage({ onNavigate }: { onNavigate: Navigate }) {
  const [activeChip, setActiveChip] = useState('moisturizer');
  const [activeTrend, setActiveTrend] = useState('moisturizers');
  const chips = ['moisturizer', 'cleanser', 'serum', 'spf', 'active', 'body', 'eye', 'toner'];
  const trendTabs = ['moisturizers', 'cleansers', 'serums', 'SPF', 'actives'];

  return (
    <div className="page-content">
      <div className="home-hero">
        <div className="hero-greeting">good evening — your streak is at 14 days ✦</div>
        <h1 className="hero-title">find your next<br /><em>skin essential</em></h1>
        <div className="search-wrap">
          <div className="search-bar search-bar-lg" style={{ cursor: 'pointer' }} onClick={() => onNavigate('search')}>
            <svg className="search-icon" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              placeholder='try "moisturizer for oily skin" or ask anything about your skin…'
              className="search-input"
              onClick={e => { e.stopPropagation(); onNavigate('search'); }}
              readOnly
            />
            <span className="ai-badge">✨ AI</span>
          </div>
          <div className="search-chips">
            {chips.map(cat => (
              <button
                key={cat}
                className={`chip${activeChip === cat ? ' chip-on' : ''}`}
                onClick={() => setActiveChip(cat)}
              >
                {cat}s
              </button>
            ))}
            <span className="chip-divider">·</span>
            <button className="chip">+ more ▾</button>
          </div>
        </div>
      </div>

      <div className="page-section">
        <SectionHeader title="For you" action="based on last 7 days logged ↗" />
        <div className="product-grid product-grid-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} onClick={() => onNavigate('product')}>
              <ProductCard badge={i < 2 ? 'matches your profile' : ''} />
            </div>
          ))}
        </div>
      </div>

      <div className="page-section">
        <SectionHeader title="Trending" />
        <div className="trending-tabs">
          {trendTabs.map(t => (
            <button
              key={t}
              className={`trend-tab${activeTrend === t ? ' trend-tab-on' : ''}`}
              onClick={() => setActiveTrend(t)}
            >
              {t}
            </button>
          ))}
          <span style={{ marginLeft: 'auto' }}>
            <button className="trend-tab">+ more ▾</button>
          </span>
        </div>
        <div className="product-grid product-grid-5">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} onClick={() => onNavigate('product')}>
              <ProductCard badge={i === 0 ? '#1 this week' : ''} />
            </div>
          ))}
        </div>
      </div>

      <div className="home-two-col">
        <div className="page-section" style={{ flex: 2 }}>
          <SectionHeader title="Best in class" />
          <div className="product-grid product-grid-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} onClick={() => onNavigate('product')}>
                <ProductCard badge="top 1%" />
              </div>
            ))}
          </div>
        </div>
        <div className="page-section" style={{ flex: 1, minWidth: 260 }}>
          <SectionHeader title="Editorial picks" />
          <div className="col" style={{ gap: 10 }}>
            {['Barrier season is here', 'Dupes I actually rate', 'Cycle-safe actives'].map(t => (
              <div key={t} className="editorial-card">
                <div className="ph-img editorial-img">{t}</div>
                <div className="editorial-meta">
                  <div className="editorial-title">"{t}"</div>
                  <div className="editorial-sub">12 products · editorial</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── COMMUNITY ─────────────────────────────────────────────── */
const POSTS = [
  { init: 'SK', name: 'skincareobsessed', time: '2h', skinType: 'combo skin', isDerm: false, isTwin: true, text: 'bro this product completely destroyed my moisture barrier. NOT for sensitive skin 😭', productBrand: 'The Ordinary', productName: 'Glycolic Acid 7%', productType: 'Toner · $9', productBadge: 'Exfoliant', productRating: '3.8', likes: '142', comments: '38', hasBefore: false },
  { init: 'GW', name: 'glowup_wendy', time: '5h', skinType: 'dry skin', isDerm: false, isTwin: false, text: "week 4 update — dark spots actually fading?? dry skin girlies this one's for us 🙌", productBrand: "Paula's Choice", productName: 'Niacinamide 10%', productType: 'Serum · $45', productBadge: 'Brightening', productRating: '4.6', likes: '891', comments: '204', hasBefore: true },
  { init: 'DR', name: 'dr_rhea', time: '8h', skinType: 'all skin types', isDerm: true, isTwin: false, text: "If you're on tretinoin and experiencing a barrier breakdown, this is the protocol I recommend to my patients.", productBrand: 'CeraVe', productName: 'Moisturizing Cream', productType: 'Moisturizer · $18', productBadge: 'Barrier repair', productRating: '4.9', likes: '2.1k', comments: '312', hasBefore: false },
  { init: 'MJ', name: 'moisturize_max', time: '9h', skinType: 'oily skin', isDerm: false, isTwin: true, text: 'hot take: everyone sleeping on this SPF. no white cast, works under makeup 🌞', productBrand: 'Isntree', productName: 'Hyaluronic Sun Gel SPF50+', productType: 'Sunscreen · $22', productBadge: 'Sun protection', productRating: '4.9', likes: '1.2k', comments: '467', hasBefore: false },
  { init: 'NP', name: 'noa.p', time: '12h', skinType: 'hormonal', isDerm: false, isTwin: true, text: 'cycle day 26 and my skin is CALM for the first time in months. logged everything on Track — the pattern is genuinely wild.', productBrand: 'CeraVe', productName: 'PM Moisturizing Lotion', productType: 'Moisturizer · $18', productBadge: 'Barrier repair', productRating: '4.8', likes: '334', comments: '89', hasBefore: true },
];

const THREADS = [
  { title: 'anyone else flare after flying?', user: 'marin_k', match: 94, votes: 248, comments: 63, tag: 'travel · sensitive' },
  { title: 'tret month 3: glowing or gaslit?', user: 'noa.p', match: 81, votes: 421, comments: 112, tag: 'actives' },
  { title: 'fragrance-free moisturizer under $25 — the definitive list', user: 'june_x', match: 76, votes: 512, comments: 188, tag: 'budget' },
  { title: 'ovulation breakout map — same spots every month?', user: 'kira__', match: 92, votes: 356, comments: 98, tag: 'hormonal' },
  { title: "derm told me to stop double-cleansing. discuss.", user: 'han.b', match: 70, votes: 634, comments: 201, tag: 'cleansing' },
  { title: "what's your non-negotiable product?", user: 'sk_alex', match: 85, votes: 891, comments: 342, tag: 'general' },
];

export function CommunityPage({ subtab, setSubtab }: { subtab: string; setSubtab: (t: string) => void }) {
  const [activeFilter, setActiveFilter] = useState('your cluster');
  const filters = ['your cluster', 'all', 'hormonal', 'actives', 'barrier', 'derm Q&A'];

  return (
    <div className="page-content page-content-feed">
      <div className="feed-tabs">
        <button className={`feed-tab${subtab === 'foryou' ? ' feed-tab-on' : ''}`} onClick={() => setSubtab('foryou')}>For you</button>
        <button className={`feed-tab${subtab === 'threads' ? ' feed-tab-on' : ''}`} onClick={() => setSubtab('threads')}>Threads</button>
      </div>

      {subtab === 'foryou' ? (
        <div className="feed-layout">
          <div className="feed-main">
            <div className="composer">
              <div className="composer-av">YO</div>
              <div className="composer-body">
                <div className="composer-input">what&apos;s your skin saying today?</div>
                <div className="composer-actions">
                  <button className="composer-btn">+ attach product</button>
                  <button className="composer-btn">📷 before/after</button>
                  <button className="composer-btn">📍 concern</button>
                  <button className="post-btn">Post</button>
                </div>
              </div>
            </div>
            {POSTS.map((p, i) => <PostCard key={i} {...p} />)}
          </div>
          <div className="feed-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-title">🔥 trending posts</div>
              <div className="col" style={{ gap: 6, marginTop: 8 }}>
                {['glycolic acid reactions', 'niacinamide for dark spots', 'SPF no white cast', 'retinal 0.05 month 3', 'barrier season 2026'].map((t, i) => (
                  <div key={i} className="sidebar-row">
                    <span className="sidebar-num">{i + 1}</span>
                    <span className="sidebar-text">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-title">your skin twins</div>
              <div className="col" style={{ gap: 8, marginTop: 8 }}>
                {[['@marin_k', '94%'], ['@noa.p', '81%'], ['@june_x', '76%'], ['@kira__', '72%']].map(([u, m]) => (
                  <div key={u} className="twin-row">
                    <div className="twin-av" />
                    <span className="twin-name">{u}</span>
                    <span className="twin-pct">{m}</span>
                  </div>
                ))}
                <button className="sidebar-link">see all twins →</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="threads-layout">
          <div className="threads-main">
            <div className="threads-header">
              <div className="threads-filters">
                {filters.map(f => (
                  <button key={f} className={`thread-filter${activeFilter === f ? ' thread-filter-on' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
                ))}
              </div>
              <button className="new-thread-btn">+ new thread</button>
            </div>
            {THREADS.map((t, i) => (
              <div key={i} className="thread-card">
                <div className="thread-votes">
                  <button className="vote-btn">▲</button>
                  <span className="vote-count">{t.votes}</span>
                </div>
                <div className="thread-body">
                  <div className="thread-title">{t.title}</div>
                  <div className="thread-meta">
                    <div className="twin-av twin-av-sm" />
                    <span className="thread-user">@{t.user}</span>
                    <span className="twin-badge">{t.match}% twin</span>
                    <span className="thread-tag">{t.tag}</span>
                    <span className="thread-comments">{t.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="feed-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-title">rooms</div>
              <div className="col" style={{ gap: 5, marginTop: 8 }}>
                {['# hormonal-acne · 2.1k', '# barrier-repair · 3.4k', '# tret-diaries · 5.0k', '# spf-obsessed · 7.7k', '# derm-verified · 920'].map(r => (
                  <div key={r} className="room-row">{r}</div>
                ))}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-title">top products this week</div>
              <div className="col" style={{ gap: 5, marginTop: 8 }}>
                {['1. cerave pm', '2. beauty of joseon spf', '3. paulas choice bha', '4. ordinary niacinamide'].map(p => (
                  <div key={p} className="sidebar-row"><span className="sidebar-text">{p}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── TRACK ─────────────────────────────────────────────────── */
const AM_STEPS = [
  { id: 'am-0', name: 'gentle cleanser', tag: 'cleanse', done: true },
  { id: 'am-1', name: 'niacinamide 10%', tag: 'serum', done: true },
  { id: 'am-2', name: 'moisturizer', tag: 'hydrate', done: true },
  { id: 'am-3', name: 'spf 50', tag: 'protect', done: false },
  { id: 'am-4', name: 'lip balm', tag: 'extra', done: false },
];
const PM_STEPS = [
  { id: 'pm-0', name: 'oil cleanser', tag: 'cleanse', done: false },
  { id: 'pm-1', name: 'water cleanser', tag: 'cleanse', done: false },
  { id: 'pm-2', name: 'retinal 0.05', tag: 'active', done: false },
  { id: 'pm-3', name: 'barrier cream', tag: 'hydrate', done: false },
];

export function TrackPage({ onHistory }: { onHistory: () => void }) {
  const [activeMode, setActiveMode] = useState('default');
  const [doneSteps, setDoneSteps] = useState<Set<string>>(new Set(['am-0', 'am-1', 'am-2']));
  const modes = ['default', 'flare mode', 'travel', 'pms week', 'post-gym'];

  function toggleStep(id: string) {
    setDoneSteps(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  const amDone = AM_STEPS.filter(s => doneSteps.has(s.id)).length;
  const pmDone = PM_STEPS.filter(s => doneSteps.has(s.id)).length;

  return (
    <div className="page-content">
      <div className="track-header">
        <div>
          <div className="track-greeting">good evening.</div>
          <div className="track-meta">day 14 streak · thu · cycle day 22 · dry 52°F</div>
        </div>
        <div className="track-header-actions">
          <button className="btn-primary">+ log today</button>
          <button className="btn-ghost">edit routine</button>
          <button className="btn-ghost" onClick={onHistory}>history ↗</button>
        </div>
      </div>

      <div className="routine-modes">
        {modes.map(m => (
          <button key={m} className={`mode-btn${activeMode === m ? ' mode-btn-on' : ''}`} onClick={() => setActiveMode(m)}>{m}</button>
        ))}
        <button className="mode-btn mode-btn-add">+ new</button>
      </div>

      <div className="track-grid">
        <div className="routine-card">
          <div className="routine-card-hd">
            <span className="routine-icon">☀️</span>
            <span className="routine-title">AM routine</span>
            <span className="routine-progress">{amDone}/{AM_STEPS.length} done</span>
          </div>
          <div className="routine-steps">
            {AM_STEPS.map(s => {
              const done = doneSteps.has(s.id);
              return (
                <div key={s.id} className={`step${done ? ' step-done' : ''}`} onClick={() => toggleStep(s.id)}>
                  <div className={`step-check${done ? ' step-check-done' : ''}`}>
                    {done && <CheckIcon />}
                  </div>
                  <span className="step-name">{s.name}</span>
                  <span className="step-tag">{s.tag}</span>
                </div>
              );
            })}
            <button className="add-step">+ add step</button>
          </div>
        </div>

        <div className="routine-card">
          <div className="routine-card-hd">
            <span className="routine-icon">🌙</span>
            <span className="routine-title">PM routine</span>
            <span className="routine-progress">{pmDone}/{PM_STEPS.length} done</span>
          </div>
          <div className="routine-steps">
            {PM_STEPS.map(s => {
              const done = doneSteps.has(s.id);
              return (
                <div key={s.id} className={`step${done ? ' step-done' : ''}`} onClick={() => toggleStep(s.id)}>
                  <div className={`step-check${done ? ' step-check-done' : ''}`}>
                    {done && <CheckIcon />}
                  </div>
                  <span className="step-name">{s.name}</span>
                  <span className="step-tag">{s.tag}</span>
                </div>
              );
            })}
            <div className="routine-note">cycle day 22 → consider skipping retinal tonight</div>
            <button className="add-step">+ add step</button>
          </div>
        </div>

        <div className="log-col">
          <div className="log-card">
            <div className="log-card-hd">📷 photo log</div>
            <div className="zone-grid">
              {['face', 'jaw', 'chest', 'back'].map(z => (
                <div key={z} className="zone">
                  <div className="zone-img">+</div>
                  <span className="zone-label">{z}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="log-card">
            <div className="log-card-hd">concerns today</div>
            <div className="concern-tags">
              <span className="concern-tag concern-active">breakout · chin</span>
              <span className="concern-tag">+ dryness</span>
              <span className="concern-tag">+ redness</span>
              <span className="concern-tag">+ more</span>
            </div>
            <div className="concern-note">felt tight after AM cleanser</div>
          </div>
          <div className="log-card log-card-context">
            <div className="log-card-hd">context <span className="optional-tag">optional</span></div>
            <div className="context-grid">
              <div className="ctx">💤 <span>6h</span></div>
              <div className="ctx">💧 <span>1.2L</span></div>
              <div className="ctx">🌡️ <span>52°F dry</span></div>
              <div className="ctx">🌙 <span>cycle d22</span></div>
              <div className="ctx">🏃 <span>gym</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="auto-rules">
        <SectionHeader title="Auto-switch rules" action="+ add rule" />
        <div className="rules-grid">
          <div className="rule-card"><span>if </span><b>cycle day 22–28</b><span> → suggest pms week</span></div>
          <div className="rule-card"><span>if </span><b>flare logged 2 days in a row</b><span> → suggest flare mode</span></div>
          <div className="rule-card"><span>if </span><b>GPS = airport</b><span> → suggest travel</span></div>
        </div>
      </div>
    </div>
  );
}

/* ─── HISTORY ───────────────────────────────────────────────── */
const HISTORY_ROWS = [
  { d: 'today · thu 17', r: ['AM ✓'], zones: ['face', 'jaw', 'chest'], concerns: ['breakout', 'chin'], note: 'tight after cleanser', flare: false },
  { d: 'wed 16', r: ['AM ✓', 'PM ✓'], zones: ['face', 'jaw'], concerns: ['dryness'], note: '', flare: false },
  { d: 'tue 15', r: ['AM ✓', 'PM ✓'], zones: ['face'], concerns: [], note: 'smooth day', flare: false },
  { d: 'mon 14', r: ['AM ✓'], zones: ['face', 'chest'], concerns: ['redness'], note: 'flew back from NYC', flare: false },
  { d: 'sun 13', r: ['AM only'], zones: ['face', 'jaw', 'back'], concerns: ['breakout', 'redness', 'sting'], note: '"whole face angry after flight"', flare: true },
  { d: 'sat 12', r: ['AM ✓', 'PM ✓'], zones: ['face'], concerns: [], note: '', flare: false },
  { d: 'fri 11', r: ['AM ✓', 'PM ✓'], zones: ['face', 'jaw'], concerns: [], note: 'good skin day', flare: false },
];

export function HistoryPage() {
  const [view, setView] = useState('timeline');
  const views = ['timeline', 'photos', 'heat map', 'concerns'];

  return (
    <div className="page-content">
      <div className="track-header">
        <div>
          <div className="track-greeting">history</div>
          <div className="track-meta">april 2026 · streak 14 days</div>
        </div>
        <div className="track-header-actions">
          <button className="btn-ghost">◄ mar</button>
          <button className="btn-primary-sm">today</button>
          <button className="btn-ghost">may ►</button>
          <button className="btn-ghost">export pdf</button>
        </div>
      </div>

      <div className="history-views">
        {views.map(v => (
          <button key={v} className={`history-view${view === v ? ' history-view-on' : ''}`} onClick={() => setView(v)}>{v}</button>
        ))}
      </div>

      <div className="timeline">
        {HISTORY_ROWS.map((row, i) => (
          <div key={i} className={`timeline-row${row.flare ? ' timeline-row-flare' : ''}`}>
            <div className="trow-date">
              {row.d}
              {row.flare && <span className="flare-badge">flare</span>}
            </div>
            <div className="trow-routine">
              {row.r.map((r, j) => (
                <span key={j} className={r.includes('✓') ? 'routine-chip-done' : 'routine-chip'}>{r}</span>
              ))}
            </div>
            <div className="trow-zones">
              {row.zones.map(z => <div key={z} className="zone-chip">{z}</div>)}
            </div>
            <div className="trow-concerns">
              {row.concerns.map(c => <span key={c} className="concern-chip">{c}</span>)}
            </div>
            <div className="trow-note">{row.note}</div>
          </div>
        ))}
      </div>

      <div className="page-section" style={{ marginTop: 32 }}>
        <SectionHeader title="Photo progress · face" />
        <div className="photo-strip">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="photo-strip-item">
              <div className="ph-img ph-photo">wk {i + 1}</div>
              <div className="photo-date">mar {(i + 1) * 4}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── TRENDS ────────────────────────────────────────────────── */
const TRIGGERS = [
  ['flight >3h', '→', 'flare within 48h', '92%', 'high'],
  ['cycle day 13–17', '→', 'jaw breakout', '87%', 'high'],
  ['gym + no rinse', '→', 'chest congestion', '74%', 'med'],
  ['swimming pool', '→', 'chest + arm dryness', '68%', 'med'],
  ['retinal 5×/wk', '→', 'barrier disruption', '61%', 'med'],
  ['8h+ sleep', '→', 'fewer flare days', '64%', 'med'],
] as const;

export function TrendsPage() {
  const [range, setRange] = useState('12 weeks');
  const ranges = ['12 weeks', '3 mo', '6 mo'];

  return (
    <div className="page-content">
      <div className="track-header">
        <div>
          <div className="track-greeting">your skin, last 12 weeks</div>
          <div className="track-meta">5 insights · april 2026</div>
        </div>
        <div className="track-header-actions">
          {ranges.map(r => (
            <button key={r} className={`btn-ghost${range === r ? ' btn-on' : ''}`} onClick={() => setRange(r)}>{r}</button>
          ))}
        </div>
      </div>

      <div className="insights-grid">
        <div className="insight-card insight-card-accent">
          <div className="insight-label">you flare up after flying</div>
          <div className="insight-body">in the last 3 trips your redness jumped within 48h</div>
          <div className="insight-chart">
            <svg viewBox="0 0 300 60" style={{ width: '100%', height: 56 }}>
              <polyline points="0,45 30,42 60,44 80,43 100,18 140,20 180,38 210,16 250,18 290,38 300,14" fill="none" stroke="var(--acc)" strokeWidth="2" />
              <circle cx="100" cy="18" r="4" fill="var(--acc)" />
              <text x="108" y="15" fontSize="9" fill="var(--text2)">LAX</text>
              <circle cx="210" cy="16" r="4" fill="var(--acc)" />
              <text x="218" y="13" fontSize="9" fill="var(--text2)">JFK</text>
            </svg>
          </div>
          <div className="insight-action">→ pack travel kit + heavier barrier cream</div>
        </div>

        <div className="insight-card">
          <div className="insight-label">jawline acne = ovulation</div>
          <div className="insight-body">cycle day 13–17 breakouts are 3× more likely on jaw</div>
          <div className="insight-chart">
            <svg viewBox="0 0 280 60" style={{ width: '100%', height: 56 }}>
              {Array.from({ length: 28 }, (_, i) => {
                const h = (i >= 12 && i <= 16) ? 44 : (i >= 22 ? 16 : 8);
                return <rect key={i} x={i * 10} y={60 - h} width="8" height={h} fill={(i >= 12 && i <= 16) ? 'var(--acc)' : 'var(--bg3)'} rx="2" />;
              })}
            </svg>
          </div>
          <div className="insight-action">→ prep spot treatment on cycle day 11</div>
        </div>

        <div className="insight-card insight-card-gold">
          <div className="insight-label">niacinamide is pulling weight</div>
          <div className="insight-body">since you added it, redness events ↓ 38%</div>
          <div className="insight-chart"><PhCard label="before / after bar chart" h={56} /></div>
          <div className="insight-action">→ keep it in every routine</div>
        </div>

        <div className="insight-card">
          <div className="insight-label">swimming = dry chest</div>
          <div className="insight-body">chest dryness logged 4 of 5 pool days</div>
          <div className="insight-chart"><PhCard label="scatter chart" h={56} /></div>
          <div className="insight-action">→ body oil within 10 min of pool</div>
        </div>

        <div className="insight-card">
          <div className="insight-label">retinal 3×/wk &gt; 5×/wk</div>
          <div className="insight-body">fewer flare days, same glow score at lower frequency</div>
          <div className="insight-chart"><PhCard label="comparison bars" h={56} /></div>
          <div className="insight-action">→ stick with 3×</div>
        </div>
      </div>

      <div className="page-section">
        <SectionHeader title="Triggers we've learned" />
        <div className="triggers-grid">
          {TRIGGERS.map(([w, a, t, c, s], i) => (
            <div key={i} className="trigger-card">
              <div className={`trigger-conf trigger-conf-${s}`}>{c}</div>
              <div className="trigger-if">{w}</div>
              <div className="trigger-arrow">{a}</div>
              <div className="trigger-then">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SEARCH ────────────────────────────────────────────────── */
export function SearchPage() {
  const [query, setQuery] = useState('');
  const isAI = query.length > 20 || query.includes('my skin') || query.includes('what should');
  const isEmpty = !query.trim();

  return (
    <div className="page-content">
      <div className="search-page-bar">
        <div className="search-bar search-bar-lg" style={{ maxWidth: '100%' }}>
          <svg className="search-icon" viewBox="0 0 20 20" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="search products, ingredients, or ask anything…"
            className="search-input"
          />
          {!isEmpty && (
            <span className={`ai-badge${isAI ? ' ai-badge-on' : ''}`}>{isAI ? '✨ AI mode' : '⚡ filter'}</span>
          )}
        </div>
      </div>

      {isEmpty ? (
        <div className="search-idle">
          <div className="col" style={{ gap: 14 }}>
            <div className="sidebar-card">
              <div className="sidebar-title">🔥 trending in your cluster</div>
              <div className="col" style={{ gap: 6, marginTop: 8 }}>
                {['glycolic acid body lotion', 'fragrance-free spf 50', 'copper peptide serum', 'blue tansy cleanser', 'retinal 0.05%'].map((q, i) => (
                  <div key={i} className="search-suggest">
                    <span className="sidebar-num">{i + 1}</span>
                    <span onClick={() => setQuery(q)} style={{ cursor: 'pointer' }}>{q}</span>
                    <span className="search-suggest-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-title">your recent searches</div>
              <div className="col" style={{ gap: 5, marginTop: 8 }}>
                {['"cerave for dry skin"', 'moisturizer oily', 'retinol starter', 'my skin flaring — LA trip'].map((q, i) => (
                  <div key={i} className="search-suggest">
                    <span style={{ color: 'var(--text3)' }}>↩</span>
                    <span onClick={() => setQuery(q)} style={{ cursor: 'pointer' }}>{q}</span>
                    <span className="search-suggest-close">×</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : isAI ? (
        <div className="ai-results-layout">
          <div className="ai-reasoning">
            <div className="sidebar-title">why these results?</div>
            <div className="reasoning-chips">
              <span className="r-chip">sensitive + combo barrier</span>
              <span className="r-chip">recent travel in log</span>
              <span className="r-chip">cycle day 22</span>
            </div>
            <div className="reasoning-note">📌 full AI logic runs backend — this is a simplified summary</div>
            <div className="reasoning-actions">
              <button className="btn-ghost-sm">adjust profile</button>
              <button className="btn-ghost-sm">refine</button>
            </div>
          </div>
          <div>
            <div className="search-results-hd">AI recommendations · 6 products</div>
            <div className="product-grid product-grid-3">
              {Array.from({ length: 3 }, (_, i) => <ProductCard key={i} badge="AI pick" />)}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="search-results-meta">47 products found · <span>filtered to: <b>{query}</b></span></div>
          <div className="search-filters">
            <span className="chip chip-on">{query}</span>
            <span className="chip">under $30</span>
            <span className="chip">fragrance-free</span>
            <span className="chip">★ 4.5+</span>
            <span className="chip">+ filter</span>
            <span style={{ marginLeft: 'auto' }}><span className="chip">sort ↕</span></span>
          </div>
          <div className="product-grid product-grid-5" style={{ marginTop: 16 }}>
            {Array.from({ length: 5 }, (_, i) => <ProductCard key={i} badge={i === 0 ? 'best match' : ''} />)}
          </div>
          <div className="product-grid product-grid-5" style={{ marginTop: 12 }}>
            {Array.from({ length: 5 }, (_, i) => <ProductCard key={i} />)}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── PROFILE ───────────────────────────────────────────────── */
export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('derm access');
  const tabs = ['derm access', 'sharing', 'skin twins'];
  const visibility = [['profile', 'public'], ['routine stack', 'twins only'], ['progress photos', 'private'], ['daily logs', 'private']];

  return (
    <div className="page-content">
      <div className="profile-layout">
        <div className="profile-left">
          <div className="profile-card">
            <div className="profile-av-lg">YO</div>
            <div className="profile-username">@your_username</div>
            <div className="profile-bio">combo · sensitive · 24 · SF</div>
            <div className="profile-stats-row">
              <div className="pstat"><b>14</b><span>streak</span></div>
              <div className="pstat"><b>186</b><span>logs</span></div>
              <div className="pstat"><b>312</b><span>twins</span></div>
            </div>
            <div className="profile-skin-tags">
              <span className="tag">hormonal</span>
              <span className="tag">barrier repair</span>
              <span className="tag">fragrance-free</span>
            </div>
          </div>
          <div className="sidebar-card">
            <div className="sidebar-title">visibility</div>
            {visibility.map(([item, val]) => (
              <div key={item} className="vis-row">
                <span className="vis-item">{item}</span>
                <span className="vis-val">{val}</span>
                <button className="vis-edit">edit</button>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-right">
          <div className="profile-tabs">
            {tabs.map(t => (
              <button key={t} className={`feed-tab${activeTab === t ? ' feed-tab-on' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
            ))}
          </div>
          <div className="derm-section">
            <div className="derm-active-card">
              <div className="derm-av">DR</div>
              <div className="derm-info">
                <div className="derm-name">Dr. Rhea Park, MD</div>
                <div className="derm-meta">verified derm · access expires Apr 30 · 3 new comments</div>
                <div className="derm-access-tags">
                  <span className="access-tag access-on">view logs</span>
                  <span className="access-tag access-on">view photos</span>
                  <span className="access-tag access-on">comment</span>
                  <span className="access-tag">recommend products</span>
                </div>
              </div>
              <div className="derm-actions">
                <button className="btn-primary-sm">chat</button>
                <button className="btn-ghost-sm">revoke</button>
              </div>
            </div>
            <div className="derm-comments">
              <div className="sidebar-title">recent derm notes</div>
              {['"reduce retinal to 3×/wk — barrier needs a break"', '"week 8 photos look much better"', '"try CeraVe SA cleanser next phase"'].map(c => (
                <div key={c} className="derm-note">{c}</div>
              ))}
            </div>
            <div className="invite-derm">
              <div className="sidebar-title">invite a dermatologist</div>
              <div className="search-bar" style={{ marginTop: 8 }}>
                <svg className="search-icon" viewBox="0 0 20 20" fill="none">
                  <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input placeholder="search by name or email…" className="search-input" />
              </div>
              <div className="invite-link">
                skinting.app/derm-access/abc123
                <button className="btn-ghost-sm">copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT DETAIL ────────────────────────────────────────── */
const INGREDIENTS = [
  { name: 'ceramide NP, AP, EOP', desc: 'restores + maintains barrier', key: true },
  { name: 'hyaluronic acid', desc: 'draws water into skin', key: true },
  { name: 'niacinamide', desc: 'reduces redness + pores', key: true },
  { name: 'petrolatum', desc: 'occlusive · locks moisture in', key: false },
  { name: 'dimethicone', desc: 'silicone · smooths texture', key: false },
];

const REVIEWS = [
  { init: 'MK', name: '@marin_k', badge: '94% skin twin', text: 'great for barrier repair, no breakouts at all', isDerm: false },
  { init: 'DR', name: '@dr_rhea', badge: 'verified derm', text: 'top barrier-repair pick for sensitive skin', isDerm: true },
  { init: 'NP', name: '@noa.p', badge: '81% skin twin', text: 'light enough for oily, deeply hydrating', isDerm: false },
];

export function ProductDetailPage() {
  return (
    <div className="page-content">
      <div className="breadcrumb">Home → Moisturizers → <b>CeraVe Moisturizing Cream</b></div>
      <div className="pdp-layout">
        <div className="pdp-left">
          <div className="pdp-main-img"><PhCard label="main product image" h={320} /></div>
          <div className="pdp-thumbs">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="pdp-thumb"><PhCard label="" h={60} /></div>
            ))}
          </div>
          <div className="pdp-section-hd">social content</div>
          <div className="pdp-reels">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="pdp-reel">
                <PhCard label="TikTok / Reel" h={140} />
                <div className="reel-stat">▶ 2.1M</div>
              </div>
            ))}
          </div>
          <div className="social-stats">
            <span className="social-stat">👁 812k views</span>
            <span className="social-stat">♡ 41k likes</span>
            <span className="social-stat">↗ 8k shares</span>
          </div>
        </div>

        <div>
          <div className="pdp-brand">CeraVe</div>
          <h1 className="pdp-title">Moisturizing Cream</h1>
          <div className="pdp-rating-row">
            <span className="rating-badge">★ 4.7</span>
            <span className="pdp-review-count">2,841 reviews</span>
            <span className="tag">moisturizer</span>
            <span className="tag">fragrance-free</span>
          </div>
          <div className="pdp-price">$18.99</div>
          <div className="pdp-size">16 oz · Target, Amazon, CVS</div>
          <div className="pdp-ctas">
            <button className="btn-primary btn-buy">buy → affiliate link</button>
            <button className="btn-ghost">+ save</button>
            <button className="btn-ghost">+ routine</button>
          </div>

          <div className="pdp-accordion">
            <div className="accordion-hd">
              <span>ingredients</span>
              <span className="accordion-hint">tap ℹ on any for info</span>
              <span className="accordion-toggle">▾</span>
            </div>
            <div className="accordion-body">
              {INGREDIENTS.map(ing => (
                <div key={ing.name} className="ingredient-row">
                  <span className="ing-name">{ing.name}</span>
                  {ing.key && <span className="ing-key">key</span>}
                  <span className="ing-info">ℹ</span>
                </div>
              ))}
              <button className="btn-ghost-sm" style={{ marginTop: 6 }}>+ 12 more ingredients</button>
            </div>
          </div>

          <div className="pdp-section-hd" style={{ marginTop: 20 }}>reviews · filtered to skin twins first</div>
          {REVIEWS.map(r => (
            <div key={r.init} className="review-card">
              <div className="review-av">{r.init}</div>
              <div className="review-body">
                <div className="review-header">
                  <span className="review-name">{r.name}</span>
                  <span className={`review-badge ${r.isDerm ? 'badge-derm' : 'badge-twin'}`}>{r.badge}</span>
                </div>
                <div className="review-text">"{r.text}"</div>
              </div>
            </div>
          ))}
          <button className="btn-ghost" style={{ width: '100%', marginTop: 8 }}>see all 2,841 reviews →</button>

          <div className="pdp-section-hd" style={{ marginTop: 20 }}>community before / after</div>
          <div className="pdp-before-after">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="ba-pair">
                <div className="ph-img ph-small">before</div>
                <div className="ph-img ph-small">after</div>
                <div className="ba-user">@twin · 8 weeks</div>
              </div>
            ))}
          </div>

          <div className="compare-bar">
            <span className="compare-label">compare with</span>
            <span className="chip">Vanicream</span>
            <span className="chip">La Roche Toleriane</span>
            <span className="chip">+ add</span>
          </div>
        </div>
      </div>
    </div>
  );
}
