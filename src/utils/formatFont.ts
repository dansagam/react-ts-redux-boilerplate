export const remToPx = (value: string) => Math.round(parseFloat(value) * 16);

export const pxToRem = (value: number) => `${value / 16}rem`;
