@echo off
echo Running Prisma DB Push...
call npx prisma db push --accept-data-loss
if %errorlevel% neq 0 exit /b %errorlevel%

echo Seeding database...
node prisma/seed.cjs
if %errorlevel% neq 0 exit /b %errorlevel%

echo Starting Next.js Dev Server...
call npm run dev
