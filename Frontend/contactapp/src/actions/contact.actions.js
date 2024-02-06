import axios  from "axios";
import{ contactConstants} from './constantes';

export const listerContacts = () => {
    return async dispatch =>
    {
        dispatch({ type :contactConstants.GET_ALL_CONTACTS_REQUEST })
        try{
             const res = await axios.get('http://localhost:4000/contact/lister')
               if (res.status ===200){
                   dispatch({ type : contactConstants.GET_ALL_CONTACTS_SUCCESS ,
                    payload : { contacts : res.data}
                })

               }

        }catch(error){
           dispatch ({
               type : contactConstants.GET_ALL_CONTACTS_FAILURE,
                payload : { error : error.response}
        })
        }
    }
}
export const deleteContactAction = (id) => {

     return async  dispatch =>{
        dispatch({ type : contactConstants.DELETE_CONTACT_REQUEST})
        try{
            const res = await axios.get(`http://localhost:4000/contact/${id}/supprimer`)
            if(res.status===200){
                dispatch({
                    type: contactConstants.DELETE_CONTACT_SUCCESS,
                    payload : { message : res.data}
                })
            }
        }catch(error){
            dispatch({
                type: contactConstants.DELETE_CONTACT_FAILURE,
                payload : { error : error.response}
            })
        }
     }
}



export const addContactAction =(data)=>{
 return async dispatch =>{
     dispatch({ type : contactConstants.ADD_CONTACT_REQUEST})
     try{
        const res = await axios.post('http://localhost:4000/contact/ajouter',data)
        if (res.status ===200){
            dispatch({ type : contactConstants.ADD_CONTACT_SUCCESS,
             payload : { createdContact : res.data}
         })

        }
     }catch(error){
        dispatch ({
            type : contactConstants.ADD_CONTACT_FAILURE,
             payload : { error : error.response}
     }
 )
}
}}

export const editContactAction =(id,data)=>{
    return async dispatch =>{
        dispatch({ type : contactConstants.EDIT_CONTACT_REQUEST})
        try{
           const res = await axios.post(`http://localhost:4000/contact/${id}/modifier`,data)
           if (res.status ===200){
               dispatch({ type : contactConstants.EDIT_CONTACT_SUCCESS,
                payload : { message : res.data}
            })
   
           }
        }catch(error){
           dispatch ({
               type : contactConstants.EDIT_CONTACT_FAILURE,
                payload : { error : error.response}
        }
    )
   }
   }}