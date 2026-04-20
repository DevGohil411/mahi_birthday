#!/bin/bash

# Birthday Website Setup Script
# This script sets up the project for development

echo "🎂 Birthday Website Setup"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

# Create images directory if it doesn't exist
mkdir -p public/images
echo "✓ Images directory ready at public/images/"
echo ""

# Show next steps
echo "🚀 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Add your photos to: public/images/"
echo "2. Update: lib/data.ts (name, captions, message)"
echo "3. Run: npm run dev"
echo "4. Open: http://localhost:3000"
echo ""
echo "For detailed instructions, see QUICK_START.md"
