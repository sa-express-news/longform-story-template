# SAEN Longform Story Template #

## Table of Contents ##

- [Getting Started](#getting-started)
- [Setting up the Repository](#setting-up-the-repository)
- [Launching the Project](#launching-the-project)
- [Asset Check](#asset-check)
- [Building the Story](#building-the-story)
- [Adding the Story to the WCM](#adding-the-story-to-the-wcm)
- [Final Steps and Edits](#final-steps-and-edits)
- [Common Errors and Problems](#common-errors-and-problems)

-----

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

Let's move through the rest of the sections, adding just the text so we can make a second pass through and sprinkle in other assets.

Here's section two in the current `story.aml`:

```
[+sections.2]

sectionheading: Agent gets involved

Bassey’s trail to San Antonio was carved by Hennssy Auriantal, a Canadian from Montreal and former basketball player at the University of Wisconsin who worked as an assistant coach at Jackson State University in Mississippi. 

St. Anthony hired him as an athletic coordinator in 2015-16.

etc., etc.
[]
```

Rip everything between the opening and closing `[]`s and paste all your text in the middle instead. On top, bring back the `sectionheading`, swapping out "Agent gets involved" for your appropriate subhead. I did it like so:

```
[+sections.2]

sectionheading: Holiday tragedy

Mohamad Sharib drove. He had found work and offered to make payments on the family’s secondhand Mitsubishi Outlander. He didn’t swim but had been to Medina Lake before and now brought his parents and brother for a picnic. Relatives and friends came in two other vehicles.

“We didn’t realize it was a holiday,” said his mother, Zahidah Begum Binti Ali Miah. “I got up early that day and made breakfast at 6 a.m.” She gave Mohamad Sharib his breakfast before he left for work at a juice factory, but he was back before lunch, saying he had a half day off.
Zahidah, unhappy with the long trip to the lake, wanted to eat and leave.

“I wasn’t feeling it,” she said. “I didn’t realize it was that far.”

etc., etc.
[]
```

Rinse and repeat this process until you've added all the text into the story. Run `gulp` on the command line to generate a new JSON file containing your story. Check your browser, doing an `npm run start` if necesssary, and you should see one verrrrrry long story punctured with the occasional red, bolded subheadings.

Looking good? Alright, let's commit to GitHub.

`Desktop/Code/my-awesome-story/$ git add .`

`Desktop/Code/my-awesome-story/$ git commit -m "Added all story text"`

`Desktop/Code/my-awesome-story/$ git push origin master`

Now comes the good part. We're going to start back at the top of the story, adding photos and pull quotes and other goodies to make the presentation really shine.

### Photos, Pullquotes and Other Cool Assets ###

Depending on the type of story you're building, you may need all or just a few of the assets listed here. No matter which you choose, the process for adding them to the story works the same: Just slot them into the `story.aml` file. Here are guides for how to use the various assets:

#### Photos - the Game of Alignment ####

Just want a big fat photo in the middle of your story? Here's the code:

```
{.photo}
source: http://ww2.hdnux.com/photos/64/65/40/13850661/3/rawImage.jpg
caption: Zahidah's life has constantly revolved around raising her five children and now her grandchildren. After Mohamad Sharib's untimely departure she finds some respite in raising her grandchildren especially the youngest of them all, Mohamad Faisal, 1. "Sometimes I remember Sharib when I am putting the baby to sleep," she said. "He was a good uncle and loved his nephews."
cutline: Srijita Chattopadhyay / San Antonio Express-News
type: full
{}
```

Every photo needs a source, caption and cutline, laid out similarly to the above. The last property, `type`, is where the customization comes in. Here are the different values you can set for `type` and what they'll do to the photo:

- `full`: The photo will take up most of the screen's height and width on all screen sizes. Use for showstoppers.

-`small-left`:The photo will be full width on small screens, mostly full width on medium-size screens (like tablets) and small, floated to the left of text, on big screens like desktop computers. Use for things like mugshots and other tangential pictures.

-`small-right`: Same as `small-left`, but the photo will float to the right of the text on large screens instead of to the left.

You _can_ stack multiple photos on top of each other, but it doesn't look great and I'd recommend against it. Instead, better to use the slideshow.

#### Slideshows ####

Slideshows package multiple photos together into...well, a slideshow. Users can navigate them with the buttons on either side or by swiping on the photos. Here's the code for a slideshow:

```
[.slideshow]

source: http://ww1.hdnux.com/photos/62/37/65/13237588/3/rawImage.jpg
caption: A helicopter surveys the bus submerged in the Guadalupe River after the July 17, 1987 flood that killed 10 teenagers near Comfort, Texas.
cutline: Express-News file photo

source: http://ww4.hdnux.com/photos/62/37/65/13237587/3/rawImage.jpg
caption: Campers wait after being rescued from the floodwaters near Comfort, Texas.
cutline: Express-News file photo

source: http://ww2.hdnux.com/photos/62/37/65/13237589/3/rawImage.jpg
caption: First responders used helicopters to rescue children clinging to trees.
cutline: Express-News file photo

[]
```

Couple differences from regular photos:

- Slideshows start and end with `[]`, not `{}`.
- Each photo in a slideshow does _not_ have its own `{}` to start and end.
- You don't set a `type` on slideshow photos.

#### Pullquotes ####

Pullquotes are great when you have a particularly strong quote that you want to break out of the main story text. Pull quotes take up the full screen width on small screens, and float to the left on medium-sized screens and above.

```
{.pullquote}
quote: Wherever he goes, there would be a lot of questions that need to be answered.
source: John Q. Public
{}
```

Put the actual quote you want to highlight after `quote:` and the source of the quote after `source:`.

#### The Subscribe Box ####

We use the subscribe box to beg for readers' money. It's pretty simple: A box with a heading, some text and a button the user can click to subscribe to the Express-News. Subscribe boxes take up the full width of the screen on small screens and float to the right of story text on large phones and above.

```
{.subscribe}
link: https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000
{}
```

The heading and flavor text are set for you, so all you need is a link from an EP like Graham Watson-Ringo. Remember to swap this out every time - it's a unique link to track subscriptions from _this_ story, so it wouldn't do much good to use the same one across many stories.

#### Credits ####

We use credits at the very end of the last section of a story. This is an array, not an object, so remember to use `[]` instead of `{}`. Every credit gets added to a sleek little box and bolded.

```
[.credits]
credit: adam.zuvanich@express-news.net
credit: Twitter: @AZuvanich
[]
```

You can add as many of these as you like, should you need to credit a photographer, multiple reporters, etc. And note that you can still use a colon after the `credit:` without messing anything up - the second credit here will render on the page as `Twitter: @AZuvanich`.

### Final Touches ###

And just like that, we're (mostly) done building our freeform story. Pull an `npm run start` to check your progress. By now, none of the text or images from the template should be left - you should have a completely new story.

Let's commit our work before making a few last tweaks.

`Desktop/Code/my-awesome-story/$ git add .`

`Desktop/Code/my-awesome-story/$ git commit -m "Added photos and other components"`

`Desktop/Code/my-awesome-story/$ git push origin master`


#### Adding the Footer Subscribe Link ####

You'll notice we haven't touched the footer at the bottom of the template urging readers to subscribe. That's built similarly to the subscribe component noted above, it just doesn't live in `story.aml`. We're going to edit a bit of the underlying React code to make sure we have the correct subscribe link (you should always get a new one from an executive producer like Graham Watson-Ringo for each new story).

So far, we've been working in `story.aml` in the `src/` folder of our project. Now open `src/components/App/index.jsx` in your code editor. Look for the section that looks like this:

```javascript
class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <Sections sections={Story.sections}/>
            <SubscribeFooter link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000'/>
          </div>
      </div>
    );
  }
}
```

If you're familiar with HTML, this should look like a freakish bastardization of it. It basically is. Only one thing you need to do here: See the link to `https://myaccount.expressnews.com`? Swap that link out for your new subscribe link, like so:

```
            <SubscribeFooter link='YOUR LINK HERE'/>
```

Save this file and close it without making any other changes. Reload the story and hover over the "Subscribe" at the bottom of the page; the link should match the one you just entered.

Commit time!

`Desktop/Code/my-awesome-story/$ git add .`

`Desktop/Code/my-awesome-story/$ git commit -m "Added footer subscribe link"`

`Desktop/Code/my-awesome-story/$ git push origin master`

#### Creating a Project Folder on AWS ####

By now the story looks amazing on your computer - but we need to host it online so others can see it, too. Luckily we already have an account with [Amazon Web Services](https://aws.amazon.com/) to do just that.

Find our AWS account credentials in the SAEN Premium Eds' accounts Google Doc. Upon logging in, you'll see a big list of AWS services; find or search for S3 and click on it. (S3 stands for Simple Storage Service, in case you're curious)

You'll now be confronted with a giant list of S3 "buckets" - basically just folders we host on the internet. Search for and open the `projects.expressnews.com` bucket by clicking on its name.

We need to create a new folder, which just takes clicking the "Create folder" button and giving it a name. Makes sense to match it with the folder we used for our project, so I went with `my-awesome-story`. Keep note of the folder's name, though - you'll need it shortly.

#### Setting the Project Path ####

We're about to use a new npm command to bundle our whole project up into a couple files we'll use to serve it to others. First, though, we need to tell it where those files will eventually be hosted.

Go up one level from the `src/` directory and open `package.json`. You're going to see a _lot_ here, as this is where we're tracking which packages we need to run the project and setting up some other things. Look for this line:

`"s3Bucket": "http://projects.expressnews.com.s3-website-us-east-1.amazonaws.com/longform-template",`

This is the URL to the S3 bucket where our story will be hosted. _Nothing will work_ if you don't tweak this setting, but it's real easy. Just swap out the end of the URL where it says `longform-template` with the name of the folder you just created on S3. In my case, this line looked like so:

`"s3Bucket": "http://projects.expressnews.com.s3-website-us-east-1.amazonaws.com/my-awesome-story",`

We're about to throw our story on S3 (and then the WCM), so it's time for a Git commit:

`Desktop/Code/my-awesome-story/$ git add .`

`Desktop/Code/my-awesome-story/$ git commit -m "Set S3 path"`

`Desktop/Code/my-awesome-story/$ git push origin master`

#### Building and Hosting the Project ####

Head back to the command line where we've been running `npm run start` - this time, though, run an `npm run build`. After a brief delay, you should see a success message like this:

```
Compiled successfully.

File sizes after gzip:

  136.89 KB  build/static/js/main.01c2a651.js
  2.36 KB    build/static/css/main.141dd7d2.css

The project was built assuming it is hosted at http://projects.expressnews.com.s3-website-us-east-1.amazonaws.com/my-awesome-story/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
```

We just created a new `build` folder containing big JavaScript and CSS files that control the logic and presentation of our story template. Copy down the names of those files - `main.01c2a651.js` and `main.141dd7d2.css` in my case; we'll use them in the WCM.

Head back to the S3 folder you created and upload _everything_ in the new `build` folder by dragging the contents onto the page and clicking `Upload` on the popup that appears.

We're done with code for now. Time to take our story to ~~ the ninth circle of Hell ~~ the WCM.

## Adding the Story to the WCM ##

Here's a 10,000-foot view of what we need to do in the WCM:

1. Create a freeform housing links to the JavaScript and CSS files we just created.
2. Create a new site section that will house the freeform.
3. Add the freeform and another one we use for these projects to the site section.
4. Send the link to the story to editors, reporters and photographers
5. Light a big fat cigar and go home.

### Creating the Freeform ###

I like this part because it's half done for us already. Head to the Express-News side of the WCM and search for the freeform with the ID `83062`. Clone it and give it a new name - in my case it was "My Awesome Story React App". Copy everything in the Content section and paste it into a text editor; it's just HTML and editing in the WCM sucks.

Here's what mine looks like to start:

```html
<style>
    div#container {
        overflow-x: hidden;
    }

    div.hc_sitefooter,
    div.ad-bottom {
        position: relative;
        z-index: 1000;
    }
</style>
<link href="https://fonts.googleapis.com/css?family=Sanchez%7CSuez+One" rel="stylesheet">
<link href="//projects.expressnews.com.s3-website-us-east-1.amazonaws.com/40-days-mourning-story/static/css/main.141dd7d2.css"
    rel="stylesheet">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script type="text/javascript" src="http://projects.expressnews.com.s3-website-us-east-1.amazonaws.com/40-days-mourning-story/static/js/main.d1dba3fa.js"></script>
```
We need to change two things: the `<link>` tag to the project CSS and the `<script>` tag to the project JavaScript. This is why you needed to keep track of the names of the files we created earlier. (Don't worry if you didn't - they're still in S3 and your `build` folder). Remember to _also_ change the project folder in the links, like so:

`<link href="//projects.expressnews.com.s3-website-us-east-1.amazonaws.com/S3-FOLDER-HERE/static/css/main.CSS FILE NAME.css"
    rel="stylesheet">` 

```html
<script type="text/javascript" src="http://projects.expressnews.com.s3-website-us-east-1.amazonaws.com/S3-FOLDER HERE/static/js/main.JS FILE NAME.js"></script>
```

Pop your edited HTML back into the freeform, save and publish it. Time to make a site section.

### Creating the Site Section ###

Like the freeform, we're going to copy another site section used for this purpose to cut down on extra work. In the WCM menu, head to `Manage > Sections` and open the one titled `40 Days of Mourning | San Antonio Express-News`. Clone it, unlock the copy you just made and let's get to work. 

Set the following items under the `Properties` tab:

`Title:` This is the title in the WCM _and_ the page's title in the browser. Style is `Name of project | San Antonio Express-News`.
`Channel Code:` This is the URL for the page. `40-days-of-mourning` would become `http://www.expressnews.com/40-days-of-mourning`.
`Description`: The description for the section in the WCM. I usually just copy the story's subheadline in here.
`Meta Description`: The string that will (usually) show up in search engine results displaying this page. Limited to 160 characters; it should match the content of the story. ([More on good meta descriptions, if you're interested](https://yoast.com/meta-descriptions/))
`Facebook og: Image Override:` You need to set this so the proper image shows up when the story is shared on Facebook. Typically it makes sense to use the lead photo here.

Save, then head over to the `Design` tab of your section. If you've ever worked with the home page or other site pages, this is exactly the same thing - but there's only one "zone" to worry about.

Before adding the freeform you just created, add the EN freeform with the ID of `81488` titled "React Template - CSS overrides (white bg)." (This just cleans up some ugliness the WCM creates)

Add your freeform underneath the CSS overrides one, save the section and preview it. After all that work, you should see a gorgeous custom story that _you_ just built. Publish the section, send the link out and light your cigar.

## Final Steps and Edits ##

You will invariably need to edit this story. Someone will notice a typo; someone's name will be misspelled; someone will ask you to add a couple photos at the last minute. Making edits is easy, if somewhat tedious. Here's the process:

1. Open `story.aml` and make whatever changes are needed.
2. Run `gulp` on the command line to transform the ArchieML into JSON.
3. (Optional but recommended) do an `npm run start` to make sure the story looks right on your machine after the changes.
4. Commit your changes to GitHub.
5. Run `npm run build` and wait for it to rebuild your `build` folder. Keep track of the names of the CSS and JS files created.
6. Reupload the `build` folder to your S3 folder (don't worry - it won't overwrite the old stuff, just add the new ones)
7. Jump back into your story freeform (not the section). Update the links to the new CSS and JS files and republish.
8. Preview the section to make sure the changes took.

You don't ever need to republish the site section; it pulls everything from the freeform, so as long as you republish that you're good.

However, the WCM has a built-in lag time. Changes to the freeform may take about half an hour to show up on the actual project URL. Previewing the section will show you the changes immediately.

To prove how easy edits are, let's do one real quick. This is actually important, so don't skip it!

### Updating the Social Links ###

If you click one of the social buttons near the top of your story, you'll be very close to sharing...A story about basketball. That's because the links in those buttons are set dynamically and we never updated them from the default. The process is similar to when we changed the link in the footer.

Open up `src/components/SocialBlock/index.jsx` and look for this section:

```javascript
export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
    <Social type='twitter' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
    <Social type='reddit' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
  </div>
); 
```
Change those last three links to the URL of your story. Then run the update process: `gulp`, `npm run start` to test the changes, commit the changes to GitHub, `npm run build` to create new files, upload to S3, update the freeform, make sure all is well with the section preview.

## Common Errors and Problems ##

__I don't see my changes reflected in the story!__

Did you remember to transform your ArchieML into JSON with `gulp`? None of the changes you make to `story.aml` will show up without that step. Head to the root of your project on the command line and type `gulp`. Re-run `npm run start` (or let it recompile the app if it's already running) and your changes should take.

__The page on the EN website is showing an old version of the story!__

Remember, it takes 30+ minutes for that version to update with the most recent changes. If you recently made changes to the story and updated the freeform, try the preview link, i.e.:

`http://preview.cmf.expressnews.com/YOUR-STORY-LINK/`

If the changes _do_ reflect there, nothing to worry about - you're just waiting for the live page to catch up.