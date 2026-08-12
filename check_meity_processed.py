from PIL import Image

path = 'public/slider-logos/meity-startup-hub-meity-startup-hub-01-01.png'
try:
    with Image.open(path) as img:
        print(f"Mode: {img.mode}, Size: {img.size}")
        
        # Check if there are any non-transparent pixels that are NOT the logo
        # i.e., is it just a solid block?
        # Let's count how many transparent vs non-transparent pixels there are
        data = list(img.getdata())
        transparent_count = 0
        non_transparent_count = 0
        for p in data:
            if p[3] == 0:
                transparent_count += 1
            else:
                non_transparent_count += 1
        print(f"Transparent pixels: {transparent_count}")
        print(f"Non-transparent pixels: {non_transparent_count}")
except Exception as e:
    print(f"Error: {e}")
