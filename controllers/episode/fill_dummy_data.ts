// import { EpisodeModel } from "../../models/episode";
// import { EpisodeEventsModel } from "../../models/episodeEvents";
// import { Participants } from "../../models/participants";
// import { data } from "./dummy_data";

// const alphabets="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const numbers = "0123456789"
// function generateRandomString(lent:number){
//   let str = ""
//   const len = alphabets.length;
//   for(let i=0; i < lent; i++){
//     const rand = Math.floor(Math.random() * len + 1)
//     str += alphabets[rand] 
//   }
//   return str;
// }

// function generateRandomNumber(lent:number){
//   let str = ""
//   const len = numbers.length;
//   for(let i=0; i < lent; i++){
//     const rand = Math.floor(Math.random() * len + 1)
//     str += numbers[rand] 
//   }
//   return str;
// }

// export const FillDummyData= async()=>{
//   for ( const _d of data) {
//     let prtId = await Participants.exists({fullName:_d.participantName})
//    if(prtId) continue;

//    const  participant = new Participants(
//       { 
//         fullName: _d.participantName,
//         socialMediaHandle: generateRandomString(6), 
//         platformLink:generateRandomString(10)+'.com',
//         placeOfResidence: generateRandomString(8),
//         state: generateRandomString(5),
//         gender: ['Male','Female'][Math.floor(Math.random()*2)],
//         mobileNumber: '080'+generateRandomNumber(8),
//         email: generateRandomString(9)+"@gmail.com"
//       }
//     )

//     await participant.save();

//     // Check if the episode already exists
//     const exists = await EpisodeModel.exists({episodeNumber: _d.episode})
//     if(exists) continue;

    
//     const episode = await  EpisodeModel.create({
//       episodeDate: _d.date,
//       participant_id: participant._id,
//       episodeLink: _d.link,
//       episodeNumber:_d.episode,
//       amountWon:_d.amountWon,
//       availableAmountToWin:_d.amountAvailabeTowin,
//       createdBy:'66f6eeb57324a9bcc31cfeda'
//     })

//     for(let i = 0; i< _d.events.length; i++) {
//       const event = _d.events[i]
//       try {
//         await EpisodeEventsModel.create({...event, correctAnswer:event.expectedAnswer, episodeId: episode._id })
//       } catch (error) {
//         console.log(error);
//         break
        
//       }
//     }
//   }
// }