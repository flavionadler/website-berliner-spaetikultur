<script setup lang="ts">
</script>

<template>
	<div class="relative min-h-screen bg-[#0f0f0f] text-[#f5f5f5] overflow-x-hidden selection:bg-[#f7d046] selection:text-black">

		<div class="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#f7d046] opacity-[0.07] filter blur-[120px] pointer-events-none"></div>
		<div class="fixed bottom-[10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff7a00] opacity-[0.05] filter blur-[150px] pointer-events-none"></div>
		<div class="fixed top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-blue-500 opacity-[0.03] filter blur-[100px] pointer-events-none"></div>
		<div class=" hidden md:block fixed top-[20%] -left-32 -rotate-90 text-[12rem] font-black text-transparent opacity-10 pointer-events-none" style="-webkit-text-stroke: 2px #f5f5f5;">
			SPÄTI
		</div>

		<div aria-hidden="true" class="hidden md:block fixed bottom-[10%] right-2 md:right-4 text-[10rem] md:text-[14rem] font-black text-[#ffffff] opacity-[0.03] pointer-events-none leading-[0.8] text-right">
			24<br/>7
		</div>

		<div class="relative z-10 min-h-screen flex flex-col">
			<router-view />
		</div>

	</div>
</template>
