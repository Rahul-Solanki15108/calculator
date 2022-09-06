import React from 'react';

export const loadButtons = (number) => {
    return {
        type : 'LOAD_BUTTONS',
        payload : number
    }
}

export const loadCancles = (number) => {
    return {
        type : 'LOAD_CANCLES',
        payload : number
    }
}

export const loadAllClear = (number) => {
    return {
        type : 'LOAD_CLEAR',
        payload : number
    }
}

export const loadBackSpace = (number) => {
    return {
        type : 'LOAD_BACKSPACE',
        payload : number
    }
}

export const loadAnswer = (number) => {
    return {
        type:'LOAD_ANS',
        payload:number
    }
}