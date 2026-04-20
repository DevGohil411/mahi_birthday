@echo off
REM Birthday Website Setup Script for Windows
REM This script sets up the project for development

echo 🎂 Birthday Website Setup
echo =========================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo ✓ Node.js version:
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo ✓ Dependencies installed
echo.

REM Create images directory
if not exist "public\images" (
    mkdir public\images
)
echo ✓ Images directory ready at public\images\
echo.

REM Show next steps
echo 🚀 Setup Complete!
echo.
echo Next steps:
echo 1. Add your photos to: public\images\
echo 2. Update: lib\data.ts (name, captions, message)
echo 3. Run: npm run dev
echo 4. Open: http://localhost:3000
echo.
echo For detailed instructions, see QUICK_START.md
