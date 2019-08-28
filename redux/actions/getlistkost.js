import * as type from '../types'
import axios from 'axios'

export const getDataKost = () => ({
    type : type.GET_LIST_KOST,
    payload : axios.get('http://localhost:8080/api/v1/listkost')
})