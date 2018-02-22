const apiKey = 'BQBYA12VJht1xxY-lXmqrzCi38V_RwvykZyL6_3rHygEvHG2UEHEBbqnmuLxtI3gLrZMi2-guUrM8DSh8kc';
const SpotifySearch = {
	search() {
		console.log('starting');
		return fetch (`https://api.spotify.com/v1/search?q=vera&blue&type=track`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then (response => {
			console.log('mapping');
			return response.json().then(jsonResponse => {if (jsonResponse.tracks){
				console.log('array found');
				 return jsonResponse.tracks.items.map(tracks => (
					{
						id: tracks.id,
						name: tracks.name,
						popularity: tracks.popularity,
						preview_url: tracks.preview_url,
						track_number: tracks.track_number

					}
					
				)
			)
		}
	}
) 
		}
		)
		
	}
}
			

export default SpotifySearch;