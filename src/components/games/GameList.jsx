function GameList({ gameInfos }) {
  if (gameInfos.length === 0) {
    return <></>;
  }

  return (
    gameInfos.map(({ gameId, participantIdentities }) => (
      <div key={gameId}>
        <div>
          <div>
            <div>솔랭</div>
            <div>
              <span>21시간 전</span>
            </div>
            <div>패배</div>
            <div>34분 11초</div>
          </div>
          <div>
            <div>카밀</div>
          </div>
          <div>
            <div>
              <span>12</span>
              {' / '}
              <span>9</span>
              {' / '}
              <span>10</span>
            </div>
            <div>
              <span>2.44:1</span>
              {' 평점 '}
            </div>
          </div>
          <div>
            <div>레벨</div>
            <div>
              <span>181</span>
              {' CS '}
            </div>
          </div>
          <div>
            <div>
              <div>
                {participantIdentities
                  .filter(({ participantId }) => participantId < 5)
                  .map(({ participantId, player: { summonerName } }) => (
                    <div key={participantId}>
                      <a href="https://www.codesoom.com/">{summonerName}</a>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div>
                {participantIdentities
                  .filter(({ participantId }) => participantId >= 5)
                  .map(({ participantId, player: { summonerName } }) => (
                    <div key={participantId}>
                      <a href="https://www.codesoom.com/">{summonerName}</a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )));
}

export default GameList;
