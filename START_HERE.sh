#!/usr/bin/env bash

# Birthday Website - Getting Started Script
# This script guides you through the initial setup

echo "================================================"
echo "🎂 Premium Birthday Website Setup Guide"
echo "================================================"
echo ""

# Check Node.js
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from: https://nodejs.org (v18+)"
    exit 1
fi
echo "✅ Node.js $(node --version) found"

if ! command -v npm &> /dev/null; then
    echo "❌ npm not found."
    exit 1
fi
echo "✅ npm $(npm --version) found"
echo ""

# Ask for birthday name
echo "💝 Let's set up your birthday website!"
read -p "📝 Birthday person's name: " BIRTHDAY_NAME

# Step 1: Install dependencies
echo ""
echo "📦 Step 1: Installing dependencies..."
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "❌ Installation failed"
    exit 1
fi
echo "✅ Dependencies installed"

# Step 2: Create images directory
echo ""
echo "📸 Step 2: Setting up images folder..."
mkdir -p public/images
echo "✅ Image folder created at: public/images/"

# Step 3: Instructions
echo ""
echo "================================================"
echo "✨ Setup Complete! Next Steps:"
echo "================================================"
echo ""
echo "1️⃣  Add Photos (IMPORTANT)"
echo "   • Get 4-6 birthday photos"
echo "   • Save to: public/images/"
echo "   • Name them: photo-1.jpg, photo-2.jpg, etc."
echo ""
echo "2️⃣  Edit Content"
echo "   • Open: lib/data.ts"
echo "   • Update:"
echo "     - BIRTHDAY_NAME = '$BIRTHDAY_NAME'"
echo "     - PHOTOS array (src, caption)"
echo "     - MESSAGE_LINES array"
echo "     - FINALE_TEXT"
echo ""
echo "3️⃣  Preview Locally"
echo "   • Run: npm run dev"
echo "   • Open: http://localhost:3000"
echo "   • Check it out!"
echo ""
echo "4️⃣  Deploy"
echo "   • Read: DEPLOYMENT.md"
echo "   • Push to GitHub"
echo "   • Connect to Vercel"
echo "   • Share the link!"
echo ""
echo "================================================"
echo "📚 Documentation"
echo "================================================"
echo ""
echo "Start with these files in order:"
echo "  1. INDEX.md        ← Overview and navigation"
echo "  2. QUICK_START.md  ← Fast setup checklist"
echo "  3. README.md       ← Full documentation"
echo ""
echo "Reference guides:"
echo "  • COMPONENTS.md    ← Component customization"
echo "  • DESIGN.md        ← Visual design system"
echo "  • DEPLOYMENT.md    ← Deploy to production"
echo "  • FILES.md         ← Project structure"
echo ""
echo "================================================"
echo "🚀 Quick Commands"
echo "================================================"
echo ""
echo "npm run dev       → Start development server"
echo "npm run build     → Build for production"
echo "npm start         → Run production build"
echo "npm run lint      → Check code quality"
echo ""
echo "================================================"
echo "💡 Pro Tips"
echo "================================================"
echo ""
echo "• Customize colors in: tailwind.config.js"
echo "• All content in: lib/data.ts"
echo "• Components in: components/"
echo "• Main styling: app/globals.css"
echo ""
echo "================================================"
echo ""
echo "Happy creating! 🎉"
echo ""
echo "Need help? Read INDEX.md for complete guidance."
echo ""
