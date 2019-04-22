module.exports = name => {
  name = name.charAt(0).toLowerCase() + name.slice(1)
  return {
    'NAME_HOLDER': name
  }
}