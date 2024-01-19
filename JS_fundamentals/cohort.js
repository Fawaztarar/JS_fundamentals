const cohort = {
    name: 'Cohort 1',
    id: 1,
    student_names: ['Sally', 'Jake', 'Brian', 'Hamza'],
}

// //Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const printCohortInfo = (cohortObj) => {
    const { id, name, student_names } = cohortObj;
    console.log(`${id} - ${name} - ${student_names.length} students in this cohort`);
}

printCohortInfo(cohort);