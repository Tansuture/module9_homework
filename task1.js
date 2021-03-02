const xml= 
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parse = new DOMParser()
const doc = parse.parseFromString(xml,"text/xml")

const listNode = doc.querySelector('list')
const studentList = listNode.querySelectorAll('student')
const firstStud = studentList[0]
const nameNode1 = firstStud.querySelector('name')
const atr1 = nameNode1.getAttribute('lang')
const firstName1 = nameNode1.querySelector('first')
const surnameName1 = nameNode1.querySelector('second')
const ageNode1 = firstStud.querySelector('age')
const profNode1 = firstStud.querySelector('prof')

const secondStud = studentList[1]
const nameNode2 = secondStud.querySelector('name')
const atr2 = nameNode2.getAttribute('lang')
const firstName2 = nameNode2.querySelector('first')
const surnameName2 = nameNode2.querySelector('second')
const ageNode2 = secondStud.querySelector('age')
const profNode2 = secondStud.querySelector('prof')

 const result = {
     list :[
         { name: firstName1.textContent,
          surname :surnameName1.textContent,
          age: ageNode1.textContent,
          prof: profNode1.textContent,
          lang: atr1
         
        },
        { name: firstName2.textContent,
            surname :surnameName2.textContent,
            age: ageNode2.textContent,
            prof: profNode2.textContent,
            lang: atr2
           
          }
     ]
 }
 console.log(result)





