import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-black">
          404
        </h1>

        <div className="w-10 h-px bg-gray-300 mx-auto mb-12"></div>

        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            We couldn't find that page. It might not exist, or it could have moved.
          </p>

          <p className="text-sm text-gray-600 mb-8">
            But that's okay! Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 text-sm font-medium bg-black text-white border border-black uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
            >
              Go Back Home
            </Link>
            <a
              href="mailto:hello@reelspan.com"
              className="px-8 py-3 text-sm font-medium bg-white text-black border border-black uppercase tracking-wide transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
            >
              Report Issue
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200">
          <nav className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs text-gray-500">
            <a
              href="mailto:hello@reelspan.com"
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
    </div>
  );
}
