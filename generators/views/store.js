module.exports = name => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return {
    'CLASS_NAME_HOLDER': capitalizedName,
    'EXPORT_NAME_HOLDER': capitalizedName,
    'NAME_HOLDER': name
  }
}