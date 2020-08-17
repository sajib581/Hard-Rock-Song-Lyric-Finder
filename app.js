const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener('click', function() {
    const searchData = document.getElementById("searchData").value
    console.log(searchData);
    const result = document.getElementById("result");
    result.innerHTML = "";
    fetch(`https://api.lyrics.ovh/suggest/${searchData}`)
        .then(res => res.json())
        .then(song => {
            for (let i = 0; i < 10; i++) {
                console.log(song.data[i].title);
                //result.innerHTML += `<p class="author lead"><strong>${searchData}</strong> Album by <span>${song.data[i].title}</span> <button class="btn btn-success">Get Lyrics</button></p>`
                result.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                        <div class="col-md-9">
                                            <h3 class="lyrics-name">${searchData}</h3>
                                            <p class="author lead">Album by <span><strong>${song.data[i].title}</strong></span></p>
                                        </div>
                                        <div class="col-md-3 text-md-right text-center">
                                            <button class="btn btn-success">Get Lyrics</button>
                                        </div>
                                    </div>`
            }
        })
})

// fetch('https://api.lyrics.ovh/v1/Coldplay/Hymn For The Weekend')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.lyrics);
//     })