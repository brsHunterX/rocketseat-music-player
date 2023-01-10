export const toSeconds = (seconds: number) => {
  return seconds % 60;
};

export const toMinutes = (seconds: number) => {
  return Math.floor(seconds / 60);
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatFromSecToMin = (seconds: number) => {
  const min: number = toMinutes(seconds);
  const sec: number = toSeconds(seconds);

  return `${padTo2Digits(min)}:${padTo2Digits(sec)}`;
};
