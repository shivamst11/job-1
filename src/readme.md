Login with eas account in terminal:
link https://docs.expo.dev/build/introduction/

user: swapnilg123
password: Swapnil@123

question:

1. Ask for app icon
2. Ask for splash screen combined icon
3. Change the tab name
4. https://scout.co.kr/company?keyword=all not working
5. Ask what to show in profile tab
6. If user logged-in don't show the login screen
7. Why two tab in bottom (in screen 11 and 12)

Notification:
Ask to create a api which will take mobile unique id for notification.

Target for 11 sept:-> fix issue and send a apk build to macknly and take a confirmation for web view.
problems: 1. Not much scalable. 2. User Experience: 3. Maintenance 4. Limited Control: can't do much customization 5. whatever in web we can show that only by url. Then there is no point of making design.

things to learn
expo push notificatoin
i18n
redux tool kit

list of api's

company Login: https://localhost/auth/company/login payload {"id":"swapnil@gmail.com","password":"Gupta@gmail123"}

user login: https://localhost/auth/user/login payload {id: "SwapnilGupta.xi@gmail.com", password: "Guptaswap@12"}

web login - > have to call a function in react native with login api response ->

react native what we have now : -> notification token, userId , pushnofication

push notification api post :-> payload
{
userId: 1234567890,
pushToken: 12dfghj45678,
platform: andriod | ios
}
