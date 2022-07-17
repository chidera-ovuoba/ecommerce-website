function reducer(state,action) {
    
if (action.type === 'DISPLAY_DATA') {
    return { ...state, ProductsData: action.payload };
}
    if (action.type === 'ANIMATION_SLIDER') {
        // console.log(state.sliderIndex);
        const index = action.payload.checkNumber(state.sliderIndex,action.payload.number);
        return { ...state,sliderIndex:index };
}

}
export default reducer