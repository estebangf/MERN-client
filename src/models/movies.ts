export default interface Movie {
  _id?: string,
  name: string,
  time: string[],
  rating: number,
}

export type Movies = Movie[]