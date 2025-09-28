# My Aroma - E-cigarette Mixing Calculator

A modern, responsive web application for calculating e-liquid mixing ratios. Perfect for DIY e-cigarette enthusiasts who want to create their own custom e-liquids with precise nicotine and flavor concentrations.

## 🌟 Features

- **Precise Mixing Calculations**: Calculate exact amounts of base, nicotine, and flavor concentrates needed
- **Visual Bottle Preview**: See a visual representation of your mix with color-coded layers
- **Real-time Updates**: Calculations update automatically as you change input values
- **Multi-language Support**: Available in English and French
- **Dark/Light Theme**: Toggle between light and dark modes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Input Validation**: Built-in validation to prevent invalid mixing ratios

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Internationalization**: [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language Detection**: [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languagedetector)
- **Build Tool**: [Turbopack](https://turbo.build/pack) for faster development builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mon-arome
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 How to Use

1. **Set your desired final volume** (in ml)
2. **Enter your target nicotine strength** (in mg/ml)
3. **Specify the aroma percentage** you want to use
4. **Set your nicotine base strength** (in mg/ml)
5. **View the results** showing exact amounts needed for each component
6. **See the visual preview** of your mix in the bottle representation

## 🌐 Internationalization

The app supports multiple languages:
- **English** (default)
- **Français** (French)

Language preference is automatically detected from your browser settings and stored in localStorage.

## 🎨 Theming

Switch between light and dark themes using the theme toggle button. Your preference is automatically saved and restored on subsequent visits.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── calculator.tsx     # Main calculator component
│   ├── bottle-preview.tsx # Visual bottle preview
│   ├── header.tsx         # App header with navigation
│   ├── language-toggle.tsx # Language switcher
│   └── theme-toggle.tsx   # Theme switcher
├── i18n/                  # Internationalization
│   ├── index.ts          # i18next configuration
│   └── locales/          # Translation files
│       ├── en.json       # English translations
│       └── fr.json       # French translations
└── lib/                   # Utility functions
    └── mixing-calculator.ts # Mixing calculation logic
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The app is optimized for Vercel's platform and will automatically build and deploy.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Happy Mixing!** 🧪💨