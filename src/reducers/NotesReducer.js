
const initialState = {
    list: [
        { title: 'Primeira nota', body:'testando 1 2 3'}
    ]
}

export default ( state = initialState, action) => {

    let newlist = [ ...state.list]

    switch(action.type) {
        case 'ADD_NOTE':
            newlist.push({
                title: action.payload.title,
                body: action.payload.body
            })
        break;

        case 'EDIT_NOTE':
            if (newlist[action.payload.key]) {
                newlist[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body
                }
            }
        break;
        case 'DEL_NOTE': 
         newlist = newlist.filter((item,index) => index != action.payload.key)
         
    }

    return {...state, list: newlist}
}