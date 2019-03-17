
export const defer = async (fn)=> {
  await null;
  return await fn();
};
