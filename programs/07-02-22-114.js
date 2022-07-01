/****************************
 * 
 * Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
 * 
 */

//S1
const goals = (a, b, c) => {
  return a + b + c;
};

//S2
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = [laLigaGoals, copaDelReyGoals, championsLeagueGoals];
  return goals.reduce((a, b) => a + b, 0);
}
