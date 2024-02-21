export const phoneValidation = phone => {
    const rePhone = phone.replace(/ +/g,'');
    return !/[a-zA-Z]/.test(rePhone) && !/^[\d ()]+$/.test(rePhone);
}