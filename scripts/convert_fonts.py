#!/usr/bin/env python3
"""
Script to convert TTF font files to WOFF and WOFF2 formats
"""

import os
import sys
import glob
import subprocess
from fontTools.ttLib import TTFont

def convert_ttf_to_woff(ttf_path):
    """Convert a TTF file to WOFF format"""
    font = TTFont(ttf_path)
    
    # Create output paths
    base_path = os.path.splitext(ttf_path)[0]
    woff_path = f"{base_path}.woff"
    
    # Save as WOFF
    font.save(woff_path)
    print(f"Created: {woff_path}")
    
    return woff_path

def convert_ttf_to_woff2(ttf_path):
    """Convert a TTF file to WOFF2 format using fontTools CLI"""
    base_path = os.path.splitext(ttf_path)[0]
    woff2_path = f"{base_path}.woff2"
    
    try:
        subprocess.run(
            ["fonttools", "ttLib.woff2", "compress", ttf_path, "-o", woff2_path],
            check=True,
            capture_output=True,
            text=True
        )
        print(f"Created: {woff2_path}")
        return woff2_path
    except subprocess.CalledProcessError as e:
        print(f"Error creating WOFF2: {e.stderr}")
        return None

def main():
    """Main function to convert TTF files in the fonts directory"""
    # Get the path to the fonts directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    fonts_dir = os.path.join(project_dir, 'public', 'fonts')
    
    if not os.path.exists(fonts_dir):
        print(f"Error: Fonts directory not found at {fonts_dir}")
        return 1
    
    # Find all TTF files for CrimsonText
    ttf_files = glob.glob(os.path.join(fonts_dir, 'CrimsonText-*.ttf'))
    
    if not ttf_files:
        print("No CrimsonText TTF files found")
        return 1
    
    print(f"Found {len(ttf_files)} CrimsonText TTF files")
    
    # Convert each TTF file
    for ttf_file in ttf_files:
        try:
            # Convert to WOFF
            woff_path = convert_ttf_to_woff(ttf_file)
            
            # Convert to WOFF2
            woff2_path = convert_ttf_to_woff2(ttf_file)
            
            if woff_path and woff2_path:
                print(f"Successfully converted {os.path.basename(ttf_file)}")
            else:
                print(f"Partially converted {os.path.basename(ttf_file)}")
        except Exception as e:
            print(f"Error converting {os.path.basename(ttf_file)}: {e}")
    
    print("\nConversion complete!")
    print("\nRemember to update your CSS @font-face declarations to include both formats:")
    print("""
@font-face {
    font-family: 'CrimsonText';
    src: url('/fonts/CrimsonText-Regular.woff2') format('woff2'),
         url('/fonts/CrimsonText-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
    """)
    
    return 0

if __name__ == "__main__":
    sys.exit(main())