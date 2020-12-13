 const people = [{
         name: 'Wes',
         year: 1988
     },
     {
         name: 'Kait',
         year: 1986
     },
     {
         name: 'Irv',
         year: 1970
     },
     {
         name: 'Lux',
         year: 2015
     }
 ];

 var comments = [{
         text: 'Love this!',
         id: 523423
     },
     {
         text: 'Super good',
         id: 823423
     },
     {
         text: 'You are the best',
         id: 2039842
     },
     {
         text: 'Ramen is my fav food ever',
         id: 123523
     },
     {
         text: 'Nice Nice Nice!',
         id: 542328
     }
 ];

 // Array.prototype.some() // is at least one person 19 or older?
 const yearsOld = people.some(person => new Date().getFullYear() - person.year >= 19);
 console.log(yearsOld);

 // Array.prototype.every() // is everyone 19 or older?
 const allYearsOld = people.every(person => new Date().getFullYear() - person.year >= 19);
 console.log(allYearsOld);

 // Array.prototype.find()
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 823423
 const comment = comments.find(person => person.id === 823423);
 console.log(comment);

 // Array.prototype.findIndex()
 // Find the comment with this ID
 // delete the comment with the ID of 823423
 const commentIndex = comments.findIndex(person => person.id === 823423);
 console.log(commentIndex);

 // delete method 1 - will change content of the origin array
 //comments.splice(commentIndex, 1);
 //console.log(comments);
 // delete method 2 - will create a new array, and not change content of origin array
 // ↓ create a new array and use ES6 syntax
 const newComments = [
     ...comments.slice(0, commentIndex),
     ...comments.slice(commentIndex + 1)
 ];
 console.log(newComments);
 console.log(comments);