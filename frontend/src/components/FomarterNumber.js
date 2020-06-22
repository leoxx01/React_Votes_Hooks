const fomarter = Intl.NumberFormat('pt-BR')
function formaterNumber(value){
    return fomarter.format(value)
}

export {formaterNumber}