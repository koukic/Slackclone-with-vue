//firebase.jsをgitignoreしているため

import firebase from 'firebase/app'// firebase 全般の機能を利用するために必要
import 'firebase/auth'// ログイン機能を使うために読み込み
import 'firebase/firestore'// データベース機能を使うために読み込み
// firebase の準備が出来ている場合のみに設定する
if (!firebase.apps.length) {
 const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
 }
 firebase.initializeApp(config)// config によって firebase の設定を行う
}

const db = firebase.firestore()// データベースを定義
export {
 firebase,
 db
}
