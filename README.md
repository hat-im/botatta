# BotAtta 2.0
Now in JS!
## Features
- [] Playing Valolant
- [] oowee im up
- [] Wish Birthdays from res\buddays.csv
  - Make sure time zone is IST
- [] 69/420 Detector
  - Respond with "Nice :ok_hand:" if < 3
  - Respond with "Oh lord thats very nice :fire::fire:" if >=3

### Commands
- [] Replace
  - Kick atta
  - Respond with "Im the atta now" if he is in VC
  - Respond with "No" if he is not in VC

- [] Sing | Kolaveridi | Geography | Whythis
  - Move to VC of command-ee
    - Respond with "Ayeeee\njoin voice channel" if not in one
  - If not playing, start playing res\atta_song_low.mp3
  - If asleep for 90s, send "I'll leave bro" and leave

- [] Carry
  - Play ./res/shame/shame1.mp3' in VC of command-ee
  - refer to above

- [] Random | Moo
  - Check for number input n (def: 1, max: 10 -> "That's too many man")
  - Play n random audio tracks from /res/noises/
  - refer to Sing

- [] Leave | Stfu | Myearshurt | Stop
  - leave VC with "Ok :slight_frown:"
  - if not on VC, send "Huh im not on a voice channel"

- [] Clear
  - Clear n+1 messages from chat

- [] Detain | Jail | Shut | Shoo
  - Select first channel with "detention" in name
  - Select member mentioned (default: TT[454966507902992404])
  - If not on VC, send "\<name\> is not on a voice channel :person_facepalming:"
  - Move person to detention

- [] Move
  - Move everyone to first detention channel
  - refer to above

- [] Quiztime | Createquiz
  - create channel called "answers-yes" in first category
  - if already present send "Its already there no :eyes:"

- [] Purge | Destroy
  - If "answers-yes" exists delete channel and send "Its gone bro"
  - else, send "Huh theres nothing to delete"

- [] Covid | Update
  - Get API data, statewise + districtwise from https://api.covid19india.org/
  - Create embed with data for India, Karnataka and Bangalore for datetime