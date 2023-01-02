<script>
  import moon from "./moon.svg";
  import sun from "./sun.svg";
  import down from "./arrow-down.svg";
  import down_white from "./arrow-down-white.svg";
  import juve from "./juve.svg";
  import { onMount } from 'svelte';
  let dark=false;
  let copied = false;
  let src;
  let src2;
  let loaded = false;
  let greetings = ["Hola", "olá", "أهلا", "你好", "Привет", "नमस्ते", "ciao", "Bonjour", "Hello."];
  let hello=greetings[0];
  $: if(dark) {
      src=sun; 
      src2 = down_white;
  } else {
      src=moon;
      src2=down;
  }

  let languages = [
      {name: "Svelte"},
      {name: "Solidity"},
      {name: "Ethers"},
      {name: "C"}, 
      {name: "C++"}, 
      {name: "Python"}, 
      {name: "Node"}, 
      {name: "React"}
  ]

  function delay(miliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, miliseconds);
  });
}

async function clicked() {
  await navigator.clipboard.writeText("jmilad@uwaterloo.ca");
  copied = true;
  await delay(1500);
  copied=false;
}

  onMount(async () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches){
          window.document.body.classList.toggle('dark');
          dark=true;
      }
      else {
          window.document.body.classList.toggle('light');
      }
      await delay(500);
      for(let i = 1; i<greetings.length; i++) {
          hello=greetings[i];
          await delay(500);
      }
      await delay(1000);
      loaded=true;
});

</script>
{#if (!loaded)} 
<h1 style = "position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);">{hello}</h1>

{/if}
{#if loaded}
<div class="content">
<div class='navbar'>
  <a id="skills" class="element" class:dark >Skills</a>
  <a id="projects" class="element" style="margin-right: auto"  class:dark >Projects</a>
  <a class= "element" class:dark id = "github" href="https://github.com/jasonmilad">Github</a>
  <a class= "element" class:dark id = "Linkedin" href="https://www.linkedin.com/in/jasonmilad/">Linkedin</a>
  <div class= "element" class:dark id = "email" on:click={clicked} style = "display:relative">jmilad@uwaterloo.ca {#if copied}
      <div style = "position:absolute; top: 3.7rem; text-align: center;">Copied!</div>
  {/if} </div>
  
  <img class= "element" id = "logo" class:dark {src} on:click= {() => {dark=!dark; window.document.body.classList.toggle('dark'); window.document.body.classList.toggle('light');
}}>
</div>

<div id = "intro">
<h1>Jason Milad</h1>
<p>Entrepreneur. Programmer. Student.</p>
</div>

<!-- <p>Click to view tech stack</p>
<img src={src2}>

<div id="languages">
  
{#each languages as language}
<div class="language" class:dark>
<p>{language.name}</p>
</div>
{/each} 
</div> -->
</div>  
{/if}
<style>

:global(body.light) {
  background-color: white;
}

@font-face {
  font-family: 'Nunito';
  src: url("./Nunito_Sans/NunitoSans-Light.ttf");
}

@font-face {
  font-family: "Inconsolata";
  src: url("./Inconsolata/static/Inconsolata/Inconsolata-Regular.ttf");
}

@font-face {
  font-family: "Forza Juve";
  src: url("./forza-juve/forzajuve-regular.otf");
}

:global(body.dark){
  background-color: #121212;
  color: white;
}

#j {
  height: 2rem;
  margin-right: auto;
}

#j.dark {
  filter: invert(100%);
}

a{
  text-decoration: none;
  color: black;
}

a.dark {
  color: white;
}
#logo.element {
  transition: box-shadow 0.5s;

}

.element {
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background-color 0.5s;
  font-family: "Nunito";
  padding: 0.5rem;
  text-align: center;
  height: 0.8rem;
  display: flex;
  align-items: center;
  background-color: rgba(199, 199, 199, 0.2);
}

@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }
}

.content {
animation: fadeIn 2s;
}
.forza {
  font-family: "Forza Juve";
  pointer-events: none;
}

#logo.element:hover {
  box-shadow: 0 0 10px 10px black;
  transition: box-shadow 0.5s;
}

.element:hover {
  background-color: rgba(199, 199, 199, 0.6);
  transition: background-color 0.5s;
}

#logo.element.dark:hover {
  box-shadow: 0 0 10px 10px white;
}
#logo {
  border-radius: 50%;
  height: auto;
}

.navbar {
  padding: 1%;
}
#languages {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 7%;
}

.language {
  background-color: #c7c7c7;
  border-radius: 2rem;
  padding: 0.5rem;
  text-align: center;
  width: 4rem;

}
.logo {
  width: 50%;
  margin-top: 0.5rem;
}

h1, p {
  text-align: center;
  font-family: "Nunito";
}

.navbar {
  display:flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
}

#intro {
  margin-top: 25vh;
}

.element.dark {
  background-color: rgba(72, 72, 72, 0.5);
}

.element.dark:hover {
  background-color: rgb(72, 72, 72, 0.9);
}

@media (prefers-color-scheme: dark) {
  :global(body) {
      background-color: #121212; 
  }
}

@media (prefers-color-scheme: light) {
  :global(body) {
  background-color: white;
  }
}



</style>