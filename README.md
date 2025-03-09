# Personal Website App Frontend Remake

### Language Setting
[**English**](README.md)　＜ー  
[日本語](README-JP.md)  

This is a remake of my personal website app project frontend (https://github.com/kurisuamadeus/personal-website-app) using Next.js and change the styling to using TailwindCSS mainly.

## What the difference between this project and the old one?
- The styling in this project mainly done using TailwindCSS which reduce the number of CSS file need to be used and maintained.
- In this remake, I tried to use SSR (Server Side Rendering) approach which is one of Next.js main feature and the main reason I decided to remake this project. Because I notice that there is a delay on displaying text/data in the website which is not really appealing. So instead of fetching data in a client like the old version, this time, it'll be done in server instead. So when my website being displayed, it already has the data needed to be displayed.
- In this remake, I use Next.js App Router instead of normal react router to make it easier to maintain. 

## Stack being used
- Typescript
- Next.js
- Bootstrap (React Bootstrap)
- TailwindCSS

## Library being used
- zustand
- axios
- yup
- react-hook-form
- react-string-format
