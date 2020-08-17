fetch("https://api.lyrics.ovh/suggest/let me love you")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

fetch("https://api.lyrics.ovh/v1/DJ Snake/let me love you")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })