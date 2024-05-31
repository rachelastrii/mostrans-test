import { ResourceBase } from './resourceBase'

type CharacterLocation = {
	name: string,
	url: string
}

export type Character = ResourceBase & {
	status: 'Dead' | 'Alive' | 'unknown',
	species: string,
	type: string,
	gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
	origin: CharacterLocation,
	location: CharacterLocation,
	image: string, 									// avatar
	episode: string[],
}