from PIL import Image

path = 'public/slider-logos/dpiit-header.png'
try:
    with Image.open(path) as img:
        print(f"Mode: {img.mode}, Size: {img.size}")
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
