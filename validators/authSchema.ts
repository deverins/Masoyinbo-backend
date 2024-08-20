import Joi from "joi";

/** The validator for user signup payload */
export const signupPayloadValidator: Joi.ObjectSchema = Joi.object({
    name: Joi.string().min(3).max(40).required(),
    username: Joi.string().alphanum().min(3).max(40).required(),
    email: Joi.string().email().required(),
    mobileNumber: Joi.string().required(),
    placeOfResidence: Joi.string().required(),
    socialMediaPlatform: Joi.string().required(),
    socialMediaHandle: Joi.string().required(),
    howDidYouFindOut: Joi.array().items(Joi.string()).required(),
    isEmailVerified: Joi.boolean().optional(),
    otp: Joi.number().optional(),
    userType: Joi.string().valid("User", "Admin").default("User").optional(),
});

/** The payload object for verify OTP */
export const verifyOTPPayLoad: Joi.ObjectSchema = Joi.object({
    otp: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
});

/** The payload object for resend OTP */
export const resendOTPPayLoad: Joi.ObjectSchema = Joi.object({
    otp: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
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
