  var data = [
    [1, 2, 3],
    ['alma', 'banán', 'körte'],
    { segítő: 'Janos', kor: 31 },
    'NEVED'
  ];
  
  function checkName() {
    var name = document.getElementById('name').value;
    var result = document.getElementById('result1');
  
    var exists = false;
  
    for (var i = 0; i < database.length; i++) {
      if (isEqual(database[i], name)) {
        exists = true;
        break;
      }
    }
  
    if (exists) {
      result1.innerHTML = 'Már regisztrálva vagy.';
    } else {
      result1.innerHTML = 'Nem létezik ilyen felhasználó.';
    }
  }
  
  function isEqual(value, name) {
    if (Array.isArray(value)) {
      return value.includes(name);
    } else {
      return value === name;
    }
  };
