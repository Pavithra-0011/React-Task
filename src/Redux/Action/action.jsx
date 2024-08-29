import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

const postData = createAsyncThunk(
    'user/Postdata',
     async(details, {isRejectedWithValue}) =>
    {
        try
        {
           const response = await axios.post('https://660fa0a3356b87a55c51d8db.mockapi.io/users', details)
           console.log("Details Posted Sucessfully")
           return response.data
        }
        catch(error)
        {
            console.log("Not sucessfull")
            return isRejectedWithValue(error.response.data)
        }
    }
)

export default postData