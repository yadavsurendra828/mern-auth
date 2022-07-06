import { UserLogin } from "../CommonTypes";

export const formValid = ({ formValidation, ...rest }: any) => {
    let isValid = false;
    Object.values(formValidation).forEach(val => {
        if (val) {
            isValid = false
        } else {
            isValid = true
        }
    });
    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });
    console.log(isValid, "ffffffffffffff")
    return isValid;
};