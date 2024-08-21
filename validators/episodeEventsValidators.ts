export const questionValidator = {
  validator: function (value: any) {
    return Array.isArray(value) && value.every((item) => typeof item === 'string' || typeof item === 'number');
  },
  message: 'Each question must be a string or number',
};

export const answerValidator = {
  validator: function (value: any) {
    return typeof value === 'string' || typeof value === 'number';
  },
  message: 'Answer must be a string or number',
};

export const responseValidator = {
  validator: function (value: any) {
    return typeof value === 'string' || typeof value === 'number' || value === 'codemix';
  },
  message: 'Response must be a string, number, or "codemix"',
};

export const passValidator = {
  validator: function (value: boolean) {
    return typeof value === 'boolean';
  },
  message: 'isCorrect must be a boolean value',
};

export const codeMixValidator = {
  validator: function (value: boolean) {
    return typeof value === 'boolean';
  },
  message: 'CodeMix must be a boolean value',
};

export const amountValidator = {
  validator: function (value: number) {
    return value >= 0 && value <= 1000000;
  },
  message: 'Amount must be between 0 and 1,000,000',
};

export const balanceValidator = {
  validator: function (value: number) {
    return value >= 0 && value <= 1000000;
  },
  message: 'Balance must be between 0 and 1,000,000',
};
