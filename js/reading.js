var reading = [
	// January
	{ date: "1/1", books: "" },
	{ date: "2/1", books: "" },
	{ date: "3/1", books: "" },
	{ date: "4/1", books: "" },
	{ date: "5/1", books: "" },
	{ date: "6/1", books: "" },
	{ date: "7/1", books: "" },
	{ date: "8/1", books: "" },
	{ date: "9/1", books: "" },
	{ date: "10/1", books: "" },
	{ date: "11/1", books: "" },
	{ date: "12/1", books: "" },
	{ date: "13/1", books: "" },
	{ date: "14/1", books: "" },
	{ date: "15/1", books: "" },
	{ date: "16/1", books: "" },
	{ date: "17/1", books: "" },
	{ date: "18/1", books: "" },
	{ date: "19/1", books: "" },
	{ date: "20/1", books: "" },
	{ date: "21/1", books: "" },
	{ date: "22/1", books: "" },
	{ date: "23/1", books: "" },
	{ date: "24/1", books: "" },
	{ date: "25/1", books: "" },
	{ date: "26/1", books: "" },
	{ date: "27/1", books: "" },
	{ date: "28/1", books: "" },
	{ date: "29/1", books: "" },
	{ date: "30/1", books: "" },
	{ date: "31/1", books: "" },
	// February
	{ date: "1/2", books: "" },
	{ date: "2/2", books: "" },
	{ date: "3/2", books: "" },
	{ date: "4/2", books: "" },
	{ date: "5/2", books: "" },
	{ date: "6/2", books: "" },
	{ date: "7/2", books: "" },
	{ date: "8/2", books: "" },
	{ date: "9/2", books: "" },
	{ date: "10/2", books: "" },
	{ date: "11/2", books: "" },
	{ date: "12/2", books: "" },
	{ date: "13/2", books: "" },
	{ date: "14/2", books: "" },
	{ date: "15/2", books: "" },
	{ date: "16/2", books: "" },
	{ date: "17/2", books: "" },
	{ date: "18/2", books: "" },
	{ date: "19/2", books: "" },
	{ date: "20/2", books: "" },
	{ date: "21/2", books: "" },
	{ date: "22/2", books: "" },
	{ date: "23/2", books: "" },
	{ date: "24/2", books: "" },
	{ date: "25/2", books: "" },
	{ date: "26/2", books: "" },
	{ date: "27/2", books: "" },
	{ date: "28/2", books: "" },
	// March
	{ date: "1/3", books: "" },
	{ date: "2/3", books: "" },
	{ date: "3/3", books: "" },
	{ date: "4/3", books: "" },
	{ date: "5/3", books: "" },
	{ date: "6/3", books: "" },
	{ date: "7/3", books: "" },
	{ date: "8/3", books: "" },
	{ date: "9/3", books: "" },
	{ date: "10/3", books: "" },
	{ date: "11/3", books: "" },
	{ date: "12/3", books: "" },
	{ date: "13/3", books: "" },
	{ date: "14/3", books: "" },
	{ date: "15/3", books: "" },
	{ date: "16/3", books: "" },
	{ date: "17/3", books: "" },
	{ date: "18/3", books: "" },
	{ date: "19/3", books: "" },
	{ date: "20/3", books: "" },
	{ date: "21/3", books: "" },
	{ date: "22/3", books: "Job:1" },
	{ date: "23/3", books: "Job:2" },
	{ date: "24/3", books: "Job:3" },
	{ date: "25/3", books: "Job:4" },
	{ date: "26/3", books: "Job:5" },
	{ date: "27/3", books: "Job:6" },
	{ date: "28/3", books: "Job:7" },
	{ date: "29/3", books: "Job:8" },
	{ date: "30/3", books: "Job:9,2Thes:1" },
	{ date: "31/3", books: "Job:10,2Thes:2" },
	// April
	{ date: "1/4", books: "Job:11,2Thes:3" },
	{ date: "2/4", books: "Job:12,1Tim:1" },
	{ date: "3/4", books: "Job:13,1Tim:2" },
	{ date: "4/4", books: "Job:14,1Tim:3" },
	{ date: "5/4", books: "Job:15,1Tim:4" },
	{ date: "6/4", books: "Job:16,1Tim:5" },
	{ date: "7/4", books: "Job:17,1Tim:6" },
	{ date: "8/4", books: "Job:18,2Tim:1" },
	{ date: "9/4", books: "Job:19,2Tim:2" },
	{ date: "10/4", books: "Job:20,Is:1,Is:2,2Tim:3" },
	{ date: "11/4", books: "Job:21,Is:3,Is:4,2Tim:4" },
	{ date: "12/4", books: "Job:22,Is:5,Is:6,Tit:1" },
	{ date: "13/4", books: "Job:23,Is:7,Is:8,Tit:2" },
	{ date: "14/4", books: "Job:24,Is:9,Is:10,Tit:3" },
	{ date: "15/4", books: "Job:25,Is:11,Is:12,Phlm:1" },
	{ date: "16/4", books: "Job:26,Is:13,Is:14,Hebr:1" },
	{ date: "17/4", books: "Job:27,Is:15,Is:16,Hebr:2" },
	{ date: "18/4", books: "Job:28,Is:17,Is:18,Hebr:3" },
	{ date: "19/4", books: "Job:29,Is:19,Is:20,Hebr:4" },
	{ date: "20/4", books: "Job:30,Is:21,Is:22,Hebr:5" },
	{ date: "21/4", books: "Job:31,Is:23,Is:24,Hebr:6" },
	{ date: "22/4", books: "Job:32,Is:25,Is:26,Hebr:7" },
	{ date: "23/4", books: "Job:33,Is:27,Is:28,Hebr:8" },
	{ date: "24/4", books: "Job:34,Is:29,Is:30,Hebr:9" },
	{ date: "25/4", books: "Job:35,Is:31,Is:32,Hebr:10" },
	{ date: "26/4", books: "Job:36,Is:33,Is:34,Hebr:11" },
	{ date: "27/4", books: "Job:37,Is:35,Is:36,Hebr:12" },
	{ date: "28/4", books: "Job:38,Is:37,Is:38,Hebr:13" },
	{ date: "29/4", books: "Job:39,Is:39,Is:40,Apok:1" },
	{ date: "30/4", books: "Job:40,Is:41,Is:42,Apok:2" },
	// May
	{ date: "1/5", books: "Job:41,Is:43,Is:44,Apok:3" },
	{ date: "2/5", books: "Job:42,Is:45,Is:46,Apok:4" },
	{ date: "3/5", books: "Solom:1,Is:47,Is:48,Apok:5" },
	{ date: "4/5", books: "Solom:2,Is:49,Is:50,Apok:6" },
	{ date: "5/5", books: "Solom:3,Is:51,Is:52,Apok:7" },
	{ date: "6/5", books: "Solom:4,Is:53,Is:54,Apok:8" },
	{ date: "7/5", books: "Solom:5,Is:55,Is:56,Apok:9" },
	{ date: "8/5", books: "Solom:6,Is:57,Is:58,Apok:10" },
	{ date: "9/5", books: "Solom:7,Is:59,Is:60,Apok:11" },
	{ date: "10/5", books: "Solom:8,Is:61,Is:62,Apok:12" },
	{ date: "11/5", books: "Solom:9,Is:63,Is:64,Apok:13" },
	{ date: "12/5", books: "Solom:10,Is:65,Is:66,Apok:14" },
	{ date: "13/5", books: "Solom:11,Jer:1,Jer:2,Apok:15" },
	{ date: "14/5", books: "Solom:12,Jer:3,Jer:4,Apok:16" },
	{ date: "15/5", books: "Solom:13,Jer:5,Jer:6,Apok:17" },
	{ date: "16/5", books: "Solom:14,Jer:7,Jer:8,Apok:18" },
	{ date: "17/5", books: "Solom:15,Jer:9,Jer:10,Apok:19" },
	{ date: "18/5", books: "Solom:16,Jer:11,Jer:12,Apok:20" },
	{ date: "19/5", books: "Solom:17,Jer:13,Jer:14,Apok:21" },
	{ date: "20/5", books: "Solom:18,Jer:15,Jer:16,Apok:22" },
	{ date: "21/5", books: "Solom:19,Jer:17,Jer:18,Mt:1" },
	{ date: "22/5", books: "Sir:1,Jer:19,Jer:20,Mt:2" },
	{ date: "23/5", books: "Sir:2,Jer:21,Jer:22,Mt:3" },
	{ date: "24/5", books: "Sir:3,Jer:23,Jer:24,Mt:4" },
	{ date: "25/5", books: "Sir:4,Jer:25,Jer:26,Mt:5" },
	{ date: "26/5", books: "Sir:5,Jer:27,Jer:28,Mt:6" },
	{ date: "27/5", books: "Sir:6,Jer:29,Jer:30,Mt:7" },
	{ date: "28/5", books: "Sir:7,Jer:31,Jer:32,Mt:8" },
	{ date: "29/5", books: "Sir:8,Jer:33,Jer:34,Mt:9" },
	{ date: "30/5", books: "Sir:9,Jer:35,Jer:36,Mt:10" },
	{ date: "31/5", books: "Sir:10,Jer:37,Jer:38,Mt:11" },
	// June
	{ date: "1/6", books: "Sir:11,Jer:39,Jer:40,Mt:12" },
	{ date: "2/6", books: "Sir:12,Jer:41,Jer:42,Mt:13" },
	{ date: "3/6", books: "Sir:13,Jer:43,Jer:44,Mt:14" },
	{ date: "4/6", books: "Sir:14,Jer:45,Jer:46,Mt:15" },
	{ date: "5/6", books: "Sir:15,Jer:47,Jer:48,Mt:16" },
	{ date: "6/6", books: "Sir:16,Jer:49,Jer:50,Mt:17" },
	{ date: "7/6", books: "Sir:17,Jer:51,Jer:52,Mt:18" },
	{ date: "8/6", books: "Sir:18,Mt:19" },
	{ date: "9/6", books: "Sir:19,Mt:20" },
	{ date: "10/6", books: "Sir:20,Mt:21" },
	{ date: "11/6", books: "Sir:21,Mt:22" },
	{ date: "12/6", books: "Sir:22,Mt:23" },
	{ date: "13/6", books: "Sir:23,Mt:24" },
	{ date: "14/6", books: "Sir:24,Mt:25" },
	{ date: "15/6", books: "Sir:25,Mt:26" },
	{ date: "16/6", books: "Sir:26,Mt:27" },
	{ date: "17/6", books: "Sir:27,Mt:28" },
	{ date: "18/6", books: "Sir:28" },
	{ date: "19/6", books: "Sir:29" },
	{ date: "20/6", books: "Sir:30" },
	{ date: "21/6", books: "Sir:31" },
	{ date: "22/6", books: "Sir:32" },
	{ date: "23/6", books: "Sir:33" },
	{ date: "24/6", books: "Sir:34" },
	{ date: "25/6", books: "Sir:35" },
	{ date: "26/6", books: "Sir:36" },
	{ date: "27/6", books: "Sir:37" },
	{ date: "28/6", books: "Sir:38" },
	{ date: "29/6", books: "Sir:39" },
	{ date: "30/6", books: "Sir:40" },
	// July
	{ date: "1/7", books: "Sir:41" },
	{ date: "2/7", books: "Sir:42" },
	{ date: "3/7", books: "Sir:43" },
	{ date: "4/7", books: "Sir:44" },
	{ date: "5/7", books: "Sir:45" },
	{ date: "6/7", books: "Sir:46" },
	{ date: "7/7", books: "Sir:47" },
	{ date: "8/7", books: "Sir:48" },
	{ date: "9/7", books: "Sir:49" },
	{ date: "10/7", books: "Sir:50" },
	{ date: "11/7", books: "Sir:51" },
	{ date: "12/7", books: "Sir:52" },
	{ date: "13/7", books: "" },
	{ date: "14/7", books: "" },
	{ date: "15/7", books: "" },
	{ date: "16/7", books: "" },
	{ date: "17/7", books: "" },
	{ date: "18/7", books: "" },
	{ date: "19/7", books: "" },
	{ date: "20/7", books: "" },
	{ date: "21/7", books: "" },
	{ date: "22/7", books: "" },
	{ date: "23/7", books: "" },
	{ date: "24/7", books: "" },
	{ date: "25/7", books: "" },
	{ date: "26/7", books: "" },
	{ date: "27/7", books: "" },
	{ date: "28/7", books: "" },
	{ date: "29/7", books: "" },
	{ date: "30/7", books: "" },
	{ date: "31/7", books: "" },
	// August
	{ date: "1/8", books: "" },
	{ date: "2/8", books: "" },
	{ date: "3/8", books: "" },
	{ date: "4/8", books: "" },
	{ date: "5/8", books: "" },
	{ date: "6/8", books: "" },
	{ date: "7/8", books: "" },
	{ date: "8/8", books: "" },
	{ date: "9/8", books: "" },
	{ date: "10/8", books: "" },
	{ date: "11/8", books: "" },
	{ date: "12/8", books: "" },
	{ date: "13/8", books: "" },
	{ date: "14/8", books: "" },
	{ date: "15/8", books: "" },
	{ date: "16/8", books: "" },
	{ date: "17/8", books: "" },
	{ date: "18/8", books: "" },
	{ date: "19/8", books: "" },
	{ date: "20/8", books: "" },
	{ date: "21/8", books: "" },
	{ date: "22/8", books: "" },
	{ date: "23/8", books: "" },
	{ date: "24/8", books: "" },
	{ date: "25/8", books: "" },
	{ date: "26/8", books: "" },
	{ date: "27/8", books: "" },
	{ date: "28/8", books: "" },
	{ date: "29/8", books: "" },
	{ date: "30/8", books: "" },
	{ date: "31/8", books: "" },
	// September
	{ date: "1/9", books: "" },
	{ date: "2/9", books: "" },
	{ date: "3/9", books: "" },
	{ date: "4/9", books: "" },
	{ date: "5/9", books: "" },
	{ date: "6/9", books: "" },
	{ date: "7/9", books: "" },
	{ date: "8/9", books: "" },
	{ date: "9/9", books: "" },
	{ date: "10/9", books: "" },
	{ date: "11/9", books: "" },
	{ date: "12/9", books: "" },
	{ date: "13/9", books: "" },
	{ date: "14/9", books: "" },
	{ date: "15/9", books: "" },
	{ date: "16/9", books: "" },
	{ date: "17/9", books: "" },
	{ date: "18/9", books: "" },
	{ date: "19/9", books: "" },
	{ date: "20/9", books: "" },
	{ date: "21/9", books: "" },
	{ date: "22/9", books: "" },
	{ date: "23/9", books: "" },
	{ date: "24/9", books: "" },
	{ date: "25/9", books: "" },
	{ date: "26/9", books: "" },
	{ date: "27/9", books: "" },
	{ date: "28/9", books: "" },
	{ date: "29/9", books: "" },
	{ date: "30/9", books: "" },
	// October
	{ date: "1/10", books: "" },
	{ date: "2/10", books: "" },
	{ date: "3/10", books: "" },
	{ date: "4/10", books: "" },
	{ date: "5/10", books: "" },
	{ date: "6/10", books: "" },
	{ date: "7/10", books: "" },
	{ date: "8/10", books: "" },
	{ date: "9/10", books: "" },
	{ date: "10/10", books: "" },
	{ date: "11/10", books: "" },
	{ date: "12/10", books: "" },
	{ date: "13/10", books: "" },
	{ date: "14/10", books: "" },
	{ date: "15/10", books: "" },
	{ date: "16/10", books: "" },
	{ date: "17/10", books: "" },
	{ date: "18/10", books: "" },
	{ date: "19/10", books: "" },
	{ date: "20/10", books: "" },
	{ date: "21/10", books: "" },
	{ date: "22/10", books: "" },
	{ date: "23/10", books: "" },
	{ date: "24/10", books: "" },
	{ date: "25/10", books: "" },
	{ date: "26/10", books: "" },
	{ date: "27/10", books: "" },
	{ date: "28/10", books: "" },
	{ date: "29/10", books: "" },
	{ date: "30/10", books: "" },
	{ date: "31/10", books: "" },
	// November
	{ date: "1/11", books: "" },
	{ date: "2/11", books: "" },
	{ date: "3/11", books: "" },
	{ date: "4/11", books: "" },
	{ date: "5/11", books: "" },
	{ date: "6/11", books: "" },
	{ date: "7/11", books: "" },
	{ date: "8/11", books: "" },
	{ date: "9/11", books: "" },
	{ date: "10/11", books: "" },
	{ date: "11/11", books: "" },
	{ date: "12/11", books: "" },
	{ date: "13/11", books: "" },
	{ date: "14/11", books: "" },
	{ date: "15/11", books: "" },
	{ date: "16/11", books: "" },
	{ date: "17/11", books: "" },
	{ date: "18/11", books: "" },
	{ date: "19/11", books: "" },
	{ date: "20/11", books: "" },
	{ date: "21/11", books: "" },
	{ date: "22/11", books: "" },
	{ date: "23/11", books: "" },
	{ date: "24/11", books: "" },
	{ date: "25/11", books: "" },
	{ date: "26/11", books: "" },
	{ date: "27/11", books: "" },
	{ date: "28/11", books: "" },
	{ date: "29/11", books: "" },
	{ date: "30/11", books: "" },
	// December
	{ date: "1/12", books: "" },
	{ date: "2/12", books: "" },
	{ date: "3/12", books: "" },
	{ date: "4/12", books: "" },
	{ date: "5/12", books: "" },
	{ date: "6/12", books: "" },
	{ date: "7/12", books: "" },
	{ date: "8/12", books: "" },
	{ date: "9/12", books: "" },
	{ date: "10/12", books: "" },
	{ date: "11/12", books: "" },
	{ date: "12/12", books: "" },
	{ date: "13/12", books: "" },
	{ date: "14/12", books: "" },
	{ date: "15/12", books: "" },
	{ date: "16/12", books: "" },
	{ date: "17/12", books: "" },
	{ date: "18/12", books: "" },
	{ date: "19/12", books: "" },
	{ date: "20/12", books: "" },
	{ date: "21/12", books: "" },
	{ date: "22/12", books: "" },
	{ date: "23/12", books: "" },
	{ date: "24/12", books: "" },
	{ date: "25/12", books: "" },
	{ date: "26/12", books: "" },
	{ date: "27/12", books: "" },
	{ date: "28/12", books: "" },
	{ date: "29/12", books: "" },
	{ date: "30/12", books: "" },
	{ date: "31/12", books: "" },
];
