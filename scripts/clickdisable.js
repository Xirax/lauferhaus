
document.getElementById('hide-fb-iframe').addEventListener('mouseover', (ev) => {
    setTimeout(() => {
        document.getElementById('hide-fb-iframe').style.pointerEvents = 'none';
    }, 180);
})

document.getElementById('hide-fb-iframe').addEventListener('mouseout', (ev) => {
    setTimeout(() => {
        document.getElementById('hide-fb-iframe').style.pointerEvents = 'all';
    }, 180);
})
