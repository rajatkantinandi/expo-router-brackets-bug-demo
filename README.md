# Expo Router Example

A minimal reproducible demo for expo router Link brackets bug

## 🚀 How to use

```sh
npm i
npm start
```

## How to reproduce the issue?

- Start the server, open on web.
- You will see 3 links.
- 1st link goes to the proper page with proper route params
- 2nd and 3rd link has brackets in the title param and the param is removed. If you go to the 2nd or 3rd link it lands on page 2 but title is not present in the URL and not rendered.
- I think it is due to the fact that Expo is trying to match its paths which can have brackets. But it should not perform the matching on the query parameters. I think it is executing [stripGroupSegmentsFromPath](https://github.com/expo/expo/blob/355469e399bf9c2bed22e39d11037891c9620736/packages/expo-router/src/matchers.tsx#L52) function in the process which is removing this part. But more investigation is needed on this.

## 📝 Notes

- [Expo Router: Repo](https://github.com/expo/expo/tree/main/packages/expo-router)
