const users = require('../data.json')

// const addWorker = (req,res)=>{
//   const {name, id} = req.body;

//   let result = workers.find((w) => {
//       return w.id == id
//   })
//   if (!name || !id) {
//       return res.status(200).json({error: 'enter id and name'})
//   } else if (name.length < 6 || !name.includes(' ')) {
//       return res.status(200).json({error: 'name must includes space and length bigger then 5'})
//   } else if (result) {
//       return res.status(200).json({error: 'worker exist in db'})
//   }
//   const obj = {
//       id: id,
//       name: name,
//       isActive: false
//   }
//   workers.push(obj);

//   return res.send(obj);
// }




const getWorkers = (req,res)=>{
  
  const a = req.body;
  
  console.log('a')
  return res.send(a);
}

const getWorkers2 = (req,res)=>{
  console.log('aaa')
  return res.send(req);
}

module.exports = {
  // func1,
  // func2
  getWorkers,
  getWorkers2
}
