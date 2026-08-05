/**
 * Build-time half of the catalog search.
 *
 * Every searchable card carries a pre-normalized haystack in a data attribute,
 * so the runtime engine (CatalogSearchField.astro) never has to lowercase,
 * strip accents or split strings while the visitor types.
 */

/** Lowercases, strips accents and collapses everything else to single spaces. */
export function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Flattens the given fields into a deduplicated, normalized word list. Dropping
 * repeats keeps the emitted HTML small and shortens the fuzzy scan, which walks
 * every word of every card on each keystroke.
 */
export function buildSearchText(
  parts: Array<string | string[] | undefined | null>
): string {
  const words = new Set<string>();

  for (const part of parts.flat()) {
    if (!part) continue;
    for (const word of normalizeSearchText(part).split(" ")) {
      if (word) words.add(word);
    }
  }

  return Array.from(words).join(" ");
}
