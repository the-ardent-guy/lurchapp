param(
  [Parameter(Mandatory = $true)]
  [string]$ApiKey
)

$ErrorActionPreference = "Stop"

# Set key for current PowerShell session.
$env:ANTHROPIC_API_KEY = $ApiKey

# Persist key for future terminals (user-level).
[System.Environment]::SetEnvironmentVariable(
  "ANTHROPIC_API_KEY",
  $ApiKey,
  "User"
)

# Show resolved claude command and masked key preview.
$cmd = Get-Command claude -ErrorAction Stop
Write-Host "Claude command: $($cmd.Source)"
Write-Host "ANTHROPIC_API_KEY: $($env:ANTHROPIC_API_KEY.Substring(0,12))..."
Write-Host "Done. Open a new terminal, then run: claude"
