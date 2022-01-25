function consecutiveCount(name, letter) {
  let counterLetter = 0;
  let streak = 0;

  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i) === letter) {
      counterLetter++;
      if (counterLetter > streak) {
        streak = counterLetter;
      }
    } else {
      counterLetter = 0;
    }
  }
  if (streak === 0) {
    return 0;
  } else {
    return streak;
  }
}

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
