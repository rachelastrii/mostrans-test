import { ResourceBase } from './resourceBase'

export type Episode = ResourceBase & {
  air_date: string
  episode: string
  characters: string[]
}