<script lang="ts">
  import BlobImage from './BlobImage.svelte';
  import OutlinedText from './OutlinedText.svelte';
  import ProjectDisplay from './ProjectDisplay.svelte';

  function shuffle(array: Array<any>) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
  }
</script>

<div class="flex h-screen w-full flex-col items-center justify-center bg-[#A7E257]">
  <img
    src="src/lib/assets/branding/logo/ninesliced_logo_transp.svg"
    alt="Ninesliced logo"
    class="outline-red h-80 w-auto p-6"
  />
  <img
    src="src/lib/assets/page/section_separator_up.svg"
    alt="separator"
    class="absolute bottom-0 left-0 w-full min-w-[500px] select-none"
  />
</div>

<div class="w-full bg-[#EEF49A] text-center text-white">
  <div class="flex flex-col items-center justify-center py-18">
    <OutlinedText textSize="2rem" strokeWidth="7px">
      When life gives you lemons,<br />
      make video games
    </OutlinedText>

    <div>
      <img
        src="src/lib/assets/page/slicelings_stack.svg"
        alt="Sliceling stack"
        class="my-12 w-50"
      />
    </div>

    <OutlinedText textSize="1.5rem" strokeWidth="6px">
      Ninesliced is a french gamedev band, <br />
      started by a group of friends just for fun.<br />
    </OutlinedText>
  </div>
</div>

<img
  src="src/lib/assets/page/section_separator_down.svg"
  alt="separator"
  class="top-0 relative left-0 w-full min-w-[500px] bg-[#A7E257] select-none"
/>

<div id="games" class="flex w-full flex-col items-center bg-[#A7E257] p-8 pt-18 text-center text-white">
  <div class="mb-6 flex flex-row gap-5 items-center">
    <OutlinedText textSize="3rem" strokeWidth="8px">Games</OutlinedText>
    <img
      src="src/lib/assets/page/ninesliced_games_mascot_flipx.svg"
      alt="Ninesliced mascot"
      class="h-[80px]"
    />
  </div>

  <ProjectDisplay 
    id="bugscraper"
    title="Bugscraper"
    slides={[
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=a4RG1y2lU4E'
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/1.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/2.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/3.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/4.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/5.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/6.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bugscraper/7.png',
      },
    ]}
    links = {[
      {
        url: "https://bugscraper.net/",
        text: "Website",
      },
      {
        url: "https://store.steampowered.com/app/2957130/Bugscraper/",
        text: "Steam",
      },
      {
        url: "https://yolwoocle.itch.io/bugscraper/",
        text: "itch.io",
      },
    ]}
  >
    <p>
      Welcome to the Bugscraper.
    </p>

    <p>
      Bugscraper is a solo or co-op roguelike shooter. As you climb 
      toward your tyrannical boss's office, you'll battle floor after 
      floor of enemies. Using a wide arsenal of weapons and upgrades, 
      mow them down and aim for the top!

    </p>
  </ProjectDisplay>

  <ProjectDisplay 
    id="globs"
    inverted={true}
    title="Globs"
    slides={[
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=qRrZuPRicrI'
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/01.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/02.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/03.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/04.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/05.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/06.png',
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/globs/07.png',
      },
    ]}
    links={[
      {
        url: "https://store.steampowered.com/app/3219110/Globs/",
        text: "Steam"
      },
      {
        url: "https://ninesliced.itch.io/globs",
        text: "itch.io"
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.yolwoocle.globs",
        text: "Play Store"
      },
      {
        url: "https://apps.apple.com/us/app/globs-a-colorful-puzzle-game/id6738417089",
        text: "App Store"
      },
    ]}
  >
    <p>
        Meet the size-changing Globs in this colorful puzzle game. Use the curious 
        properties of their bodies at your advantage to solve a variety of puzzles, 
        all in a expressive pixel art aesthetic and upbeat soundtrack.
    </p>
  </ProjectDisplay>
</div>

<img
  src="src/lib/assets/page/section_separator_up.svg"
  alt="separator"
  class="top-0 relative left-0 w-full min-w-[500px] bg-[#A7E257] select-none"
/>

<img
  src="src/lib/assets/page/section_separator_up_orange.svg"
  alt="separator"
  class="top-0 relative left-0 w-full min-w-[500px] bg-[#EEF49A] select-none"
/>

<div id="modding" class="flex w-full flex-col items-center bg-[#FAAD38] p-8 py-18 text-center text-white">
  <div class="mb-6 flex flex-row gap-5 items-center">
    <img
      src="src/lib/assets/page/ninesliced_modding_mascot.svg"
      alt="Ninesliced modding mascot"
      class="h-[80px]"
    />
    <OutlinedText textSize="3rem" strokeWidth="8px">Modding</OutlinedText>
  </div>

  <ProjectDisplay 
    id="bettermap"
    inverted={true}
    title="BetterMap"
    backgroundColor="#FBEB9C"
    slides={[
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=mdUiaKpZ6JI'
      },
      {
        type: 'image',
        src: 'src/lib/assets/projects/bettermap/waypoint_edit-png.png',
      },
    ]}
    links={[
      {
        url: "https://www.curseforge.com/hytale/mods/bettermap/",
        text: "CurseForge"
      },
      {
        url: "https://github.com/ninesliced/Hytale-BetterMap/",
        text: "GitHub"
      },
      {
        url: "https://discord.gg/8q7NCUm4xw",
        text: "Discord"
      },
    ]}
  >
    <p>
      Enhance Hytale's world exploration with saved map data, cave map rendering, 
      customizable zoom, waypoints, shared mapping, and performance-optimized rendering.
    </p>
  </ProjectDisplay>
</div>


<img
  src="src/lib/assets/page/section_separator_up.svg"
  alt="separator"
  class="relative left-0 w-full min-w-[500px] select-none bg-[#FAAD38]"
/>

<img
  src="src/lib/assets/page/section_separator_down.svg"
  alt="separator"
  class="relative left-0 w-full min-w-[500px] select-none bg-[#A7E257]"
/>

<div id="contact" class="flex w-full flex-col items-center ">
  <div class="w-full bg-[#A7E257] text-center text-white p-8 py-18">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-6">
        <OutlinedText textSize="3rem" strokeWidth="8px">About</OutlinedText>
      </div>

      <div class="mb-12 w-full max-w-[1000px] flex flex-row flex-wrap items-center justify-center gap-y-5">
        {#each shuffle([
          {
            name: "Nolan Carlisi",
            link: "https://arkanyota.com",
            linkText: "Website",
            image: "src/lib/assets/page/about/nolan.jpg",
          },
          {
            name: "Léo Bernard",
            link: "https://www.yolwoocle.com",
            linkText: "Website",
            image: "src/lib/assets/page/about/theodore.jpg",
          },
          {
            name: "Guillaume Tran",
            link: "https://notgoyome.github.io",
            linkText: "Website",
            image: "src/lib/assets/page/about/theodore.jpg",
          },
          {
            name: "Théodore Billotte",
            link: "https://www.linkedin.com/in/theodore-billotte",
            linkText: "LinkedIn",
            image: "src/lib/assets/page/about/theodore.jpg",
          },
          {
            name: "Louis Rollet",
            link: "https://www.linkedin.com/in/louis-rollet/",
            linkText: "LinkedIn",
            image: "src/lib/assets/page/about/louisrollet.jpg",
          },
          {
            name: "Alexis Belmonte",
            link: "https://www.linkedin.com/in/alexis-belmonte/",
            linkText: "LinkedIn",
            image: "src/lib/assets/page/about/louisrollet.jpg",
          },
        ]) as person}
          <div class="flex flex-col w-60 gap-2 items-center">
            <BlobImage src={person.image} alt={person.name} />
            <div>
              <OutlinedText textSize="1.7rem" strokeWidth="6px">
                {person.name}
              </OutlinedText>
            </div>
            <div>
              <OutlinedText textSize="1.4rem" strokeWidth="6px">
                <a href={person.link}>{person.linkText}</a>
              </OutlinedText>
            </div>

          </div>
        {/each}
      </div>

      <div class="mb-6 flex flex-row gap-5 items-center justify-center flex-wrap">
        {#each [
          {
            icon:"src/lib/assets/page/logos/twitter.svg", 
            url: "https://x.com/ninesliced",
            text: "Twitter",
          },
          {
            icon:"src/lib/assets/page/logos/bluesky.svg", 
            url: "https://bsky.app/profile/ninesliced.com",
            text: "Bluesky",
          },
          {
            icon:"src/lib/assets/page/logos/itchio.svg", 
            url: "https://ninesliced.itch.io/",
            text: "itch.io",
          },
          {
            icon:"src/lib/assets/page/logos/instagram.svg", 
            url: "https://instagram.com/ninesliced_games",
            text: "Instagram",
          },
          {
            icon:"src/lib/assets/page/logos/github.svg", 
            url: "https://github.com/ninesliced",
            text: "Github",
          },
        ] as social}
          <div class="bg-[#EEF49A] my-4 p-2 px-5 rounded-full">
            <a href={social.url} class="flex flex-row gap-2 items-center">
              <img
                src={social.icon}
                alt={social.text}
                class="h-10"
              />
              <OutlinedText textSize="1.5rem" strokeWidth="6px">{social.text}</OutlinedText>
            </a>
          </div>
        {/each}
      </div>
      <div class="flex flex-col items-center">
        <OutlinedText textSize="1.5rem" strokeWidth="6px">
          Games: nin&#101;sliced&#64;gm&#97;il&#46;com
        </OutlinedText>
        <OutlinedText textSize="1.5rem" strokeWidth="6px">
          Mods: nin&#101;sliced.modding&#64;gm&#97;il&#46;com
        </OutlinedText>
      </div>

      
    </div>
  </div>
</div>


<img
  src="src/lib/assets/page/section_separator_up.svg"
  alt="separator"
  class="top-0 relative left-0 w-full min-w-[500px] bg-[#A7E257] select-none"
/>

<footer class="flex w-full flex-col items-center bg-[#EEF49A] p-8 py-5 text-center text-white">
  <div class="text-[#222123] flex flex-col gap-6">
    <div class="flex flex-row justify-center gap-6">
      <a>
        Footer link 1
      </a>
      <a>
        Footer link 1
      </a>
      <a>
        Footer link 1
      </a>
      <a>
        Footer link 1
      </a>
      <a>
        Footer link 1
      </a>
      <a>
        Footer link 1
      </a>
    </div>
    <div class="flex flex-row justify-center gap-6">
      <a>
        Footer link 2
      </a>
      <a>
        Footer link 2
      </a>
      <a>
        Footer link 2
      </a>
      <a>
        Footer link 2
      </a>
    </div>
    <div class="flex flex-row justify-center gap-6">
      <a>
        Footer link 3
      </a>
      <a>
        Footer link 3
      </a>
      <a>
        Footer link 3
      </a>
      <a>
        Footer link 3
      </a>
      <a>
        Footer link 3
      </a>
    </div>
  </div>
</footer>

