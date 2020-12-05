
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'Caused a ruckus in the knitting class', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 1},
        {id: 2, title: 'At risk of overdosing on protein shakes', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 2},
        {id: 3, title: 'Extremely antsy, avoid for the next few days', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 3},
        {id: 4, title: 'Exhibiting tourettes, scaring all the residents', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 4},
        {id: 5, title: 'Has been caught napping in strange places lately', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 1},
        {id: 6, title: 'Caused a ruckus in the doily-making class', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 2},
        {id: 7, title: 'At risk of overdosing on frooze balls', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 3},
        {id: 8, title: 'Extremely cheerful, avoid for the next few days', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 4},
        {id: 9, title: 'Exhibiting tourettes, scaring all the residents', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 1},
        {id: 10, title: 'Has been caught napping in strange places lately', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.', author_id: 1, patient_id: 2}
      ]);
    });
};