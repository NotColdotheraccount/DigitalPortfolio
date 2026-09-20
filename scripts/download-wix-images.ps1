# Downloads the full-resolution photos from the old Wix site
# into public/images, with the file names src/data expects.
#
# Run from the project folder (WebStorm terminal):
#   powershell -ExecutionPolicy Bypass -File scripts/download-wix-images.ps1

$base = "https://static.wixstatic.com/media"

$files = @{
  "portrait.jpg"                                    = "6916ac_8f6c2f0b625741fc89a20ec81a69c8e4~mv2.jpg"

  "projects/smart-bus-stop/dashboard.png"           = "6916ac_fa6c9b3c9796491ab0eead4a674cdd86~mv2.png"
  "projects/smart-bus-stop/prototype-1.jpg"         = "6916ac_df369df1faab4df5897ec69a280002ba~mv2.jpeg"
  "projects/smart-bus-stop/prototype-2.jpg"         = "6916ac_e57274e8c2bd4ff29e685a505179ee9d~mv2.jpeg"

  "projects/smart-queue-time-tracker/card.jpg"      = "6916ac_c07f6f731fcf4d9688ebf252e11db1a4~mv2.jpg"
  "projects/smart-queue-time-tracker/photo-1.jpg"   = "6916ac_a2508ba418dc4da6b4457a22ada02693~mv2.jpeg"
  "projects/smart-queue-time-tracker/photo-2.jpg"   = "6916ac_a1a33c8f8c1340d181dc7ca988352450~mv2.jpeg"
  "projects/smart-queue-time-tracker/photo-3.jpg"   = "6916ac_873c63c7ecf3431caa691531376ed691~mv2.jpeg"

  "projects/automatic-light-switch/prototype.jpg"   = "6916ac_f005b288e7ff459aac03516cfb052e48~mv2.jpg"
  "projects/automatic-light-switch/schematic.jpg"   = "6916ac_565685ad37b5432f8add4bd9cd5c6fc5~mv2.jpg"
  "projects/automatic-light-switch/circuitry.jpg"   = "6916ac_cbc494e027664c1bb68afb2656712f4b~mv2.jpg"
}

foreach ($target in $files.Keys) {
  $out = Join-Path "public/images" $target
  New-Item -ItemType Directory -Force -Path (Split-Path $out) | Out-Null
  Write-Host "Downloading $target"
  Invoke-WebRequest -Uri "$base/$($files[$target])" -OutFile $out
}

Write-Host "Done. Images are in public/images"
