import os
from PIL import Image

output_dir = 'public/slider-logos'
for filename in os.listdir(output_dir):
    try:
        with Image.open(os.path.join(output_dir, filename)) as img:
            print(f"{filename}: size={img.size}, mode={img.mode}")
    except Exception as e:
        print(f"Failed {filename}: {e}")
