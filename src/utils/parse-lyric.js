 const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

 export function parseLyric(lyricString) {
  const lineStrings = lyricString.split('\n');

  const lyrics = []
  for (let line of lineStrings) {
    if (line) {
      // console.log(typeof line);
      const result = parseExp.exec(line);
      if(!result) continue;
      // console.log(result);
      // 全部转成毫秒    注意：原数据都是字符串，*1之后自动转为数组
      let time1 = result[1] * 60 * 1000;  //
      let time2 = result[2] * 1000;
      let time3 = result[3].length === 3 ? result[3]*1 : result[3]*10;
      let time = time1 + time2 + time3;
      let content = line.replace(parseExp, "").trim();
      let lineObj = {time,content};
      lyrics.push(lineObj);
    }
  }
  return lyrics;
 } 