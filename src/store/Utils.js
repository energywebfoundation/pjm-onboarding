
export const updateObject = (object, newProperty) =>{
    return {
        ...object,
        ...newProperty
    }
}