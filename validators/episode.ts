export const episodeNumberValidator = {
  validator: function (this: any, value: number) {
    return !!value;
  },
  message:'episode number is expected',
};

export const episodeLinkValidator = {
  validator: function (this: any, value: string) {
    return !!value
  },
  message: "episodeLink is required and type must be string "
}
export const episodeDateValidator = {
  validator: function (this: any, value: string) {
    return !!value
  },
  message: "episodeDate is required and type must string "
}

export const availableAmountToWinValidator = {
  validator: function (this: any, value: number) {
    return !!value
  },
  message: "availableAmountToWin is required"
}

export const amountWonValidator = {
  validator: function (this: any, value: number) {
    return !!value && this.availableAmountToWin >= value
  },
  message: "amountWon is required"
}

export const participantIDValidator = {
  validator: function (this: any, value: string) {
    return !!value
  },
  message: "participant_id is required"
}
export const createdByValidator = {
  validator: function (this: any, value: string) {
    return !!value
  },
  message: "createdBy is required and"
}