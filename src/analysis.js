// Variables globales


// Analisis personal de salarios para alguien en especifico

// Metodo .find() para encontrar la primera coincidencia

function findPerson(personInSearch) {
    return salaries.find(person => person.name == personInSearch);
}

function medianPerPerson(personName) {
    const jobs = findPerson(personName).jobs;

    // Creamos una lista con los salarios
    const salaries = jobs.map(job => job.salary);
    
    // Calculamos la mediana
    const medianSalaries = PlatziMath.calcMediana(salaries);

    console.log(salaries);
    console.log(medianSalaries);
    return medianSalaries;
}

function salaryProjection(personName) {
    const person = findPerson(personName);

    if (!person) {
        console.log(`Person ${personName} not found`);
    }

    const jobs = person.jobs;

    // Ordenamos los trabajos por año
    jobs.sort((a, b) => a.year - b.year);

    let incrementsPorcent = [];

    for (let i = 1; i < jobs.length; i++) {
        const actualSalary = jobs[i].salary;
        const lastSalary = jobs[i - 1].salary;
        const incrementPorcent = (actualSalary - lastSalary) / lastSalary;
        incrementsPorcent.push(parseFloat(incrementPorcent.toFixed(2)));
    }

    const medianIncrementPorcent = PlatziMath.calcMediana(incrementsPorcent);

    const currentSalary = jobs.at(-1).salary;
    const newSalary = currentSalary * medianIncrementPorcent + currentSalary;
    return Math.round(newSalary);
}