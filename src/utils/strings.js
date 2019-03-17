

export const lineBreaksToSpaces = (raw, ...parts)=> (
  String.raw({raw}, ...parts).replace(/\n\s*/g, ' ')
);
