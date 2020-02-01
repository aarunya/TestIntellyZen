
let totalCost = 0;
function gotoCostCalculation() {
  let peopleGroup = [];
  peopleGroup = calculateCost();
  peopleGroup.sort();
  if (peopleGroup.length == 1) {
    document.getElementById('minimunCost').innerHTML = '<h3> minimum cost is' + peopleGroup[0] + '</h3>';

  } else if (peopleGroup.length == 2) {
    document.getElementById('minimunCost').innerHTML = '<h3> minimum cost is' + peopleGroup[1] + '</h3>';

  } else {
    totalCost = 0;
    for (let i = (peopleGroup.length - 1); i >= ((peopleGroup.length - 1) / 2); i--) {
      totalCost = totalCost + peopleGroup[i];
    }
    totalCost = totalCost + (((peopleGroup.length / 2) - 1) * peopleGroup[0]);
  }
  document.getElementById('minimunCost').innerHTML = '<h3> minimum cost is' + totalCost + '</h3>';

}

function calculateCost() {
  var peopleList = document.getElementById('input').value;
  return peopleList.split(",").map(Number);
}