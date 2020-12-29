import { something } from "./stuff.js"

​window.addEventListener('load', (event) => {
    ​console.log('Page loaded.');
    ​const myText = document.getElementById('my-text');
    ​if (myText) {
        let newTextContent: string = something();
        ​myText.addEventListener('click', _ => myText.innerHTML = newTextContent);
    ​}
​});