import { memo } from 'react';

function PlayerInfo({
  name,
  summonerLevel,
  soloRank,
  subRank,
}) {
  if (!name) {
    return (
      <p>소환사명을 검색해주세요.</p>
    );
  }

  return (
    <>
      <div>
        소환사명
        {' : '}
        {name}
      </div>
      <div>
        레벨
        {' : '}
        {summonerLevel}
      </div>
      <div>
        솔로랭크
        {' : '}
        {soloRank ? `${soloRank.tier} ${soloRank.rank} ${soloRank.leaguePoints}` : 'Unranked'}
      </div>
      {soloRank && (
        <div>
          전적
          {' : '}
          {soloRank ? `${soloRank.wins}승 ${soloRank.losses}패` : ''}
        </div>
      )}
      <div>
        자유랭크
        {' : '}
        {subRank ? `${subRank.tier} ${subRank.rank} ${subRank.leaguePoints}` : 'Unranked'}
      </div>
      {subRank && (
        <div>
          전적
          {' : '}
          {`${subRank.wins}승 ${subRank.losses}패`}
        </div>
      )}
    </>
  );
}

export default memo(PlayerInfo);
