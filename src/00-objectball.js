function gameObject() {
return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
            },
            "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
              },
              "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
              },
              "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
              },
              "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
              } 
        }
    },

    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
            },
            "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
             },
             "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
        },
        "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
            },
             "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
        }
      }
    }
  };
}
//Step 2: Building Functions Calling Functions Within Functions//
  
function numPointsScored(playerName) {
    const game = gameObject();
    
    for (const team of ["home", "away"]) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    
    return "Player not found";
  }
  //ShoeSize//
  function shoeSize(playerName) {
    const game = gameObject();
    
    for (const team of ["home", "away"]) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    
    return "Player not found";
  }
    //TeamColors//
    function teamColors(teamName) {
        const game = gameObject();
        
        for (const team of ["home", "away"]) {
          if (game[team].teamName === teamName) {
            return game[team].colors;
          }
        }
        
        return "Team not found";
      }
    //TeamNames//
      function teamNames() {
        const game = gameObject();
        return [game.home.teamName, game.away.teamName];
      } 
    //PlayerNumbers//
        function playerNumbers(teamName) {
            const game = gameObject();
            const team = game.home.teamName === teamName ? "home" : "away";
            return Object.values(game[team].players).map(player => player.number);
          }
    //PlayerStats//
          function playerStats(playerName) {
            const game = gameObject();
            
            for (const team of ["home", "away"]) {
              if (game[team].players[playerName]) {
                return game[team].players[playerName];
              }
            }
            
            return "Player not found";
            
          }
         //BigShoeRebounds//
            function bigShoeRebounds() {
                const game = gameObject();
                let playerBiggestShoe = null;
                
                for (const team of ["home", "away"]) {
                  for (const player of Object.keys(game[team].players)) {
                    if (!playerBiggestShoe || game[team].players[player].shoe > game[playerBiggestShoe.team].players[playerBiggestShoe.name].shoe) {
                      playerBiggestShoe = { team, name: player };
                    }
                  }
                }
                
                return game[playerBiggestShoe.team].players[playerBiggestShoe.name].rebounds;
              }


        //mostPointsScored//
              function mostPointsScored() {
                const game = gameObject();
                let playerMostPoints = null;
                
                for (const team of ["home", "away"]) {
                  for (const player of Object.keys(game[team].players)) {
                    if (!playerMostPoints || game[team].players[player].points > game[playerMostPoints.team].players[playerMostPoints.name].points) {
                      playerMostPoints = { team, name: player };
                    }
                  }
                }
                
                return playerMostPoints.name;
              }
        //WinningTeam//
              function winningTeam() {
                const game = gameObject();
                let scores = { [game.home.teamName]: 0, [game.away.teamName]: 0 };
                
                for (const team of ["home", "away"]) {
                  scores[game[team].teamName] = Object.values(game[team].players).reduce((acc, player) => acc + player.points, 0);
                }
                
                return scores[game.home.teamName] > scores[game.away.teamName] ? game.home.teamName : game.away.teamName;
              }
         //PlayerWithLongestName//
              function playerWithLongestName() {
                const game = gameObject();
                let longestName = null;
                
                for (const team of ["home", "away"]) {
                  for (const player of Object.keys(game[team].players)) {
                    if (!longestName || player.length > longestName.length) {
                      longestName = player;
                    }
                  }
                }
                
                return longestName;
              }
        //DoesLongNameStealATon//
              function doesLongNameStealATon() {
                const game = gameObject();
                let playerMostSteals = null;
                
                for (const team of ["home", "away"]) {
                  for (const player of Object.keys(game[team].players)) {
                    if (!playerMostSteals || game[team].players[player].steals > game[playerMostSteals.team].players[playerMostSteals.name].steals) {
                      playerMostSteals = { team, name: player };
                    }
                  }
                }
                
                return playerMostSteals.name === playerWithLongestName();
              }

              
          