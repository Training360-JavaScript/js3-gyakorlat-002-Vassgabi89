/*- Az alábbi cookie-k legyenek a böngésződben tárolva 
(az első feladatban szereplő setCookie függvénnyel hozd őket létre, egyszerűen
másold át a függvényt ebbe a feladatba is, és futtasd háromszor):
  - viewed: 5
  - uid: 354774631237
  - ssid: Bx55OWbHJ0Vt_IGIF
  
- A cookieHandler objektum az alábbi három metódust tartalmazza:
  - `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy 
objektumban, ahol a sütik neve a key és az értéke a value (pl. {viewed: 5}).
  - `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az 
adott süti nevével és értékével.
  - `flush`: törli az összes sütit.
*/

const setCookie = (str,str2) => {
    const now = new Date()
    now.setTime(now.getTime() + (15*60*1000))
    const expires = now.toUTCString()
    document.cookie =`${str}=${str2}; expires=${expires}`
}

setCookie('viewed', 5)
setCookie('uid', 354774631237)
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF')


    const cookieHandler = {
        getAll() {
            const cookieObj = {}
            const cookie = document.cookie.split('; ')
            for (let i = 0; i < cookie.length; i++) {
                let cookiePair = cookie[i].split('=')
                cookieObj[cookiePair[0]]=cookiePair[1]
                }
        return cookieObj
        },
        toSessionStorage() {
            const Obj = cookieHandler.getAll()
            for (const key in Obj) {
                sessionStorage.setItem(key, Obj[key]);
            }
        },
        flush() {
            const cookie = document.cookie.split('; ')
            for (let i = 0; i < cookie.length; i++) {
                let cookiePair = cookie[i].split('=')
                document.cookie=`${cookiePair[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
                }
        }
    }

//console.log( cookieHandler.getAll())
//cookieHandler.toSessionStorage()
//cookieHandler.flush()

export { cookieHandler };
