interface Sample {
  id: string;
  use_date: string;
  master: Master;
}

interface Master {
  type: string;
  rate: number;
  amount: number;
  startDate: string;
  endDate: string;
}

const data: Sample[] = [
  {
    id: "test1", use_date: "", master:
      { "type": "1", "rate": 0, "amount": 0, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-08-01T12:00:00.000+09:00" }
  },
  {
    id: "test2", use_date: "", master:
      { "type": "2", "rate": 0, "amount": 500, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-08-01T12:00:00.000+09:00" }
  },
  {
    id: "test3", use_date: "", master:
      { "type": "3", "rate": 50, "amount": 0, "startDate": "2025-01-01T12:00:00.000+09:00", "endDate": "2025-07-01T12:00:00.000+09:00" }
  },
  {
    id: "test4", use_date: "", master:
      { "type": "4", "rate": 0, "amount": 0, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-02-01T12:00:00.000+09:00" }
  },
  {
    id: "test5", use_date: "", master:
      { "type": "5", "rate": 0, "amount": 300, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-08-01T12:00:00.000+09:00" }
  },
  {
    id: "test6", use_date: "", master:
      { "type": "1", "rate": 0, "amount": 0, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2024-08-10T12:00:00.000+09:00" }
  },
  {
    id: "test7", use_date: "2023-09-01T12:00:00.000+09:00", master:
      { "type": "2", "rate": 0, "amount": 100, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-06-01T12:00:00.000+09:00" }
  },
  {
    id: "test8", use_date: "", master:
      { "type": "3", "rate": 20, "amount": 0, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-03-01T12:00:00.000+09:00" }
  },
  {
    id: "test9", use_date: "", master:
      { "type": "4", "rate": 0, "amount": 0, "startDate": "2023-09-01T12:00:00.000+09:00", "endDate": "2025-01-01T12:00:00.000+09:00" }
  },
]

const getStatus = (item: any, master: Master): [boolean, boolean, string] => {
  let end = new Date(master.endDate);
  if (item.use_date != "") {
    return [true, false, "使用済み"];
  } else if (end.getTime() < Date.now()) {
    return [false, true, "期限切れ"];
  } else {
    return [false, false, ""];
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  // 返回格式化后的日期
  return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
}

const getDateStr = (master: Master) => {
  let start = new Date(master.startDate);
  let end = new Date(master.endDate);
  if (start.getTime() > Date.now()) {
    return `該当クーポンは${formatDate(start)}から使用開始`;
  } else {
    return `該当クーポンは${formatDate(end)}まで使用可能`;
  }
}


const flattenData = data.map(({ master, ...rest }) => {
  const [flg1, flg2, status] = getStatus(rest, master);

  return {
    ...rest,
    ...master,
    start_Date: new Date(master.startDate),
    end_Date: new Date(master.endDate),
    isUsered: flg1,
    isEnd: flg2,
    date_str: getDateStr(master),
    status: status,
  }
})


const orderMap = new Map(["1", "4", "2", "5", "3", "使用済み", "期限切れ"].map((id, index) => [id, index]));

flattenData
  .sort((a, b) => {
    let a_type = a.status.length > 0 ? a.status : a.type;
    let b_type = b.status.length > 0 ? b.status : b.type;
    return (orderMap.get(a_type) ?? Infinity) - (orderMap.get(b_type) ?? Infinity);
  })
  .sort((a, b) => {
    if (!a.isUsered && !a.isEnd) {
      if (["1", "4"].includes(a.type) && ["1", "4"].includes(b.type)) {
        if (a.endDate != b.endDate) {
          return a.end_Date.getTime() - b.end_Date.getTime();
        } else {
          return a.end_Date.getTime() - b.end_Date.getTime();
        }
      }
      if (["2", "5"].includes(a.type) && ["2", "5"].includes(b.type)) {
        return a.amount - b.amount;
      }
      if (a.type == "3" && b.type == "3") {
        return b.rate - a.rate;
      }
    } else if (a.isUsered && b.isUsered) {
      return 0;
    } else if (a.isEnd && b.isEnd) {
      return 0;
    }

    return 0;
  });

flattenData.forEach((item) => {
  console.log('test:', JSON.stringify(item));
})
