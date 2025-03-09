# Personal Website App Frontend Remake

### 言語設定
[English](README.md)  
[**日本語**](README-JP.md)　＜ー  

自分の個人サイトのフロントエンド (https://github.com/kurisuamadeus/personal-website-app) のリメイクプロジェクトです。Next.jsとTailwindCSSを使ってリメイクを作りました。

## このプロジェクトにはオリジナルに比べれば、何が違うのか？
- このプロジェクトのスタイリングには、基本的にTailwindCSSに使用します。その結果、CSSファイルの数を減らすことができました。
- このリメイクには、このリメイクのメインとなるSSR（「Server Side Rendering」、サーバー側からレンダリングを行うテクニック）のアプローチを使います。Next.jsを使うの一番の理由はまさにこのSSRアプローチがNext.jsのメイン機能その一つからです。SSRのアプローチはデータもしくはテキストをレンダリングするとき、わずかなディレイがあるていうオリジナルにあった問題を解決するために使いました。つまり、オリジナルみたいにクライアント側からデータのフェッチを行うではなく、サーバー側から行われることになりました。ページをロードするとき、テキストデータすでにある状態にページのレンダリングを行う。
- In this remake, I use Next.js App Router instead of normal react router to make it easier to maintain. 
- このプロジェクトには、普通のreact routerを使うではなく、メンテナンスしやすくようにNext.jsの「App Router」を使います

## 使用するスタック（プログラミング言語、フレームワークなど）
- Typescript
- Next.js
- Bootstrap (React Bootstrap)
- TailwindCSS

## 使用するライブラリ
- zustand
- axios
- yup
- react-hook-form
- react-string-format
