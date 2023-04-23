<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode =
		browser &&
		window &&
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;

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
			policy: 'ยกเลิกเกณฑ์ทหาร',
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
			policy: 'ลดราคา น้ำมัน ไฟฟ้า แก๊ส ทันที',
			partyId: 1
		},
		{
			policy: '7 สวัสดิการรัฐ',
			partyId: 3
		},
		{
			policy: 'ค่าแรงขั้นต่ำ 400-425 บาท ปริญญาตรีเงินเดือน 2 หมื่น อาชีวะเงินเดือน 1.8 หมื่น',
			partyId: 3
		},
		{
			policy: 'ทำแล้ว ทำอยู่ ทำต่อ',
			partyId: 4
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
			policy: 'เครื่องฉายรังสีฟรี ทุกจังหวัด',
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

<main class="flex flex-col items-center gap-6 mt-12">
	<h1 class="text-5xl">Nayoblind</h1>

	{#if gameState === 'MENU'}
		<p>ทดสอบความจำนโยบายเลือกตั้ง 2566</p>

		<div class="card bg-neutral shadow-xl">
			<div class="card-body">
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

		<div class="card bg-neutral shadow-xl">
			<div class="card-body">
				<div class="card-title">Blind Mode - ทายชื่อพรรคจากนโยบาย (ยาก)</div>
				<p class="mt-4 mx-auto">
					<button on:click={() => playBlindMode()} class="btn btn-primary"
						>เริ่มเล่น Blind Mode</button
					>
				</p>
			</div>
		</div>
		<div class="card" />
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
			<div class="card bg-neutral shadow-xl min-w-[480px]">
				<div class="card-body">
					<div class="card-title text-sm">Feedback & Suggestions</div>

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

<style>
</style>
