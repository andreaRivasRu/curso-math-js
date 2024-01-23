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

// Analisis empresarial

// const companies = {};
// for (person of salaries) {
//     for (job of person.jobs) {
//         if (!companies[job.company]) {
//             companies[job.company] = {};
//         }

//         if (!companies[job.company][job.year]) {
//             companies[job.company][job.year] = [];
//         }

//         companies[job.company][job.year].push(job.salary);
//     }
// }

// console.log(companies);

const companies = salaries.flatMap(person => person.jobs).reduce((object, job) => {
    if(!object[job.company]) {
        object[job.company] = {};
    }

    if(!object[job.company][job.year]) {
        object[job.company][job.year] = [];
    }

    object[job.company][job.year].push(job.salary)

    return object
}, {});

console.log(companies);

function medianPerCompanyYear(name, year) {
    if (!companies[name]) {
        console.warn(`The company doesn't exist`);
    } else if (!companies[name][year]) {
        console.warn(`The company doesn't gave any salary that year`);
    } else {
        return PlatziMath.calcMediana(companies[name][year]);
    }
}

function salaryProjectionPerCompany(name) {
    if (!companies[name]) {
        console.warn(`The company doesn't exist`);
    } else {
        const companyYears = Object.keys(companies[name]);
        const listMedianYears = companyYears.map((year) => {
            return medianPerCompanyYear(name, year);
        });

        let incrementsPorcent = [];

        for (let i = 1; i < listMedianYears.length; i++) {
            const actualYearMedianSalary = listMedianYears[i];
            const lastYearMedianSalary = listMedianYears[i - 1];
            const incrementPorcent = (actualYearMedianSalary - lastYearMedianSalary) / lastYearMedianSalary;
            incrementsPorcent.push(parseFloat(incrementPorcent.toFixed(2)));
        }

        const medianIncrementPorcent = PlatziMath.calcMediana(incrementsPorcent);

        const currentMedianSalary = listMedianYears.at(-1);
        const newMedian = currentMedianSalary * medianIncrementPorcent + currentMedianSalary;
        return Math.round(newMedian);
    }
}