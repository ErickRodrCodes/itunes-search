### searchApp

A Method that allows you to search an app by a given string

#### Parameters

| Parameter  | Type   | Required | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| searchTerm | string | ✅       | The search term used look for an app that matches that value |
| options    | object | 🔴       | Options used to parametrize the search                       |

<b>Options Object</b>

If you do not enter limit, lang or country values, the default language and country code are set to English. Limit Number default is 1.
Please Check [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For Language and Country Codes.

| Key      | Type   | Required | Description                                                                                       | Default Value |
| -------- | ------ | -------- | ------------------------------------------------------------------------------------------------- | ------------- |
| limit    | number | ✅       | Required if options is defined. A Numeric value that sets the limit of results by the search term | 1             |
| language | string | 🔴       | a language code based on [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)       | "en"          |
| country  | string | 🔴       | a country code based on [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)              | "US"          |

## Example of use:

### Node

```js
const { searchApp } = require('@tbogard/itunes-search');
const search = async () => {
  const result = await searchApp('Captain Tsubasa', {
    limit: 3,
  });
  console.log(JSON.stringify(result, null, 2));
};
search();
```

### JS Browser

```html
<script src="itunesSearch.min.js"></script>
<script type="text/javascript">
  const { searchApp } = iTunesSearch;
  const search = async () => {
    const result = await searchApp('Captain Tsubasa', {
      limit: 3,
    });
    console.log(JSON.stringify(result, null, 2));
  };
  search();
</script>
```

#### Expected answer

```json
{
  "resultCount": 3,
  "results": [
    {
      "appletvScreenshotUrls": [],
      "screenshotUrls": [
        "https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/75/e0/d4/75e0d40d-a3bc-2855-c492-77cbc1456d37/c325ed34-8ee9-435a-9eb6-f6da435b25f5_ss1.png/406x228bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/66/c2/ef/66c2efb3-5e70-45fc-2a2f-a9700f1d82ae/pr_source.png/406x228bb.png",
        "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/f2/18/7b/f2187b57-151e-2780-db16-fee80d387865/pr_source.png/406x228bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/c7/92/7ec7928c-c777-ae2b-9cfd-cc210d408f5c/pr_source.png/406x228bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/b6/b2/b1/b6b2b1ed-62aa-e089-8fea-25eddc7404d2/pr_source.png/406x228bb.png",
        "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/6a/26/2a/6a262a73-8bbf-894a-ff9a-fb5ef148fe0b/pr_source.png/406x228bb.png"
      ],
      "ipadScreenshotUrls": [
        "https://is3-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/68/e9/85/68e985f2-e3af-9aae-c6c9-134dabc59bec/131b1a47-2457-40a9-8df8-706de067b613_ss1.png/552x414bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/64/c2/b5/64c2b516-5d67-c143-6391-3b61021644a8/pr_source.png/552x414bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/dd/e1/41/dde141db-5b8b-eb2b-356e-9dcb490ea3d4/pr_source.png/552x414bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/a0/32/16/a03216d3-160e-2524-217b-66d3ab6dfe2e/pr_source.png/552x414bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/4c/d2/25/4cd2254f-eed9-724b-2a83-0dba7cc59872/pr_source.png/552x414bb.png",
        "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/18/83/9b/18839b8c-9d95-ad66-52d7-1b5fc80ea233/pr_source.png/552x414bb.png"
      ],
      "artworkUrl512": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/96/d4/c2/96d4c2c2-f5a6-6e2f-1412-7c0a0fc18992/source/512x512bb.jpg",
      "artistViewUrl": "https://apps.apple.com/us/developer/klab-inc/id302647750?uo=4",
      "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/96/d4/c2/96d4c2c2-f5a6-6e2f-1412-7c0a0fc18992/source/60x60bb.jpg",
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/96/d4/c2/96d4c2c2-f5a6-6e2f-1412-7c0a0fc18992/source/100x100bb.jpg",
      "advisories": [],
      "supportedDevices": [
        "iPhone5s-iPhone5s",
        "iPadAir-iPadAir",
        "iPadAirCellular-iPadAirCellular",
        "iPadMiniRetina-iPadMiniRetina",
        "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
        "iPhone6-iPhone6",
        "iPhone6Plus-iPhone6Plus",
        "iPadAir2-iPadAir2",
        "iPadAir2Cellular-iPadAir2Cellular",
        "iPadMini3-iPadMini3",
        "iPadMini3Cellular-iPadMini3Cellular",
        "iPodTouchSixthGen-iPodTouchSixthGen",
        "iPhone6s-iPhone6s",
        "iPhone6sPlus-iPhone6sPlus",
        "iPadMini4-iPadMini4",
        "iPadMini4Cellular-iPadMini4Cellular",
        "iPadPro-iPadPro",
        "iPadProCellular-iPadProCellular",
        "iPadPro97-iPadPro97",
        "iPadPro97Cellular-iPadPro97Cellular",
        "iPhoneSE-iPhoneSE",
        "iPhone7-iPhone7",
        "iPhone7Plus-iPhone7Plus",
        "iPad611-iPad611",
        "iPad612-iPad612",
        "iPad71-iPad71",
        "iPad72-iPad72",
        "iPad73-iPad73",
        "iPad74-iPad74",
        "iPhone8-iPhone8",
        "iPhone8Plus-iPhone8Plus",
        "iPhoneX-iPhoneX",
        "iPad75-iPad75",
        "iPad76-iPad76",
        "iPhoneXS-iPhoneXS",
        "iPhoneXSMax-iPhoneXSMax",
        "iPhoneXR-iPhoneXR",
        "iPad812-iPad812",
        "iPad834-iPad834",
        "iPad856-iPad856",
        "iPad878-iPad878",
        "iPadMini5-iPadMini5",
        "iPadMini5Cellular-iPadMini5Cellular",
        "iPadAir3-iPadAir3",
        "iPadAir3Cellular-iPadAir3Cellular",
        "iPodTouchSeventhGen-iPodTouchSeventhGen",
        "iPhone11-iPhone11",
        "iPhone11Pro-iPhone11Pro",
        "iPadSeventhGen-iPadSeventhGen",
        "iPadSeventhGenCellular-iPadSeventhGenCellular",
        "iPhone11ProMax-iPhone11ProMax",
        "iPhoneSESecondGen-iPhoneSESecondGen",
        "iPadProSecondGen-iPadProSecondGen",
        "iPadProSecondGenCellular-iPadProSecondGenCellular",
        "iPadProFourthGen-iPadProFourthGen",
        "iPadProFourthGenCellular-iPadProFourthGenCellular",
        "iPhone12Mini-iPhone12Mini",
        "iPhone12-iPhone12",
        "iPhone12Pro-iPhone12Pro",
        "iPhone12ProMax-iPhone12ProMax",
        "iPadAir4-iPadAir4",
        "iPadAir4Cellular-iPadAir4Cellular",
        "iPadEighthGen-iPadEighthGen",
        "iPadEighthGenCellular-iPadEighthGenCellular",
        "iPadProThirdGen-iPadProThirdGen",
        "iPadProThirdGenCellular-iPadProThirdGenCellular",
        "iPadProFifthGen-iPadProFifthGen",
        "iPadProFifthGenCellular-iPadProFifthGenCellular"
      ],
      "isGameCenterEnabled": true,
      "features": [
        "gameCenter",
        "iosUniversal"
      ],
      "kind": "software",
      "minimumOsVersion": "10.0",
      "languageCodesISO2A": [
        "AR",
        "EN",
        "FR",
        "DE",
        "IT",
        "PT",
        "ES",
        "TH",
        "ZH"
      ],
      "fileSizeBytes": "303644672",
      "sellerUrl": "https://www.tsubasa-dreamteam.com/en/",
      "formattedPrice": "Free",
      "averageUserRatingForCurrentVersion": 4.4503,
      "userRatingCountForCurrentVersion": 7555,
      "trackContentRating": "4+",
      "trackCensoredName": "Captain Tsubasa: Dream Team",
      "trackViewUrl": "https://apps.apple.com/us/app/captain-tsubasa-dream-team/id1293738123?uo=4",
      "contentAdvisoryRating": "4+",
      "averageUserRating": 4.4503,
      "genreIds": [
        "6014",
        "7015",
        "7016",
        "6016"
      ],
      "sellerName": "KLab Inc.",
      "releaseDate": "2017-12-05T12:44:50Z",
      "primaryGenreName": "Games",
      "isVppDeviceBasedLicensingEnabled": true,
      "trackId": 1293738123,
      "trackName": "Captain Tsubasa: Dream Team",
      "currentVersionReleaseDate": "2021-08-06T05:02:14Z",
      "releaseNotes": "- Added a scrollbar to the Transfer Menu.\n- Changed app icon",
      "primaryGenreId": 6014,
      "currency": "USD",
      "description": "We've reached 35 Million Downloads Worldwide!\nThe multiplayer football game loved in more than 150 countries!\nMake your own dream team with players you like and have heated matches with players around the world!\n\n- Special Skills that really give the feel of Captain Tsubasa\nMany Special Skills from the original comic like Tsubasa's Drive Shot or Hyuga's Tiger Shot are reproduced in spectacular 3D! You have to see the close-ups and voice acting, too!\n\n- Relive the original comic in Story Mode\nEnjoy nostalgic older stories all the way up to the latest series, \"Rising Sun\"!\nIt also has original stories not featured in the comic!\n\n- A variety of Online Modes, where you can play with Captain Tsubasa (aka Flash Kicker) fans around the world\nRank Match: Compete with players around the world in real time and try to be No. 1!\nGroup Match: Get together with up 32 friends and have matches between players freely!\nFriendly Match: Play against friends or Club Members with whatever rules you want!\nQuick Match: Compete with a team you prepare. Even beginners can enjoy this!\n\n- Edit Team\nCombine whatever players, formations, and Team Skills you like to power up your team!\nPlayers and uniforms can be customised, so you can make your very own dream team!\n\n- Training of Players\nEnhance your players with training! The same players can teach Special Skills to each other!\nGet items in \"Raid & Hidden Skill Scenarios\" and use Hidden Ability Evolution!\nIn \"Player Enhance Scenarios\" you can enhance Ability Limit Break and the Skill Field!\nGive your honed players original skills and show your rivals your full-power football!\n\n\"Captain Tsubasa\", the popular football comic that influenced football stars all over the world and many Japanese players. Enjoy this authentic football battle game.\n\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n\n[Here's the Latest Information!]\n- Official Site\nhttps://www.tsubasa-dreamteam.com/\n\n＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝\n\n©Yoichi Takahashi/SHUEISHA ©Yoichi Takahashi/SHUEISHA/TV TOKYO/ENOKIFILM",
      "artistId": 302647750,
      "artistName": "KLab Inc.",
      "genres": [
        "Games",
        "Simulation",
        "Sports",
        "Entertainment"
      ],
      "price": 0,
      "bundleId": "com.klab.captain283.global",
      "version": "5.2.2",
      "wrapperType": "software",
      "userRatingCount": 7555
    },
    {
      "appletvScreenshotUrls": [],
      "screenshotUrls": [
        "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/73/fd/19/73fd19b4-e6dd-93fb-a141-1d079bdc412b/pr_source.png/406x228bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/c0/53/96/c053967c-6bd9-b595-cf1a-39f2e3bf52a3/pr_source.png/406x228bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/c8/32/ec/c832ecdd-0e18-02e0-850f-5d314b987909/pr_source.png/406x228bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/fb/c4/f0/fbc4f0cb-5017-9a09-a07b-e4ac99e3d668/pr_source.png/406x228bb.png",
        "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/0c/02/ad/0c02ad23-f128-18cc-1aae-da4139b867f1/pr_source.png/406x228bb.png"
      ],
      "ipadScreenshotUrls": [
        "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/d0/cb/59/d0cb597b-ee8b-6947-a436-e9ef19647629/pr_source.png/552x414bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/ce/c4/35/cec435c7-6219-a045-c9cc-3d09295ed627/pr_source.png/552x414bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/a7/9c/7c/a79c7c3f-d543-d30c-8203-13658842ca0c/pr_source.png/552x414bb.png",
        "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/98/f5/d6/98f5d66b-42c7-3d37-8e21-910539b9a230/pr_source.png/552x414bb.png",
        "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/3e/90/43/3e90430e-a44b-cdd9-18b3-5a6ea784508a/pr_source.png/552x414bb.png"
      ],
      "artworkUrl512": "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/a6/ca/a5/a6caa590-2f28-7708-780b-ee7230001ad5/source/512x512bb.jpg",
      "artistViewUrl": "https://apps.apple.com/us/developer/gmo-gp-inc/id768471061?uo=4",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/a6/ca/a5/a6caa590-2f28-7708-780b-ee7230001ad5/source/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/a6/ca/a5/a6caa590-2f28-7708-780b-ee7230001ad5/source/100x100bb.jpg",
      "advisories": [],
      "supportedDevices": [
        "iPhone5s-iPhone5s",
        "iPadAir-iPadAir",
        "iPadAirCellular-iPadAirCellular",
        "iPadMiniRetina-iPadMiniRetina",
        "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
        "iPhone6-iPhone6",
        "iPhone6Plus-iPhone6Plus",
        "iPadAir2-iPadAir2",
        "iPadAir2Cellular-iPadAir2Cellular",
        "iPadMini3-iPadMini3",
        "iPadMini3Cellular-iPadMini3Cellular",
        "iPodTouchSixthGen-iPodTouchSixthGen",
        "iPhone6s-iPhone6s",
        "iPhone6sPlus-iPhone6sPlus",
        "iPadMini4-iPadMini4",
        "iPadMini4Cellular-iPadMini4Cellular",
        "iPadPro-iPadPro",
        "iPadProCellular-iPadProCellular",
        "iPadPro97-iPadPro97",
        "iPadPro97Cellular-iPadPro97Cellular",
        "iPhoneSE-iPhoneSE",
        "iPhone7-iPhone7",
        "iPhone7Plus-iPhone7Plus",
        "iPad611-iPad611",
        "iPad612-iPad612",
        "iPad71-iPad71",
        "iPad72-iPad72",
        "iPad73-iPad73",
        "iPad74-iPad74",
        "iPhone8-iPhone8",
        "iPhone8Plus-iPhone8Plus",
        "iPhoneX-iPhoneX",
        "iPad75-iPad75",
        "iPad76-iPad76",
        "iPhoneXS-iPhoneXS",
        "iPhoneXSMax-iPhoneXSMax",
        "iPhoneXR-iPhoneXR",
        "iPad812-iPad812",
        "iPad834-iPad834",
        "iPad856-iPad856",
        "iPad878-iPad878",
        "iPadMini5-iPadMini5",
        "iPadMini5Cellular-iPadMini5Cellular",
        "iPadAir3-iPadAir3",
        "iPadAir3Cellular-iPadAir3Cellular",
        "iPodTouchSeventhGen-iPodTouchSeventhGen",
        "iPhone11-iPhone11",
        "iPhone11Pro-iPhone11Pro",
        "iPadSeventhGen-iPadSeventhGen",
        "iPadSeventhGenCellular-iPadSeventhGenCellular",
        "iPhone11ProMax-iPhone11ProMax",
        "iPhoneSESecondGen-iPhoneSESecondGen",
        "iPadProSecondGen-iPadProSecondGen",
        "iPadProSecondGenCellular-iPadProSecondGenCellular",
        "iPadProFourthGen-iPadProFourthGen",
        "iPadProFourthGenCellular-iPadProFourthGenCellular",
        "iPhone12Mini-iPhone12Mini",
        "iPhone12-iPhone12",
        "iPhone12Pro-iPhone12Pro",
        "iPhone12ProMax-iPhone12ProMax",
        "iPadAir4-iPadAir4",
        "iPadAir4Cellular-iPadAir4Cellular",
        "iPadEighthGen-iPadEighthGen",
        "iPadEighthGenCellular-iPadEighthGenCellular",
        "iPadProThirdGen-iPadProThirdGen",
        "iPadProThirdGenCellular-iPadProThirdGenCellular",
        "iPadProFifthGen-iPadProFifthGen",
        "iPadProFifthGenCellular-iPadProFifthGenCellular"
      ],
      "isGameCenterEnabled": false,
      "features": [
        "iosUniversal"
      ],
      "kind": "software",
      "minimumOsVersion": "9.0",
      "languageCodesISO2A": [
        "EN",
        "FR",
        "DE",
        "IT",
        "PT",
        "ES",
        "TH"
      ],
      "fileSizeBytes": "160007168",
      "sellerUrl": "https://www.facebook.com/CaptainTsubasaZERO/",
      "formattedPrice": "Free",
      "averageUserRatingForCurrentVersion": 4.59923,
      "userRatingCountForCurrentVersion": 781,
      "trackContentRating": "4+",
      "trackCensoredName": "Captain Tsubasa ZERO",
      "trackViewUrl": "https://apps.apple.com/us/app/captain-tsubasa-zero/id1462848280?uo=4",
      "contentAdvisoryRating": "4+",
      "averageUserRating": 4.59923,
      "genreIds": [
        "6014",
        "7014",
        "7016"
      ],
      "sellerName": "GMO GP, Inc.",
      "releaseDate": "2019-09-11T07:00:00Z",
      "primaryGenreName": "Games",
      "isVppDeviceBasedLicensingEnabled": true,
      "trackId": 1462848280,
      "trackName": "Captain Tsubasa ZERO",
      "currentVersionReleaseDate": "2021-08-10T11:54:42Z",
      "releaseNotes": "- Minor bug fixes.",
      "primaryGenreId": 6014,
      "currency": "USD",
      "description": "The new animated series Captain Tsubasa is now available as a smartphone game!\nThis exciting soccer game lets you relive the story of the Captain Tsubasa anime!\n\nGameplay\nPlay realistic simulated soccer matches complete with special moves taken straight from the anime!\n\nThe Miracle Shot\nPress the Miracle Shot Button during a match to unleash a devastating Miracle Shot! Linking together dribble and pass skills, the Miracle Shot is a great way to create powerful combos!\n\nVarious Special Moves\nThe unique characters and their patented special moves from the anime have been faithfully recreated within the game! Use a variety of techniques to tilt the match in your favor!\n\nIn-depth character and team development\nEvolve all of your players up to the highest rarity! The game lets you turn your favorite characters into absolute powerhouses on the field!\n\nEndless customization options\nEdit your uniforms and team rosters while developing your favorite players in order to create your own personalized team!\n\nFeatures voices & characters from the anime!\nFrom Tsubasa and Wakabayashi to the indomitable Kojiro Hyuga, your favorite characters from the anime have been included in the game and use the same voice actors as the Japanese anime!\n\nNew original characters!\nThere are numerous original characters unique to the game! Enjoy various subplots not present in the main story!\n\nRelive the world of the anime!\nThe look and feel of the anime have been reproduced within the game! It's a must-see for fans of the anime and newcomers alike!\n\nAbout Captain Tsubasa\nCaptain Tsubasa tells stories of a soccer genius Tubasa Ozora, who transferred to Nankatsu Elementary school, growing up as a football player through matches with rivals such as Genzo Wakabayashi and Kojiro Hyuga.\nOnce the manga comic obtained high popularity with its refreshing story, unique characters and a number of breathtaking skills which make readers want to imitate, the popularity went across the sea and brought the Captain Tusbasa boom worldwide.\nIts impact reached the real world of football and have been a trigger that led to a lot of domestic and foreign professional football players starting to play football.\n\nOfficial Facebook page\nhttps://www.facebook.com/CaptainTsubasaZERO/\n\nRecommended Devices\niOS 8.0 or later; iPhone 5s or later; iPod touch 6th generation or later;
iPad 5th generation or later; iPad mini 2 or later; iPad Air or later\n*Please note that gameplay may be unstable on devices other than the ones listed above.\n\n©YOICHI TAKAHASHI/SHUEISHA,2018CAPTAIN TSUBASA COMMITTEE",
      "artistId": 768471061,
      "artistName": "GMO GP, Inc.",
      "genres": [
        "Games",
        "Role Playing",
        "Sports"
      ],
      "price": 0,
      "bundleId": "jp.co.gamepot.tsubasa.global",
      "version": "2.4.0",
      "wrapperType": "software",
      "userRatingCount": 781
    },
    {
      "appletvScreenshotUrls": [],
      "screenshotUrls": [
        "https://is5-ssl.mzstatic.com/image/thumb/Purple6/v4/03/fc/cb/03fccba2-7036-de96-7240-8bdff601ce85/pr_source.png/392x696bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/68/95/e6/6895e6c4-f36a-c5ce-5fbd-2e43bceb2aa2/pr_source.png/392x696bb.png",
        "https://is4-ssl.mzstatic.com/image/thumb/Purple3/v4/ee/74/99/ee749981-ee43-02c7-4d12-c809baa12675/pr_source.png/392x696bb.png"
      ],
      "ipadScreenshotUrls": [
        "https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/8f/dc/72/8fdc7270-266c-7546-0466-57e5c5994bd9/pr_source.png/360x480bb.png",
        "https://is3-ssl.mzstatic.com/image/thumb/Purple3/v4/e6/ae/4d/e6ae4dc8-65c2-a3c7-9242-63585de276a6/pr_source.png/360x480bb.png",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/6d/68/4b/6d684b38-b55c-4f31-3e6a-95066b2ca874/pr_source.png/360x480bb.png"
      ],
      "artworkUrl512": "https://is2-ssl.mzstatic.com/image/thumb/Purple62/v4/5a/d1/29/5ad12970-54bf-0907-c700-40e17423e0b4/source/512x512bb.jpg",
      "artistViewUrl": "https://apps.apple.com/us/developer/hap-inc/id470473550?uo=4",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Purple62/v4/5a/d1/29/5ad12970-54bf-0907-c700-40e17423e0b4/source/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Purple62/v4/5a/d1/29/5ad12970-54bf-0907-c700-40e17423e0b4/source/100x100bb.jpg",
      "advisories": [
        "Infrequent/Mild Cartoon or Fantasy Violence"
      ],
      "supportedDevices": [
        "iPhone3GS-iPhone-3GS",
        "iPhone4-iPhone4",
        "iPodTouchFourthGen-iPodTouchFourthGen",
        "iPad2Wifi-iPad2Wifi",
        "iPad23G-iPad23G",
        "iPhone4S-iPhone4S",
        "iPadThirdGen-iPadThirdGen",
        "iPadThirdGen4G-iPadThirdGen4G",
        "iPhone5-iPhone5",
        "iPodTouchFifthGen-iPodTouchFifthGen",
        "iPadFourthGen-iPadFourthGen",
        "iPadFourthGen4G-iPadFourthGen4G",
        "iPadMini-iPadMini",
        "iPadMini4G-iPadMini4G",
        "iPhone5c-iPhone5c",
        "iPhone5s-iPhone5s",
        "iPadAir-iPadAir",
        "iPadAirCellular-iPadAirCellular",
        "iPadMiniRetina-iPadMiniRetina",
        "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
        "iPhone6-iPhone6",
        "iPhone6Plus-iPhone6Plus",
        "iPadAir2-iPadAir2",
        "iPadAir2Cellular-iPadAir2Cellular",
        "iPadMini3-iPadMini3",
        "iPadMini3Cellular-iPadMini3Cellular",
        "iPodTouchSixthGen-iPodTouchSixthGen",
        "iPhone6s-iPhone6s",
        "iPhone6sPlus-iPhone6sPlus",
        "iPadMini4-iPadMini4",
        "iPadMini4Cellular-iPadMini4Cellular",
        "iPadPro-iPadPro",
        "iPadProCellular-iPadProCellular",
        "iPadPro97-iPadPro97",
        "iPadPro97Cellular-iPadPro97Cellular",
        "iPhoneSE-iPhoneSE",
        "iPhone7-iPhone7",
        "iPhone7Plus-iPhone7Plus",
        "iPad611-iPad611",
        "iPad612-iPad612",
        "iPad71-iPad71",
        "iPad72-iPad72",
        "iPad73-iPad73",
        "iPad74-iPad74",
        "iPhone8-iPhone8",
        "iPhone8Plus-iPhone8Plus",
        "iPhoneX-iPhoneX",
        "iPad75-iPad75",
        "iPad76-iPad76",
        "iPhoneXS-iPhoneXS",
        "iPhoneXSMax-iPhoneXSMax",
        "iPhoneXR-iPhoneXR",
        "iPad812-iPad812",
        "iPad834-iPad834",
        "iPad856-iPad856",
        "iPad878-iPad878",
        "iPadMini5-iPadMini5",
        "iPadMini5Cellular-iPadMini5Cellular",
        "iPadAir3-iPadAir3",
        "iPadAir3Cellular-iPadAir3Cellular",
        "iPodTouchSeventhGen-iPodTouchSeventhGen",
        "iPhone11-iPhone11",
        "iPhone11Pro-iPhone11Pro",
        "iPadSeventhGen-iPadSeventhGen",
        "iPadSeventhGenCellular-iPadSeventhGenCellular",
        "iPhone11ProMax-iPhone11ProMax",
        "iPhoneSESecondGen-iPhoneSESecondGen",
        "iPadProSecondGen-iPadProSecondGen",
        "iPadProSecondGenCellular-iPadProSecondGenCellular",
        "iPadProFourthGen-iPadProFourthGen",
        "iPadProFourthGenCellular-iPadProFourthGenCellular",
        "iPhone12Mini-iPhone12Mini",
        "iPhone12-iPhone12",
        "iPhone12Pro-iPhone12Pro",
        "iPhone12ProMax-iPhone12ProMax",
        "iPadAir4-iPadAir4",
        "iPadAir4Cellular-iPadAir4Cellular",
        "iPadEighthGen-iPadEighthGen",
        "iPadEighthGenCellular-iPadEighthGenCellular",
        "iPadProThirdGen-iPadProThirdGen",
        "iPadProThirdGenCellular-iPadProThirdGenCellular",
        "iPadProFifthGen-iPadProFifthGen",
        "iPadProFifthGenCellular-iPadProFifthGenCellular"
      ],
      "isGameCenterEnabled": false,
      "features": [
        "iosUniversal"
      ],
      "kind": "software",
      "minimumOsVersion": "6.1",
      "languageCodesISO2A": [
        "NL",
        "EN",
        "FR",
        "DE",
        "IT",
        "JA",
        "KO",
        "PT",
        "RU",
        "ZH",
        "ES",
        "ZH"
      ],
      "fileSizeBytes": "39723008",
      "formattedPrice": "Free",
      "averageUserRatingForCurrentVersion": 4.92856,
      "userRatingCountForCurrentVersion": 14,
      "trackContentRating": "9+",
      "trackCensoredName": "Vice captain",
      "trackViewUrl": "https://apps.apple.com/us/app/vice-captain/id1038025867?uo=4",
      "contentAdvisoryRating": "9+",
      "averageUserRating": 4.92856,
      "genreIds": [
        "6014",
        "7016",
        "6004",
        "7003"
      ],
      "sellerName": "hap Inc.",
      "releaseDate": "2015-09-25T08:39:20Z",
      "primaryGenreName": "Games",
      "isVppDeviceBasedLicensingEnabled": true,
      "trackId": 1038025867,
      "trackName": "Vice captain",
      "currentVersionReleaseDate": "2015-11-04T04:30:52Z",
      "releaseNotes": "Bug Fix.",
      "primaryGenreId": 6014,
      "currency": "USD",
      "description": "Defeat the monster in the free kick!\nSoccer Battle Action!\n\nLet's to hit a shot aiming a monster!\nLet the \"pick up ball\" when if the ball is not.",
      "artistId": 470473550,
      "artistName": "hap Inc.",
      "genres": [
        "Games",
        "Sports",
        "Sports",
        "Casual"
      ],
      "price": 0,
      "bundleId": "jp.ne.hap.captain",
      "version": "1.0.1",
      "wrapperType": "software",
      "userRatingCount": 14
    }
  ]
}
```

[Return back to main document](https://tbogard.github.io/itunes-search/)

API

[searchAlbum](./searchAlbum.md) | [searchAll](./searchAll.md) | [searchApp](./searchApp.md) | [searchArtist](./searchArtist.md) | [searchAudiobook](./searchAudiobook.md) | [searchBook](./searchBook.md) | [searchMovie](./searchMovie.md) | [searchMusicVideo](./searchMusicVideo.md) | [searchPodcast](./searchPodcast.md) | [searchSong](./searchSong.md)
