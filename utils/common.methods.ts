import { UserModel } from "../models/user";


/**
 * Exclude specified fields from the original data object.
 * @param {Record<string, any>} data Original data object
 * @param {Array<string>} fields Array of fields to be omitted from the original data
 * @returns {Record<string, any>} Modified data object with specified fields omitted
 */
export const excludeFields = (data: Record<string, any>, fields: string[]): Record<string, any> => {
  const newData = { ...data };
  fields.forEach(field => {
    delete newData[field];
  });
  return newData;
};


/** findUser function is to handle common queries */
export const findUser = async (query: object) => {
  return await UserModel.findOne(query);
};