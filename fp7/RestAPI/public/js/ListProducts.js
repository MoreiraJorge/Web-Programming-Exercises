function render() {
    const listElement = document.querySelector('.my-list')
    listElement.innerHTML = 'loading...'
    fetch('/api/products')
        .then((result) => result.json())
        .then((result) => {

            const children = result.map((product) => {
                return `<div>${product.name}</div>`
            }).join('')
            listElement.innerHTML = children
        })
}

render()