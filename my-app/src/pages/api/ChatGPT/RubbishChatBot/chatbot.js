import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const {input} = req.body;
    console.log(input)

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful chatbot assisting the user in answering his questions based on the data / reports given to you by the user. You will answer the questions as concisely as possible."
                },
                {
                    role: "user",
                    content: "Hi can you help me with answering my questions concisely regarding my data for this website. I want you to be a chatbot that will help users answer questions regarding the data on these reports"
                },
                {
                    role: "assistant",
                    content: "Of course I can help answer any questions you may have regarding your reports. What questions do you have?"
                },
                {
                    role: "user",
                    content: `Here is the data ${JSON.stringify(data)}`
                }, 
                {
                    role: "assistant", 
                    content: "Yes I see the data, what questions do you have regarding the data?"
                }, 
                {
                    role: "user",
                    content: `${input}`  
                }
            ],
            max_tokens: 500,
            top_p: 0.1,
            n: 1,
        })

        return res.status(200).json({ message: completion.data.choices[0].message });

    } catch (error) {
        console.error("Error generating resume scan:", error)
        return res.status(500).json({ message: "An error occurred while generating the resume scan." })
    }
}


let data = [
  {
    "creationTimeStamp": 1690765332.267469,
    "distance": 3.568898410701667,
    "endLat": 47.09970451952614,
    "endLong": -121.39710869264896,
    "endStreet": "(47.0997, -121.3971)",
    "id": "5YK589Pfp8fk4Gk2I0hp",
    "isCurrentlyInRubbishRun": false,
    "isSponsored": false,
    "isValidated": false,
    "lastUpdatedServerTimeStamp": {
        "_seconds": 1690824168,
        "_nanoseconds": 563000000
    },
    "lastUpdatedUserTimeStamp": 1690765348.548876,
    "litterNotPickedUpStats": {
        "breakdown": {}
    },
    "litterPickedUpStats": {
        "breakdown": {
            "HErwx15NQmpAkq5yIGSX": 1
        }
    },
    "modelVersion": 205,
    "numberOfItemsNotPickedUp": 0,
    "numberOfItemsPickedUp": 1,
    "numberOfItemsTagged": 1,
    "numberOfPictures": 1,
    "numberOfPicturesNotPickedUp": 0,
    "numberOfPicturesPickedUp": 1,
    "photoStoryIDs": [
        "fkWJKje4z5Mvvxq5ZoyV"
    ],
    "privacyLevel": "privacyTeam",
    "rubbishRunMode": "completed",
    "rubbishRunStoryModelID": "5YK589Pfp8fk4Gk2I0hp",
    "serverTimeStamp": {
        "_seconds": 1690823940,
        "_nanoseconds": 956000000
    },
    "shouldRecalculateRubbishRunStats": false,
    "startLat": 47.09967540655219,
    "startLong": -121.3971284759798,
    "startStreet": "(47.0997, -121.3971)",
    "stepCount": 0,
    "teamDisplayName": "No Trace Trails",
    "teamID": "Kmi7ClumQbNpa2vh7l9c",
    "thumbnailImages": [
        "https://firebasestorage.googleapis.com/v0/b/rubbishproduction-411a1.appspot.com/o/StreetRubbishPhotos%2Fthumbnails%2FfkWJKje4z5Mvvxq5ZoyV_138x300.jpg?alt=media"
    ],
    "totalRubbishRunTime": 15,
    "totalRubbishRuns": 1,
    "userFirstName": "Victoria",
    "userID": "aVwuFIxr7VPW3LeOjm2bnl9ZpD33",
    "userLastName": "McGruer",
    "userName": "notracetrails",
    "userProfilePhotoURL": "",
    "userRoles": [
        "newUser"
    ],
    "userTimeStampEnd": 1690765347.2933888,
    "userURI": "/User/aVwuFIxr7VPW3LeOjm2bnl9ZpD33"
},
{
    "creationTimeStamp": 1690749954.81777,
    "distance": 946.8464684890132,
    "endLat": 46.992727799202996,
    "endLong": -121.41393104250344,
    "endStreet": "(46.9921, -121.4202)",
    "id": "gN7py4ZQywGfO87kecFv",
    "isCurrentlyInRubbishRun": false,
    "isSponsored": false,
    "isValidated": false,
    "lastUpdatedServerTimeStamp": {
        "_seconds": 1690823878,
        "_nanoseconds": 932000000
    },
    "lastUpdatedUserTimeStamp": 1690750823.871036,
    "litterNotPickedUpStats": {
        "breakdown": {}
    },
    "litterPickedUpStats": {
        "breakdown": {
            "oa4mTWmeVc5bJ7kjFKtx": 1
        }
    },
    "modelVersion": 205,
    "numberOfItemsNotPickedUp": 0,
    "numberOfItemsPickedUp": 1,
    "numberOfItemsTagged": 1,
    "numberOfPictures": 1,
    "numberOfPicturesNotPickedUp": 0,
    "numberOfPicturesPickedUp": 1,
    "photoStoryIDs": [
        "LLD00Ns2IwMEGStTgYMW"
    ],
    "privacyLevel": "privacyTeam",
    "rubbishRunMode": "completed",
    "rubbishRunStoryModelID": "gN7py4ZQywGfO87kecFv",
    "serverTimeStamp": {
        "_seconds": 1690823815,
        "_nanoseconds": 294000000
    },
    "shouldRecalculateRubbishRunStats": false,
    "startLat": 46.99208040726091,
    "startLong": -121.4202065953253,
    "startStreet": "(46.9921, -121.4202)",
    "stepCount": 1383,
    "teamDisplayName": "No Trace Trails",
    "teamID": "Kmi7ClumQbNpa2vh7l9c",
    "thumbnailImages": [
        "https://firebasestorage.googleapis.com/v0/b/rubbishproduction-411a1.appspot.com/o/StreetRubbishPhotos%2Fthumbnails%2FLLD00Ns2IwMEGStTgYMW_138x300.jpg?alt=media"
    ],
    "totalRubbishRunTime": 868,
    "totalRubbishRuns": 1,
    "userFirstName": "Victoria",
    "userID": "aVwuFIxr7VPW3LeOjm2bnl9ZpD33",
    "userLastName": "McGruer",
    "userName": "notracetrails",
    "userProfilePhotoURL": "",
    "userRoles": [
        "newUser"
    ],
    "userTimeStampEnd": 1690750822.833833,
    "userURI": "/User/aVwuFIxr7VPW3LeOjm2bnl9ZpD33"
  },
  {
    "creationTimeStamp": 1690733652.222136,
    "distance": 1130.0849456950548,
    "endLat": 46.911019797204496,
    "endLong": -121.48883528175547,
    "endStreet": "(46.9052, -121.4977)",
    "id": "Srt91gREkqbQcxqWWpos",
    "isCurrentlyInRubbishRun": false,
    "isSponsored": false,
    "isValidated": false,
    "lastUpdatedServerTimeStamp": {
        "_seconds": 1690734644,
        "_nanoseconds": 294000000
    },
    "lastUpdatedUserTimeStamp": 1690734644.105116,
    "litterNotPickedUpStats": {
        "breakdown": {}
    },
    "litterPickedUpStats": {
        "breakdown": {}
    },
    "modelVersion": 205,
    "numberOfItemsNotPickedUp": 0,
    "numberOfItemsPickedUp": 0,
    "numberOfItemsTagged": 0,
    "numberOfPictures": 0,
    "numberOfPicturesNotPickedUp": 0,
    "numberOfPicturesPickedUp": 0,
    "photoStoryIDs": [],
    "privacyLevel": "privacyTeam",
    "rubbishRunMode": "completed",
    "rubbishRunStoryModelID": "Srt91gREkqbQcxqWWpos",
    "serverTimeStamp": {
        "_seconds": 1690734442,
        "_nanoseconds": 798000000
    },
    "shouldRecalculateRubbishRunStats": false,
    "startLat": 46.90517004583674,
    "startLong": -121.4977357630818,
    "startStreet": "(46.9052, -121.4977)",
    "stepCount": 1592,
    "teamDisplayName": "No Trace Trails",
    "teamID": "Kmi7ClumQbNpa2vh7l9c",
    "thumbnailImages": [],
    "totalRubbishRunTime": 990,
    "totalRubbishRuns": 1,
    "userFirstName": "Victoria",
    "userID": "aVwuFIxr7VPW3LeOjm2bnl9ZpD33",
    "userLastName": "McGruer",
    "userName": "notracetrails",
    "userProfilePhotoURL": "",
    "userRoles": [
        "newUser"
    ],
    "userTimeStampEnd": 1690734642.234026,
    "userURI": "/User/aVwuFIxr7VPW3LeOjm2bnl9ZpD33"
  },
]

