const body = document.body.firstChild.nextSibling
const heart = body.firstChild.nextSibling
const heartt = body.firstChild.nextSibling.nextSibling.nextSibling
const hearttt = body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling

setTimeout(() => {
    hearttt.style.position = 'absolute';
    hearttt.style.left = '50%';
    setTimeout(() => {
        hearttt.style.background = 'red';
        hearttt.classList.add('active')
        hearttt.classList.add('active2')
    }, 300);
}, 400);

setTimeout(() => {
    heartt.style.position = 'absolute';
    heartt.style.left = '38%';
    setTimeout(() => {
        heartt.style.background = 'red';
        heartt.classList.add('active');
        heartt.classList.add('active2');
    }, 300);
}, 550);
setTimeout(() => {
    heart.style.position = 'absolute';
    heart.style.left = '26%';
    setTimeout(() => {
        heart.style.background = 'red';
        heart.classList.add('active');
        heart.classList.add('active2');
    }, 300);
}, 650);