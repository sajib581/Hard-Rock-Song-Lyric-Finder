const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener('click', function() {
    const searchData = document.getElementById("searchData").value
    const result = document.getElementById("result");
    result.innerHTML = "";
    fetch(`https://api.lyrics.ovh/suggest/${searchData}`)
        .then(res => res.json())
        .then(songs => {
            for (let i = 0; i < 10; i++) {
                //result.innerHTML += `<p class="author lead"><strong>${searchData}</strong> Album by <span>${song.data[i].title}</span> <button class="btn btn-success">Get Lyrics</button></p>`
                result.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                        <div class="col-md-9">
                                            <h3 class="lyrics-name">${songs.data[i].title}</h3>
                                            <p class="author lead">Album by <span><strong>${songs.data[i].artist.name}</strong></span></p>
                                        </div>
                                        <div class="col-md-3 text-md-right text-center">
                                            <button id="${i}" class="btn btn-success">Get Lyrics</button>
                                        </div>                          
                                    </div>
                                    <div class="aa">

                                    </div>`
            }
            let previous
            if (previous == undefined) {
                previous = 0;
            }
            for (let i = 0; i < 10; i++) {
                const lyricBtn = document.getElementById(i)
                lyricBtn.addEventListener("click", function() {
                    const artist = songs.data[i].artist.name;
                    const title = songs.data[i].title;

                    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
                        .then(res => res.json())
                        .then(data => {
                            document.getElementsByClassName("aa")[previous].innerText = "";
                            document.getElementsByClassName("aa")[i].innerHTML = `<div class="single-lyrics text-center">
                                                                                        <button class="btn go-back">&lsaquo;</button>
                                                                                        <h2 class="text-success mb-4">${title} - ${artist}</h2>
                                                                                        <pre class="lyric text-white">
                                                                                        ${data.lyrics}
                                                                                        </pre>
                                                                                    </div>`
                            previous = i;
                            console.log(data.lyrics);
                        })
                })
            }
        })
})