// Első feladat
var data = [
    [1, 2, 3],
    ['alma', 'banán', 'körte'],
    { segítő: 'János', kor: 26 },
    'Gábor', 'János', 'Béla', 'Ricsi'
  ];
  
  function checkName() {
    var name = document.getElementById('name').value;
    var result = document.getElementById('result');
  
    if (data.includes(name)) {
      result.textContent = 'Regisztrált tag vagy.';
      var segítő = ' János '
      result.textContent += ' A Te segítőd: ' + segítő + '( hozzá fordulhatsz segítségért)';
    } else {
      result.textContent = 'Nem vagy regisztrált tag.';
    }
  };
