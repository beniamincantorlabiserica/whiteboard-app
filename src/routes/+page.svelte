<script>
	import HeroText from "../lib/components/HeroText.svelte";
	import Footer from "../lib/components/Footer.svelte";
	import DottedCallOut from "../lib/components/DottedCallOut.svelte";
	import { onMount } from "svelte";
	import toast, { Toaster } from 'svelte-french-toast';
	import Faq from "../lib/components/FAQ.svelte";


    onMount(() => {

	})

    function seetoast() {
        toast.error('something went wrong')
    }
</script>

<HeroText />
<DottedCallOut />

<Faq />



