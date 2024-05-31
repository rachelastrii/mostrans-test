import { Character } from './character'
import { ResourceBase } from './resourceBase'

export type Location = ResourceBase & {
  type: string
  dimension: string
  residents: Character[]
}