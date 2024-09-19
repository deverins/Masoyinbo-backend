import Joi from "joi";

/** The validator for user signup payload */
export const signupPayloadValidator: Joi.ObjectSchema = Joi.object({
    fullName: Joi.string().min(3).max(40).required(),
    username: Joi.string().alphanum().min(3).max(40).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,}$')).required(),
});
/** The validator payload for user authenticate */
export const authenticateUserPayloadValidator: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,}$')).required(),
});

/** The validator for the participants payload */
export const participantsPayloadValidator: Joi.ObjectSchema = Joi.object({
    fullName: Joi.string().min(3).max(40).required(),
    email: Joi.string().email().required(),
    mobileNumber: Joi.string().required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    state: Joi.string().required(),
    placeOfResidence: Joi.string().required(),
    platformLink: Joi.string().required(),
    socialMediaHandle: Joi.string().required(),
    source: Joi.array().items(Joi.string()).required(),
    comment: Joi.string().allow('').optional(),
    status: Joi.string().valid('Pending', 'Scheduled', 'Completed').default('Pending'),
});

/** The validator for the eventSchema payload */
const eventSchema = Joi.object({
    question: Joi.string().when('type', {
        is: Joi.string().valid('QUESTION_NUMBER', 'QUESTION'),
        then: Joi.required(),
        otherwise: Joi.forbidden()
    }),
    correctAnswer: Joi.string().when('type', {
        is: Joi.string().valid('QUESTION_NUMBER', 'QUESTION'),
        then: Joi.required(),
        otherwise: Joi.forbidden()
    }),
    response: Joi.string().when('type', {
        is: Joi.string().valid('CODE_MIX'),
        then: Joi.string().min(1).required(),
        otherwise: Joi.string().allow('')
    }),
    isCorrect: Joi.boolean().when('type', {
        is: Joi.string().valid('QUESTION_NUMBER', 'QUESTION'),
        otherwise: Joi.forbidden()
    }),
    type: Joi.string().valid('QUESTION_NUMBER', 'QUESTION', 'CODE_MIX').required(),
    amount: Joi.number().required(),
    balance: Joi.number().required(),
});

/** The validator for the episodeEvent payload */
export const episodeEventPayloadValidator = Joi.object({
    episodeId: Joi.string().required(),
    events: Joi.array().items(eventSchema).required()
});

/**
 * Schema validation handler
 * @param {Joi.ObjectSchema} validatorSchema - The Joi validation schema
 * @param {Record<string, any>} payload - The data to validate
 * @returns {Promise<{ valid: boolean, error: string[] | null }>} Result of validation
 */
export const schemaValidatorHandler = async (
    validatorSchema: Joi.ObjectSchema,
    payload: Record<string, any>
): Promise<{ valid: boolean; error: string[] | null }> => {
    try {
        await validatorSchema.validateAsync(payload, { abortEarly: false });
        return { valid: true, error: null };
    } catch (error) {
        if (error instanceof Joi.ValidationError) {
            const details = error.details;
            const messages = details.map((detail) => detail.message);
            return { valid: false, error: messages };
        }
        return { valid: false, error: ["Validation error occurred"] };
    }
};