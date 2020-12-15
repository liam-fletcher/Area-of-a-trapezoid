function addNumbers () {
  const a = +document.getElementById('x1').value
  const b = +document.getElementById('x2').value
  const h = +document.getElementById('x3').value
  const output = (a+b)/2 * h 
  document.getElementById('td').innerHTML=output
}