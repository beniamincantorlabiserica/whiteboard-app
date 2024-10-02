<script>
  import icon from "$lib/images/icon.png"

  function goToPage() {
    window.location.href = "/";
  }
</script>

<div class="navbar bg-base-200 w-full rounded-2xl flex justify-center">
    <div class="text-center">
      <a class="btn btn-ghost text-xl" on:click={goToPage}>
        <img src={icon} class="w-10"/>  
        WhiteBoardy
      </a>
    </div>
  </div>