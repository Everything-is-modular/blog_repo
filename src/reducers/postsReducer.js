export default (state = [] , action) => {
    if(action.type === 'FETCH_POSTS')  {
        return action.payload;
    
    /*switch(action.type) {
        case 'FETCH POSTS':
            return action.payload
    }*/
    }      
    return state;  
}