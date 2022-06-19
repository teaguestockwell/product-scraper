export type Currency = typeof currency[number];

export const getCurrency = (code: string) => {
  const res = codeMap[code as any];
  return res ? res : null;
};

export const currency = [
  {
    name: 'Albania Lek',
    code: 'ALL',
    symbol: 'Lek',
  },
  {
    name: 'Afghanistan Afghani',
    code: 'AFN',
    symbol: '؋',
  },
  {
    name: 'Argentina Peso',
    code: 'ARS',
    symbol: '$',
  },
  {
    name: 'Aruba Guilder',
    code: 'AWG',
    symbol: 'ƒ',
  },
  {
    name: 'Australia Dollar',
    code: 'AUD',
    symbol: '$',
  },
  {
    name: 'Azerbaijan New Manat',
    code: 'AZN',
    symbol: 'ман',
  },
  {
    name: 'Bahamas Dollar',
    code: 'BSD',
    symbol: '$',
  },
  {
    name: 'Barbados Dollar',
    code: 'BBD',
    symbol: '$',
  },
  {
    name: 'Belarus Ruble',
    code: 'BYR',
    symbol: 'p.',
  },
  {
    name: 'Belize Dollar',
    code: 'BZD',
    symbol: 'BZ$',
  },
  {
    name: 'Bermuda Dollar',
    code: 'BMD',
    symbol: '$',
  },
  {
    name: 'Bolivia Boliviano',
    code: 'BOB',
    symbol: '$b',
  },
  {
    name: 'Bosnia and Herzegovina Convertible Marka',
    code: 'BAM',
    symbol: 'KM',
  },
  {
    name: 'Botswana Pula',
    code: 'BWP',
    symbol: 'P',
  },
  {
    name: 'Bulgaria Lev',
    code: 'BGN',
    symbol: 'лв',
  },
  {
    name: 'Brazil Real',
    code: 'BRL',
    symbol: 'R$',
  },
  {
    name: 'Brunei Darussalam Dollar',
    code: 'BND',
    symbol: '$',
  },
  {
    name: 'Cambodia Riel',
    code: 'KHR',
    symbol: '៛',
  },
  {
    name: 'Canada Dollar',
    code: 'CAD',
    symbol: '$',
  },
  {
    name: 'Cayman Islands Dollar',
    code: 'KYD',
    symbol: '$',
  },
  {
    name: 'Chile Peso',
    code: 'CLP',
    symbol: '$',
  },
  {
    name: 'China Yuan Renminbi',
    code: 'CNY',
    symbol: '¥',
  },
  {
    name: 'Colombia Peso',
    code: 'COP',
    symbol: '$',
  },
  {
    name: 'Costa Rica Colon',
    code: 'CRC',
    symbol: '₡',
  },
  {
    name: 'Croatia Kuna',
    code: 'HRK',
    symbol: 'kn',
  },
  {
    name: 'Cuba Peso',
    code: 'CUP',
    symbol: '₱',
  },
  {
    name: 'Czech Republic Koruna',
    code: 'CZK',
    symbol: 'Kč',
  },
  {
    name: 'Denmark Krone',
    code: 'DKK',
    symbol: 'kr',
  },
  {
    name: 'Dominican Republic Peso',
    code: 'DOP',
    symbol: 'RD$',
  },
  {
    name: 'East Caribbean Dollar',
    code: 'XCD',
    symbol: '$',
  },
  {
    name: 'Egypt Pound',
    code: 'EGP',
    symbol: '£',
  },
  {
    name: 'El Salvador Colon',
    code: 'SVC',
    symbol: '$',
  },
  {
    name: 'Estonia Kroon',
    code: 'EEK',
    symbol: 'kr',
  },
  {
    name: 'Euro Member Countries',
    code: 'EUR',
    symbol: '€',
  },
  {
    name: 'Falkland Islands (Malvinas) Pound',
    code: 'FKP',
    symbol: '£',
  },
  {
    name: 'Fiji Dollar',
    code: 'FJD',
    symbol: '$',
  },
  {
    name: 'Ghana Cedis',
    code: 'GHC',
    symbol: '¢',
  },
  {
    name: 'Gibraltar Pound',
    code: 'GIP',
    symbol: '£',
  },
  {
    name: 'Guatemala Quetzal',
    code: 'GTQ',
    symbol: 'Q',
  },
  {
    name: 'Guernsey Pound',
    code: 'GGP',
    symbol: '£',
  },
  {
    name: 'Guyana Dollar',
    code: 'GYD',
    symbol: '$',
  },
  {
    name: 'Honduras Lempira',
    code: 'HNL',
    symbol: 'L',
  },
  {
    name: 'Hong Kong Dollar',
    code: 'HKD',
    symbol: '$',
  },
  {
    name: 'Hungary Forint',
    code: 'HUF',
    symbol: 'Ft',
  },
  {
    name: 'Iceland Krona',
    code: 'ISK',
    symbol: 'kr',
  },
  {
    name: 'India Rupee',
    code: 'INR',
    symbol: '',
  },
  {
    name: 'Indonesia Rupiah',
    code: 'IDR',
    symbol: 'Rp',
  },
  {
    name: 'Iran Rial',
    code: 'IRR',
    symbol: '﷼',
  },
  {
    name: 'Isle of Man Pound',
    code: 'IMP',
    symbol: '£',
  },
  {
    name: 'Israel Shekel',
    code: 'ILS',
    symbol: '₪',
  },
  {
    name: 'Jamaica Dollar',
    code: 'JMD',
    symbol: 'J$',
  },
  {
    name: 'Japan Yen',
    code: 'JPY',
    symbol: '¥',
  },
  {
    name: 'Jersey Pound',
    code: 'JEP',
    symbol: '£',
  },
  {
    name: 'Kazakhstan Tenge',
    code: 'KZT',
    symbol: 'лв',
  },
  {
    name: 'Korea (North) Won',
    code: 'KPW',
    symbol: '₩',
  },
  {
    name: 'Korea (South) Won',
    code: 'KRW',
    symbol: '₩',
  },
  {
    name: 'Kyrgyzstan Som',
    code: 'KGS',
    symbol: 'лв',
  },
  {
    name: 'Laos Kip',
    code: 'LAK',
    symbol: '₭',
  },
  {
    name: 'Latvia Lat',
    code: 'LVL',
    symbol: 'Ls',
  },
  {
    name: 'Lebanon Pound',
    code: 'LBP',
    symbol: '£',
  },
  {
    name: 'Liberia Dollar',
    code: 'LRD',
    symbol: '$',
  },
  {
    name: 'Lithuania Litas',
    code: 'LTL',
    symbol: 'Lt',
  },
  {
    name: 'Macedonia Denar',
    code: 'MKD',
    symbol: 'ден',
  },
  {
    name: 'Malaysia Ringgit',
    code: 'MYR',
    symbol: 'RM',
  },
  {
    name: 'Mauritius Rupee',
    code: 'MUR',
    symbol: '₨',
  },
  {
    name: 'Mexico Peso',
    code: 'MXN',
    symbol: '$',
  },
  {
    name: 'Mongolia Tughrik',
    code: 'MNT',
    symbol: '₮',
  },
  {
    name: 'Mozambique Metical',
    code: 'MZN',
    symbol: 'MT',
  },
  {
    name: 'Namibia Dollar',
    code: 'NAD',
    symbol: '$',
  },
  {
    name: 'Nepal Rupee',
    code: 'NPR',
    symbol: '₨',
  },
  {
    name: 'Netherlands Antilles Guilder',
    code: 'ANG',
    symbol: 'ƒ',
  },
  {
    name: 'New Zealand Dollar',
    code: 'NZD',
    symbol: '$',
  },
  {
    name: 'Nicaragua Cordoba',
    code: 'NIO',
    symbol: 'C$',
  },
  {
    name: 'Nigeria Naira',
    code: 'NGN',
    symbol: '₦',
  },
  {
    name: 'Korea (North) Won',
    code: 'KPW',
    symbol: '₩',
  },
  {
    name: 'Norway Krone',
    code: 'NOK',
    symbol: 'kr',
  },
  {
    name: 'Oman Rial',
    code: 'OMR',
    symbol: '﷼',
  },
  {
    name: 'Pakistan Rupee',
    code: 'PKR',
    symbol: '₨',
  },
  {
    name: 'Panama Balboa',
    code: 'PAB',
    symbol: 'B/.',
  },
  {
    name: 'Paraguay Guarani',
    code: 'PYG',
    symbol: 'Gs',
  },
  {
    name: 'Peru Nuevo Sol',
    code: 'PEN',
    symbol: 'S/.',
  },
  {
    name: 'Philippines Peso',
    code: 'PHP',
    symbol: '₱',
  },
  {
    name: 'Poland Zloty',
    code: 'PLN',
    symbol: 'zł',
  },
  {
    name: 'Qatar Riyal',
    code: 'QAR',
    symbol: '﷼',
  },
  {
    name: 'Romania New Leu',
    code: 'RON',
    symbol: 'lei',
  },
  {
    name: 'Russia Ruble',
    code: 'RUB',
    symbol: 'руб',
  },
  {
    name: 'Saint Helena Pound',
    code: 'SHP',
    symbol: '£',
  },
  {
    name: 'Saudi Arabia Riyal',
    code: 'SAR',
    symbol: '﷼',
  },
  {
    name: 'Serbia Dinar',
    code: 'RSD',
    symbol: 'Дин.',
  },
  {
    name: 'Seychelles Rupee',
    code: 'SCR',
    symbol: '₨',
  },
  {
    name: 'Singapore Dollar',
    code: 'SGD',
    symbol: '$',
  },
  {
    name: 'Solomon Islands Dollar',
    code: 'SBD',
    symbol: '$',
  },
  {
    name: 'Somalia Shilling',
    code: 'SOS',
    symbol: 'S',
  },
  {
    name: 'South Africa Rand',
    code: 'ZAR',
    symbol: 'R',
  },
  {
    name: 'Korea (South) Won',
    code: 'KRW',
    symbol: '₩',
  },
  {
    name: 'Sri Lanka Rupee',
    code: 'LKR',
    symbol: '₨',
  },
  {
    name: 'Sweden Krona',
    code: 'SEK',
    symbol: 'kr',
  },
  {
    name: 'Switzerland Franc',
    code: 'CHF',
    symbol: 'CHF',
  },
  {
    name: 'Suriname Dollar',
    code: 'SRD',
    symbol: '$',
  },
  {
    name: 'Syria Pound',
    code: 'SYP',
    symbol: '£',
  },
  {
    name: 'Taiwan New Dollar',
    code: 'TWD',
    symbol: 'NT$',
  },
  {
    name: 'Thailand Baht',
    code: 'THB',
    symbol: '฿',
  },
  {
    name: 'Trinidad and Tobago Dollar',
    code: 'TTD',
    symbol: 'TT$',
  },
  {
    name: 'Turkey Lira',
    code: 'TRY',
    symbol: '',
  },
  {
    name: 'Turkey Lira',
    code: 'TRL',
    symbol: '₤',
  },
  {
    name: 'Tuvalu Dollar',
    code: 'TVD',
    symbol: '$',
  },
  {
    name: 'Ukraine Hryvna',
    code: 'UAH',
    symbol: '₴',
  },
  {
    name: 'United Kingdom Pound',
    code: 'GBP',
    symbol: '£',
  },
  {
    name: 'United States Dollar',
    code: 'USD',
    symbol: '$',
  },
  {
    name: 'Uruguay Peso',
    code: 'UYU',
    symbol: '$U',
  },
  {
    name: 'Uzbekistan Som',
    code: 'UZS',
    symbol: 'лв',
  },
  {
    name: 'Venezuela Bolivar',
    code: 'VEF',
    symbol: 'Bs',
  },
  {
    name: 'Viet Nam Dong',
    code: 'VND',
    symbol: '₫',
  },
  {
    name: 'Yemen Rial',
    code: 'YER',
    symbol: '﷼',
  },
  {
    name: 'Zimbabwe Dollar',
    code: 'ZWD',
    symbol: 'Z$',
  },
] as const;

const codeMap = currency.reduce((acc, cur) => {
  acc[cur.code] = cur;
  return acc;
}, {} as Record<string, Currency>);