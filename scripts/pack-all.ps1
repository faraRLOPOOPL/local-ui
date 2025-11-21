# Script to build and pack all @realist-ui packages

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  Building and Packing All Packages" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build all packages
Write-Host "[1/3] Building all packages..." -ForegroundColor Blue
pnpm build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build completed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Pack all packages
Write-Host "[2/3] Packing all packages..." -ForegroundColor Blue
Write-Host ""

$packages = @("design-system", "button", "input", "modal", "select", "switchtheme", "dropdown", "tabs", "checkbox", "breadcrumb", "status")

foreach ($pkg in $packages) {
    Write-Host "Packing @realist-ui/$pkg..." -ForegroundColor Yellow
    Push-Location "packages\$pkg"
    pnpm pack --silent | Out-Null
    Pop-Location
    Write-Host "✓ $pkg packed" -ForegroundColor Green
}

Write-Host ""

# Step 3: List created tar files
Write-Host "[3/3] Created packages:" -ForegroundColor Blue
Write-Host ""

foreach ($pkg in $packages) {
    $tarball = Get-ChildItem "packages\$pkg\*.tgz" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($tarball) {
        $size = "{0:N2} KB" -f ($tarball.Length / 1KB)
        Write-Host "  • $($tarball.Name) ($size)"
    }
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Green
Write-Host "  ✓ All packages built and packed!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host ""
Write-Host "To install in your project:"
Write-Host "  npm install \"
Write-Host "    react react-dom antd @ant-design/icons \"

foreach ($pkg in $packages) {
    $tarball = Get-ChildItem "packages\$pkg\*.tgz" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($tarball) {
        Write-Host "    $(Get-Location)\$($tarball.FullName) \"
    }
}

Write-Host ""
