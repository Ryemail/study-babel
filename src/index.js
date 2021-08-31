import createApp from "./common";

export default function () {
  const names = ["阮垚", "黄开珍", "夏前进"];

  return names.map((val) => val);
}

const data = createApp();

console.log(data);
