export const reducer=(state,action)=>{
    if(action.type === "REMOVE_ITEM"){
        
        // console.log("hello ",state.MenuItem.filter((currElem)=>{
        //     return currElem.slug !== action.payload}));
        // console.log(action.payload)
        return {
            ...state,
            item:state.MenuItem.filter((currElem)=>{
                return currElem.slug !== action.payload;
            }),
        };
    }
    
    return state;
}