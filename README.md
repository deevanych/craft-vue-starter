# Craft + Vue Template

## Development Setup using DDEV

### Prerequisites
- Ensure DDEV is installed

### Installed Packages

#### Frontend
- Vue
- Pinia
- Tailwind
- PrimeVue

#### Backend
- Craft
- CKEditor
- SEOmatic
- Vite
- Blitz

### Development Commands

1. Copy environment file:
   ```bash
   cp .env.example .env
   ```

2. Start DDEV:
   ```bash
   ddev start
   ddev composer install
   ddev craft install
   ```

3. Set up client:
   ```bash
   cd client
   npm install
   npm run dev
   ```
