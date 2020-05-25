const Reducer=(state,action)=>{
    const{type,payload}=action;
    const{data}=state;
switch (type) {
    case 'API_SUCCESS': {
        return {
            ...state,
            ...payload
        }
    }
    case 'SET_TOTAL_AMOUNT': {
        const totalCost =data.map(b => parseInt(b.c) * b.d)
        return {
            ...state,
            totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
        }
    }
    case 'DELETE_HANDLER': {
        const { index } = payload;
        return {
            ...state,
            data: [...data.filter((item, i)=>i!=index)]
        }
    }
    case 'INC_COUNTER': {       
        const { index } = payload;
        data[index].d++;
        return {
            ...state,
            data: [...data]
        }
    }
    case 'DEC_COUNTER': {
        const { index } = payload;
        data[index].d--;
        return {
            ...state,
            data: [...data]
        }
    }
    default: {
        return state
    }
}
}
export default Reducer;