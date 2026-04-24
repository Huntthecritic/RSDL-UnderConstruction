'use client';

import Image from 'next/image';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/dialog';

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    try {
      await addDoc(collection(db, 'email_signups'), {
        email,
        timestamp: new Date()
      });
      setIsDialogOpen(true);
      setIsLoading(false);
      formRef.current?.reset();
    } catch (error) {
      console.error('Error adding document: ', error);
      setIsLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image src="/RSDL Logo BG Transparent.png" width={170} height={170} alt="Reelspan Logo" className="mx-auto" style={{ width: 'auto', height: 'auto' }} />
        </div>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-black">
          Under Construction
        </h1>

        {/* Divider */}
        <div className="w-10 h-px bg-gray-300 mx-auto mb-12"></div>

        {/* Subtitle and Content */}
        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            We&apos;re building something amazing. Check back soon.
          </p>

          <p className="text-sm text-gray-600 mb-8">
            Get notified when we launch
          </p>

          {/* Email Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-3 text-sm border border-gray-300 bg-white text-black font-sans transition-all duration-300 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-3 text-sm font-medium bg-black text-white border border-black uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <nav className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs text-gray-500">
            <a
              href="mailto:info@reelspandigital.ltd"
              className="transition-colors duration-300 hover:text-black"
            >
              Contact
            </a>
            <a
              href="http://linkedin.com/company/reelspandigitallimted"
              className="transition-colors duration-300 hover:text-black"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/reel.span/"
              className="transition-colors duration-300 hover:text-black"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
          </DialogHeader>
          <p>You have successfully signed up to be notified when we launch.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
