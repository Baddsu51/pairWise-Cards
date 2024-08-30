export const isEmpty = <T extends object>(obj: T): boolean =>
  Object.keys(obj).length === 0
