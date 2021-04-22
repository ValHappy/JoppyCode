import { abstra, depura, descomp, general } from '../const/exercisesConst';



export const selecInfo = (skillId) => {

    switch (skillId) {
        case "descomposicion":
        return descomp;
        case "abstraccion":
            return abstra;
        case "generalizacion":
            return general;
        case "depuracion":
            return depura;

    }


};