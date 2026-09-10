import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ColorSwatch {
  name: string;
  hex: string;
}

interface ColorPaletteProps {
  colors: ColorSwatch[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const { t } = useLanguage();
  if (!colors || colors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-5 my-6" role="list" aria-label={t('colorPalette.ariaLabel')}>
      {colors.map((color) => (
        <div key={color.hex} className="flex flex-col items-center gap-2 w-20" role="listitem">
          <div
            className="w-14 h-14 rounded-full border-2 border-foreground"
            style={{ backgroundColor: color.hex }}
            aria-hidden="true"
          />
          <div className="text-center">
            <p className="text-xs font-bold text-foreground leading-tight">{color.name}</p>
            <p className="text-[11px] text-muted-foreground font-mono leading-tight">{color.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
