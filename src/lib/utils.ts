import { Crew } from "@/api/types"

export function getYearFromDate(dateString: string): number | null {
  const date = new Date(dateString)
  const year = date.getFullYear()
  return isNaN(year) ? null : year
}

export function getCountryFromLanguageAbbreviation(
  abbreviation: string
): string | undefined {
  const languageToCountry: { [key: string]: string } = {
    en: "USA",
    hi: "India",
    es: "Spain",
    fr: "France",
    de: "Germany",
    it: "Italy",
    pt: "Portugal",
    ja: "Japan",
    zh: "China",
    ru: "Russia",
    ar: "Saudi Arabia",
    ko: "South Korea",
    // Add more language-to-country mappings here as needed
  }

  return languageToCountry[abbreviation]
}

export function getRandomItemsFromArray<T>(
  array: T[] | undefined,
  count: number = 5
): T[] | [] {
  if (!array || array.length === 0) {
    return []
  }

  const selectedItems: T[] = []
  const copyOfArray = [...array] // Create a copy to avoid modifying the original array

  for (let i = 0; i < count; i++) {
    if (copyOfArray.length === 0) {
      break // If there are no more items to select, exit the loop
    }

    const randomIndex = Math.floor(Math.random() * copyOfArray.length)
    selectedItems.push(copyOfArray.splice(randomIndex, 1)[0])
  }

  return selectedItems
}

export function findCrewByJob(
  crewArray?: Crew[],
  jobToFind?: string[]
): Crew[] | undefined {
  return crewArray?.filter((crewMember) => jobToFind?.includes(crewMember.job))
}
