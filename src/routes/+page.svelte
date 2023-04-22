<script lang="ts">
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

	let points = 0;

	function chooseParty(partyId: number) {
		if (partyId === currentPolicy.partyId) {
			alert('ถูกต้อง ✅');
			points += 1;
		} else {
			const rightParty = parties.find(({ id }) => id == currentPolicy.partyId)!;
			alert(`ผิด ❌ คำตอบที่ถูกต้องคือ พรรค${rightParty.name} คุณได้ทั้งหมด ${points} คะแนน`);
			points = 0;
		}

		let newPolicy;

		do {
			newPolicy = ~~(Math.random() * policies.length);
		} while (currentPolicyId == newPolicy);

		currentPolicyId = newPolicy;
	}
</script>

<main class="flex flex-col items-center gap-6 mt-12">
	<h1 class="text-3xl">Nayoblind</h1>

	<h2 class="border rounded px-4 py-2">นโยบาย: {currentPolicy.policy}</h2>

	<h2>เป็นของพรรค...</h2>

	<p class="flex gap-4">
		{#each parties as party}
			<button on:click={() => chooseParty(party.id)} class="btn">
				พรรค{party.name}
			</button>
		{/each}
	</p>

	{#if points > 0}
		<p class="text-2xl">{points} คะแนน</p>
	{/if}
</main>

<style>
</style>
