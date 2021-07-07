const students = [
    {name: "Alice", age: 20,},
    {name: "Bob", age: 21,},
    {name: "Jane", age: 20,},
  ];
  
  const renderTable = () => {
    students.forEach(({ name, age }) => {
      const table = document
        .getElementById("data")
        .getElementsByTagName("tbody")[0];

      table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
    });
  };
  

  const generate = (students) => {
    const total = students.reduce((acc, student) => acc + student.age, 0);
    return total / students.length;
  };
  
  // callback function when button clicked
  const handleClick = () => {
    const avg = generate(students);
    document.getElementById("avg").innerHTML = avg;
  };
  
  // add onclick listener
  document.getElementById("generate").addEventListener("click", handleClick);
  
  //run render table
  renderTable();