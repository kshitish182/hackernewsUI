// get difference in time

export function getDifferenceInTime(unixTime) {
  if (!unixTime || unixTime > getCurrentUnixTime()) {
    return 'N/A';
  }

  const minutes = Math.floor((getCurrentUnixTime() - unixTime) / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 30) {
    return `${hours} month(s) ago`;
  } else if (hours > 24) {
    return `${days} day(s) ago`;
  } else if (minutes > 60) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 1) {
    return `${minutes} minutes ago`;
  } else {
    return 'less than a minute ago';
  }
}

export const getCurrentUnixTime = () => Math.floor(new Date().getTime() / 1000.0);
