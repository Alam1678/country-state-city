// http 
// .getAll('http://localhost:3000/posts')
// .then(data => console.log('All', data))
// .catch(err => console.log(err));

//console.log('connected');

// async function getAllCountry(){
//    const result =  await fetch('http://localhost:3000/todos');
//    const data = await result.json();
//     // .then(res =>{
//     //     return res.json()
//     // })
//     // .then(data => data)
//     // .catch(err => console.log(err))
//    //console.log(data);
//    return data;
// }
// console.log(getAllCountry());

async function getAllState(){
    const result =  await fetch('https://alam1678.github.io/country-state-city/states');
    const data = await result.json();
     // .then(res =>{
     //     return res.json()
     // })
     // .then(data => data)
     // .catch(err => console.log(err))
    //console.log(data);
    return data;
 }
 console.log(getAllState());


// async function getAllStates(){
//     const result =  await fetch('http://localhost:3000/country');
//     const data = await result.json();
//      // .then(res =>{
//      //     return res.json()
//      // })
//      // .then(data => data)
//      // .catch(err => console.log(err))
//     //console.log(data);
//     return data;
//  }
//  const results = getAllStates();
//  const p = Promise.resolve(results);
//  const pElm = document.querySelector("#para");
//  const selectElm = document.querySelector("#country");
//             // const xx = userConvertFrom + "_" + convertTo;
            
//           p.then(value => {
//             console.log(value);
//            // pElm.innerHTML = value[1].name+' '+value[1].iso2;
//             for(let i = 0; i<value.length; i++)
//             {
//                 selectElm.options[selectElm.options.length] = new Option(value[i].name, value[i].iso2);
//             }
            
//             // let final_data = outPut / value[xx];
//             // userInputElm.value = final_data.toFixed(4);
//             // resultOutPutElm.value = outPut;
//             // txtOutPut.innerHTML = textTo + ' ' + outPut + ' = ' + textFrom + ' ' + final_data.toFixed(4);
//           }).catch(err => {
//             console.log(err);
//           });
//           selectElm.addEventListener('change', (evt) => {
//             alert(selectElm.value);
//           })
