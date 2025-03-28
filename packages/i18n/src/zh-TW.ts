import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:               'zh-TW',
  schema:             (issue) => `無效的類型：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
  specific: {
    base64:           (issue) => `無效的 Base64：輸入為 ${issue.received}`,
    bic:              (issue) => `無效的商業識別代碼：輸入為 ${issue.received}`,
    bytes:            (issue) => `無效的位元組：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    check:            (issue) => `無效的輸入：輸入為 ${issue.received}`,
    checkAsync:       (issue) => `無效的輸入：輸入為 ${issue.received}`,
    checkItems:       (issue) => `無效元素：輸入為 ${issue.received}`,
    checkItemsAsync:  (issue) => `無效元素：輸入為 ${issue.received}`,
    creditCard:       (issue) => `無效的信用卡：輸入為 ${issue.received}`,
    cuid2:            (issue) => `無效的 Cuid2：輸入為 ${issue.received}`,
    decimal:          (issue) => `無效的十進位：輸入為 ${issue.received}`,
    digits:           (issue) => `無效的數字：輸入為 ${issue.received}`,
    email:            (issue) => `無效的電子郵件：輸入為 ${issue.received}`,
    emoji:            (issue) => `無效的表情符號：輸入為 ${issue.received}`,
    empty:            (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    endsWith:         (issue) => `無效的結尾：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    everyItem:        (issue) => `無效的元素：輸入為 ${issue.received}`,
    excludes:         (issue) => `無效的內容：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    finite:           (issue) => `無效的有限數：輸入為 ${issue.received}`,
    graphemes:        (issue) => `無效的字元：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    hash:             (issue) => `無效的哈希：輸入為 ${issue.received}`,
    hexColor:         (issue) => `無效的十六進位顏色：輸入為 ${issue.received}`,
    hexadecimal:      (issue) => `無效的十六進位：輸入為 ${issue.received}`,
    imei:             (issue) => `無效的 IMEI：輸入為 ${issue.received}`,
    includes:         (issue) => `無效的內容：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    integer:          (issue) => `無效的整數：輸入為 ${issue.received}`,
    ip:               (issue) => `無效的 IP：輸入為 ${issue.received}`,
    ipv4:             (issue) => `無效的 IPv4：輸入為 ${issue.received}`,
    ipv6:             (issue) => `無效的 IPv6：輸入為 ${issue.received}`,
    isoDate:          (issue) => `無效的日期：輸入為 ${issue.received}`,
    isoDateTime:      (issue) => `無效的日期時間：輸入為 ${issue.received}`,
    isoTime:          (issue) => `無效的時間：輸入為 ${issue.received}`,
    isoTimeSecond:    (issue) => `無效的時間秒：輸入為 ${issue.received}`,
    isoTimestamp:     (issue) => `無效的時間戳記：輸入為 ${issue.received}`,
    isoWeek:          (issue) => `無效的週數：輸入為 ${issue.received}`,
    length:           (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    mac:              (issue) => `無效的 MAC：輸入為 ${issue.received}`,
    mac48:            (issue) => `無效的 48 位元 MAC：輸入為 ${issue.received}`,
    mac64:            (issue) => `無效的 64 位元 MAC：輸入為 ${issue.received}`,
    maxBytes:         (issue) => `無效的位元組：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    maxGraphemes:     (issue) => `無效的字元：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    maxLength:        (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    maxSize:          (issue) => `無效的大小：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    maxValue:         (issue) => `無效的值：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    maxWords:         (issue) => `無效的字詞：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    mimeType:         (issue) => `無效的 MIME 類型：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minBytes:         (issue) => `無效的位元組：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minGraphemes:     (issue) => `無效的字元：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minLength:        (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minSize:          (issue) => `無效的大小：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minValue:         (issue) => `無效的值：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    minWords:         (issue) => `無效的字詞：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    multipleOf:       (issue) => `無效的倍數：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    nanoid:           (issue) => `無效的 Nano ID：輸入為 ${issue.received}`,
    nonEmpty:         (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notBytes:         (issue) => `無效的位元組：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notGraphemes:     (issue) => `無效的字元：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notLength:        (issue) => `無效的長度：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notSize:          (issue) => `無效的大小：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notValue:         (issue) => `無效的值：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    notWords:         (issue) => `無效的字詞：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    octal:            (issue) => `無效的八進位：輸入為 ${issue.received}`,
    partialCheck:     (issue) => `無效的輸入：輸入為 ${issue.received}`,
    regex:            (issue) => `無效的格式：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    safeInteger:      (issue) => `無效的安全整數：輸入為 ${issue.received}`,
    size:             (issue) => `無效的大小：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    someItem:         (issue) => `無效的元素：輸入為 ${issue.received}`,
    startsWith:       (issue) => `無效的開始：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    ulid:             (issue) => `無效的 ULID：輸入為 ${issue.received}`,
    url:              (issue) => `無效的網址：輸入為 ${issue.received}`,
    uuid:             (issue) => `無效的 UUID：輸入為 ${issue.received}`,
    value:            (issue) => `無效的值：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
    words:            (issue) => `無效的字詞：預期為 ${issue.expected}，但輸入為 ${issue.received}`,
  },
};

export default language;
