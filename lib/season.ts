const SEASON_NAMES = ["spring", "summer", "fall"] as const;

/**
 * Seasons are 4-month bands (spring=Jan-Apr, summer=May-Aug, fall=Sep-Dec).
 * Returns the *next* season after the current one — e.g. in October (fall)
 * this returns "spring 2027", in February (spring) it returns "summer <year>".
 */
export function getNextSeasonLabel(date: Date = new Date()): string {
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();

  const seasonIndex = month <= 3 ? 0 : month <= 7 ? 1 : 2;
  const nextIndex = (seasonIndex + 1) % 3;
  const nextYear = seasonIndex === 2 ? year + 1 : year;

  return `${SEASON_NAMES[nextIndex]} ${nextYear}`;
}
