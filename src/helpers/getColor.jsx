import colors from '../config/colors';

export const selectColor = (skillId) => {

    switch (skillId) {
        case "descomposicion":
        return colors.pink;
        case "abstraccion":
            return colors.blue;
        case "generalizacion":
            return colors.acua;
        case "depuracion":
            return colors.lila;

    }


};