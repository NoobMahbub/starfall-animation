# **starfall-animation**

 A simple animation package like popular image editor [Canva's](https://canva.com) starfall animation <br>
 Usable in HTML, VanillaJS, React and Typescript Projects.

## Demo Video

Click on below image to watch the video 👇
[![Demo Video](https://img.youtube.com/vi/R6Ai9tFk5YY/maxresdefault.jpg)](https://youtu.be/R6Ai9tFk5YY?si=Loej7WB2ANKw2Nzx)

starfall-animation is simillar to popular image editor website Canva's Starfall Animation. <br>
You can use this package on HTML, VanillaJS, React and Typescript Projects by following our documentation from below.<br>

This package is fully customizable that means you can change any style as you want. You can also use it with CSS framework like Tailwind/Bootstrap.
## Documentation

- [Installation](#installation)
- [Usage](#usage)
  - [HTML/VanillaJS Example](#HTML/VanillaJS-Example)
  - [React/Typescript Example](#React/Typescript-Example)
  - [Customize Styles](#Customize-Styles)
- [Contributions](#Contributions)
- [Issues](#Issues)
- [Our Community](#Our-Community)
- [Support Me](#Support-Me)
- [Hire Me](#Hire-Me)  


### Installation

```bash
npm install starfall-animation
```

or

```bash
yarn add starfall-animation
```

## Usage

### How to use starfall-animation on HTML/CSS/JS projects?

Wait you can't use starfall-animation directly on HTML/CSS/JS projects. <br>
You need to create a Vanilla project using this command ```npm create vite@latest``` 
### HTML/VanillaJS Example
#### index.html 
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>starfall-animation Example</title>
</head>

<body>
  <div style="height: 500px; width: 500px;margin: 0 auto;" id="starfall">

  </div>

  <script type="module">

    import { starfall } from "starfall-animation";
    import 'starfall-animation/style.css';
    starfall();

  </script>

</body>

</html>
```

### HTML/VanillaJS Example Explanation

In this example, used ```vite``` to create a vanilla project.<br>
Installed the starfall-animation package using ```npm i starfall-animation```<br>
After that, we created a div with starfall id because our package depends on this id and work with only this id. <br>
Then we added: 
  ```html
  <script type="module"> 

    import { starfall } from "starfall-animation";
    import 'starfall-animation/style.css';
    starfall();

  </script>

  ```
  
before ```</body>``` tag of our ```index.html``` and imported necessary resources from our package. <br>
Then we called ```starfall()``` function and voilla it works like a charm.


### React/Typescript Example
Make sure to remove ```<React.StrictMode>``` from main.jsx otherwise this will render 2 times or double stars 
#### ```App.jsx or App.tsx```
```jsx
import { useEffect } from 'react'
import { starfall } from 'starfall-animation'
import 'starfall-animation/style.css'

function App() {
  useEffect(() => {
    const faKitUploadElement = document.getElementById('fa-kit-upload');

    if (!faKitUploadElement) {
      starfall();
    }
  }, []);

  return (


    <div style={{ height: '500px', width: '500px', background: 'linear-gradient(145deg, rgb(119, 46, 195), rgb(58, 18, 153))', }} id="starfall">

    </div>

  )
}

export default App


```

Here I am calling starfall() function inside useEffect() <br>
And created a div using starfall id to inject the styles inside it. <br>
Our package depends on this id and work with only this id. <br>

### Customize Styles

To add your custom style you need to comment out default style which you have imported <br>
```<!-- import 'starfall-animation/style.css' -->``` <br>

Then add below ```style.css``` to your index.html/App.jsx/App.tsx and change the css color or other properties as you wish 
#### style.css
```css
#starfall {
    --glow-rgb: 239 42 201;

    background: linear-gradient(145deg, rgb(119, 46, 195), rgb(58, 18, 153));
    height: 100vh;
    overflow: hidden;
}

#starfall * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#starfall .glow-point {
    position: absolute;
    box-shadow: 0rem 0rem 1.2rem 0.6rem rgb(var(--glow-rgb));
    pointer-events: none;
}

#starfall .star {
    position: absolute;
    z-index: 2;
    color: white;
    font-size: 1rem;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    pointer-events: none;
}

@keyframes fall-1 {
    0% {
        transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25);
        opacity: 0;
    }

    5% {
        transform: translate(10px, -10px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1);
        opacity: 0;
    }
}

@keyframes fall-2 {
    0% {
        transform: translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(0.25);
        opacity: 0;
    }

    10% {
        transform: translate(-10px, -5px) rotateX(-20deg) rotateY(10deg) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25);
        opacity: 0;
    }
}

@keyframes fall-3 {
    0% {
        transform: translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5);
        opacity: 0;
    }

    15% {
        transform: translate(7px, 5px) rotateX(0deg) rotateY(45deg) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(0.5);
        opacity: 0;
    }
}
```

# Contributions

If you want to contribute to this project,fork the [repository](https://github.com/NoobMahbub/starfall-animation) and clone it to your local machine. <br>
Commit your changes and push your changes to your forked repository. <br>
Finally, open a pull request with a detailed description of your changes. I highly appreciate any contributions.

Special thanks to Hyperplexed who indirectly contributed on this project.

# Issues

If you are facing any problem feel free to share [here](https://github.com/NoobMahbub/starfall-animation/issues)

# Our Community

You can also post your problems in our community for any kind of support 👨‍💻<br>

TechHelpBD is one of the best technology based knowledge sharing Community <br>
► Like Our Facebook Page=>https://facebook.com/TechHelpBD <br>
► Join Our Facebook Group=>https://facebook.com/groups/TechHelpBangladesh <br>
► Join Our Telegram Group=>https://t.me/TechHelpBangladesh <br>
► Join Our Discord Server=>https://discord.gg/FFyVXZze4F <br>
► Join Our Whatsapp Group=>https://chat.whatsapp.com/KsnXhnqsG9g3lxXE6nMheE <br>
► Subscribe Our YouTube Channel=>https://youtube.com/TechHelpBangladesh <br>
🌐Our Official Website: https://TechHelpBD.com <br>

We recommend you to post your problems on our Facebook group and Github repo issues section first to get early response.

# Support Me

☕ Buy Me a Coffee: https://buymeacoffee.com/MahbubDev

<a href="https://www.producthunt.com/posts/starfall-animation?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-starfall&#0045;animation" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=434244&theme=light" alt="starfall&#0045;animation - NPM&#0032;Package&#0032;like&#0032;popular&#0032;editor&#0032;Canva&#0039;s&#0032;starfall&#0032;animation | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

# Hire Me

❒ Fiverr: https://cutt.ly/owHcCvkR <br>
❒ UpWork: https://upwork.com/freelancers/~0165010699ff14d094

