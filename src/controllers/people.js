const index = async({People}, req, res) => {
  const people = await People.findAll()
  res.render('people/index', { people })
}

const createForm = (req, res) => {
  res.render('people/create')
}
const createProcess = async({ People }, req, res) => {
  await People.create(req.body)
  res.redirect('/people')
}

module.exports = {
  index, createForm, createProcess
}