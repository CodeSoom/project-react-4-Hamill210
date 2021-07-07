import X_RIOT_TOKEN from '../config/riotKey';

export async function fetchPlayerInfo(username) {
  const response = await fetch(`lol/summoner/v4/summoners/by-name/${username}`, {
    method: 'GET',
    headers: {
      Origin: 'https://developer.riotgames.com',
      'X-Riot-Token': X_RIOT_TOKEN,
    },
  });

  return response.json();
}

export async function fetchXXX() {
  //
}
