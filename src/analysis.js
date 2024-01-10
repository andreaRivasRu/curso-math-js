console.log(salaries);

// Analisis personal de salarios para alguien en especifico

// Metodo .find() para encontrar la primera coincidencia

function findPerson(personInSearch) {
    return salaries.find(person => person.name == personInSearch);
}

function medianPerPerson(personName) {
    const jobs = findPerson(personName).jobs;

    const salaries = jobs.map(function (element) {
        return element.salary;
    });
    
    const medianSalaries = PlatziMath.calcMediana(salaries);

    console.log(salaries);
    console.log(medianSalaries);
    return medianSalaries;
}