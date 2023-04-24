<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import Head from '../head.svelte';
	import Adsense from '../adsense.svelte';

	let darkMode = false;

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
		}
	];

	$: currentPolicyId = ~~(Math.random() * policies.length);
	$: currentPolicy = policies[currentPolicyId];

	let gameState: 'MENU' | 'PARTY' | 'BLIND' = 'MENU';

	let points = 0;

	function chooseParty(partyId: number) {
		const rightParty = parties.find(({ id }) => id == currentPolicy.partyId)!;

		if (partyId === currentPolicy.partyId) {
			alert(`ถูกต้อง ✅ นโยบายนี้เป็นของ พรรค${rightParty.name}`);
			points += 1;
		} else {
			alert(`ผิด ❌ นโยบายนี้เป็นของ พรรค${rightParty.name} \n คุณได้ทั้งหมด ${points} คะแนน`);
			points = 0;

			gameState = 'MENU';
		}

		let newPolicy;

		do {
			newPolicy = ~~(Math.random() * policies.length);
		} while (currentPolicyId == newPolicy);

		currentPolicyId = newPolicy;
	}

	function answerBlindMode(answer: boolean) {
		const rightParty = parties.find(({ id }) => id == currentPolicy.partyId)!;

		if (answer == (currentPolicy.partyId == partyModeOptions.partyId)) {
			alert(`ถูกต้อง ✅ นโยบายนี้เป็นของ พรรค${rightParty.name}`);
			points += 1;
		} else {
			alert(`ผิด ❌ นโยบายนี้เป็นของ พรรค${rightParty.name} \n คุณได้ทั้งหมด ${points} คะแนน`);
			points = 0;
			gameState = 'MENU';
		}

		let newPolicy;

		do {
			newPolicy = ~~(Math.random() * policies.length);
		} while (currentPolicyId == newPolicy);

		currentPolicyId = newPolicy;
	}

	const partyModeOptions = {} as Record<string, any>;

	function playPartyMode(partyId: number) {
		gameState = 'PARTY';
		partyModeOptions.partyId = partyId;
		partyModeOptions.party = parties.find(({ id }) => id == partyId)!;
	}

	function playBlindMode() {
		gameState = 'BLIND';
	}
</script>

<Head
	title="Nayoblind"
	description="ทดสอบความจำนโยบายเลือกตั้ง 2566"
	url="https://nayoblind.vercel.app"
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
				<p class="flex gap-4 mt-4 flex-wrap">
					{#each parties as party}
						<button on:click={() => playPartyMode(party.id)} class="btn btn-primary">
							พรรค{party.name}
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

		<div class="flex flex-row justify-center items-center w-32 gap-1">
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
		</div>
	{:else if gameState === 'PARTY'}
		<h2 class="border rounded px-4 py-2">Party Mode - พรรค{partyModeOptions.party.name}</h2>

		<h2>นโยบาย: {currentPolicy.policy}</h2>
		<h2>เป็นของ พรรค{partyModeOptions.party.name} หรือไม่</h2>

		<p class="flex gap-4">
			<button on:click={() => answerBlindMode(true)} class="btn btn-success"> ใช่ </button>
			<button on:click={() => answerBlindMode(false)} class="btn btn-error"> ไม่ใช่ </button>
		</p>

		{#if points > 0}
			<p class="text-2xl">{points} คะแนน</p>
		{/if}
	{:else if gameState === 'BLIND'}
		<h2 class="border rounded px-4 py-2">นโยบาย: {currentPolicy.policy}</h2>

		<h2>เป็นของพรรคใด</h2>

		<p class="flex gap-4">
			{#each parties as party}
				<button on:click={() => chooseParty(party.id)} class="btn btn-primary">
					พรรค{party.name}
				</button>
			{/each}
		</p>

		{#if points > 0}
			<p class="text-2xl">{points} คะแนน</p>
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
						data-href="https://nayoblind.vercel.app/"
						data-width="100%"
						data-numposts="10"
						data-colorscheme={darkMode ? 'dark' : 'light'}
					/>
				</div>
			</div>
		{/if}
	{/if}
</main>
