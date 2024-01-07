/**
 * check name of new genre on post
 * 
 * @param: genre name
 * @returns: fails if no match, true if right type
 */

function checkGenreName(name) {
    if(
        name == null 
        || name.length <= 1 
        || typeof(name) != "string" 
        || name.length > 50
        ) {
        return false
        }

        return true
}

module.exports = {
    checkGenreName,
}