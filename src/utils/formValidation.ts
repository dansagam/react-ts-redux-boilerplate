/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { differenceInYears } from "date-fns";
import * as Yup from "yup";

type TypePasswordOptions = {
  hasAnUppercase: (value: string) => string | null;
  hasLowercase: (value: string) => string | null;
  hasNumber: (value: string) => string | null;
  hasEightOrMoreCharacters: (value: string) => string | null;
  hasSpecialCharacter: (value: string) => boolean | string | null;
};

type TypePassword = {
  validate: TypePasswordOptions;
  required?: string;
};
type TypeEmail = {
  validate: (e: string) => string | null;
  required?: string;
};

type RuleRequired = {
  required: string | boolean;
  password: TypePassword;
};
type TypeLengthValue = {
  value: number;
  message: string;
  required?: string;
};

type TypeNameReturn = {
  maxLength: TypeLengthValue;
  minLength: TypeLengthValue;
  required?: string;
};

export interface IRuleReturn {
  firstName: TypeNameReturn;
  lastName: TypeNameReturn;
  email: TypeEmail;
  password: TypePassword;
  organizationName: TypeLengthValue;
  organizationId: TypeLengthValue;
  departmentId: TypeLengthValue;
  jobGradeId: TypeLengthValue;
  employmentCategory: TypeLengthValue;
  divisionId: TypeLengthValue;
  workEmail: TypeEmail;
  jobTitle: TypeLengthValue;
  employeeStatus: TypeLengthValue;
  // lineManagerId?: TypeLengthValue;
  middleName: TypeLengthValue;
  // contactAddress?: TypeLengthValue;
  // permanentAddress?: TypeLengthValue;
}

type ArrValue =
  | "firstName"
  | "lastName"
  | "email"
  | "password"
  | "organizationName"
  | "organizationId"
  | "departmentId"
  | "jobGradeId"
  | "employmentCategory"
  | "divisionId"
  | "workEmail"
  | "jobTitle"
  | "employeeStatus"
  | "middleName";
// const arrValue = ["firstName", "lastName", "email", "password"];

export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const name = {
  maxLength: {
    value: 20,
    message: "The maximum length is 20",
  },
  minLength: {
    value: 2,
    message: "The minimum length is 2",
  },
};

// eslint-disable-next-line no-useless-escape
export const phoneNumbrPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const email = {
  validate: (inputEmail?: string) => {
    if (!inputEmail) return null;

    if (!inputEmail.match(emailPattern)) return "Enter a valid email address";

    const blacklistedDomains = ["gool"];
    const domain = inputEmail.substring(inputEmail.indexOf("@") + 1, inputEmail.lastIndexOf("."));
    const isInvalidBusinessEmail = blacklistedDomains.includes(domain);

    return isInvalidBusinessEmail ? "Enter a valid business email address" : null;
  },
};

export const onNumberValidator = (
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: (d: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const re = /^[0-9\b]+$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    onChange(e);
  }
};

// export const numberValidator = (evt: React.ChangeEvent<HTMLInputElement>) => {
//   const ASCIICode = evt.which ? evt.which : evt.keyCode;
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
//   return true;
// };

const organizationName = {
  minLength: {
    value: 2,
    message: "Organization name is too short",
  },
};

const jobTitle = {
  minLength: {
    value: 2,
    message: "Job Title name is too short",
  },
};

export const password: TypePassword = {
  validate: {
    hasAnUppercase: (value: string) =>
      value.match(/[A-Z]/) ? null : "Password should contain an uppercase character",
    hasLowercase: (value: string) =>
      value.match(/[a-z]/) ? null : "Password should contain a lowercase character",
    hasNumber: (value: string) =>
      value.match(/[0-9]/) ? null : "Password should contain at least one number",
    hasEightOrMoreCharacters: (value: string) =>
      value.length >= 8 ? null : "Password should be of eight or more characters",
    hasSpecialCharacter: (value: string) => /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validator: { [x: string]: any } = {
  firstName: name,
  lastName: name,
  email,
  organizationName,
  organizationId: organizationName,
  departmentId: organizationName,
  jobGradeId: organizationName,
  employmentCategory: organizationName,
  divisionId: organizationName,
  password,
  workEmail: email,
  jobTitle,
  employeeStatus: organizationName,
  // lineManagerId: organizationName,
  middleName: organizationName,
  // contactAddress: organizationName,
  // permanentAddress: organizationName,
  dateOfBirth: Yup.string()
    .required("Date of birth is Required")
    .test("dateOfBirth", "Please choose a valid date of birth", (value) => {
      return differenceInYears(new Date(), value ? new Date(value) : new Date()) >= 19;
    }),
};

// eslint-disable-next-line no-unused-vars
const errMsgMap: Record<string, string> = {
  firstName: "First name is required",
  lastName: "Last name is required",
  email: "Email is required",
  organizationName: "Organization name is required",
  organizationId: "Organization Id is required",
  departmentId: "Department Id is required",
  password: "Password is required",
  workEmail: "Work email is required",
  jobTitle: "Job title is required",
  divisionId: "division id is required",
  employmentCategory: "Employment Category is requird",
  employeeStatus: "Employee Status is required",
  // lineManagerId: "Line Manager is required",
  middleName: "Middle Name is required",
  // contactAddress: "Contact address is required",
  // permanentAddress: "Permanent address is required",
  dateOfBirth: "Date of birth is required",
};

// const fg = Object.keys(errMsgMap);

const requiredFields = (fields: ArrValue[]): Partial<IRuleReturn> => {
  const rules: Partial<IRuleReturn> = {};
  // const rules: Record<string, Partial<RuleRequired>> = {};

  fields.forEach((field) => {
    if (field) {
      rules[field] = validator[field];
      if (rules?.[field]?.required) {
        // rules[field].required = errMsgMap[field];
      }
    }
  });

  return rules;
};

const optionalFields = (fields: string[]) => {
  const rules: Record<string, Partial<RuleRequired>> = {};

  fields.forEach((field) => {
    rules[field] = validator[field];
    rules[field].required = false;
  });
  return rules;
};

export { requiredFields, optionalFields };
