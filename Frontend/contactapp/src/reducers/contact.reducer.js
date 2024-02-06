import { contactConstants } from "../actions/constantes";

const initialState = {
  contacts: [],
  error: null,
  createdC : {},
  message : ''
};

export default (state = initialState, action) => {
  switch ((action.type)) {
      //get all contacts
    case contactConstants.GET_ALL_CONTACTS_REQUEST:
      state = {
        ...state,
      };
      break;
    case contactConstants.GET_ALL_CONTACTS_SUCCESS:
      state = {
        ...state,
        contacts: action.payload.contacts,
      };
      break;
    case contactConstants.GET_ALL_CONTACTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      //add all contacts
      case contactConstants.ADD_CONTACT_REQUEST:
      state = {
        ...state,
      
      };
      break;
      case contactConstants.ADD_CONTACT_SUCCESS:
        state = {
          ...state,
          createdC : action.payload.createdContact
        
        };
        break;

        case contactConstants.ADD_CONTACT_FAILURE:
            state = {
              ...state,
             error : action.payload.error
            };
            break;
             //edit all contacts
      case contactConstants.EDIT_CONTACT_REQUEST:
        state = {
          ...state,
        
        };
        break;
        case contactConstants.EDIT_CONTACT_SUCCESS:
          state = {
            ...state,
            message : action.payload.message
          
          };
          break;
  
          case contactConstants.EDIT_CONTACT_FAILURE:
              state = {
                ...state,
               error : action.payload.error
              };
              break;
              //delete  contacts
              case contactConstants.DELETE_CONTACT_REQUEST:
                state = {
                  ...state,
                
                };
                break;
                case contactConstants.DELETE_CONTACT_SUCCESS:
                  state = {
                    ...state,
                    message : action.payload.message
                  
                  };
                  break;
          
                  case contactConstants.DELETE_CONTACT_FAILURE:
                      state = {
                        ...state,
                       error : action.payload.error
                      };
                      break;
    default:
      console.log("default action");
  }

  return state;
};
