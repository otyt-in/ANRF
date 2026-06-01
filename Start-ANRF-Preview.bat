@echo off
setlocal
cd /d "%~dp0"
set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%BUNDLED_NODE%" (
  set "NODE_EXE=%BUNDLED_NODE%"
) else (
  set "NODE_EXE=node"
)
echo Starting ANRF preview at http://localhost:3000
start "" http://localhost:3000
"%NODE_EXE%" preview-server.mjs
echo.
echo If localhost does not open, double-click preview.html in this folder.
pause
