# 🃏 Poker Planning

A beautiful and intuitive poker planning application for agile teams. Estimate user stories with ease using the Fibonacci sequence in a modern, collaborative interface.

## ✨ Features

- 🎨 Beautiful pastel design with smooth animations
- 🃏 Fibonacci sequence estimation cards
- 👥 Multi-user support with real-time voting
- 📊 Voting results visualization
- 🕒 Round history tracking
- 📱 Responsive design for mobile and desktop
- ⚡ Fast and lightweight React application

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for deployment on Cloudflare Pages.

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy automatically on every push

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
npm run deploy
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: TanStack Query
- **Routing**: React Router
- **Real-time**: Socket.IO (optional)
- **Deployment**: Cloudflare Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CardSelection.tsx
│   ├── UserList.tsx
│   ├── VotingResults.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for local development:

```env
# Add your environment variables here
VITE_API_URL=your_api_url_here
```

### Cloudflare Pages Configuration

The project includes:
- `wrangler.toml` for Wrangler configuration
- `public/_redirects` for SPA routing
- GitHub Actions workflow for automatic deployment

## 📈 Performance

- ⚡ Optimized bundle splitting
- 🗜️ Minified production builds
- 📦 Tree-shaking for smaller bundles
- 🚀 Fast loading with modern web standards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by agile development practices
- Designed for team collaboration
