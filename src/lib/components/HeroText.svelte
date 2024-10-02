<script>
  import arrow from "$lib/images/arrow.png"

  function goToPage() {
    window.location.href = "/whiteboard";
  }

</script>


<div class="hero bg-base-100 h-[50dvh] mt-8">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
         This is a whiteboard app that you can use to lay out your ideas, draw, or just have fun. 🧑‍🎨
        </p>
        <div class="flex justify-center">
          <img src={arrow} class="mb-2 w-10" alt="oops, something's not working"/>
        </div>
        <button class="btn btn-primary" on:click={goToPage}>Get Started</button>
      </div>
    </div>
</div>