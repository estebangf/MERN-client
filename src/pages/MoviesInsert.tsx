import { Button, Container, TextField, Typography } from '@mui/material'
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

const MoviesInsert = () => {

  const [name, setName] = useState<string>("")
  const [rating, setRating] = useState<string>("")
  const [time, setTime] = useState<string>("")

  const handleChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    setName(name)
  }

  const handleChangeInputRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _rating = event.target.validity.valid
      ? event.target.value
      : rating

    setRating(_rating)
  }

  const handleChangeInputTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value
    setTime(time)
  }

  const handleIncludeMovie = async () => {
    const arrayTime = time.split('/')
    const payload = { name, rating, time: arrayTime }

    await api.insertMovie(payload).then(res => {
      window.alert(`Movie inserted successfully`)
      setName(name)
      setRating(rating)
      setTime(time)
    })
  }

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

      <Button onClick={handleIncludeMovie}>Add Movie</Button>
      <Link to='/movies/list'><Button>Cancel</Button></Link>
    </Container>
  )
}

export default MoviesInsert