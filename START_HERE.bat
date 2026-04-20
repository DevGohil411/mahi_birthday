@echo off
REM Birthday Website - Getting Started Script (Windows)
REM This script guides you through the initial setup

cls
echo ================================================
echo 🎂 Premium Birthday Website Setup Guide (Windows)
echo ================================================
echo.

REM Check Node.js
echo 📋 Checking prerequisites...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found. Install from: https://nodejs.org (v18+)
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% found

where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm not found.
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm %NPM_VERSION% found
echo.

REM Step 1: Install dependencies
echo 📦 Step 1: Installing dependencies...
call npm install --legacy-peer-deps
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Installation failed
    exit /b 1
)
echo ✅ Dependencies installed
echo.

REM Step 2: Create images directory
echo 📸 Step 2: Setting up images folder...
if not exist "public\images" mkdir public\images
echo ✅ Image folder created at: public\images\
echo.

REM Step 3: Instructions
echo ================================================
echo ✨ Setup Complete! Next Steps:
echo ================================================
echo.
echo 1️⃣  Add Photos (IMPORTANT)
echo    * Get 4-6 birthday photos
echo    * Save to: public\images\
echo    * Name them: photo-1.jpg, photo-2.jpg, etc.
echo.
echo 2️⃣  Edit Content
echo    * Open: lib\data.ts
echo    * Update:
echo      - BIRTHDAY_NAME = 'Your Name'
echo      - PHOTOS array (src, caption)
echo      - MESSAGE_LINES array
echo      - FINALE_TEXT
echo.
echo 3️⃣  Preview Locally
echo    * Run: npm run dev
echo    * Open: http://localhost:3000
echo    * Check it out!
echo.
echo 4️⃣  Deploy
echo    * Read: DEPLOYMENT.md
echo    * Push to GitHub
echo    * Connect to Vercel
echo    * Share the link!
echo.
echo ================================================
echo 📚 Documentation
echo ================================================
echo.
echo Start with these files in order:
echo   1. INDEX.md        - Overview and navigation
echo   2. QUICK_START.md  - Fast setup checklist
echo   3. README.md       - Full documentation
echo.
echo Reference guides:
echo   * COMPONENTS.md    - Component customization
echo   * DESIGN.md        - Visual design system
echo   * DEPLOYMENT.md    - Deploy to production
echo   * FILES.md         - Project structure
echo.
echo ================================================
echo 🚀 Quick Commands
echo ================================================
echo.
echo npm run dev       - Start development server
echo npm run build     - Build for production
echo npm start         - Run production build
echo npm run lint      - Check code quality
echo.
echo ================================================
echo 💡 Pro Tips
echo ================================================
echo.
echo * Customize colors in: tailwind.config.js
echo * All content in: lib\data.ts
echo * Components in: components\
echo * Main styling: app\globals.css
echo.
echo ================================================
echo.
echo Happy creating! 🎉
echo.
echo Need help? Read INDEX.md for complete guidance.
echo.
pause
