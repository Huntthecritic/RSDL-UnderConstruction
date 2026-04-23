'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-black">
          Oops!
        </h1>

        <div className="w-10 h-px bg-gray-300 mx-auto mb-12"></div>

        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            Something went wrong, but don't worry! This is probably just a temporary issue.
          </p>

          <p className="text-sm text-gray-600 mb-8">
            Here's what we suggest:
          </p>

          <div className="mb-8 text-left bg-gray-50 p-6 rounded border border-gray-200">
            <ul className="text-sm text-gray-700 space-y-3">
              <li>• Try refreshing the page</li>
              <li>• Clear your browser cache and try again</li>
              <li>• Come back in a few minutes</li>
              <li>• Contact us if the problem continues</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-3 text-sm font-medium bg-black text-white border border-black uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-8 py-3 text-sm font-medium bg-white text-black border border-black uppercase tracking-wide transition-all duration-300 hover:bg-black hover:text-white active:scale-95 text-center"
            >
              Go Home
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-4">
            Still having issues? Let us know!
          </p>
          <nav className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs text-gray-500">
            <a
              href="mailto:hello@reelspan.com"
              className="transition-colors duration-300 hover:text-black"
            >
              Contact Us
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
    </div>
  );
}
