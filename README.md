# Deltatre Frontend Tech Task
Author: Doug Soule
github: https://github.com/souleman13/tech_task
netlify deploy: https://condescending-joliot-73cb61.netlify.com

# What and Why

The contraints of this tech challenge were very broad. I choose to do something simple and a little
outside of my comfort zone to showcase how excited I am to pick up and learn new things. The primary contraint
that caught my eye was something like 'choose wether or not to use libraries or frameworks'. This got me thinking,
I almost always build using some kind of tool, library, or framework on top of the language. This task I scrapped that idea
and went back to VanillaJS. The toughest challenge was calling the local index.html file. This caused a CORS error in chrome. The solution is simple, spin up a small websever that hosts index.html on localhost. With more time this would likely be the next thing I add. Fortunately when I deploy the netlify this also resolves the issue. This project has no dependencies, no build commands, no extra anything. To prove this I deployed
only the source folder with no commands to netlify.

Install: clone repo and open `index.html` in any browser
