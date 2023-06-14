# generative-art-workshop
Introduction to algorithmic thinking, conditional design and generative art using [p5js](https://p5js.org/) &amp; Javascript

![examples](https://raw.githubusercontent.com/stc/generative-art-workshop/main/assets/examples-three.jpg)

This workshop introduces the fundamentals of algorithmic thinking and generative computer imaging. Participants can learn how to make artworks and creative visualizations using data, code, and interaction. Since there is an increasing overlap between cultural and human fields with technological and engineering domains among dynamically evolving networked communities, new kinds of languages are emerging that require both analytical and logical thinking as well as intuitive and proactive approaches from creators.

Generative art refers to art that in whole or in part has been created with the use of autonomous systems. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist. Very often, this system relies on repetition, geometric transformations or randomness, but you can feed it any kind of value from simple noise to complex data or your own formalized systems.


## topics

### language

A convenient, beautifully written introduction on Designing Programs can be found [here](https://designingprograms.bitbucket.io/index.html). A more comprehensive guide on the JavaScript language can be found [here](https://javascript.info/) and there is a [cheatsheet](https://htmlcheatsheet.com/js/) that might become handy to use as a reference. Since we are using the [p5js](https://p5js.org/) library to display shapes, colors and motion in the canvas, make sure to check the [getting started](https://p5js.org/get-started/) section and explore the [reference](https://p5js.org/reference/) to see the capabilities of the language modules. There are three main concepts we are covering during the intro section:

- _variables_: storing data
- _functions_: manipulate data
- _events_: loops, conditionals and structure


### computation

For an image of reasonable size, even the simplest algorithms require too much calculation for manual execution to be practical, and they are thus executed on either a single computer or on a cluster of computers. The final output is typically displayed on a screen, printed with a raster-type printer, or drawn using a plotter. Variability can be introduced by using pseudo-random numbers. On the workshop we cover a wide range of computational concepts and algorithms from ordered structures to chaotic systems, based on the findings in a conference paper on [Artificial Intelligence and Problems in Generative Art Theory](https://www.researchgate.net/publication/334643022_Artificial_Intelligence_and_Problems_in_Generative_Art_Theory) by Philip Galanter.  

![complexity diagram](https://raw.githubusercontent.com/stc/generative-art-workshop/main/assets/algo-complexity.png)

### representation

Since generative art represents internal structures of formalized systems, it usually has abstract visual taxonomies, composed of simple geometric shapes, like points, lines and polygons. Paul Klee, the famous artist of the Bauhaus has made some very interesting research on the language of lines in his [Pedadogical Sketchbook](https://www.bauhaus-bookshelf.org/bauhaus_book_2_paul_klee_pedagogical_sketchbook_pdf_download.html), which come very close to the theories of [Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles) that are dealing with human perception and cognition in relation with shapes. Apart of forms, another dimension of visually representing a system is the theory of colors. Many generative artists select one of the simplest approaches: each element gets a random color, or each element gets a color randomly selected from a predefined palette. There are higher-level strategies that you can use to compose, organize, and arrange your color choices, Tyler Hobbs covered this area in a very comprehensive way within his [Color Arrangement in Generative Art](https://tylerxhobbs.com/essays/2021/color-arrangement-in-generative-art) essay. And then of course, depending on the system, the final representation can take form of a pixel based exported image/animation that can be viewed on an electronic screen, a complete interactive scene to be experienced in an interactive, dynamic way on the web, composed as a set of scalable vectors to be printed out using a plotter or CNC machine, or even a 3d object model to be used in virtual environments.  


## tools

We are using the free and open source [p5js](https://p5js.org/) library to create shapes and forms on the canvas, in Javascript language. The simplest way to get started is to use the excellent [online p5 editor](https://editor.p5js.org/), however if you plan to bring your pieces offline and continue working on them in a more elaborative way, it is useful to clone this repository and use the open source, cross platform editor [VSCodium](https://vscodium.com/) with your projects. 

## examples

The basic sketches are available within the `examples` folder of this repository, however they are also available to try in the online editor for easier access:

- [empty](https://editor.p5js.org/stc/sketches/6pm0J_GuY): create an empty canvas in the browser window
- [shape](https://editor.p5js.org/stc/sketches/uTPLZtvik): display a shape on the canvas
- [translate](https://editor.p5js.org/stc/sketches/pLjQFItyU): translate shapes in the coordinate system
- [loop](https://editor.p5js.org/stc/sketches/Nv2S5fE8o): animate the contour of a shape over time
- [rotate](https://editor.p5js.org/stc/sketches/cw9fTuq9l): rotate a shape over time 
- [rectangles](https://editor.p5js.org/stc/sketches/XEaW4Nxml): display many random rectangles 
- [colors](https://editor.p5js.org/stc/sketches/DYuD3jL3G): iterating over color systems
- [recursion](https://editor.p5js.org/stc/sketches/OQ3F3E4W6): a function that calls itself
- [patterns](https://editor.p5js.org/stc/sketches/wgcnEYHsu): grids, repetition, tiling
- [noise](https://editor.p5js.org/stc/sketches/aCLrvuB5s): classes, particle systems, perlin noise

## resources

### algorithms & code
- [The Nature of Code](https://natureofcode.com/) by Daniel Shiffman
- [Algorithmic Rituals](https://www.e-flux.com/journal/101/273221/three-thousand-years-of-algorithmic-rituals-the-emergence-of-ai-from-the-computation-of-space/) by Matteo Pasquinelli 
- [Conditional Design](https://conditionaldesign.org/) by Luna Maurer et al
- [Morphogenesis Resources](https://awesomeopensource.com/project/jasonwebb/morphogenesis-resources) by Jason Webb
- [Designing Programs](https://designingprograms.bitbucket.io/index.html) by Mark Webster
- [Artificial Intelligence and Problems in Generative Art Theory](https://www.researchgate.net/publication/334643022_Artificial_Intelligence_and_Problems_in_Generative_Art_Theory) by Philip Galanter

### visual language & art
- [Pedagogical Sketchbook](https://www.bauhaus-bookshelf.org/bauhaus_book_2_paul_klee_pedagogical_sketchbook_pdf_download.html) by Paul Klee
- [Early Computer Art](https://www.amygoodchild.com/blog/computer-art-50s-and-60s) by Amy GoodChild
- [Long-form Generative Art](https://mirror.xyz/buffets.eth/33Qj-lYWwBTkxo1K5lJJ1MHgeZmc-i0jXoCAdzyEFZU) by Eugene Ang
- [Color Arrangement](https://tylerxhobbs.com/essays/2021/color-arrangement-in-generative-art) by Tyler Hobbs
- [Generative Art Systems](https://www.fxhash.xyz/article/generative-art-systems-an-epistemological-approach) by me

### web3 & cryptoart communities 
- [After the Creator Economy](https://collect.metalabel.xyz/files/After-The-Creator-Economy.pdf) by Metalabel
- [Crypto Art Reading List](https://github.com/crcdng/nft-reading-list/blob/main/reading.md) by Michael Straeubig
- [Tezos Art Communities](https://www.fxhash.xyz/article/tezos-art-communities) by me
- [Radical Friends](https://ruthcatlow.net/?works=radical-friends-decentralised-autonomous-organisations-and-the-arts) by Ruth Catlow and Penny Rafferty
- [Right Click Save](https://www.rightclicksave.com/) by ClubNFT



