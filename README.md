twm-travel-journal


##Travel Journal

This was a tech demo I put together to gain better familiarity with React and Typescript in particular.

Link to project: https://twm-travel-journal.netlify.app



#How It's Made:
Tech used: HTML, CSS, JavaScript, React, Typescript, Vite, Netlify CLI

The basic premise of the site is quite simple, it's just a react front end mapping over an array of objects containing travel information.

#Optimizations

I structured the project with vite so I could benefit from it's enhanced developer experience and structure.  I used typescript to give me better stability and to be able to strictly type the model for the location information. I packaged the project with vite and deployed it to netlify using their excellent CLI.

#Lessons Learned:
Putting the react components together was straight forward, the difficulty I had was with making typescript play ball.  This is kind of the point with typescript, rather than spending your time debugging afterwards, you spend your time setting up in advance with little to no problems after the fact. 

The two main problems typescript had were with the model itself and with exporting the data file as a module to be imported to the react components.

1.  Module exports : I learned in particular that you need to set up .d.ts files with specific typing to do this. there are a number of different ways to do this with varying levels of effort/benefit, from the research I did, people sometimes even ignore the error or add in "any" to everything - to be honest this totally defeats the purpose of typescript in my opinion.  Instead I typed the location model as an object with each property set to a string.  I then typed the array separately which worked perfectly.

2.  Regular Icons don't always play ball with react/typescript.  You need a special npm middleware with the @types defined for you. I used https://www.npmjs.com/package/react-icons react-icons which contains a HUGE variety of packs and more importantly is highly compatible with typescript.

3.  tsconfig.json is your friend, I was able to manually assign the typeroots for the .d.ts files and solve my module problems.

Despite the extra time it took to set up with typescript - I felt it was well worth it.

Examples:
Take a look at these couple examples that I have in my own portfolio:

Digital Business Card: https://github.com/TheWoodenMan/twm-business-card - This was one of the first Typescript/React projects I did.

CPD Easy - Learning journal app: https://github.com/TheWoodenMan/twm-cpd-log = Elements of this full stack app could actually be used to make the travel app full stack and able to receive and generate journal posts.

Cocktail Club API: https://github.com/TheWoodenMan/cocktail-db-carousel - elements of the project reminded me of the carousel I made a few months back, it could easily be templated to react and set up to serve cocktail cards with the api data passed in as props
