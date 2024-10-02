<script>
    import { onMount } from 'svelte';

  
    let canvas;
    let ctx;
    let drawing = false;
    let color = '#000000';
    let lineWidth = 2;
  
    onMount(() => {
      ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 100; // Adjust for toolbar height
      
      window.addEventListener('resize', () => {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 100;
        ctx.putImageData(imageData, 0, 0);
      });
    });
  
    function startDrawing(event) {
      drawing = true;
      draw(event);
    }
  
    function stopDrawing() {
      drawing = false;
      ctx.beginPath();
    }
  
    function draw(event) {
      if (!drawing) return;
  
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.strokeStyle = color;
  
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  </script>
  
  <div class="flex flex-col h-screen">
    <div class="flex justify-between items-center p-4 bg-base-200">
      <input type="color" bind:value={color} class="w-10 h-10" />
      <input type="range" bind:value={lineWidth} min="1" max="20" class="range range-primary w-64" />
      <button on:click={clearCanvas} class="btn btn-primary">Clear</button>
    </div>
    <canvas
      bind:this={canvas}
      on:mousedown={startDrawing}
      on:mouseup={stopDrawing}
      on:mousemove={draw}
      on:mouseleave={stopDrawing}
      class="flex-grow bg-white"
    ></canvas>
  </div>