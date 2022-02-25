import { Button } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { Movies } from '../models'



const MoviesList = () => {
  const [movies, setMovies] = useState<Movies>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.getAllMovies().then(movies => {
      setMovies(movies)
      setIsLoading(false)
    }).catch(e => {
      alert(e)
    })
  }, [])

  const deleteMovie = (id: string) => {
    if (window.confirm(`Do tou want to delete the movie ${id} permanently?`,)) {
      api.deleteMovieById(id)
    }
  }

  return (
    <div>
      {isLoading ? <p>Loading</p> :
        movies.map(movie => {
          return <p>{movie.name}
            <Button onClick={e => deleteMovie(movie._id!)}>Delete</Button>
            <Link to={`/movies/update/${movie._id}`}>
              <Button>Update</Button>
            </Link>
          </p>
        })
      }
    </div>
  )
}

export default MoviesList