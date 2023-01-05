// Analaisis Personal para Juanita

function findPerson (personToBrowse){
    return salarios.find (person => person.name == personToBrowse);
}

function extractSalaries (trabajos){
    return trabajos.map ( personJobs => personJobs.salario )
}


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

function salaryProjection (personName) {
    const trabajos = findPerson(personName).trabajos;
    console.log('Los trabajos que ha tenido esa persona son:');
    console.log(trabajos);
    
    const salaryByJobs = extractSalaries(trabajos);
    console.log('Los salarios que ha tenido esa persona son:');
    console.log(salaryByJobs);

    function salaryGrowth (salaryByJobs) {
        const allSalaries = salaryByJobs;
        let salaryGrowthPercent = [];
        
        const growthRecord = allSalaries.map((salario, jobNumber) => {

            const netGrowth = salario - allSalaries[jobNumber-1];
            let percentGrowth;

            percentGrowth = Math.round((netGrowth * 100) / allSalaries[jobNumber-1]);

            return percentGrowth;
        });
        
        growthRecord[0] = 0;

        return salaryGrowthPercent = growthRecord; 
    }
    
    console.log('la variación del salario en porcentaje es:');
    const growht = salaryGrowth(salaryByJobs);
    console.log(growht);

    const mediaGrowth = calculoPromedio(growht);
    console.log('La mediana de crecimiento salarial de:');
    console.log(mediaGrowth + '%');
    
    const nextSalary = Math.round(salaryByJobs[salaryByJobs.length - 1] * ( 1 + (mediaGrowth/100)));
    console.log('El salario recomendado para tu próximo empleo es:');
    console.log(nextSalary);

    
}