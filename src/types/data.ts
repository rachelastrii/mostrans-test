
export type Info = {
	pages: number,
	count: number,
	next: string | null,
	prev: string | null
}
export type Data<T> = {
	info?: Info,
	results?: T
}