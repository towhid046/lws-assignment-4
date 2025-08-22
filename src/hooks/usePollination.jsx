import { useEffect, useState } from 'react'
import { getModels } from '../api/api'

const usePollination = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    const loadModels = async () => {
      try {
        const data = await getModels()
        setModels(data)
      } catch (error) {
        console.error('Error fetching models:', error)
      }
    }
    loadModels()
  }, [])
  return {
    models
  }
}

export default usePollination