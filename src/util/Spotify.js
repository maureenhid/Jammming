const clientID = 'da24ff5ee4454477bde873bf2ae9447c';
const redirectUri = 'http://localhost:3000/';

let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken !== '') {
      return accessToken;
    }
    const accessTokenIndex= window.location.href.match(/access_token=([^&]*)/);
    const expiresInIndex= window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenIndex && expiresInIndex) {
      accessToken = accessTokenIndex[1];
      const expiresIn = Number(expiresInIndex[1]);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
} else {
const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
window.location = accessUrl;
}
  }
  search(term) {
return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
  {headers: {Authorization: `Bearer ${accessToken}`}}.then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  });
}

savePlaylist(playlistName, uriArray) {
  if(!playlistName || !uriArray) {
    return;
  }
  const accessToken = Spotify.getAccessToken();
  const headers = {Authorization: `Bearer ${accessToken}`};
  let userID;

  return fetch('https://api.spotify.com/v1/me', {headers: headers}
).then(jsonResponse => response.json()
).then(jsonResponse => {
    userID = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({name: name})
    }).then(response => response.json()
  ).then(jsonResponse => {
    const playlistID = jsonResponse.id;
    return fetch(`https://api.spotify.com//v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({uris: trackUris})
    });
  });
});
}

export default Spotify;
