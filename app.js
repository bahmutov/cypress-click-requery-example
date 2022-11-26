const output = document.getElementById('output')
document
  .getElementById('go')
  .addEventListener('click', () => {
    output.innerText = 'Gone'
  })

document
  .getElementById('ready')
  .addEventListener('click', () => {
    output.innerText = 'Ready'

    document.getElementById('controls').innerHTML = `
      <button id="ready">Ready</button>
      <button id="go">Go</button>
    `
  })
