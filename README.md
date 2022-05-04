# Cast Care

Our product, Cast Care, is an all-encompassing mobile application for UNC healthcare patients that have recently gotten a cast for injury. Cast Care allows patients to find resources and information about potential issues they might experience with their cast, general cast care, and healthcare locations should the patient have an urgent problem. With Cast Care, patients should be able to self-diagnose any problems they may experience and get advice from doctors on what their next steps should be.

Cast Care is a mobile application built with ReactNative and deployed with Expo to the Apple App Store and Android App Store, with no back-end necessary. The codebase is stored on Github [here](https://github.com/ostegall/cast_care) as an open-source project. By following the instructions below, the application can be viewed, edited, and deployed. Of note is the fact that Cast Care as it currently stands is not deployed to any App Stores, which is the final goal. Instead, it is solely available in its programmatic form on Github. If editing the product, you should follow the instructions listed below under the title “Cast Care App Coding Environment Setup”, which will walk you through downloading the repository to your computer. Once you are finished with editing, follow the “Cast Care App Deployment Instructions” to deploy your update to both App Stores.


## **Cast Care App Coding Environment Setup**

If you are looking to download cast care’s software and edit the code, here is how you would set up your computer to begin doing so:

1.  If you do not have some program to edit the code, download a code editor from online to use. We recommend [Visual Studio Code](https://code.visualstudio.com/) as a great platform to edit the code.

2.  To access the code online, go to the Github website where the code is being hosted. Currently, the code is being hosted [here](https://github.com/ostegall/cast_care), but it is our intent for you to own the code on a new repository.
    
3.  Click the code dropdown on the Github website and copy the SSH link that pops up.

1.  If you do not already have anything downloaded onto your computer to run & edit the program, [download](https://nodejs.org/en/download/) the most compatible version of Node.js and follow their installer instructions. You will also need to [download](https://git-scm.com/download/) the git command line tool to access the code.

4.  Open up your terminal.

1.  If you do not have the Expo command line interface, type:
`npm install --global expo-cli`.

5.  From the terminal, download the Github code to your computer by typing: `git clone [insert copied SSH link here]`

6.  Once the code finishes downloading as a folder called ‘Cast Care’, you should be able to look at and edit the software in Visual Studio Code.

7.  From here, click the ‘Terminal’ button at the top bookmark of the Visual Studio Code page. In this terminal you should type: `npm install`. This will install all of the dependencies from package.json to your computer.

8.  To test the code type `expo test` in the terminal and test results should show up in the terminal.

9.  If you want to run a virtual demonstration of the code, open the terminal and type: `expo start`. Then, scan the corresponding QR code that comes up in the terminal with your phone’s camera app. In order to run the code on your phone, you need to download the Expo Go application.

10.  If you make edits to the code, you can push the code to Github to ensure the edits get saved. In Visual Studio Code, click the pathway button on the left panel. Click the plus button on the ‘Changed’ dropdown to add all the files that have been changed to be sent to Github. Once the files have been placed in the ‘Staged Changes’ dropdown, add your message about the edits above and hit enter to commit the code to Github. Finally, there should be a circle in the bottom left corner that says ‘Synchronize Changes’ if you hover over it. Click this and accept the pop-up to synchronize the Github changes.

## **Cast Care App Deployment**

First, create a ready-to-submit binary for the app store following the directions at [https://docs.expo.dev/build/setup/](https://docs.expo.dev/build/setup/).

As the guide describes, the first step is to download the react native code off Github (explained above). Then create an account at [https://expo.dev/signup](https://expo.dev/signup). Next, you can go to your computer terminal and run the following command for the Cast Care folder: `npm install -g eas-cli`. Then you can run the following command to log in to your expo account: `eas login`. Then to configure the build, run the command: `eas build:configure`. 

Next, create a developer membership for the apple store and google play store. Note that it will be a one-time cost of $99 for the apple app store and of $25 for the google play store. To create a build for only the app store, run the command: `eas build --platform ios`.
To create a build for only the play store, run the command `eas build --platform android`. If you want to create both builds at the same time, run `eas build --platform all`. 

The terminal will prompt you for your credentials for android and apple. If you haven't done this before, you can make whatever credentials you want. If you have done this before, enter the credentials you used previously.

Now that the build is complete, you can deploy the app to the app store and google play store by following the directions at  [https://docs.expo.dev/distribution/uploading-apps/](https://docs.expo.dev/distribution/uploading-apps/). As the guide describes, you can run the commands `eas submit -p android` and `eas submit -p ios` for the Google Play Store and Apple App Store, respectively. To deploy to the google play store you need to make a google service account at [expo.fyi/creating-google-service-account](https://expo.fyi/creating-google-service-account).

## **Dependencies**
The following is a list of compile dependencies for this project. These dependencies are required to compile and run the application:


| Dependency Name | Version         |
| --------------- | --------------- |
| React-Native    | 0.68 or later   |
| React           | 18.1.0 or later |
| Enzyme          | 3.11.0 or later |
| Expo-Location   | 14.0.2 or later |