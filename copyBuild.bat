
cd client
del /s build /Q
call npm install
call npm run build
xcopy ".\build" "..\websitedev" /E /Y




