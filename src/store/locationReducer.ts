import type { AppDispatch } from '.'
import type { Data, Info, Location } from '../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


type InitialState = {
	loading: boolean,
	error: string,
	info?: Info,
	locations?: Location[]
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
	locations: []
}

const { actions, reducer } = createSlice({
	name: 'location',
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
		getLocations: (state, action: PayloadAction<Data<Location[]>>) => ({
			...state,
			loading: false,
			info: action.payload.info,
			locations: action.payload.results
		})
	}
})
export default reducer


export const getLocations = (url: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(actions.requested())
		
		const { data } = await axios.get<Data<Location[]>>(url)
		dispatch(actions.getLocations(data))

	} catch (error: any) {
		dispatch(actions.failed(''))
	}
}