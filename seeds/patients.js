
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'Alex', last_name: 'Procter', nickname: 'Ale-ale-jandro', img: 'https://media-exp1.licdn.com/dms/image/C5603AQGC70Y4PY3fqw/profile-displayphoto-shrink_200_200/0/1602197968544?e=1612396800&v=beta&t=QpIV5y34zyFrA44Himis2IRjhAl0ih-qIXJZ8xMgUkM', birthdate: '29 Oct 1985', gender: 'male', phone: '555-1234567', address: '237' },
        {id: 2, first_name: 'Bob', last_name: 'Procter', nickname: 'Bobby', img: 'https://media-exp1.licdn.com/dms/image/C5603AQGC70Y4PY3fqw/profile-displayphoto-shrink_200_200/0/1602197968544?e=1612396800&v=beta&t=QpIV5y34zyFrA44Himis2IRjhAl0ih-qIXJZ8xMgUkM', birthdate: '29 Oct 1985', gender: 'male', phone: '555-3334567', address: '137' },
        {id: 3, first_name: 'Mike', last_name: 'Procter', nickname: 'Big M', img: 'https://media-exp1.licdn.com/dms/image/C5603AQGC70Y4PY3fqw/profile-displayphoto-shrink_200_200/0/1602197968544?e=1612396800&v=beta&t=QpIV5y34zyFrA44Himis2IRjhAl0ih-qIXJZ8xMgUkM', birthdate: '29 Oct 1985', gender: 'male', phone: '555-4534567', address: '837' }
      ]);
    });
};


