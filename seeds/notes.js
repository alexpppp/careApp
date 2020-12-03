
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'Extreme flatulence reported', content: 'Patient reports extreme bouts of flatulence, recommended less protein shakes.', author_id: 1, patient_id: 1},
        {id: 2, title: 'Extreme dementia reported', content: 'Patient reports ....., recommended less protein shakes.', author_id: 1, patient_id: 2},
        {id: 3, title: 'Extreme loss of balance reported', content: 'Patient reports ....., recommended less protein shakes.', author_id: 1, patient_id: 3},
        {id: 4, title: 'Extreme tourettes reported', content: 'Patient reports ....., recommended less protein shakes.', author_id: 1, patient_id: 1},
        {id: 5, title: 'Extreme aggressiveness reported', content: 'Patient reports ....., recommended less protein shakes.', author_id: 1, patient_id: 2}
      ]);
    });
};