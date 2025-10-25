'use client';
import { useState, useEffect } from 'react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | duplicate | error
  const [buttonText, setButtonText] = useState('Join the waitlist');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setButtonText('Submitting…');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.duplicate ? 'duplicate' : 'success');
        setEmail('');

        // Always show "Welcome onboard" after successful or duplicate subscription
        setButtonText('Thanks for joining');

        // Revert back after 2 seconds
        setTimeout(() => {
          setButtonText('Join the waitlist');
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setButtonText('Error! Try again');
        setTimeout(() => setButtonText('Join the waitlist'), 2000);
      }
    } catch {
      setStatus('error');
      setButtonText('Network error');
      setTimeout(() => setButtonText('Join the waitlist'), 2000);
    }
  }

  return (
    <form onSubmit={onSubmit} className="waitlist-form">
      <div className="waitlist-form-wrapper">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
          className="form-input"
          placeholder="you@company.com"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="form-button"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 16 17"
            fill="none"
            className="button-arrow"
          >
            <path
              d="M0.5 8.5H15.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 3.5L15.5 8.5L10.5 13.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Waitlist;