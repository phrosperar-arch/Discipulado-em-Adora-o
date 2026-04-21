import os
try:
    from PIL import Image
    
    # Load the boy image
    img_path = 'public/boy.png'
    if not os.path.exists(img_path):
        print("Image not found:", img_path)
        exit(1)
        
    boy = Image.open(img_path).convert("RGBA")
    
    # Create a 512x512 solid background (#fdfaf9)
    bg_color = (253, 250, 249, 255)
    icon = Image.new("RGBA", (512, 512), bg_color)
    
    # Calculate aspect ratio and resize boy to fit the icon (e.g., width 400)
    target_width = 512
    w_percent = (target_width / float(boy.size[0]))
    target_height = int((float(boy.size[1]) * float(w_percent)))
    
    boy_resized = boy.resize((target_width, target_height), Image.Resampling.LANCZOS)
    
    # Paste the boy at the bottom middle
    # x = 0, y = 512 - target_height
    y_offset = 512 - target_height
    if y_offset < 0:
        # If taller than 512, scale by height instead
        target_height = 512
        h_percent = (target_height / float(boy.size[1]))
        target_width = int((float(boy.size[0]) * float(h_percent)))
        boy_resized = boy.resize((target_width, target_height), Image.Resampling.LANCZOS)
        x_offset = (512 - target_width) // 2
        icon.paste(boy_resized, (x_offset, 0), boy_resized)
    else:
        # Offset to push child down to the bottom
        icon.paste(boy_resized, (0, y_offset), boy_resized)
        
    # Save the new icon
    icon.save('public/app-icon.png', 'PNG')
    print("Successfully created public/app-icon.png")

except Exception as e:
    print("Error:", e)
