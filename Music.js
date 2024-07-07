document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('metadataForm').style.display = 'block';
});

document.getElementById('metadataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const artist = document.getElementById('artist').value;
    const songTitle = document.getElementById('songTitle').value;
    const album = document.getElementById('album').value;
    const encodedArtist = encodeURIComponent(artist);
    const encodedSongTitle = encodeURIComponent(songTitle);
    const encodedAlbum = encodeURIComponent(album);

    const links = [
        { name: 'YouTube', url: `https://www.youtube.com/upload?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` },
        { name: 'Google Drive', url: `https://drive.google.com/drive/u/0/my-drive?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` },
        { name: 'SoundCloud', url: `https://soundcloud.com/upload?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` },
        { name: 'Audiomack', url: `https://audiomack.com/upload?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` },
        { name: 'Vimeo', url: `https://vimeo.com/upload?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` },
        { name: 'Cloudlike', url: `https://www.cloudlike.com/upload?artist=${encodedArtist}&title=${encodedSongTitle}&album=${encodedAlbum}` }
    ];

    const linkList = document.getElementById('linkList');
    linkList.innerHTML = '';
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.target = '_blank';
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
    });

    document.getElementById('metadataForm').style.display = 'none';
    document.getElementById('links').style.display = 'block';
});
