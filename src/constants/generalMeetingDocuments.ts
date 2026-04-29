export interface GeneralMeetingDocument {
	slug: string
	year: string
	title: string
	documentUrl: string
	heldAt?: string
	location?: string
}

const GENERAL_MEETING_LOCATION = '東洋大学赤羽台キャンパス INIAD HUB-1'

export const generalMeetingDocuments: GeneralMeetingDocument[] = [
	{
		slug: '202511',
		year: '2025',
		title: '第3回総会',
		heldAt: '2025/11/02',
		location: GENERAL_MEETING_LOCATION,
		documentUrl:
			'https://drive.google.com/file/d/1wt2WAG_uiirEERkd3fVkg1EHTcEQRMHL/view?usp=sharing',
	},
	{
		slug: '202411',
		year: '2024',
		title: '第2回総会',
		heldAt: '2024/11/02',
		location: GENERAL_MEETING_LOCATION,
		documentUrl:
			'https://drive.google.com/file/d/1jjw3UleNaGoTs2UCLwBrg5h5qn0PiDpB/view?usp=sharing',
	},
	{
		slug: '202312',
		year: '2023',
		title: '第1回総会',
		heldAt: '2023/12/09',
		location: GENERAL_MEETING_LOCATION,
		documentUrl:
			'https://drive.google.com/file/d/1Tm1wyqcm0M6LM18tULCH928l8ZTb1TP-/view?usp=sharing',
	},
]
