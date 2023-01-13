// Salary analysis by person

// Find a specific person and obtain a salary-array to work with


function findPerson (personToBrowse){
    return salarios.find (person => person.name == personToBrowse);
}

function extractSalaries (trabajos){
    return trabajos.map ( personJobs => personJobs.salario )
}

// Calculate an average and median

function promedioByPerson (personName) {
    const trabajos = findPerson(personName).trabajos;
    console.log('Los trabajos que ha tenido esa persona son:');
    console.log(trabajos);
    
    const salaryByJobs = extractSalaries(trabajos);
    console.log('Los salarios que ha tenido esa persona son:');
    console.log(salaryByJobs);
    
    const mediaSalary = calculoPromedio(salaryByJobs);
    console.log('El promedio salarial de esa persona, hasta ahora, es de:');
    console.log(mediaSalary);
    
}

function medianaByPerson (personName){
    const trabajos = findPerson(personName).trabajos;
    console.log('Los trabajos que ha tenido esa persona son:');
    console.log(trabajos);
    
    const salaryByJobs = extractSalaries(trabajos);
    console.log('Los salarios que ha tenido esa persona son:');
    console.log(salaryByJobs);
    
    const mediaSalary = FuncionesMatematicas.calculoMediana(salaryByJobs);
    console.log('La mediana salarial de esa persona, hasta ahora, es de:');
    console.log(mediaSalary);
    
}

// Salary projection to suggest wich salary the person will earn based on its sallary trending

function salaryProjection (personName) {

    // findPerson() and extractSallaries() were executed to get a sallary Array / console.log's as a checkpoints
    const trabajos = findPerson(personName).trabajos;
    console.log('Los trabajos que ha tenido esa persona son:');
    console.log(trabajos);
    
    const salaryByJobs = extractSalaries(trabajos);
    console.log('Los salarios que ha tenido esa persona son:');
    console.log(salaryByJobs);


    // SalaryGrowth will analize Salaries-growthDeltas

    function salaryGrowth (salaryByJobs) { // Create a new array to keep salary growth in % by .map()
        const allSalaries = salaryByJobs;
        
        const growthRecord = allSalaries.map((salario, jobNumber) => {

            const netGrowth = salario - allSalaries[jobNumber-1];
            let percentGrowth;

            percentGrowth = Math.round((netGrowth * 100) / allSalaries[jobNumber-1]);

            return percentGrowth;
        });
        
        growthRecord[0] = 0; // First array element setted as 0 because it is the first sallary... so there is no parameter to compare growth

        return salaryGrowthPercent = growthRecord; 
    }
    
    console.log('la variación del salario en porcentaje es:');
    const growht = salaryGrowth(salaryByJobs);
    console.log(growht);

    const mediaGrowth = calculoPromedio(growht); // Percentage of growth averge calculated (from calculoPromedio() at promedio.js) to improve the trend's accuray
    console.log('La mediana de crecimiento salarial de:');
    console.log(mediaGrowth + '%');
    
    const nextSalary = Math.round(salaryByJobs[salaryByJobs.length - 1] * ( 1 + (mediaGrowth/100))); // At the end, a theoretical sallary is proposed.
    console.log('El salario recomendado para tu próximo empleo es:');
    console.log(nextSalary);
}


// Institutional sallary analysis

/* function extractSalaries (trabajos){
    return trabajos.map ( personJobs => personJobs.salario )
} */

let companySalaryRecord = {};

function extractSalaryByCompany (workersRecord) {
    
    
    workersRecord.map(function(jobByPerson){
        
        jobByPerson.trabajos.map(function(companyName){

            if ( !companySalaryRecord[companyName.empresa] ) { companySalaryRecord[companyName.empresa] = {}; }

            if ( !companySalaryRecord[companyName.empresa][companyName.year] ) { companySalaryRecord[companyName.empresa][companyName.year] = []; }

            companySalaryRecord[companyName.empresa][companyName.year].push(companyName.salario);

        });

    })

    // console.log(companySalaryRecord);

}

function calculateMediaSalaryByYear (company, year) {

    extractSalaryByCompany(salarios);

    if (!companySalaryRecord[company]) { console.warn('La empresa no existe en la base de datos');  return;}
    if (!companySalaryRecord[company][year]) { console.warn('La empresa no reportó salarios en ' + year);  return;}
    if (companySalaryRecord[company][year]) {
        
        const mediaSalarial = calculoPromedio(companySalaryRecord[company][year]);
        console.log('La media Salarial de ' + company + ' durante el año ' + year + ' fue de: $ ' + mediaSalarial);

    }

}

function salaryGrowth (salaryByJobs) { // Create a new array to keep salary growth in % by .map()
    const allSalaries = salaryByJobs;
    
    const growthRecord = allSalaries.map((salario, jobNumber) => {

        const netGrowth = salario - allSalaries[jobNumber-1];
        let percentGrowth;

        percentGrowth = Math.round((netGrowth * 100) / allSalaries[jobNumber-1]);

        return percentGrowth;
    });
    
    growthRecord[0] = 0; // First array element setted as 0 because it is the first sallary... so there is no parameter to compare growth

    return salaryGrowthPercent = growthRecord; 
}

function salaryProjectionByCompany (company) {

    extractSalaryByCompany(salarios);

    if (!companySalaryRecord[company]) { console.warn('La empresa no existe en la base de datos');  return;}
    
    if (companySalaryRecord[company]) {
        
        const salaryRecordByCompany = companySalaryRecord[company];
        let salaryRecord = Object.values(salaryRecordByCompany);

        let salaryRecordAvergae = salaryRecord.map ( promedioAnual => {
           return calculoPromedio(promedioAnual);
        } )

        const salaryGrowthPercent = salaryGrowth(salaryRecordAvergae);

        const medianaCrecimiento = FuncionesMatematicas.calculoMediana(salaryGrowthPercent);

        const nextSalary = Math.round(salaryRecordAvergae[salaryRecordAvergae.length - 1] * ( 1 + (medianaCrecimiento/100)));

/*         console.log(salaryRecordByCompany);
        console.log(salaryRecord);
        console.log(salaryRecordAvergae);
        console.log(salaryGrowthPercent);
        console.log(medianaCrecimiento); */
        console.log('El salario esperado para el próximo año es de:');
        console.log(nextSalary);
    }
}





