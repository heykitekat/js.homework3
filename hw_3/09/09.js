var arr = [1, 2, 5, 9, 4, 13, 4, 10]
for ( var i of arr) {
    if ( i === 4 ) {
        console.log('Есть!')
        break
    } else {
        continue
    }
}