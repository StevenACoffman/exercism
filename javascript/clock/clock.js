const HOUR_MINUTES = 60;
const DAY_HOURS = 24;
const DAY_MINUTES = DAY_HOURS * HOUR_MINUTES;

const pad = (amount) => `00${amount}`.slice(-2);

function at(hours, minutes) {
  minutes = minutes || 0;
  const time = (hours * HOUR_MINUTES + minutes + DAY_MINUTES) % DAY_MINUTES;
  const hour = parseInt(time / HOUR_MINUTES) % DAY_HOURS;
  const minute = time % HOUR_MINUTES;

  const toString = () => `${pad(hour)}:${pad(minute)}`;
  const plus = (minutesToAdd) => at(0, time + minutesToAdd);
  const minus = (minutesToSubstract) => plus(-minutesToSubstract);
  const equals = (otherClock) => toString() === otherClock.toString();

  return Object.freeze({ toString, plus, minus, equals });
}

module.exports = { at };
