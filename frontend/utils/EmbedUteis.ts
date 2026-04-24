import { buttonStyle, ctaStyle } from '@/@types/embed';
import { CSSProperties } from 'react';

export const divStyle = (cta: ctaStyle): CSSProperties => {
  return {
    top: `${cta.ctaTop}%`,
    left: `${cta.ctaLeft}%`,
  };
};

export const pStyle = (cta: ctaStyle): CSSProperties => {
  return {
    textAlign: cta.alignment as CSSProperties['textAlign'],
    fontWeight:
      cta.textStyle === 'bold'
        ? '800'
        : cta.textStyle === 'normal'
          ? '500'
          : '400',
    fontStyle: cta.textStyle === 'italic' ? 'italic' : 'normal',
    color: cta.textColor,
    overflowWrap: 'break-word',
  };
};

export const btnStyle = (cta: ctaStyle): CSSProperties => {
  return {
    backgroundColor: cta.buttonColor,
    color: cta.buttonTextColor,
    borderRadius: `${cta.borderRadius}px`,
  };
};

export const btnEdgeStyle = (btn: buttonStyle): CSSProperties => {
  return {
    backgroundColor: btn.backgroundColor,
    color: btn.textColor,
    borderRadius: `${btn.borderRadius}px`,
    top: `${btn.btnTop}%`,
    left: `${btn.btnLeft}%`,
  };
};

export const titleStyle = () => {
  return {};
};
