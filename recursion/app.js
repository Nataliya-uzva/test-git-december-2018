д

const family = [];
/**
"Vasya Pupkin"
1: "Petya Pupkin"
2: "Galya Ivanova"
3: "Georgiy Pupkin"
4: "Barbara Streizen"
5: "Syndy Krouford"
6: "Masha Sidorova"
7: "Gosha Sidorov"
8: "Avram Pupkin"

*/

const pupkinsTree = {
  name: 'Vasya Pupkin',
  age: 120,
  children: [
      {
          name: 'Petya Pupkin',
          age: 100,
          children: [
              {
                  name: 'Galya Ivanova',
                  age: 75,
                  children: []
              },
              {
                  name: 'Georgiy Pupkin',
                  age: 75,
                  children: [
                      {
                          name: 'Barbara Streizen',
                          age: 50
                      },
                      {
                          name: 'Syndy Krouford',
                          age: 50
                      }
                  ]
              }
          ]
      },
      {
          name: 'Masha Sidorova',
          age: 95,
          children: [
              {
                  name: 'Gosha Sidorov',
                  age: 55
              }
          ]
      },
      {
          name: 'Avram Pupkin',
          age: 80
      }
  ]
};

function getAllFamily(familyTree) {
    family.push(familyTree.name);

    if (!familyTree.children) {
        return;
    }

    familyTree.children.forEach((child) => getAllFamily((child)));
}

getAllFamily(pupkinsTree);

console.log(family);
