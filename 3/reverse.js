const rdN = no => parseFloat(no.toString().split('').reverse().join('')) * Math.sign(no)



function reN(no) {
	return (
    parseFloat(
      no
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(no)
  )
}
const input = prompt();

console.log(rdN(input))


