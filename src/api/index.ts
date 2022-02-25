import axios from 'axios'
import { Movies, Movie } from '../models'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const insertMovie = (payload: any) => api.post(`/movie`, payload)

// export const getAllMovies = () => api.get(`/movies`)
export const getAllMovies = () => {
  return new Promise<Movies>((resolve, reject) => {
    api.get(`/movies`)
      .then(r => {
        let movies: Movies = []
        r.data.data.map((movie: Movie) => {
          movies.push(movie)
        })
        resolve(movies)
      })
      .catch(e => reject(e.data.e))
  })
}
export const updateMovieById = (id: string, payload: any) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = (id: string) => api.delete(`/movie/${id}`)
export const getMovieById = (id: string) => api.get(`/movie/${id}`)

const apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
}

export default apis