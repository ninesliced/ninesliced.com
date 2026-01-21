<script>
  import OutlinedText from './OutlinedText.svelte';
  import ProjectDisplay from './ProjectDisplay.svelte';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center bg-[#FFD439]">
  <img
    src="src/lib/assets/branding/logo/ninesliced_logo_transp.svg"
    alt="Ninesliced logo"
    class="outline-red h-80 w-auto p-6"
  />
  <img
    src="src/lib/assets/page/section_separator_up.svg"
    alt="separator"
    class="absolute -bottom-1 left-0 w-full min-w-[500px] select-none"
  />
</div>

<div class="w-full bg-[#FDF5BC] text-center text-white">
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
  class="top-0 relative left-0 w-full min-w-[500px] bg-[#FFD439] select-none"
/>

<div class="flex w-full flex-col items-center bg-[#FFD439] p-8 py-18 text-center text-white">
  <div class="mb-6">
    <OutlinedText textSize="3rem" strokeWidth="8px">Games</OutlinedText>
  </div>

  <ProjectDisplay imgSrc="src/lib/assets/projects/bugscraper/1.png">
    <div class="mb-3">
      <OutlinedText textSize="2rem" strokeWidth="8px">Bugscraper</OutlinedText>
    </div>
    <div class="text-[#222123]">
      <p class="mb-3">
        Welcome to the Bugscraper.
      </p>

      <p>
        Bugscraper is a solo or co-op roguelike shooter. As you climb 
        toward your tyrannical boss's office, you'll battle floor after 
        floor of enemies. Using a wide arsenal of weapons and upgrades, 
        mow them down and aim for the top!

      </p>
    </div>
  </ProjectDisplay>
  
  <ProjectDisplay imgSrc="src/lib/assets/projects/globs/01.png" reverse="{true}">
    <div class="mb-3">
      <OutlinedText textSize="2rem" strokeWidth="8px">Globs</OutlinedText>
    </div>
    <div class="text-[#222123]">
      <p class="mb-3">
        Meet the size-changing Globs in this colorful puzzle game. Use the curious properties of
        their bodies at your advantage to solve a variety of puzzles, all in a expressive pixel art
        aesthetic and upbeat soundtrack.
      </p>

      <p>
        The puzzles are designed to be approachable, but provide additional optional challenges for
        players wishing to put their puzzle-solving skills to the test.
      </p>
    </div>
  </ProjectDisplay>
  
  <ProjectDisplay imgSrc="src/lib/assets/projects/globs/03.png">
    <div class="mb-3">
      <OutlinedText textSize="2rem" strokeWidth="8px">Maby</OutlinedText>
    </div>
    <div class="text-[#222123]">
      <p class="mb-3">
        Meet Maby, a cute bunny named Maby trying to escape the 
        really really bad wolves in season themed maze.
      </p>
      
      <p>
        This game was made for the GMTK Game Jam 2025, which upholded 
        the Loop theme this time around. In this game, your actions 
        loop.. and so does the map!
      </p>
    </div>
  </ProjectDisplay>
  
</div>

<img
  src="src/lib/assets/page/section_separator_up.svg"
  alt="separator"
  class="relative left-0 w-full min-w-[500px] select-none bg-[#FFD439]"
/>

<footer class="flex w-full flex-col items-center bg-[#FDF5BC] p-8 py-5 text-center text-white">
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

