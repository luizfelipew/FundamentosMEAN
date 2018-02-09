const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')


mongoose.Error.messages.general.required = "O atributo '{PATH}' eh obrigatorio."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não á valido oara o atributo '{PATH}'."
