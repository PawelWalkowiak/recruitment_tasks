export function generateRandomString(length) {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

export function generateRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1
}

export function generateRandomUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
        return v.toString(16)
    });
}

export function generateRandomTerm() {
    return Math.floor(Math.random() * 5) + 1
}

export function generatePseudoRandomAmount() {
    var amount = "".concat(Math.floor(Math.random() * 1000) + 1).concat(".00")
    return amount
}