$image_folder = "C:\JavaScript_html_css\Exercises\Modern Website\images"
$output_file = "c:\temp\images.json"

$image_files = Get-ChildItem -Path $image_folder

$image_filenames = @()
$image_filenames = $image_files.name

$image_filenames | ConvertTo-Json | Out-File $output_file