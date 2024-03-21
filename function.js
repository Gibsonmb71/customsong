function findSong() {
    var songTitle = document.getElementById('songTitleInput').value.trim();
    var artist = document.getElementById('artistInput').value.trim();
    var clean = document.getElementById('toggle-clean').checked ? " Clean" : "";
    
    // Combine song title, artist, and clean option
    var searchQuery = encodeURIComponent(songTitle + " " + artist + clean);
    
    var youtubeUrl = "https://www.youtube.com/results?search_query=" + searchQuery;
    window.open(youtubeUrl, '_blank');
}
