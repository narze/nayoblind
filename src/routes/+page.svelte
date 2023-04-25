<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import Head from '../head.svelte';
	import Share from '../share.svelte';
	import Adsense from '../adsense.svelte';

	let darkMode = false;
	let continueGame = false;
	let showChoices = false;
	let lastAnswer = false;
	let lastAnswerParty = '';
	let message = '';

	onMount(() => {
		themeChange(false);

		if (browser) {
			const htmlTheme = document.querySelector('html')?.dataset.theme;

			if (htmlTheme === 'business') {
				// console.log('html theme="dark"')
				darkMode = true;
			} else if (
				!htmlTheme &&
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				// console.log('system theme = "dark"')
				darkMode = true;
			}
		}
	});

	let showFbComments = false;
	if (browser && window) {
		window.fbAsyncInit = function () {
			showFbComments = true;
		};
	}

	const parties = [
		{
			id: 1,
			name: 'เพื่อไทย'
		},
		{
			id: 2,
			name: 'ก้าวไกล'
		},
		{
			id: 3,
			name: 'พลังประชารัฐ'
		},
		{
			id: 4,
			name: 'รวมไทยสร้างชาติ'
		},
		{
			id: 5,
			name: 'ภูมิใจไทย'
		},
		{
			id: 6,
			name: 'ประชาธิปัตย์'
		}
	];

	const policies = [
		{
			policy: 'เพิ่มสิทธิ บัตรสวัสดิการพลัส เป็น 1,000 บาท/เดือน และสิทธิเบิกฉุกเฉิน 10,000 บาท/คน',
			partyId: 4
		},
		{
			policy: 'ตั้งกองทุนฉุกเฉินประชาชน วงเงิน 3 หมื่นล้านบาท',
			partyId: 4
		},
		{
			policy: 'คืน 30% เงินสะสมชราภาพ ให้ผู้ประกันตน ตามมาตรา 33',
			partyId: 4
		},
		{
			policy: 'โครงการ ปลดหนี้ด้วยงาน',
			partyId: 4
		},
		{
			policy: 'รื้อกฎหมายที่รังแกประชาชน และเป็นอุปสรรคการทำกิน',
			partyId: 4
		},
		{
			policy: 'ให้ทุนเรียนวิชาชีพอำเภอละ 100 ทุน มีสถาบันกำเนิดศิลป์ ปั้นศิลปินไทยสู่เวทีโลก',
			partyId: 4
		},
		{
			policy: 'ปรับปรุงแผนที่แนวเขตที่ดินของรัฐแบบบูรณาการ (One map)',
			partyId: 4
		},
		{
			policy: 'สานต่อโครงการคนละครึ่ง เราเที่ยวด้วยกัน ภาค 2',
			partyId: 4
		},
		{
			policy: 'เพิ่มเงินสนับสนุนต้นทุนปลูกข้าว เป็นไร่ละ 2,000 บาท ครอบครัวละไม่เกิน 5 ไร่',
			partyId: 4
		},
		{
			policy: 'ยกเลิกบังคับเกณฑ์ทหาร',
			partyId: 2
		},
		{
			policy: 'ปรับขึ้นค่าแรงขั้นต่ำทุกปี เริ่มทันทีวันละ 450 บาท',
			partyId: 2
		},
		{
			policy: 'รถเมล์ไฟฟ้าทุกคันภายใน 7 ปี',
			partyId: 2
		},
		{
			policy: 'คูปองเปิดโลกเรียนรู้นอกห้องเรียน สูงสุด 2,000 บาทต่อปี',
			partyId: 2
		},
		{
			policy: 'ระบบ AI จับโกง',
			partyId: 2
		},
		{
			policy: 'เงินเด็กเล็ก เดือนละ 1,200 บาท',
			partyId: 2
		},
		{
			policy: 'นโยบายเพื่อคนไทยไม่ไร้สัญชาติ',
			partyId: 1
		},
		{
			policy: 'รถไฟฟ้า กทม. 20 บาทตลอดสาย',
			partyId: 1
		},
		{
			policy: 'บัตรประชาชนใบเดียวรักษาได้ทั่วไทย',
			partyId: 1
		},
		{
			policy: 'Free tablet for all',
			partyId: 1
		},
		{
			policy: 'รัฐธรรมนูญใหม่ทั้งฉบับ',
			partyId: 2
		},
		{
			policy: 'หลังคาปลดหนี้ - รัฐติดแผงโซลาร์ให้ฟรี เกษตรกรขายไฟฟ้าปลดหนี้',
			partyId: 2
		},
		{
			policy: 'ลดราคา น้ำมัน ไฟฟ้า แก๊ส ทันที',
			partyId: 1
		},
		{
			policy: '7 สวัสดิการรัฐ',
			partyId: 3
		},
		{
			policy: 'น้ำมันประชาชน',
			partyId: 3
		},
		{
			policy: 'มีเราไม่มีแล้ง มีที่ทำกิน ไม่มีจน',
			partyId: 3
		},
		{
			policy: 'บัตรประชารัฐ เพิ่มเงินเป็น 700 บาท/เดือน',
			partyId: 3
		},
		{
			policy: 'ค่าแรงขั้นต่ำ 400-425 บาท ปริญญาตรีเงินเดือน 2 หมื่น อาชีวะเงินเดือน 1.8 หมื่น',
			partyId: 3
		},
		{
			policy: 'บัตรสวัสดิการพลัส',
			partyId: 4
		},
		{
			policy: 'พักหนี้ 3 ปี หยุดต้น ปลอดดอกเบี้ย',
			partyId: 5
		},
		{
			policy: 'ฟรี Solar Roof ช่วยลดค่าไฟฟ้า ช่วยประหยัดค่าใช้จ่าย',
			partyId: 5
		},
		{
			policy: 'เครื่องฉายรังสีฟรี ทุกจังหวัด',
			partyId: 5
		},
		{
			policy:
				'รถเมล์ไฟฟ้า ลด PM2.5 ค่าโดยสารเริ่มต้น 10 บาท สูงสุด 40 บาท ทุกเที่ยว ทุกสาย ตลอดวัน',
			partyId: 5
		},
		{
			policy: 'เกษตรร่ำรวย ด้วย Contract Farming รู้ราคาก่อนปลูก รับเงินก่อนขาย เสียหายมีประกัน',
			partyId: 5
		},
		{
			policy:
				'Landbridge อ่าวไทย-อันดามัน ยกระดับการคมนาคมของประเทศไทย สู่การเป็นศูนย์กลางคมนาคมอาเซียน พัฒนาเศรษฐกิจทุกมิติ',
			partyId: 5
		},
		{
			policy: 'ฟรี น้ำดื่มสะอาด ติดตั้งเครื่องกรองน้ำ ทุกหมู่บ้าน',
			partyId: 5
		},
		{
			policy: 'ชาวนา รับ 30,000 บาท ต่อครัวเรือน',
			partyId: 6
		},
		{
			policy: 'ประกันรายได้ จ่ายเงินส่วนต่าง ข้าว มัน ยาง ปาล์ม ข้าวโพด',
			partyId: 6
		},
		{
			policy: 'ฟรีนมโรงเรียน 365 วัน',
			partyId: 6
		},
		{
			policy: 'ออกโฉนดที่ดิน 1 ล้านแปลง ภายใน 4 ปี',
			partyId: 6
		},
		{
			policy: 'ชมรมผู้สูงอายุ รับ 30,000 บาท ทุกหมู่บ้าน ทุกชุมชน',
			partyId: 6
		},
		{
			policy: 'ออกกรรมสิทธิ์ทํากิน ให้ผู้ทํากินในที่ดินของรัฐ',
			partyId: 6
		}
	];

	$: currentPolicyId = ~~(Math.random() * policies.length);
	$: currentPolicy = policies[currentPolicyId];

	let gameState: 'MENU' | 'PARTY' | 'BLIND' = 'MENU';

	let points = 0;

	function choosePartyBlindMode(partyId: number) {
		showChoices = false;

		const chosenParty = parties.find(({ id }) => id == partyId)!;
		lastAnswerParty = `พรรค${chosenParty.name}`;
		const rightParty = parties.find(({ id }) => id == currentPolicy.partyId)!;

		if (partyId === currentPolicy.partyId) {
			feedback(true, `ถูกต้อง ✅ <br>นโยบายนี้เป็นของ พรรค${rightParty.name}`);
			points += 1;
		} else {
			feedback(
				false,
				`ผิด ❌ นโยบายนี้เป็นของ พรรค${rightParty.name}<br>คุณได้ทั้งหมด ${points} คะแนน`
			);
		}
	}

	function answerPartyMode(answer: boolean) {
		lastAnswer = answer;
		showChoices = false;

		const rightParty = parties.find(({ id }) => id == currentPolicy.partyId)!;

		if (answer == (currentPolicy.partyId == partyModeOptions.partyId)) {
			feedback(true, `ถูกต้อง ✅ <br>นโยบายนี้เป็นของ พรรค${rightParty.name}`);
			points += 1;
		} else {
			feedback(
				false,
				`ผิด ❌ นโยบายนี้เป็นของ พรรค${rightParty.name}<br>คุณได้ทั้งหมด ${points} คะแนน`
			);
		}
	}

	function nextQuestion() {
		getNextPolicy();
		showChoices = true;
	}

	const partyModeOptions = {} as Record<string, any>;

	function playPartyMode(partyId: number) {
		getNextPolicy();
		points = 0;
		message = '';
		continueGame = true;
		showChoices = true;
		gameState = 'PARTY';
		partyModeOptions.partyId = partyId;
		partyModeOptions.party = parties.find(({ id }) => id == partyId)!;
	}

	function playBlindMode() {
		getNextPolicy();
		points = 0;
		message = '';
		continueGame = true;
		showChoices = true;
		gameState = 'BLIND';
	}

	function getNextPolicy() {
		let newPolicy;

		do {
			newPolicy = ~~(Math.random() * policies.length);
		} while (currentPolicyId == newPolicy);

		currentPolicyId = newPolicy;
	}

	function feedback(isRightAnswer: boolean, _message: string) {
		message = _message;
		continueGame = isRightAnswer;
	}
</script>

<Head
	title="Nayoblind"
	description="ทดสอบความจำนโยบายเลือกตั้ง 2566"
	url="https://nayoblind.narze.live"
	imageUrl="https://raw.githubusercontent.com/narze/timelapse/main/projects/nayoblind_home.png"
	gtagId="G-17QSJGM9H5"
/>

<Adsense />

<main class="flex flex-col items-center gap-4">
	<div class="hero bg-base-200 mb-2">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="py-4 text-5xl font-bold">Nayoblind</h1>
				<p class="py-4 neutral-content">ทดสอบความจำนโยบายเลือกตั้ง 2566</p>
			</div>
		</div>
	</div>

	{#if gameState === 'MENU'}
		<div class="card card-bordered bg-base-100 shadow-xl">
			<div class="card-body items-center text-center">
				<div class="card-title">Party Mode - เลือกพรรคแล้วทายนโยบาย (ง่าย)</div>
				<p class="flex gap-4 mt-4 flex-wrap justify-center">
					{#each parties as party}
						<button on:click={() => playPartyMode(party.id)} class="btn btn-primary">
							{party.name}
						</button>
					{/each}
				</p>
			</div>
		</div>

		<div class="card card-bordered bg-base-100 shadow-xl">
			<div class="card-body items-center text-center">
				<div class="card-title">Blind Mode - ทายชื่อพรรคจากนโยบาย (ยาก)</div>
				<p class="mt-4 mx-auto">
					<button on:click={() => playBlindMode()} class="btn btn-primary"
						>เริ่มเล่น Blind Mode</button
					>
				</p>
			</div>
		</div>

		<!-- <div class="flex flex-row justify-center items-center w-32 gap-1">
			🌞
			<div class="w-10">
				<span
					data-toggle-theme="corporate,business"
					data-act-class="pl-4"
					class="border rounded-full border-primary flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0"
					class:pl-4={darkMode}
				>
					<span class="rounded-full w-3 h-3 m-1 bg-primary" />
				</span>
			</div>
			🌚
		</div> -->

		<label class="swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={darkMode} data-toggle-theme="corporate,business" />

			<!-- sun icon -->
			<svg
				class="swap-off fill-current w-10 h-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path
					d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
				/></svg
			>

			<!-- moon icon -->
			<svg
				class="swap-on fill-current w-10 h-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path
					d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
				/></svg
			>
		</label>
	{:else if gameState === 'PARTY'}
		<h2 class="border rounded px-4 py-2">Party Mode - พรรค{partyModeOptions.party.name}</h2>

		<h2>นโยบาย: {currentPolicy.policy}</h2>
		<h2>เป็นของ พรรค{partyModeOptions.party.name} หรือไม่</h2>

		{#if continueGame}
			{#if showChoices}
				<p class="flex gap-4">
					<button on:click={() => answerPartyMode(true)} class="btn btn-success"> ใช่ </button>
					<button on:click={() => answerPartyMode(false)} class="btn btn-error"> ไม่ใช่ </button>
				</p>
			{:else}
				<div class="border rounded px-4 py-2">
					{lastAnswer ? 'ใช่' : 'ไม่ใช่'}
				</div>

				{#if message.length}
					<p class="text-center">{@html message}</p>
				{/if}

				<button on:click={() => nextQuestion()} class="btn btn-success"> ต่อไป </button>
			{/if}

			{#if points > 0}
				<p class="text-2xl">{points} คะแนน</p>
			{/if}
		{:else}
			<div class="border rounded px-4 py-2">
				{lastAnswer ? 'ใช่' : 'ไม่ใช่'}
			</div>

			{#if message.length}
				<p class="text-center">{@html message}</p>
			{/if}

			<Share
				text={`ได้ ${points} คะแนน จากการทายนโยบายเลือกตั้ง '66 พรรค ${partyModeOptions.party.name}`}
			/>

			<button on:click={() => (gameState = 'MENU')} class="btn btn-primary"> กลับหน้าแรก </button>
		{/if}
	{:else if gameState === 'BLIND'}
		<h2 class="border rounded px-4 py-2">นโยบาย: {currentPolicy.policy}</h2>

		<h2>เป็นของพรรคใด</h2>

		{#if continueGame}
			{#if showChoices}
				<p class="flex gap-4 flex-wrap p-4 justify-center">
					{#each parties as party}
						<button on:click={() => choosePartyBlindMode(party.id)} class="btn btn-primary">
							{party.name}
						</button>
					{/each}
				</p>
			{:else}
				<div class="border rounded px-4 py-2">
					{lastAnswerParty}
				</div>

				{#if message.length}
					<p class="text-center">{@html message}</p>
				{/if}

				<button on:click={() => nextQuestion()} class="btn btn-success"> ต่อไป </button>
			{/if}

			{#if points > 0}
				<p class="text-2xl">{points} คะแนน</p>
			{/if}
		{:else}
			<div class="border rounded px-4 py-2">
				{lastAnswerParty}
			</div>

			{#if message.length}
				<p class="text-center">{@html message}</p>
			{/if}

			<Share text={`ได้ ${points} คะแนน จากการทายนโยบายเลือกตั้ง '66`} />

			<button on:click={() => (gameState = 'MENU')} class="btn btn-primary"> กลับหน้าแรก </button>
		{/if}
	{/if}

	{#if browser && window}
		<div id="fb-root" />

		<script
			async
			defer
			crossorigin="anonymous"
			src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=279907418704450&autoLogAppEvents=1"
			nonce="F4yGVCO6"
		></script>

		{#if showFbComments}
			<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
			<div class="card shadow-xl card-bordered bg-base-100 w-full max-w-lg mb-8">
				<div class="card-body">
					<div class="card-title text-sm mb-4">คอมเม้นต์ + เสนอแนะ</div>

					<div
						class="fb-comments"
						data-href="https://nayoblind.narze.live/"
						data-width="100%"
						data-numposts="10"
						data-colorscheme={darkMode ? 'dark' : 'light'}
					/>
				</div>
			</div>
		{/if}
	{/if}
</main>
