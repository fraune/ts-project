​window.addEventListener('load', (event) => {
    ​console.log('Page loaded.');
    ​const myText = document.getElementById('my-text');
    ​if (myText) {
        let newTextContent: string = "Goodbye";
        ​myText.addEventListener('click', _ => myText.innerHTML = newTextContent);
    ​}
​});