import axios from 'axios'
import {FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, SINGLE_USER_FAILED, SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS} from '../constants'

export const fetchUsers=()=>async(dispatch)=>{
dispatch({
    type:FETCH_USERS_REQUEST
})
try{
    const {data}=await axios.get('https://reqres.in/api/users?page=1')
    dispatch({
        type:FETCH_USERS_SUCCESS,
        payload:data.data
    })

}
catch(error){
    dispatch({
        type:FETCH_USERS_FAILED,
        payload:error
    })
}

}
export const fetchSingleUser=(id)=>async(dispatch)=>{
dispatch({
    type:SINGLE_USER_REQUEST
})
try{
    const {data}=await axios.get(`https://reqres.in/api/users/${id}`)
    dispatch({
        type:SINGLE_USER_SUCCESS,
        payload:data.data
    })

}
catch(error){
    dispatch({
        type:SINGLE_USER_FAILED,
        payload:error
    })
}

}