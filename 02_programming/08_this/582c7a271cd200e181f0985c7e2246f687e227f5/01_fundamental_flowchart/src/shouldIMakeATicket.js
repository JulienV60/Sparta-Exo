function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay) {
  {
    if (
      isStuck == true &&
      timeBeingStuck >= 20 &&

    ((hourOfTheDay>=9 && (hourOfTheDay<13) || (hourOfTheDay>=14) && (hourOfTheDay<18))))
      return true;
    else {
      return false;
    }
  }
}

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
