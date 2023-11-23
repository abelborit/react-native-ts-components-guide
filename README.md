# React Native & TypeScript - Components Guide

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- En esta sección vamos a trabajar con muchos componentes de React Native y su personalización.

  - Animaciones
    - Custom Hooks
    - Componentes usando animaciones
  - FlatLists
    - Normales
    - Agrupadas
  - SectionsList
  - Modals
  - Alertas
  - Switches
  - PullToRefresh (para refrescar la pantalla)
  - TextInputs
    - Teclados
  - InfiniteScroll
    - Imágenes
    - FadeInImage (efecto fadeIn con imágenes)

- Se creará un slide inicial que nos sirva para hacer tutoriales o explicaciones de cómo funciona nuestra aplicación o mostrar información adicional.

- Se crearán los componentes y archivos necesarios para poder cambiar el tema entre Dark, Light o según el tema del dispositivo o sino también dejar la lógica lista para crear nuestro propio tema personalizado con la finalidad que todos los componentes de la aplicación luzcan acorde al tema seleccionado.

### \* RECURSOS A USAR:

- react-native-reanimated-carousel (https://github.com/dohooo/react-native-reanimated-carousel) (https://www.npmjs.com/package/react-native-reanimated-carousel):
  - `npm i react-native-reanimated-carousel`
  - `npm i react-native-gesture-handler react-native-reanimated`

---

### \* IMÁGENES DE LA APLICACIÓN:

<style>
  .image-container {
    text-align: center;
  }
  .image-container img {
    margin: 15px;
  }
</style>

<div class="image-container">
  <img src="./screenshotsApp/Screenshot_1700768544.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768549.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768552.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768556.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768561.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768567.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768571.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768573.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768586.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768591.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768593.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768596.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768601.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768608.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768612.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768615.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768617.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768622.png" alt="image" width="200">
  <img src="./screenshotsApp/Screenshot_1700768626.png" alt="image" width="200">
</div>

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
