export interface CharacterFilter {
  name?: string
  type?: string
  species?: string
  /**
   * 'Dead' | 'Alive' | 'unknown'
   */
  status?: string
  /**
   * 'Female' | 'Male' | 'Genderless' | 'unknown'
   */
  gender?: string
  page?: number
}

export interface LocationFilter extends Pick<CharacterFilter, 'name' | 'type' | 'page'> {
  dimension?: string
}

export interface EpisodeFilter extends Pick<CharacterFilter, 'name' | 'page'> {
  /**
   * Filter by the given episode code.
   * i.e: `{ episode: "S01E01" }`
   */
  episode?: string
}