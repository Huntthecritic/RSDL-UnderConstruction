# ReelSpan - Under Construction

A modern, responsive "coming soon" landing page for Reel Span Digital Limited, built with Next.js and featuring email signup functionality via Firebase Firestore.

## 🚀 Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Email Signup**: Collect user emails for launch notifications with Firebase integration
- **Success Dialog**: User-friendly confirmation after signup
- **Social Links**: Direct links to contact, LinkedIn, and Instagram
- **SEO Optimized**: Includes meta tags, Open Graph, and Twitter cards
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Analytics**: Integrated Vercel Analytics for tracking

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI)
- **Database**: Firebase Firestore
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reelspan-underconstruction
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Go to Project Settings > General > Your apps > Add app (Web)
   - Copy the Firebase config object

4. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

The application is a single-page landing site with:

- A hero section featuring the ReelSpan logo and "Under Construction" message
- An email signup form that saves submissions to Firebase Firestore
- Social media links in the footer
- A success dialog that appears after successful signup

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Self-hosted with Docker

Build the app:
```bash
pnpm build
```

## 📁 Project Structure

```
reelspan-underconstruction/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # shadcn/ui components
│   └── theme-provider.tsx
├── hooks/
├── lib/
│   ├── firebase.ts  # Firebase configuration
│   └── utils.ts
├── public/          # Static assets (logo, icons)
└── package.json
```

## 🔧 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Email: hello@reelspan.com
- LinkedIn: [ReelSpan Digital Limited](http://linkedin.com/company/reelspandigitallimted)
- Instagram: [@reel.span](https://www.instagram.com/reel.span/)

---

Built with ❤️ for ReelSpan