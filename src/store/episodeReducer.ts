import type { AppDispatch } from '.'
import type { Data, Episode, Info } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


type InitialState = {
	loading: boolean,
	error: string,
	info?: Info,
	episodes?: Episode[]
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
	episodes: []
}

const { actions, reducer } = createSlice({
	name: 'episode',
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
		getEpisodes: (state, action: PayloadAction<Data<Episode[]>>) => ({
			...state,
			loading: false,
			info: action.payload.info,
			episodes: action.payload.results
		})
	}
})
export default reducer


export const getEpisodes = (url: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(actions.requested())
		
		const { data } = await axios.get<Data<Episode[]>>(url)
		dispatch(actions.getEpisodes(data))

	} catch (error: any) {
		dispatch(actions.failed(''))
	}
}