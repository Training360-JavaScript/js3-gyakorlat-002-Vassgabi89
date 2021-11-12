/*A függvény meghívása esetén tárold el a függvénynek átadott string-et egy 
token nevű cookie-ba, amely 15 perc után lejár!*/

    const setCookie = (str) => {
        const now = new Date()
        now.setTime(now.getTime() + (15*60*1000))
        const expires = now.toUTCString()
        document.cookie =`token=${str}; expires=${expires}`
    }

export default setCookie;
