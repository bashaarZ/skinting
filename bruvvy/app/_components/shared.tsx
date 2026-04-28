'use client';

import React from 'react';

export function PhCard({ label, h = 140 }: { label: string; h?: number }) {
  return (
    <div className="ph-card" style={{ height: h }}>
      <span>{label}</span>
    </div>
  );
}

export function SectionHeader({ title, action }: { title: string; action?: string }) {
  return (
    <div className="section-hd">
      <span className="section-title">{title}</span>
      {action && <button className="section-action">{action}</button>}
    </div>
  );
}

export function ProductCard({ badge = '', accent = false }: { badge?: string; accent?: boolean }) {
  return (
    <div className={`pcard${accent ? ' pcard-accent' : ''}`}>
      <div className="pcard-img">
        <div className="ph-img">product</div>
      </div>
      <div className="pcard-body">
        <div className="pcard-brand">Brand</div>
        <div className="pcard-name">Product Name</div>
        <div className="pcard-meta">moisturizer · $28</div>
        <div className="pcard-tags">
          <span className="tag">★ 4.6</span>
          <span className="tag">hydrating</span>
          {badge && <span className="tag tag-acc">{badge}</span>}
        </div>
      </div>
    </div>
  );
}

interface PostData {
  init: string;
  name: string;
  time: string;
  skinType: string;
  text: string;
  productBrand: string;
  productName: string;
  productType: string;
  productBadge: string;
  productRating: string;
  likes: string;
  comments: string;
  hasBefore?: boolean;
  isDerm?: boolean;
  isTwin?: boolean;
}

export function PostCard({
  init, name, time, skinType, text,
  productBrand, productName, productType, productBadge, productRating,
  likes, comments, hasBefore = false, isDerm = false, isTwin = false,
}: PostData) {
  const avatarBg = init === 'YO' ? 'var(--acc)' : isDerm ? 'var(--gold)' : 'var(--bg3)';
  return (
    <div className="post-card">
      <div className="post-avatar" style={{ background: avatarBg }}>
        <span>{init}</span>
      </div>
      <div className="post-body">
        <div className="post-header">
          <span className="post-name">{name}</span>
          {isDerm && <span className="badge-derm">✦ Verified Derm</span>}
          {isTwin && <span className="badge-twin">twin</span>}
          <span className="post-time">{time}</span>
          <span className="post-skin-tag">{skinType}</span>
        </div>
        <div className="post-text">{text}</div>
        {hasBefore && (
          <div className="post-before-after">
            <div className="before-after-img">
              <div className="ph-img ph-small">before</div>
              <span className="ba-label">before</span>
            </div>
            <div className="before-after-img">
              <div className="ph-img ph-small">after</div>
              <span className="ba-label ba-after">after ✓</span>
            </div>
          </div>
        )}
        <div className="post-product">
          <div className="ph-img ph-square">img</div>
          <div className="pp-info">
            <div className="pp-brand">{productBrand}</div>
            <div className="pp-name">{productName}</div>
            <div className="pp-meta">{productType}</div>
            <div className="pp-tags">
              <span className="tag tag-sm">{productBadge}</span>
              <span className="pp-rating">★ {productRating}</span>
            </div>
          </div>
          <span className="pp-view">view →</span>
        </div>
        <div className="post-actions">
          <button className="post-action">♡ {likes}</button>
          <button className="post-action">💬 {comments}</button>
          <button className="post-action">↗ share</button>
          <button className="post-action post-action-more">···</button>
        </div>
      </div>
    </div>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" width={12} height={12}>
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
