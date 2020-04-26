const index = async({People}, req, res) => {
  const people = await People.findAll()
  res.send(people)
}

module.exports = {
  index
}