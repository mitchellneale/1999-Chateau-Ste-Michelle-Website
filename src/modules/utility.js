

function createButton(name) {
    const button = document.createElement('button');
    button.setAttribute('id', name.toLowerCase() + 'Button');
    button.className = 'button';
    button.textContent = name;
    btnContainer.appendChild(button);
}
export {createButton};