/** 
 * El reduder se define como una arrow function que recibe solo dos parametros que son : un state y un action
*/
export const ParticipantesReducer=(state,action)=>{

    switch (action.type) {
        case "add":
            return [...state,action.payload]//HAcemos una copia sdel state y le agregamos un action.payload que contiene la infrmacion con los nuevos datos
        case "delete":
            return state.filter((actual)=>actual.id!==action.payload);//filtar, donde se diferente a ...
            //filtrar el state con todos los datos menos donde el id concida
            default:
            return state;
    }

}