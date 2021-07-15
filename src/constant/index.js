export const QUEUE_TYPE = {
  '5v5 Blind Pick games': '일반',
  '5v5 Ranked Solo games': '솔랭',
  '5v5 Ranked Flex games': '자유 5:5 랭크',
  '5v5 ARAM games': '무작위 총력전',
  'Ultimate Spellbook games': '궁극기 모드',
};

export const getFormattedTimeDifference = (timeDiff) => {
  let result;

  if (timeDiff < 1000 * 60) {
    result = `${Math.floor(timeDiff / 1000)} 초전'`;
  } else if (timeDiff < 1000 * 60 * 60) {
    result = `${Math.floor(timeDiff / (1000 * 60))} 분전`;
  } else if (timeDiff < 1000 * 60 * 60 * 24) {
    result = `${Math.floor(timeDiff / (1000 * 60 * 60))} 시간전`;
  } else if (timeDiff < 1000 * 60 * 60 * 24 * 30) {
    result = `${Math.floor(timeDiff / (1000 * 60 * 60 * 24))} 일전`;
  } else if (timeDiff < 1000 * 60 * 60 * 24 * 30 * 12) {
    result = `${Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30))} 달전`;
  }

  return result;
};

export const VICTORY_OR_DEFEAT = {
  Win: '승리',
  Fail: '패배',
};
