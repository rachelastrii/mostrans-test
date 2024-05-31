import type { AppDispatch } from '.'
import type { Character, Data, Info } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

// axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

type InitialState = {
	loading: boolean,
	error: string,
	info?: Info,
	characters?: Character[],
	character: Character 
}

const initialState: InitialState = {
	loading: false,
	error: '',
	info: {
		pages: 1,
    count: 0,
    next: null,
    prev: null
	},
	characters: [],
	character: {
		id: 0,
    name: '',
    url: '',
    created: '',
		status: 'unknown',
    species: '',
    type: '',
    gender: 'unknown',
    origin: {
			name: '',
			url: ''
		},
    location: {
			name: '',
			url: ''
		},
    image: '',
    episode: ['']
	}
}

const { actions, reducer } = createSlice({
	name: 'character',
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
			error: '',
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			error: action.payload
		}),
		getCharacters: (state, action: PayloadAction<Data<Character[]>>) => ({
			...state,
			loading: false,
			characters: action.payload.results,
			info: action.payload.info
		}),
		getCharacterById: (state, action: PayloadAction<Character>) => ({
			...state,
			loading: false,
			character: action.payload
		})
	}
})
export default reducer


export const getCharacters = (url: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(actions.requested())
		
		const { data } = await axios.get<Data<Character[]>>(url)
		dispatch(actions.getCharacters(data))

	} catch (error: any) {
		dispatch(actions.failed(''))
	}
}

export const getCharacterById = (url: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(actions.requested())
		
		const { data } = await axios.get<Character>(url)
		dispatch(actions.getCharacterById(data))

	} catch (error: any) {
		dispatch(actions.failed(''))
	}
}