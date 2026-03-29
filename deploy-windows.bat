@echo off
echo ============================================
echo  elfennir.com - Build and Deploy to Netlify
echo ============================================
echo.

cd /d %~dp0

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo [2/3] Building Next.js static site...
set NODE_OPTIONS=--max-old-space-size=4096
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo [3/3] Deploying to Netlify (production)...
call npx netlify deploy --prod --dir=out --site=af6deceb-b38f-4c26-92e9-139bbf14b5f0
if %errorlevel% neq 0 (
    echo ERROR: Deploy failed
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Deploy complete! Site live at elfennir.com
echo ============================================
pause
