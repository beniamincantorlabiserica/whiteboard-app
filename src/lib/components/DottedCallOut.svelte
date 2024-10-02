<script>
import { Github } from 'lucide-svelte';

    function goToLink() {
        window.location.href = "https://github.com/beniamincantorlabiserica";
    }

</script>


<div class="flex justify-center my-8">
    <div class="flex flex-col px-4 py-6 w-[60%] bg-primary/10 text-primary rounded-lg shadow-lg tracking-wide uppercase border-2 border-primary border-dashed cursor-pointer transition duration-300 ease-in-out">
        <div class="flex flex-row justify-center items-center">
            <span class="mt-2 text-base leading-normal text-center">
                More open-source projects on my GitHub 
            </span>
            <Github class="ml-4" on:click={goToLink}/>
        </div>
    </div>
</div>