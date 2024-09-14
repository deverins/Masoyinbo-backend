export const questionValidator = {
  validator: function (this: any, value: string) {
    if (this.type === "QUESTION_NUMBER" || this.type === "QUESTION") {
      return typeof value === "string" && !!value;
    }
    return true;
  },
  message: 'Question is required when type is "QUESTION_NUMBER" or "QUESTION"',
};

export const correctAnswerValidator = {
  validator: function (this: any, value: string) {
    if (this.type === "QUESTION_NUMBER" || this.type === "QUESTION") {
      return typeof value === "string" && !!value;
    }
    return true;
  },
  message:
    'Correct answer is required when type is "QUESTION_NUMBER" or "QUESTION"',
};

export const responseValidator = {
  validator: function (value: any) {
    return value ? typeof value == "string" : true;
  },
  message: "Response could only be a string or null",
};

export const isCorrectValidator = {
  validator: function (this: any, value: boolean) {
    if (this.type === "QUESTION_NUMBER" || this.type === "QUESTION") {
      return typeof value === "boolean";
    }
    return true;
  },
  message:
    'isCorrect must be a boolean type when type is "QUESTION_NUMBER" or "QUESTION"',
};

export const typeValidator = {
  validator: function (value: boolean) {
    return (
      typeof value === "string" &&
      ["QUESTION_NUMBER", "QUESTION", "CODE_MIX"].includes(value)
    );
  },
  message: 'type must be one of ["QUESTION_NUMBER" , "QUESTION" , "CODE_MIX"]',
};

export const amountValidator = {
  validator: function (value: number) {
    return typeof value === "number";
  },
  message: "Amount must be of type number",
};

export const balanceValidator = {
  validator: function (value: number) {
    return typeof value === "number";
  },
  message: "Balance must be of type number",
};