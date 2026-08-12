from PIL import Image

path = 'public/logos_temp/Copy of meity-startup-hub-meity-startup-hub-01-01.jpg'
try:
    with Image.open(path) as img:
        print(f"Mode: {img.mode}, Size: {img.size}")
        # Get the first 10 pixels
        data = list(img.getdata())
        print(f"First 10 pixels: {data[:10]}")
        
        # Check background color by looking at corners
        w, h = img.size
        print(f"Top-left: {img.getpixel((0,0))}")
        print(f"Top-right: {img.getpixel((w-1,0))}")
        print(f"Bottom-left: {img.getpixel((0,h-1))}")
        print(f"Bottom-right: {img.getpixel((w-1,h-1))}")
except Exception as e:
    print(f"Error: {e}")
