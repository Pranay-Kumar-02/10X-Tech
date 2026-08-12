import os
import glob

# Files to update based on our plan
files_to_update = glob.glob('src/**/*.jsx', recursive=True) + glob.glob('src/**/*.tsx', recursive=True)

# Replacements mapped
replacements = {
    # Containers
    "max-w-[1560px]": "max-w-[1400px]",
    "max-w-[1360px]": "max-w-[1220px]",
    "max-w-[1320px]": "max-w-[1180px]",
    "max-w-[1280px]": "max-w-[1150px]",
    "max-w-7xl": "max-w-6xl",
    
    # Paddings (Sections & Cards)
    "py-24": "py-20",
    "py-20": "py-16",
    "py-16": "py-12",
    "py-12": "py-10",
    "pt-28": "pt-24",
    "pt-32": "pt-28",
    "pb-24": "pb-20",
    
    "p-10": "p-8",
    "p-8": "p-6",
    
    # Margins and Gaps
    "gap-16": "gap-12",
    "gap-12": "gap-10",
    "gap-8": "gap-6",
    
    "mb-10": "mb-8",
    "mb-12": "mb-10",
    "mb-8": "mb-6",
    
    # Heights
    "min-h-screen": "min-h-[90svh]",
    "h-20": "h-16", # for navbar
}

# Apply to all files
for filepath in files_to_update:
    if not os.path.isfile(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    for old_str, new_str in replacements.items():
        # Quick and dirty string replace. This is generally safe for Tailwind classes.
        new_content = new_content.replace(f'"{old_str}"', f'"{new_str}"')
        new_content = new_content.replace(f"'{old_str}'", f"'{new_str}'")
        new_content = new_content.replace(f' {old_str} ', f' {new_str} ')
        new_content = new_content.replace(f' {old_str}"', f' {new_str}"')
        new_content = new_content.replace(f' {old_str}\'', f' {new_str}\'')
        new_content = new_content.replace(f'"{old_str} ', f'"{new_str} ')
        new_content = new_content.replace(f"'{old_str} ", f"'{new_str} ")

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

print("Done rebalancing scale.")
