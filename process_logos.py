import os
from PIL import Image

input_dir = 'public/logos_temp'
output_dir = 'public/slider-logos'
target_height = 100

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Helper function to remove empty transparent space around the image
def trim(im):
    # Get the bounding box of the non-transparent alpha channel
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        alpha = im.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            return im.crop(bbox)
    return im

for filename in os.listdir(input_dir):
    input_path = os.path.join(input_dir, filename)
    
    # Skip if it's a directory
    if os.path.isdir(input_path):
        continue
        
    try:
        with Image.open(input_path) as img:
            # Convert to RGBA to ensure transparency is handled well
            img = img.convert("RGBA")
            
            # Trim transparent space
            img = trim(img)
            
            # Calculate new width maintaining aspect ratio
            aspect_ratio = img.width / img.height
            new_width = int(target_height * aspect_ratio)
            
            # Resize
            resized_img = img.resize((new_width, target_height), Image.Resampling.LANCZOS)
            
            # Generate clean filename
            safe_name = filename.replace('Copy of ', '').replace(' ', '_').lower()
            if safe_name.endswith(('.jpg', '.jpeg', '.webp')):
                safe_name = safe_name.rsplit('.', 1)[0] + '.png'
            if not safe_name.endswith('.png'):
                safe_name += '.png'
                
            output_path = os.path.join(output_dir, safe_name)
            
            # Save as PNG
            resized_img.save(output_path, 'PNG')
            print(f"Processed: {filename} -> {safe_name}")
            
    except Exception as e:
        print(f"Failed to process {filename}: {e}")

print("All images processed successfully.")
