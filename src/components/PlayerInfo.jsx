export default function PlayerInfo({ name, summonerLevel }) {
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
    </>
  );
}
