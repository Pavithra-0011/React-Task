import { configureStore } from '@reduxjs/toolkit'
import PostSlice from '../Slice/slice'

const Store = configureStore({
    reducer: {
       Post : PostSlice,
    }
})

export default Store
