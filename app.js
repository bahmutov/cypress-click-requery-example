const output = document.getElementById('output')

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.id === 'ready') {
    output.innerText = 'Ready'

    setTimeout(() => {
      // replace the button elements with new buttons
      // to cause any grabbed Cypress references to be detached
      // from the parent DOM page
      document.getElementById('controls').innerHTML = `
        <button id="ready">Ready</button>
        <button id="go">Go</button>
      `
    }, 100)
  } else if (e.target.id === 'go') {
    output.innerText = 'Gone'
  }
})
