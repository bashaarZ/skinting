'use client';

import { useState, useEffect } from 'react';
import {
  HomePage, CommunityPage, TrackPage, HistoryPage,
  TrendsPage, SearchPage, ProfilePage, ProductDetailPage,
} from './_components/pages';

/* ─── TYPES ──────────────────────────────────────────────────── */
type Page = 'home' | 'community' | 'track' | 'history' | 'trends' | 'search' | 'profile' | 'product';

const PAGE_TITLES: Record<Page, string> = {
  home: 'Home', community: 'Community', track: 'Track',
  history: 'History', trends: 'Trends', search: 'Search',
  profile: 'Profile', product: 'Product Detail',
};

/* ─── TWEAKS ─────────────────────────────────────────────────── */
const ACC_MAP: Record<string, { a: string; a2: string }> = {
  terra:     { a: '#e87048', a2: 'rgba(232,112,72,.15)' },
  coral:     { a: '#e03a4a', a2: 'rgba(224,58,74,.15)' },
  mauve:     { a: '#9b5e8a', a2: 'rgba(155,94,138,.15)' },
  sky:       { a: '#4a86b5', a2: 'rgba(74,134,181,.15)' },
  sage:      { a: '#5a9a60', a2: 'rgba(90,154,96,.15)' },
  'gold-acc':{ a: '#d4a854', a2: 'rgba(212,168,84,.15)' },
  rose:      { a: '#d4956a', a2: 'rgba(212,149,106,.15)' },
  candy:     { a: '#e06a8a', a2: 'rgba(224,106,138,.15)' },
};

const BG_MAP: Record<string, { bg: string; bg1: string; bg2: string; text: string; text2: string; border: string; border2: string }> = {
  dark:   { bg: '#0f0d0b', bg1: '#1a1714', bg2: '#242018', text: '#f0e6da', text2: '#8a7a6a', border: 'rgba(255,185,120,0.10)', border2: 'rgba(255,185,120,0.18)' },
  light:  { bg: '#f8f5f0', bg1: '#ffffff', bg2: '#f0ece6', text: '#1a1714', text2: '#6a5a4a', border: 'rgba(0,0,0,0.08)', border2: 'rgba(0,0,0,0.14)' },
  chrome: { bg: '#e8e0d4', bg1: '#f0ece4', bg2: '#dcd4c8', text: '#1a1714', text2: '#6a5a4a', border: 'rgba(0,0,0,0.08)', border2: 'rgba(0,0,0,0.14)' },
};

interface TweaksState { acc: string; bg: string; density: string }

/* ─── NAV ────────────────────────────────────────────────────── */
function Nav({ curPage, navigate }: { curPage: Page; navigate: (p: Page) => void }) {
  const items: { page: Page; label: string; icon: React.ReactNode }[] = [
    { page: 'home', label: 'Home', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 18v-5h6v5" stroke="currentColor" strokeWidth="1.5"/></svg> },
    { page: 'community', label: 'Community', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 16c0-2.21 2.686-4 6-4s6 1.79 6 4" stroke="currentColor" strokeWidth="1.5"/><path d="M14 12c1.657 0 3 1.343 3 3" stroke="currentColor" strokeWidth="1.5"/></svg> },
    { page: 'track', label: 'Track', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { page: 'history', label: 'History', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { page: 'trends', label: 'Trends', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-4 3 3 4-5 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { page: 'search', label: 'Search', icon: <svg className="nav-icon" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/><path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  ];

  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="nav-logo-dot" />
        SkinTing
      </div>
      {items.map(item => (
        <button
          key={item.page}
          className={`nav-item${curPage === item.page ? ' active' : ''}`}
          onClick={() => navigate(item.page)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
      <hr className="nav-divider" />
      <div className="nav-section">Account</div>
      <button
        className={`nav-item${curPage === 'profile' ? ' active' : ''}`}
        onClick={() => navigate('profile')}
      >
        <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        Profile
      </button>
      <div className="nav-bottom">
        <div className="nav-user">
          <div className="user-av">YO</div>
          <div>
            <div className="user-name">your name</div>
            <div className="user-handle">@your_username</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── TWEAKS PANEL ───────────────────────────────────────────── */
const SWATCHES = [
  { v: 'terra', bg: '#e87048', title: 'terracotta' },
  { v: 'coral', bg: '#e03a4a', title: 'coral' },
  { v: 'mauve', bg: '#9b5e8a', title: 'mauve' },
  { v: 'sky', bg: '#4a86b5', title: 'sky' },
  { v: 'sage', bg: '#5a9a60', title: 'sage' },
  { v: 'gold-acc', bg: '#d4a854', title: 'gold' },
  { v: 'rose', bg: 'linear-gradient(135deg,#d4956a,#c87090)', title: 'rose gold' },
  { v: 'candy', bg: 'linear-gradient(135deg,#e06a8a,#b060c8)', title: 'candy' },
];

function TweaksPanel({ open, onClose, T, setT }: { open: boolean; onClose: () => void; T: TweaksState; setT: (t: TweaksState) => void }) {
  return (
    <>
      <div className={`tw-overlay${open ? ' on' : ''}`} onClick={onClose} />
      <aside className={`tweaks${open ? ' on' : ''}`}>
        <div className="tw-head">
          <span className="tw-head-title">Tweaks</span>
          <button className="tw-close" onClick={onClose}>×</button>
        </div>
        <div className="tw-sec">
          <div className="tw-sec-title">Accent color</div>
          <div className="sw-grid">
            {SWATCHES.map(s => (
              <div
                key={s.v}
                className={`sw${T.acc === s.v ? ' on' : ''}`}
                style={{ background: s.bg }}
                title={s.title}
                onClick={() => setT({ ...T, acc: s.v })}
              />
            ))}
          </div>
        </div>
        <div className="tw-sec">
          <div className="tw-sec-title">Background</div>
          <div className="tw-opts">
            {[['dark', 'dark'], ['light', 'clean minimal'], ['chrome', 'liquid chrome']].map(([v, label]) => (
              <button key={v} className={`tw-opt${T.bg === v ? ' on' : ''}`} onClick={() => setT({ ...T, bg: v })}>{label}</button>
            ))}
          </div>
        </div>
        <div className="tw-sec">
          <div className="tw-sec-title">Density</div>
          <div className="tw-opts">
            {[['', 'comfortable'], ['compact', 'compact']].map(([v, label]) => (
              <button key={v} className={`tw-opt${T.density === v ? ' on' : ''}`} onClick={() => setT({ ...T, density: v })}>{label}</button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

/* ─── APP ─────────────────────────────────────────────────────── */
export default function App() {
  const [curPage, setCurPage] = useState<Page>('home');
  const [communitySubtab, setCommunitySubtab] = useState('foryou');
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [T, setTRaw] = useState<TweaksState>({ acc: 'terra', bg: 'dark', density: '' });

  function setT(next: TweaksState) {
    setTRaw(next);
  }

  // Apply CSS variable tweaks to :root
  useEffect(() => {
    const acc = ACC_MAP[T.acc] || ACC_MAP.terra;
    const bg = BG_MAP[T.bg] || BG_MAP.dark;
    const r = document.documentElement;
    r.style.setProperty('--acc', acc.a);
    r.style.setProperty('--acc2', acc.a2);
    r.style.setProperty('--bg', bg.bg);
    r.style.setProperty('--bg1', bg.bg1);
    r.style.setProperty('--bg2', bg.bg2);
    r.style.setProperty('--text', bg.text);
    r.style.setProperty('--text2', bg.text2);
    r.style.setProperty('--border', bg.border);
    r.style.setProperty('--border2', bg.border2);
  }, [T]);

  // Persist page across refreshes
  useEffect(() => {
    const saved = localStorage.getItem('st3_page') as Page | null;
    if (saved && PAGE_TITLES[saved]) setCurPage(saved);
  }, []);

  function navigate(page: Page) {
    setCurPage(page);
    localStorage.setItem('st3_page', page);
  }

  function renderPage() {
    switch (curPage) {
      case 'home':      return <HomePage onNavigate={(p) => navigate(p as Page)} />;
      case 'community': return <CommunityPage subtab={communitySubtab} setSubtab={setCommunitySubtab} />;
      case 'track':     return <TrackPage onHistory={() => navigate('history')} />;
      case 'history':   return <HistoryPage />;
      case 'trends':    return <TrendsPage />;
      case 'search':    return <SearchPage />;
      case 'profile':   return <ProfilePage />;
      case 'product':   return <ProductDetailPage />;
      default:          return <HomePage onNavigate={(p) => navigate(p as Page)} />;
    }
  }

  return (
    <div className="app">
      <Nav curPage={curPage} navigate={navigate} />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">{PAGE_TITLES[curPage]}</div>
          <div className="topbar-search">
            <div className="search-bar" style={{ cursor: 'pointer' }} onClick={() => navigate('search')}>
              <svg className="search-icon" viewBox="0 0 20 20" fill="none">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ color: 'var(--text3)', fontSize: 14 }}>search products or ask anything…</span>
            </div>
          </div>
          <div className="topbar-right">
            <button className="topbar-icon-btn" title="notifications">🔔</button>
            <button className="topbar-icon-btn" title="tweaks" onClick={() => setTweaksOpen(true)}>⚙</button>
          </div>
        </div>
        <div className="content-area" key={curPage}>
          {renderPage()}
        </div>
      </div>
      <TweaksPanel open={tweaksOpen} onClose={() => setTweaksOpen(false)} T={T} setT={setT} />
    </div>
  );
}
