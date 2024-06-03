function procent(barter) {
    let a = Number(barter)
    let b = Number(50) 
    let ure = Number(Math.round(a - (a/100)*b))
    return ure
}