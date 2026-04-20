@echo off
echo Copying Love Me Not.mp3 to public/music folder...

REM Check if file exists in common locations
if exist "%USERPROFILE%\Downloads\Love Me Not (feat. Rex Orange County).mp3" (
    copy "%USERPROFILE%\Downloads\Love Me Not (feat. Rex Orange County).mp3" "d:\Mahi birhthday\birthday-website\public\music\Love Me Not.mp3"
    echo File copied successfully!
    pause
    exit /b 0
)

if exist "%USERPROFILE%\Downloads\Love Me Not.mp3" (
    copy "%USERPROFILE%\Downloads\Love Me Not.mp3" "d:\Mahi birhthday\birthday-website\public\music\Love Me Not.mp3"
    echo File copied successfully!
    pause
    exit /b 0
)

if exist "d:\Mahi birhthday\Love Me Not.mp3" (
    copy "d:\Mahi birhthday\Love Me Not.mp3" "d:\Mahi birhthday\birthday-website\public\music\Love Me Not.mp3"
    echo File copied successfully!
    pause
    exit /b 0
)

if exist "d:\Mahi birhthday\Photos\Love Me Not.mp3" (
    copy "d:\Mahi birhthday\Photos\Love Me Not.mp3" "d:\Mahi birhthday\birthday-website\public\music\Love Me Not.mp3"
    echo File copied successfully!
    pause
    exit /b 0
)

echo File not found in common locations!
echo Please manually copy "Love Me Not.mp3" to:
echo d:\Mahi birhthday\birthday-website\public\music\
pause
