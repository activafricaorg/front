'use client';
import { useState, useEffect } from 'react';
import { countries } from '@/data/countries';

const Waitlist = ({ open = false, onClose }) => {
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | duplicate | error
  const [buttonText, setButtonText] = useState('Submit');
  const [selectActive, setSelectActive] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setButtonText('Submitting…');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, jobTitle, organization, country }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.duplicate ? 'duplicate' : 'success');
        setEmail('');
        setJobTitle('');
        setOrganization('');
        setCountry('');

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
    <div className={`modal ${open ? 'active' : ''}`} onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 17 17" width="14" height="14"><title>Close Drawer</title><path stroke="currentColor" d="M1.526 1.148l14.999 14.999M.819 16.145L15.818 1.147"></path></svg>
      </button>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit} className="waitlist-form">
          <h2>Join the waitlist</h2>
          <p>Get early access to Activ and unlock a new way of understanding how your brand shows up across Africa's digital and media landscape.</p>
          <div className="waitlist-form-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="form-input"
              placeholder="you@company.com"
            />
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              autoComplete="organization-title"
              className="form-input"
              placeholder="Job Title"
            />
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
              autoComplete="organization"
              className="form-input"
              placeholder="Organization"
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onFocus={() => setSelectActive(true)}
              required
              className={`form-input ${selectActive ? 'active' : ''}`}
            >
              <option value="" className='dull' disabled>Select your country</option>
              {countries.map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
            <div className='action-item'>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="form-button"
              >
                {buttonText}
                {/* <svg
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
                </svg> */}
              </button>
            </div>
            {/* <div className='form-more'>
              By submitting this form, your information will be processed in accordance with our Privacy Policy.
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;