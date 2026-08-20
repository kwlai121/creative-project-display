import React from 'react';

interface ColorSwatch {
  name: string;
  hex: string;
}

interface ColorPaletteProps {
  colors: ColorSwatch[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-5 my-6" role="list" aria-label="Brand color palette">
      {colors.map((color) => (
        <div key={color.hex} className="flex flex-col items-center gap-2 w-20" role="listitem">
          <div
            className="w-14 h-14 rounded-full border border-border shadow-sm ring-1 ring-black/5"
            style={{ backgroundColor: color.hex }}
            aria-hidden="true"
          />
          <div className="text-center">
            <p className="text-xs font-medium text-foreground leading-tight">{color.name}</p>
            <p className="text-[11px] text-muted-foreground font-mono leading-tight">{color.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
