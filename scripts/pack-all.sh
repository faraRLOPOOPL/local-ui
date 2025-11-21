#!/bin/bash

# Script to build and pack all @realist-ui packages

set -e  # Exit on error

echo "======================================"
echo "  Building and Packing All Packages"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Build all packages
echo -e "${BLUE}[1/3] Building all packages...${NC}"
pnpm build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build completed successfully${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

echo ""

# Step 2: Pack all packages
echo -e "${BLUE}[2/3] Packing all packages...${NC}"
echo ""

packages=("design-system" "button" "input" "modal" "select" "switchtheme" "dropdown" "tabs" "checkbox" "breadcrumb" "status")

for pkg in "${packages[@]}"; do
    echo -e "${YELLOW}Packing @realist-ui/${pkg}...${NC}"
    cd "packages/${pkg}"
    pnpm pack --silent
    cd ../..
    echo -e "${GREEN}✓ ${pkg} packed${NC}"
done

echo ""

# Step 3: List created tar files
echo -e "${BLUE}[3/3] Created packages:${NC}"
echo ""

for pkg in "${packages[@]}"; do
    tarball=$(ls packages/${pkg}/*.tgz 2>/dev/null | head -1)
    if [ -f "$tarball" ]; then
        size=$(ls -lh "$tarball" | awk '{print $5}')
        echo "  • $(basename $tarball) (${size})"
    fi
done

echo ""
echo -e "${GREEN}======================================"
echo -e "  ✓ All packages built and packed!"
echo -e "======================================${NC}"
echo ""
echo "To install in your project:"
echo "  npm install \\"
echo "    react react-dom antd @ant-design/icons \\"

for pkg in "${packages[@]}"; do
    tarball=$(ls packages/${pkg}/*.tgz 2>/dev/null | head -1)
    if [ -f "$tarball" ]; then
        echo "    $(pwd)/${tarball} \\"
    fi
done

echo ""
