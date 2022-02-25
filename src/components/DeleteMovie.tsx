import { Button } from "@mui/material"
import api from "../api"

interface PropsDeleteMovie {
  id: string
}

const DeleteMovie: React.FC<PropsDeleteMovie> = ({ id }) => {
  const deleteUser = () => {
    if (window.confirm(`Do tou want to delete the movie ${id} permanently?`,)) {
      api.deleteMovieById(id)
      window.location.reload()
    }
  }

  return <Button onClick={deleteUser}>Delete</Button>
}

export default DeleteMovie