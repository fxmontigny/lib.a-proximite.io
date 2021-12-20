export const testPhoneNumber = (number) => {
    const regex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', 'im')

    return regex.test(number)
}