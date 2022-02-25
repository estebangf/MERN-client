import { Button, Container, TextField, Typography } from '@mui/material'
import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import api from '../api'
import { Movie } from '../models';


const MoviesUpdate: React.FC = () => {

  const { id } = useParams() as {id: string}

  const [name, setName] = useState<string>("")
  const [rating, setRating] = useState<number>(0.0)
  const [time, setTime] = useState<string>("")

  const handleChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _name = event.target.value
    setName(name)
  }

  const handleChangeInputRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const _rating = event.target.validity.valid
    //   ? event.target.value
    //   : rating
    const _rating = event.target.value
    setRating(parseFloat(_rating))
  }

  const handleChangeInputTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _time = event.target.value
    setTime(time)
  }

  const handleUpdateMovie = async () => {
    const arrayTime = time.split('/')
    const payload: Movie = { name, rating, time: arrayTime }

    await api.updateMovieById(id, payload).then(res => {
      window.alert(`Movie updated successfully`)
      setName(name)
      setRating(rating)
      setTime(time)
    })
  }

  useEffect(() => {
    api.getMovieById(id).then(result => {
      setName(result.data.data.name)
      setRating(result.data.data.rating)
      setTime(result.data.data.time.join('/'))
    }).catch(e => alert(e))
  }, [])
  return (
    <Container>
      <Typography>Create Movie</Typography>

      <TextField
        type="text"
        label="Name"
        value={name}
        onChange={handleChangeInputName}
      />

      <TextField
        type="number"
        label="Rating"
        value={rating}
        onChange={handleChangeInputRating}
      />

      <TextField
        type="text"
        label="Time"
        value={time}
        onChange={handleChangeInputTime}
      />

      <Button onClick={handleUpdateMovie}>Actualizar Movie</Button>
      <Link to='/movies/list'><Button>Cancel</Button></Link>
    </Container>
  )
}

export default MoviesUpdate