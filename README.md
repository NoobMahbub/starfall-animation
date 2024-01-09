# **starfall-animation**

## Animation package like popular image editor Canva for HTML, VanillaJS, React and Typescript Projects
starfall-animation is simillar to popular image editor website Canva's Starfall Animation.
You can use this package on HTML, VanillaJS, React and Typescript Projects by following our documentation from below.
### **Installation**

```markdown
yarn add starfall-animation
or
npm i starfall-animation
```

## Usage

### How to use starfall-animation on HTML/CSS/JS projects?

Wait you can't use starfall-animation directly on HTML/CSS/JS projects.
You need to create a Vanilla project using this command ```npm create vite@latest``` 
### HTML/VanillaJS Project Example
#### index.html 
```
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

### Example Explanation

In this example, used ```vite``` to create a vanilla project.
Installed the starfall-animation package using ```npm i starfall-animation```
After that, we created a div with starfall id because our package depends on this id and work with only this id.
Then we added ```<script type="module">

    import { starfall } from "starfall-animation";
    import 'starfall-animation/style.css';
    starfall();

  </script>``` before ```</body>``` tag of our ```index.html``` and imported necessary resources from our package.
Then we called ```starfall()``` function and voilla it works like a charm.


### How to use starfall-animation on React/Typescript projects?
Make sure to remove ```<React.StrictMode>``` from main.jsx otherwise this will render 2 times or double stars 
#### ```App.jsx or App.tsx```
```
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

Here I am calling starfall() function inside useEffect() 
And created a div using starfall id to inject the styles inside it.
Our package depends on this id and work with only this id.

### How to customize style of starfall-animation in HTML, Vanilla JS, React and Typescript Project?

To add your custom style you need to comment out default style which you have imported 
```<!-- import 'starfall-animation/style.css' -->```

Then add below ```style.css``` to your index.html/App.jsx/App.tsx and change the css color or other properties as you wish 
#### style.css
```
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

If you want to contribute to this project,fork the [repository](https://github.com/NoobMahbub/starfall-animation) and clone it to your local machine. Commit your changes and push your changes to your forked repository. Finally, open a pull request with a detailed description of your changes. I highly appreciate any contributions.

# Issues

If you are facing any problem feel free to share [repository](https://github.com/NoobMahbub/starfall-animation/issues)