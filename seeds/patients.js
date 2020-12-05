
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'Alex', last_name: 'Procter', nickname: 'Ale-ale-jandro', img: 'https://media-exp1.licdn.com/dms/image/C5603AQGC70Y4PY3fqw/profile-displayphoto-shrink_200_200/0/1602197968544?e=1612396800&v=beta&t=QpIV5y34zyFrA44Himis2IRjhAl0ih-qIXJZ8xMgUkM', birthdate: '29 Oct 1985', gender: 'Male', phone: '555-1234567', address: 'Unit 237' },
        {id: 2, first_name: 'Karl', last_name: 'Donaldson', nickname: 'Big Red Kar', img: 'https://uploads-ssl.webflow.com/5b302c566bddb45df431c633/5d1aacbbed1122386919cc9c_karl.jpg', birthdate: '1 Jan 1922', gender: 'Male', phone: '555-1234567', address: 'Unit 999' },
        {id: 3, first_name: 'Harry', last_name: 'Hawke', nickname: 'Hawkeye', img: 'https://uploads-ssl.webflow.com/5b302c566bddb45df431c633/5b4529cf58d49a4c015dd93b_harry.jpg', birthdate: '1 Jan 1922', gender: 'Male', phone: '555-1234567', address: 'Unit 111' },
        {id: 4, first_name: 'Al', last_name: 'Duncan', nickname: 'Theatric-Al', img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEW8g3rvAwpZg/profile-displayphoto-shrink_200_200/0/1517477031495?e=1612396800&v=beta&t=hFqkJnurhqI3ZQCSHERaVRdzbXZIcDU99f_pg63Rva0', birthdate: '1 Jan 1922', gender: 'Male', phone: '555-1234567', address: 'Unit 333' },
      ]);
    });
};


