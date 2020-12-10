import { getDifferenceInTime, getCurrentUnixTime } from './time';

test('it should get diffenrence in time from given unix time to the current time', () => {
  const currentUnixTime = getCurrentUnixTime();
  const futureUnixTime = currentUnixTime + 1000;

  expect(getDifferenceInTime(currentUnixTime)).toBe('less than a minute ago');
  expect(getDifferenceInTime(futureUnixTime)).toBe('N/A');
});
