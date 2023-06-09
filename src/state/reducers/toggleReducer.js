const initialState  = {
    toggleCart: false, 
    toggleOverlay:false,
    toggleSidebar:false,
};

export default function ( state= initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'TOGGLE_SIDEBAR':
            return {...state, toggleSidebar: payload, toggleOverlay: payload}
        case 'TOGGLE_OVERLAY':
            console.log(payload)
            return{...state, toggleOverlay: payload, toggleSidebar:false} 
          
        case 'TOGGLE_CART':
            console.log(payload)
            return{...state, toggleCart: payload} 
            break;
    
        default:
          return{...state}  ;
    }
}
