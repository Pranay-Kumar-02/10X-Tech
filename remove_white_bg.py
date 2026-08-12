import os
from PIL import Image

input_dir = 'public/logos_temp'
output_dir = 'public/slider-logos'
target_height = 100

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def make_white_transparent(img):
    img = img.convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        # If the pixel is close to white (allow some margin for anti-aliasing artifacts)
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

def trim(im):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        alpha = im.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            return im.crop(bbox)
    return im

for filename in os.listdir(input_dir):
    input_path = os.path.join(input_dir, filename)
    if os.path.isdir(input_path):
        continue
        
    try:
        with Image.open(input_path) as img:
            # UNCONDITIONALLY remove white background for all images
            img = make_white_transparent(img)
            
            img = trim(img)
            
            aspect_ratio = img.width / img.height
            new_width = int(target_height * aspect_ratio)
            resized_img = img.resize((new_width, target_height), Image.Resampling.LANCZOS)
            
            safe_name = filename.replace('Copy of ', '').replace(' ', '_').lower()
            if safe_name.endswith(('.jpg', '.jpeg', '.webp')):
                safe_name = safe_name.rsplit('.', 1)[0] + '.png'
            if not safe_name.endswith('.png'):
                safe_name += '.png'
                
            output_path = os.path.join(output_dir, safe_name)
            resized_img.save(output_path, 'PNG')
            print(f"Processed: {filename} -> {safe_name}")
            
    except Exception as e:
        print(f"Failed to process {filename}: {e}")

print("All images processed successfully.")
