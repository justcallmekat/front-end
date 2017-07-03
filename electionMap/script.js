//ELECTION MAP
//var winner = "";
var createPolitician = function(name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null; //pass in name variable
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tally = function() //set up method
  {
    politician.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes += this.electionResults[i];
    }

  }; //end tally method

  return politician;
}; //end createPolitician factor function

//create canidate instances
var politician1 = createPolitician("Queen Carlota", [245, 141, 136]); //jane
var politician2 = createPolitician("Queen Candace", [44, 133, 153]); //betsy


//create array of votes
politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//correct array of votes
politician1.electionResults[9] = 1;
politician1.electionResults[4] = 17;
politician1.electionResults[43] = 11;

politician2.electionResults[9] = 28;
politician2.electionResults[4] = 38;
politician2.electionResults[43] = 27;

//results of winner by state including color
var setStateResults = function(state) {
  theStates[state].winner = null;
  if (politician1.electionResults[state] > politician2.electionResults[state]) {
    theStates[state].winner = politician1;
  } else if (politician1.electionResults[state] < politician2.electionResults[state]) {
    theStates[state].winner = politician2;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  //get stateResults from HTML doc
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  //populate the state table and tie to stateResults
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  //show name by state
  candidate1Name.innerText = politician1.name;
  candidate2Name.innerText = politician2.name;
  //show politicians results and tie to state
  candidate1Results.innerText = politician1.electionResults[state];
  candidate2Results.innerText = politician2.electionResults[state];

  //add logic to decide which politician won a state
  if (theStates[state].winner === null) {
    winnersName.innerText = "Draw";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
}; // end setStateResults



//call tally method for each object instance
politician1.tally();
politician2.tally();

//declare the winner
if (politician1.totalVotes > politician2.totalVotes) {
  winner = politician1.name;
} else if (politician1.totalVotes < politician2.totalVotes) {
  winner = politician2.name;
} else {
  winner = "Draw";
}

//get countryResults from HTML doc
var table = document.getElementById('countryResults');
table.children[0].children[0].children[0].innerText = politician1.name;
table.children[0].children[0].children[1].innerText = politician1.totalVotes;
table.children[0].children[0].children[2].innerText = politician2.name;
table.children[0].children[0].children[3].innerText = politician2.totalVotes;
table.children[0].children[0].children[5].innerText = winner;
