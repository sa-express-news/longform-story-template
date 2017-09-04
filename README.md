# SAEN Longform Story Template #

This story template lets you spin up special presentations of longform journalism projects for use in the WCM. We've used this template on many projects, including:

- [40 Days of Mourning](http://www.expressnews.com/40-days-of-mourning/)
- [The Abortion Divide](http://www.expressnews.com/abortion-in-an-altered-texas-landscape/)
- [30 Years after the Comfort Flood](http://www.expressnews.com/comfort_texas_30_year_anniversary/)
- [Ticket to the Top](http://www.expressnews.com/st-anthony-basketball-ticket-to-top/)

As you can tell, the story template is a living project, and it's come a long way since the first use. The top story in the list above reflects the most recent use, and projects created using this template will match the most recent project's look. (Of course, you're free to tweak to your heart's content).

The template uses [ArchieML](http://archieml.org/), a text format created by the New York Times, to organize story text + photos + other assets in a way that both humans and machines can understand. We transform that ArchieML into [JSON](https://en.wikipedia.org/wiki/JSON) - a standardized file format - and pass it to the JavaScript library [React](https://facebook.github.io/react/) to render the longform story.

Sound confusing? It can be at first. Luckily, the project knows where to look for these files, and most of the work takes just a few commands. However, you will need a few things to make this process run smoothly:

- A rudimentary understanding of code (you'll be following instructions, so don't worry too much about this)
- The ability to install programs on your computer (sorry, Windows users on Hearst machines!)
- All of the photos+text+other assets for the story you're working with (You can add more later, but it's simpler to do it all at once)
- Patience. Things _will_ go wrong your first time, so try to budget an afternoon to work through this guide.

Ideally, you should start this process once you have all the final assets for the story in hand - _and_ a few days' lead time. Editors and reporters _will_ notice typos, errors and other fixes to be made once they see the story live on the page. Fixing them is extremely simple - you just need time so you don't have to stay at work until 10 p.m. the night before the story runs.

Let's begin!

## Getting Started ##

You'll need the following programs installed on your computer to work through this guide:

- [Node.js](https://nodejs.org/en/), a JavaScript runtime that powers just about everything else we'll do (install the LTS version recommended for most users)
- [Git](https://git-scm.com/downloads), source control management software that makes copying code a breeze.
- A text editor to write and edit code - I recommend [Sublime Text](http://www.sublimetext.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- The ability to access and run commands on your computer's command line (Terminal if you're on a Mac)

## Setting up the Repository ##

Before starting on the story, we're going to set up a Git repository on our computer to house this project. If you're not familiar with Git, it basically allows you to take snapshots of files and folders. You can revert to any earlier snapshot if you screw something up, and Git will revert all the files to the state they were in at the moment of that snapshot.

Git stores those files and folders in _repositories_. Repositories can also exist online, so anyone with access can copy them and work from them. This is extremely useful when you take a day off and someone else needs to make edits to the longform story - it lives online, not just on your machine, so it's easy for them to change and make a _new_ snapshot.

We're going to do a few things in this section:

1. Copy the longform template repository into a new folder on our computer
2. Make a _new_ repository in the Express-News GitHub account, specifically for this longform story.
3. Set up our local repository to _push_ updates to the GitHub repository we create, so anyone can access it and make changes as needed.

### Configuring Git ###

If this is your first time using Git, we'll need to set up your username and email address. This is so, when you make changes to repositories, others will know who those changes belong to.

Open up a command line terminal and type the following code, then hit enter:

`git --version`

You should see something like `git version 2.7.4` appear on your screen. This is just to check that Git is installed - you'd get an error if it wasn't. If Git isn't installed, you can refer back to [the instructions on the Git website](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git) for adding it to your machine.

Back on the command line, let's set your user name:

`git config --global user.name "Your Name"`

Obviously you'll want to swap "Your Name" for yours - so I would write `git config --global user.name "Kia Farhang"` and hit enter.

Let's do email address in the same way.

`git config --global user.email you@emailaddress.com`

Notice you don't need quotes around the email address. I used `git config --global user.email mfarhang@express-news.net`.

Remember, you only have to do this the first time you set up Git - that's what the `--global` flag means. Git now knows to use this name and email address every time.

### Joining GitHub ###

The Express-News uses [GitHub](https://github.com/) to host its repositories online, so we can all access them when needed. Set up an account, then holler at an EN developer like Luke Whyte (lwhyte@express-news.net) or Kia Farhang (mfarhang@express-news.net) and ask them to add you to the Express-News GitHub organization.

Once you're a member of the organization, head to [the longform template repository](https://github.com/sa-express-news/longform-story-template). We're going to _clone_ (or copy) the repository to our computer, so we can turn the template into an actual story.

Head back to the command line, and work to the directory where you want to create the story folder. You can use `cd` to move from one folder to another:

`~/Desktop/$ cd Code`
`~Desktop/Code/$ cd Projects`
`~Desktop/Code/Projects/$ now we're where we want to be!`

Use `cd ../` to move up one level if you go too far:

`~Desktop/Code/Projects/$ cd ../`
`~Desktop/Code/$ yeah, this is good.`

Note that it doesn't really _matter_ where you clone the repo, as long as it's a place you can access whenever you need to. We'll run the clone command like so:

`git clone https://github.com/sa-express-news/longform-story-template.git my-awesome-story`

The `clone` command takes two arguments here: the URL to the repository and the folder to clone everything into. You probably _shouldn't_ name the new folder "my-awesome-story" - I usually just set it to whatever the story's slug is.

You should see some magic happening on the command line that looks roughly like this:

```
Cloning into 'my-awesome-story'...
remote: Counting objects: 210, done.
remote: Compressing objects: 100% (185/185), done.
remote: Total 210 (delta 14), reused 210 (delta 14), pack-reused 0
Receiving objects: 100% (210/210), 6.38 MiB | 1.59 MiB/s, done.
Resolving deltas: 100% (14/14), done.
Checking connectivity... done.
```

Success! Now we can `cd` into the story folder.

`~Desktop/Code/$ cd my-awesome-story`

### Creating a New Repository ###

Wait - didn't we just create the repository?

Well, sort of. We cloned the template, which is what we'll work off of. But we're still tied to the template repository living on GitHub. That's actually a bad thing, because when we change the template to match our story, those changes will overwrite the base template other people work on.

To get around this, we're going to set up a _new_ repository on GitHub that exists only for this particular longform project. Head to the [Express-News GitHub page](https://github.com/sa-express-news). If you had a developer add you to the organization, you should see a green "New" button on the right-hand side of the page. Click that.

We're now creating a new repository, so we need a name and description. I typically just make the name match the folder I created for the project - i.e. `my-awesome-story`. My description is usually something like `longform React template for the xxx story`.

_Note: it's a good idea not to get too descriptive here in both your repo name and description. Because our repositories are public, anyone can see them - and therefore see what we're working on._

Ignore the rest of the options and click the green "Create repository" button. On the next screen, you'll see an empty repo. Time to push our code here.

Head back to the command line. Before pushing to the new GitHub repository we created, we need to remove the "remote" our local repository currently has. That way we won't push anything to overwrite the template.

When you're in your story repo, run the following command:

`Desktop/Code/my-awesome-story/$ git remote rm origin`

This says, "Remove (rm) the remote repository known as origin from your memory." To be sure it worked, run this command to show all your remotes:

`Desktop/Code/my-awesome-story/$ git remote -v`

Nothing should happen when you hit enter. That's great! Now we can add the repo we just created on GitHub as the remote origin:

`Desktop/Code/my-awesome-story/$ git remote add origin https://github.com/sa-express-news/my-awesome-story.git`

One last step: let's push all the work we've done so far up to GitHub. Run the following command:

`Desktop/Code/my-awesome-story/$ git push -u origin master`

The command line should ask for your GitHub username. Enter it, then press enter. It'll ask for your password. Don't freak out if you don't see it show up as you type: it purposely hides the text so someone looking over your shoulder can't see it.

You'll see something like this after entering your credentials: 

```
Counting objects: 210, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (199/199), done.
Writing objects: 100% (210/210), 6.38 MiB | 1.06 MiB/s, done.
Total 210 (delta 15), reused 0 (delta 0)
remote: Resolving deltas: 100% (15/15), done.
To https://github.com/sa-express-news/my-awesome-story.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

That means you successfully pushed to GitHub! To test, refresh the GitHub repository. You should now see a bunch of files and folders.

We'll push changes to our project a few times during this guide. I'll walk you through every time, but it'll always work like this. First, we'll run `git add .` - that adds all the changed files in the project to the "staging area," where they're ready to be "committed."

"Committing" files is basically your way of telling Git, "Yes, I want you to take a new snapshot of these files." You should err on the side of committing _too_ often, because it costs you virtually nothing and it gives you more points to roll back to if you make a mistake. It's best to commit by writing a message explaining what you did, like so:

`git commit -m "Here are all the things I did this time!"`

That way you can look back at your commits to know when you did what. 

Whenever you push to GitHub using `git push origin master`, every commit you've made since the last push will get added to the remote repository. You don't _need_ to push after every commit, but you probably should - it takes a few seconds, and it ensures that others can grab the most recent version of your work if they need it.

Okay, thus ends our long detour into Git basics. Let's actually build a longform story, shall we?

## Launching the Project ##

Our project - like just about anything built with Node.js - relies on dozens of third-party "packages" to run properly. These handle all kinds of background processes, and we won't be able to build a longform story without them. Luckily, installing them is super simple. There's a file in our repository that tells NPM, the Node Package Manager, which packages are needed. Enter the root directory of your repository and run the following command:

`Desktop/Code/my-awesome-story/$ npm install`

You'll start to see a progress bar fill up - this is tracking NPM's installation of all the necessary packages. You may want to grab coffee or take a walk; on a slow machine this installation can take a couple of minutes.

Once done, you should be back on the terminal with a couple warnings like this:

```
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN sass-loader@6.0.6 requires a peer of webpack@^2.0.0 || >= 3.0.0-rc.0 || ^3.0.0 but none was installed.
```

These are not urgent and for the purposes of this guide, we'll ignore them. (Oh - and if you get an error running your install, you may need to do a `sudo npm install` instead to run it as a superuser.)

Now that everything is installed, we can run our other NPM commands to work with the project. Get back into the terminal and run `npm run start`. You should see a few things happening - wait a while until you...

Ta-da! The terminal just opened a new tab in your internet browser. When that tab finishes loading, you should see a longform story!

The `npm run start` command does a few things:

1. "Compiles" all the files making up our "app" (the longform story)
2. Starts a small server, accessible only on your local machine
3. Serves the app on that server
4. Opens a browser tab with the url `http://localhost:3000/`, which is the access point for the server (and your app)

This makes it easy to preview your longform story and make sure everything looks good before you throw it into the WCM. What's even better is that, as long as you leave the terminal running `npm run start` running, changes to the story you make will automatically tell it to recompile everything and refresh your browser. Live changes make editing a whole lot simpler.

If your computer is decently powerful, you can just leave this terminal running for the rest of this walkthrough. If it starts slowing you down or you otherwise need to close it, just hit `CTRL + C` to close the process and get back to the terminal.

### Making Our First Edit ###

So how does this all work? Well, like I mentioned above, the story lives in an ArchieML file. There's a command I'll show you shortly to translate that Archie into JSON, and the React application turns that JSON into the paragraphs, headings, images and other assets you see on your screen.

Let's make a quick edit to the story to see how it all works.

Open up the entire project folder in your text editor like Sublime or Visual Studio Code. You'll see a pretty overwhelming list of files and folders - but don't worry, you don't have to touch most of them:

```
config/ - Configuration files. Don't worry about these
node_modules/ - Where NPM installed all the packages we need. Don't worry about these
public/ - Some minor setup files you don't need to worry about
scripts/ - How we tell npm what to do when we run commands like 'npm run start', nothing to worry about
src/ - The only actual folder we'll be working out of.
```
You can also safely ignore all of the files in that root directory, like `package.json` and `gulpfile.js`

Open up the `src` folder and look for the `story.aml` file. Open that up and you should see something like the following at the top:

```
{top.meta}
headline: Ticket to the top
subhead: How tiny St. Anthony Catholic High School got involved in a questionable recruiting pipeline that included the University of the Incarnate Word, an agent and a booster to land star Nigerian basketball player Charles Bassey, one of the top big men in the country.
byline: Adam Zuvanich
date: June 23, 2017
series: Story Series Here
```

Hmm...It's formatted strangely, but this looks like your typical headline, subhead, and other story description stuff. That's exactly it - this is the file we're going to work with any time we want to change the longform story. We'll get to the details in a bit; for now, just change the line that says `byline: Adam Zuvanich` by replacing Adam's name with yours:

`byline: Kia Farhang`

Save the file, then get back on the terminal in the root of the project. If you've still got that `npm run start` running the story in your browser, no worries - just open up a new terminal tab or window and navigate back to the root. You can run multiple terminal screens at once:

`Desktop/Code/my-awesome-story/$`

The command to retranslate our ArchieML is `gulp` because...We're using [the Gulp JavaScript task runner](https://gulpjs.com/) to do it. (Yeah, I wish there was a more exciting reason) So run that command:

`Desktop/Code/my-awesome-story/$ gulp`

And either head back to your tab with the story open or re-run `npm run start` if you stopped the process. (If you stopped the process but left the tab open, it won't update - so close that tab and let Node open a new one for you).

Take a look below the headline and subhead for the story. You should see _your_ name where it used to have Adam's. Congrats, you just started building your own longform story!

You can follow this flow with all of the edits you make: edit the `story.aml` file, run `gulp` on the command line, and watch your changes take effect. The rest of this process is just knowing how to structure your edits so they pull into the app properly. Before we start, though, we need to make sure we've got our assets ready.

## Asset Check ##

Okay, got your story text? Got a headline and subhead? Got all your photos, captions and cutlines? Great - time for the most obnoxious part of this whole process - surprise, it involves the WCM!

If you perused the `story.aml` file, you probably saw various links to what looked like photos. That's how the React app knows where to pull the images from your story - they don't live direcly in `story.aml` like text does; we merely pass along a link.

Well, that means we actually have to _host_ the images somewhere. As of writing this walkthrough, the best way to do that is as follows:

1. Get all the photos - with captions and cutlines - from the photo department, either on a flash drive or Dropbox or whatever. You just need them on your computer.
2. Bulk upload the photos to the WCM.
3. Find the photos in the WCM to get the links, which we can add - with a slight tweak - to `story.aml`.

By now I'll assume you've got the photos. The link to the WCM bulk uploader is in the Premium Eds Google Drive accounts document under "WCM bulk uploader for photos," use the credentials listed there to log in.

Once you're in, you'll see a really fancy box where you can drop photos. Drag and drop all the photos the photo department gave you into that box, and you should see them begin to upload. You'll need a caption, credit and keywords for each one. Usually it's good about pulling captions and credits from the photo metadata.

As for credits, there's a way to apply them to every photo at once. Head near the top of the page and find the "Apply to Selected" box - anything you add here will add to all of the photos you've selected (the little checkbox in the top-right corner of every photo).

So if I was building a longform story about the school-to-prison pipeline, I'd just type "school-to-prison pipeline" into the "Keywords" box and hit "Replace" - or "Append" if I'd rather _add_ that to the keywords already there.

When you're ready, hit the "Upload all images" button at the top of the page and wait for the upload to complete. Now we just need the links to the photos so we can add them to our story.

Open up the WCM, head to the MySA side and locate your photos. (You can search on caption, keyword, etc., but I always just go to the most recent photos - they'll be on top if you just uploaded them.)

Now, to minimize the pain of working with the WCM, I recommend creating a text file somewhere on your computer to store the following for each file:

- Link
- Caption
- Cutline

If you do it all at once, you never have to wade through the garbage that is the WCM photo list again - well, until the next time you build a longform story.

Open up one of your photos in the WCM and scroll down to the section with all the image links. This is a list of links to your image in various sizes - but unfortunately, none of them are the full-size version you uploaded. So, for _each_ photo, grab one of the links and alter it like so:

`http://ww3.hdnux.com/photos/64/75/43/13883642/2/at_300.jpg`

Becomes:

`http://ww3.hdnux.com/photos/64/75/43/13883642/2/rawImage.jpg`

Doesn't matter which photo link you take; as long as you change the end to `rawImage.jpg` (or `rawImage.png`, if that's what it gave you) you'll now have a link to the full-size photo. Thanks, WCM!

When you've got your list of photo links, captions and cutlines, jump back into `story.aml` and get ready to build your story.

## Building the Story ##

To edit `story.aml` effectively, it helps to know what's going on. If you're familiar with programming concepts at all, ArchieML is basically just a plain-text representation of objects and arrays - which translates nicely to JSON, or JavaScript Object Notation.

Even if you're not into programming, here's how the process works:

- We define an object, like a photo or paragraph
- If appropriate, we give that object properties, like a caption for a photo or attribution for a pullquote
- When the template comes across an object, it renders HTML by filling in that object's properties.

The fancy presentation you see in your browser is nothing but a stack of these components. The basic structure looks like this:

```
Story top
    Story metadata (byline, date, headline, etc.)
    Story top image (the lead photo)
Section 1
    Intro paragraph (for that sweet dropcap)
    other components - text, photos, etc.
Section 2
    Section heading (subhead)
    other components - text, photos, etc.
Etc., etc., other sections
Final Section
    Section heading (subhead)
    other components - text, photos, etc.
    Story credits (reporter email address, Twitter handle, etc.)
```

Most components are structured like so:

```
{.objectname}
property1: value
property2: value
etc.: etc.
{}
```

That closing `{}` is what tells ArchieML you're done with the component and want to move to the next one. Other components, like slideshows, are _arrays_, or groups of objects, so they're formatted a bit differently:

```
[.component]

property1: value
property2: value
property3: value

property1: value
property2: value
property3: value

[]
```

Like objects, the closing `[]` tells Archie you're done with the component. And every time it sees a property you've already defined, it knows you've moved onto a new item in the array. (So, for example, when it sees a second image link, it knows you've moved onto the second image in the slideshow)

Story sections work like arrays, but they have a `+` before their initial declaration, like so:

```
[+sections.1]

Various stuff

[]

[+sections.2]

Various stuff

[]
```
Confused enough? Don't worry, it makes more sense when you start editing. So let's do that.

### Headlines, Bylines and other Story Metadata ###

Here's what the top of the `story.aml` file looks like to start:

```
{top.meta}
headline: Ticket to the top
subhead: How tiny St. Anthony Catholic High School got involved in a questionable recruiting pipeline that included the University of the Incarnate Word, an agent and a booster to land star Nigerian basketball player Charles Bassey, one of the top big men in the country.
byline: Adam Zuvanich
date: June 23, 2017
series: Story Series Here
```

We're going to update the _values_ of this component without touching the _properties_ - so we won't change anything before the colons. Here's what mine looked like for the [40 Days of Mourning](http://www.expressnews.com/40-days-of-mourning/) story:

```
{top.meta}
headline: A loss far from home
subhead: At 22, Mohamad Sharib Bin Mohamad Ali, a refugee with his parents and two of his siblings, was the heart of his Rohingya family. He drowned on the Fourth of July, leaving his loved ones with an aching loss and a tradition to observe: 40 days of prayer for a spirit they believed would not depart from them until the end of the mourning period.
byline: Janelle Polcyn
date: Aug. 22, 2017
```

Notice how I dropped the `series:` line entirely? That controls what shows up in the cool red block above the story's headline. It's meant to tell readers what series a story is part of. That's why it's optional - if this story is a one-off, we don't want that block at all. Keep or remove it depending on your needs.

### The Lead Photo ###

A story's lead photo is crucial; it sets the tone for the project. It appears full-width regardless of the size of the device the story is viewed on, but the caption and cutline only show on smaller-screen devices like phones. Here's what mine looked like for 40 Days of Mourning:

```
{top.image}
source: http://ww3.hdnux.com/photos/64/65/41/13850706/3/rawImage.jpg
caption: Mohamad Sharib's grey coffin lay open in the mortuary as his family paid their last respect to him. Mohamad Sharib's younger brother, Mohamad Emran, hold on to their mother as she cries hysterically while leaving the morgue. Shortly after walking out of the morgue Zahidah fainted.
cutline: Srijita Chattopadhyay / San Antonio Express-News
```

This is the first time we'll use one of the photo links we created from the WCM. Note that you don't need quotes around the link - just paste it in like you would into your browser's address bar.

Now's probably a good time to commit the changes we've made so far. Open up a new terminal in the root of your project folder and add all your files to the staging area:

`Desktop/Code/my-awesome-story/$ git add .`

And commit your changes, leaving a message noting what you've done:

`Desktop/Code/my-awesome-story/$ git commit -m "Set story metadata and lead image"`

Don't forget to push your changes to GitHub!

`Desktop/Code/my-awesome-story/$ git push origin master`

### The First Section ###

Here's the part of the section you _shouldn't_ touch:

```
[+sections.1]

//Everything between the boxes is fair game, though!

[]
```
The first component we'll use here is the intro paragraph:

```
{.intrograph}
text: Towering above his high school defenders, 6-foot-10 center Charles Bassey took the ball on the right wing of the basket, dribbled, then flung it to the backboard in the playful style of a Harlem Globetrotter.
{}
```

Like the photo earlier, we're not going to touch the `text:` - but we will change what comes after it. Here's what my comonent looked like when I was done:

```
{.intrograph}
text: “I’ll come back, I’ll come back,” Mohamad Sharib Bin Mohamad Ali, 22, assured his mom before taking off to swim in Medina Lake.
{}
```

Take another look at your browser and marvel at the amazing dropcap Adrian on the design team came up with. When you're done with that, feel free to do another round of `git add .` - `git commit -m "What I did` - `git push origin master`.

You'll probably want a couple of regular paragraphs after your fancy intro one. Well, luckily paragraphs are crazy easy: you just paste 'em in.

```
{.intrograph}
text: “I’ll come back, I’ll come back,” Mohamad Sharib Bin Mohamad Ali, 22, assured his mom before taking off to swim in Medina Lake.
{}

The words still haunt her, she said recently through an interpreter.

On July 4, the lake was crowded, and Mohamad Sharib’s family and friends were relaxed, still celebrating in the days after Eid, the end of the Islamic holy month of Ramadan.

Members of a persecuted ethnic and religious minority in the predominantly Buddhist nation of Myanmar, the family had embraced its American opportunity with gratitude, having come to the United States as refugees exactly two years ago Tuesday after years in limbo in Malaysia.

But the accidental drowning of the oldest son on their new country’s Independence Day left them reeling. On Aug. 12 they finished a Rohingya practice of 40 days of mourning.

Challenged by the often bewildering modernity of their new lives in San Antonio, their faith turned out to be their only real anchor.
[]
```

Since the 40 Days of Mourning story was pretty short, I was actually done with my first section here. That's why you see the closing `[]` after the last paragraph.

Your story may be significantly longer, and that's fine. I recommend adding just the text. Once we do this for the rest of the sections, we'll add photos, pull quotes and other goodies.

### The Remaning Sections - Text Only, Please! ###

