var playlist = { 'OKGO': 'Moment', 'Nirvana': 'Drain You' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return (playlist)
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
