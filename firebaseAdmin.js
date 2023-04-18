import admin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyAD35hkzFh75ilVn6xgdEeC8wm7D5IZck0",
  authDomain: "powerkraft-02.firebaseapp.com",
  projectId: "powerkraft-02",
  storageBucket: "powerkraft-02.appspot.com",
  messagingSenderId: "631585704333",
  appId: "1:631585704333:web:474ccfcf6284da447655c4",
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "powerkraft-02",
      clientEmail:
        "firebase-adminsdk-i57bc@powerkraft-02.iam.gserviceaccount.com",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqZiZRB6n666vQ\nbnvLUBpF5QYwxb3HC1+gMALYBo2sd8VRA9cW+I9HM0tsXVLqPA6RgyWkRgU4LEH9\nqGKSlsElYeePy1PNl1DiMvAYsXWn/ibEgUPBQpF6MXZCrWCs3W2EP9RTr6IcQzfA\nZ41cJfMCjQqPyPvo7lcmBwHjbbAe+YYoKzYs09ehyxlzWB1VQQIMr53aZqygF1iC\nHXSi5BxqsP9tP0KyepjMenUo1oLVGATUIVGZg+6neiFkxWMUmCqM4oNoB/vhr/JO\n8LqGdBJdr8v0xZ/Rodu4ht9597eb2xq83KnaX9Osm/q13iYhpbSdhtLuVdg68MVQ\nx/wP9aQfAgMBAAECggEAVFmuMDqx0Lo+eiNIKUIKMlzYfXSrdpWBNAQTAepZ0VbI\niv72yC1qYhTzb2umCuTR2Ut4oEUSW8SReta9okLd/rXcvsJMxg9N7BiojjpOPMYY\n7V4XI9TwxShHhncd8xc78fuGTRdHHySRS4v4MtD1QlW/Fz8caBZdBjI/W7h9SKeS\nUnHlYHqKrpka0qKX11W3QpaOoBADe8QKblENJiP+rAwJvDvVbGMVqXugDU51bCQL\nE2audAeQowadcHgc/JSx0OpSq1c9Q3WOxS+S9KLiuLsMqS4tyY0O2MYYUBnjl3wF\n02xDZ3+zz1juTyz8qFW6nplHrlgXh8KbUg/DICVYAQKBgQD+Nu4SQN6Vhkn+WCXM\neOJEsVHqy0M9aBIInCzH5FVdaeLlODg0lMo10vm/2VaHNdFCFnWAYs0PJ5U+oCit\nD4l/QV6qdUhI0xsemib7IGiqmubnepq61cv9VYrAoKAjWK/4b/FazUl3R/g/azLA\n8G8FQ7pNbD1LSbbKir1MR39ivwKBgQDsC5eKigFLYwSmnXt+bhyVfqVqN3I+zwnC\nrFQROa6mg6Qu9Wa7tCy3l7VnDxT33CJiRPJPXFZCCH/M+0KZqNEH+kasmV8KpdLO\nNKHjIWDywAe0fxYmuTMKyOEwUrfuCdv3aILa0gDgOW3qyowBRSkbKEI01tpPdlOm\nfVMNvkv2oQKBgQDXTQxqtzgMqVRnrp4sw8DW7trzIT2Md2S2mBaxIShPWkuJWQj5\nN37fART2sArBrwnQkBbqKkOD70FObfSlRcBs359efMBAtVKFo4caL0OWImUnbUY4\nsLP4lgdSx3d5GDbJEX33KmBrPq/4fkDY+Yj9i3Pw+Jgc+Ixwk/po7TDtHwKBgQCp\ny6DkCGfr+btzux8FkGHBbAvDf0UQR1BHGD2U8oBeyZ1GJkMTTQVJv7i+/MthjJmz\nRNNlIQ/vijuckTWUYSqUaYWDTQRgHW6p5JR7VRxvIpGoVi7yBhDgdiX+49HpSnBP\n5X8TtzLoGIen+LGDjGOIZIpThiYeOQjtX4NqBHSSYQKBgB4tDJT1BftFHZMkEPDD\nvIhdjhalzjZiVCd52O5ye4+9vbjxBEq5oAFaiX9EC8RozdfRUO6p8fLKcmnMTPd9\n5/uQWTvH949skZQuKXhDGMeKCAjhxbZKUXUbmDacCklcs0JyoCC/84TkiVEBMWIi\nvMEy9hGIqqLp9AAJhhEkTXdR\n-----END PRIVATE KEY-----\n".replace(
          /\\n/g,
          "\n"
        ),
    }),
  });
}

const firestore = admin.firestore();

export { firestore };
