'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to send. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[var(--cyan-glow)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-[var(--text-secondary)]">Your feedback has been sent. We appreciate you taking the time.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-[var(--cyan-glow)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Your name (optional)"
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[rgba(0,240,255,0.1)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--cyan-glow)] transition-colors"
        />
      </div>
      <div>
        <input 
          type="email" 
          name="email" 
          placeholder="Your email (optional)"
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[rgba(0,240,255,0.1)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--cyan-glow)] transition-colors"
        />
      </div>
      <div>
        <textarea 
          name="message" 
          rows={4}
          required
          placeholder="Share your experience, suggestion, or feedback..."
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[rgba(0,240,255,0.1)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--cyan-glow)] transition-colors resize-none"
        />
      </div>
      
      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}
      
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="btn-cyan w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Feedback'}
      </button>
    </form>
  );
}

