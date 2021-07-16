function Player({ participantIdentities, blueTeam }) {
  const teamIds = blueTeam ? [1, 2, 3, 4, 5] : [6, 7, 8, 9, 10];
  return (
    <div>
      {participantIdentities
        .filter(({ participantId }) => teamIds.includes(participantId))
        .map((participantIdentity) => (
          <div key={participantIdentity.participantId}>
            <a href="https://www.codesoom.com/">{participantIdentity.player.summonerName}</a>
          </div>
        ))}
    </div>
  );
}

export default Player;
