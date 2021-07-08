import X_RIOT_TOKEN from '../config/riotKey';

export async function fetchSummoners(username) {
  const response = await fetch(`lol/summoner/v4/summoners/by-name/${username}`, {
    method: 'GET',
    headers: {
      Origin: 'https://developer.riotgames.com',
      'X-Riot-Token': X_RIOT_TOKEN,
    },
  });

  return response.json();
}

export async function fetchRanks(encryptedSummonerId) {
  const response = await fetch(`lol/league/v4/entries/by-summoner/${encryptedSummonerId}`, {
    method: 'GET',
    headers: {
      Origin: 'https://developer.riotgames.com',
      'X-Riot-Token': process.env.REACT_APP_X_RIOT_TOKEN,
    },
  });

  return response.json();
}
