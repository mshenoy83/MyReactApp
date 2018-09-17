import { addValidationRule } from "formsy-react";

addValidationRule("IsOlderThan18", function(values, value) {
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return true;
  var today = new Date();
  var birthDate = new Date(value);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 18;
});

addValidationRule("IsValidPhoneNumber", function(values, value) {
  var phoneExpression = /^[-\s+(]*(6[-\s]*1|0)?[-\s)]*([-\s(]*4[-\s)]*([\d][-\s]*){8})$/;
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return true;
  return value.match(phoneExpression);
});

addValidationRule("IsRequired", function(values, value) {
  var isvalueEmpty =
    !value || value === undefined || value === "" || value.length === 0;
  if (isvalueEmpty) return false;
  return true;
});
