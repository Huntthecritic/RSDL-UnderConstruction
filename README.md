# Reel Span Digital Limited 'Comming Soon' Landing Page with Next.Js
Hey! This is the "coming soon" page for Reel Span Digital Limited. It's basically a simple landing page that tells people we're working on something cool and lets them sign up with their email so we can tell them when we're ready to launch.

## What Does This Page Do?

- **Shows a nice message** - Tells visitors that we're building something awesome
- **Collects emails** - People can enter their email and click "Notify Me" to get on our     waiting list
- **Pretty design** - Looks good on phones, tablets, and computers
- **Links to socials** - Easy way to find us on LinkedIn, Instagram, or send an email

## How to Get It Running

### Step 1: Get the code
```bash
git clone
&
cd to the repo folder
```

### Step 2: Install what you need
```bash
npm install
```

### Step 3: Set up Firebase (where we save the emails)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Turn on Firestore Database
4. Go to Settings > Your apps and add a Web app
5. Copy the settings they give you

### Step 4: Create a `.env.local` file
In the main folder, create a file called `.env.local` and paste this in:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Replace the parts with your actual Firebase settings.

### Step 5: Run it!
```bash
npm run dev
```

Open http://localhost:3000 in your browser and you should see it!

## How It Works

1. Someone visits the page
2. They type in their email
3. They click "Notify Me"
4. The email gets saved to Firebase
5. They see a "Thank You!" message
6. The email is now in our database


```

## Common Commands

```bash
npm run dev      # Start developing (http://localhost:3000)
npm build    # Build for production
npm start    # Run production version

```

## How to Deploy

### Using Vercel (Super Easy)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your GitHub repo
4. Add your Firebase settings as environment variables
5. Click deploy!

### Other Options
You can also deploy to Netlify, Railway, or host it yourself.

## Technologies Used

- **Next.js** - Framework for building the website
- **TypeScript** - Makes JavaScript safer
- **Tailwind CSS** - For making it look pretty
- **Firebase** - Database for storing emails
- **shadcn/ui** - Pre-made beautiful components

## Need Help?
- **Find us on LinkedIn** - [ReelSpan Digital Limited](http://linkedin.com/company/reelspandigitallimted)
- **Follow on Instagram** - [@reel.span](https://www.instagram.com/reel.span/)

