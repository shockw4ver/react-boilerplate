module.exports = name => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return {
    'NAME_HOLDER': capitalizedName,
    'COMPONENT_NAME_HOLDER': capitalizedName
  }
}