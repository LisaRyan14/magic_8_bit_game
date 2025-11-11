# Magic 8-Bit Ball 🎱

A retro-styled Magic 8-Ball game built with Next.js and React. Ask the mystical 8-bit ball your yes/no questions and receive randomized responses from the classic Magic 8-Ball answer set, complete with 8-bit pixel art aesthetics, animations, and sound effects.

## Features

- 🎱 **Classic Magic 8-Ball Responses**: All 20 standard responses (affirmative, negative, non-committal, and neutral)
- 🎨 **8-Bit Pixel Art Styling**: Retro black and white aesthetic with pixel art graphics
- ✨ **Smooth Animations**: Shake animation when submitting questions, fade-in animation for answers
- 🔊 **Sound Effects**: 8-bit sound effects for shake and answer reveal
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Fast & Modern**: Built with Next.js 16 and React 19

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Mac: `brew install node`
  - Windows: `sudo apt install nodejs npm`
- **npm** or **pnpm** package manager
- **Git** (for version control)

## Installation

### Option 1: Using npm (Recommended)

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd 8_bit_ball_game
   ```

2. **Install dependencies** with legacy peer deps flag (required for React 19 compatibility):
   ```bash
   npm install --legacy-peer-deps
   ```

   > **Note**: The `--legacy-peer-deps` flag is necessary due to peer dependency conflicts with React 19 and some Radix UI packages.

### Option 2: Using pnpm

If you prefer using pnpm (the project was originally created with pnpm):

```bash
pnpm install
```

### Troubleshooting Installation Issues

If you encounter errors during installation:

1. **Remove pnpm lockfile** (if using npm):
   ```bash
   rm pnpm-lock.yaml
   npm install --legacy-peer-deps
   ```

2. **Remove problematic package** (if needed):
   ```bash
   npm uninstall vaul
   npm install --legacy-peer-deps
   ```

3. **Clear npm cache** (if issues persist):
   ```bash
   npm cache clean --force
   npm install --legacy-peer-deps
   ```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

Open your browser and navigate to the URL to see the Magic 8-Bit Ball game.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Other Available Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run build` - Build the application for production
- `npm run dev` - Start the development server

## Port Conflicts

If port 3000 is already in use, you can:

1. **Free the port** (Mac/Linux):
   ```bash
   kill -9 $(lsof -ti tcp:3000)
   ```

2. **Use a different port**:
   ```bash
   PORT=3001 npm run dev
   ```

## How to Use

1. **Enter your question**: Type a yes/no question in the input field
2. **Submit**: Press Enter or click the "ASK" button
3. **Watch the magic**: The 8-ball will shake with sound effects
4. **Get your answer**: After the shake animation, your answer will fade in on the 8-ball's screen

## Project Structure

```
8_bit_ball_game/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── magic-ball.tsx    # 8-ball graphic component
│   ├── question-input.tsx # Question input component
│   └── ui/               # shadcn/ui components
├── public/
│   ├── 8-bit-shake-sound-effect.jpg
│   ├── 8-bit-reveal-sound-effect.jpg
│   └── icons/            # App icons
├── package.json          # Dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Technology Stack

- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI & shadcn/ui
- **Fonts**: Geist Mono (Google Fonts)
- **Deployment**: Vercel (recommended)

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Configure Build Settings** (if needed):
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --legacy-peer-deps`

Your app will be live and accessible to the world! 🚀

## Magic 8-Ball Responses

The game includes all 20 classic Magic 8-Ball responses:

### Affirmative (5)
- It is certain
- It is decidedly so
- Without a doubt
- Yes definitely
- You may rely on it

### Neutral-Positive (5)
- As I see it, yes
- Most likely
- Outlook good
- Yes
- Signs point to yes

### Non-Committal (5)
- Reply hazy, try again
- Ask again later
- Better not tell you now
- Cannot predict now
- Concentrate and ask again

### Negative (5)
- Don't count on it
- My reply is no
- My sources say no
- Outlook not so good
- Very doubtful

## Contributing

This project was created as part of the AI Engineer Onramp Bootcamp. Feel free to fork, modify, and enhance the game!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [v0.dev](https://v0.dev) for AI-powered development
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Inspired by the classic Magic 8-Ball toy
- Part of the AI Makerspace AI Engineer Onramp program

---

**Enjoy asking your questions to the Magic 8-Bit Ball!** 🎱✨

