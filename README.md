## android 실행 시 주의사항

```
vscode terminal에서 npm run android(react-native run-android)를 하게 되면
adb 권한이 없어서 실행이 되지 않는다.

그러므로 mac terminal이나 iterm에서 실행시켜야 한다.
```

```
// 에러사항

> react-native run-android

info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 864 file(s) to forward-jetify. Using 8 workers...
info JS server already running.
/bin/sh: adb: command not found
info Launching emulator...
error Failed to launch emulator. Reason: No emulators found as an output of `emulator -list-avds`.
warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.
info Installing the app...

FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring project ':app'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/mac/Documents/RN_Project/react_native_basic/my_first_app/android/local.properties'.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
```





---

## react native 기본 원리

```
js -> react native -> (ios, android platform) `JS Bundle`

`JS Bundle`은 각 플랫폼의 `JS Thread`에 의해 실행된다.
각 플랫폼에서 앱을 실행하기 위핸 `Native Threads`는 `JS Thread`와 직접 통신할 수 없어 React Native에서 제공하는 `Bridge`에 의해 상호작용을 한다.
```

```
'JS Bundle'을 만드는 방법 2가지

1. Expo CLI
장점: 개발 환경 구축 용이, 실제 개발 쉽고 편함
단점: OS Layer와 직접 상호작용 불가능(자바 코틀린 오브젝트-C, 스위프트로 추가 작성 불가)
Expo에서 제공해주는 모듈만 사용 가능
개발 관점 자유도 낮음

2. React Native CLI
장점: Expo로 접근 못하는 Native 기능에 접근 가능
원하는 언어로 추가 작성 가능
필요한 기능 모듈 직접 제작 가능
OS Layer와 직접적인 상호작용 가능
단점: 초기 개발환경 구축 및 실제 앱 개발 시 다소 시간 소요
Mac 환경일 때만 ios/android 지원, 윈도우는 android만 지원
```

```
1. nvm 설정 (node 특정 버전 설치 가능)
https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1

2. 안드로이드 스튜디오 설치
3. 자바 설치
4. xcode 설치
xcode 설정 -> preferences -> locations -> command line tools 선택 확인

5. cocoapod 설치(ios 프로그램)

6. React Native CLI 설치
```

```
안드로이드 스튜디오 환경설정
vi ~/.bash_profile

export ANDROID_HOME=/Users/mac/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

