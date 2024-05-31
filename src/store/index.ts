import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './characterReducer'
import episodeReducer from './episodeReducer'
import locationReducer from './locationReducer'

export const store = configureStore({
	reducer: {
		character: characterReducer,
		episode: episodeReducer,
		location: locationReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch