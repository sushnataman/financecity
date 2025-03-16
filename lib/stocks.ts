import useSWR from 'swr';

const ALPHA_VANTAGE_API_KEY = '3C6U1J72U1XBNA29';

// Mock data for development and fallback
const mockStockData: { [key: string]: StockData } = {
  'AAPL': {
    symbol: 'AAPL',
    price: 175.34,
    change: 2.45,
    changePercent: 1.42,
    volume: 52436789,
    lastUpdated: new Date().toISOString().split('T')[0]
  },
  'MSFT': {
    symbol: 'MSFT',
    price: 338.11,
    change: 3.22,
    changePercent: 0.96,
    volume: 23567890,
    lastUpdated: new Date().toISOString().split('T')[0]
  }
};

export interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  lastUpdated: string;
}

export interface ExchangeInfo {
  id: string;
  name: string;
  country: string;
  timezone: string;
}

export const exchanges: ExchangeInfo[] = [
  // North America
  { id: 'NYSE', name: 'New York Stock Exchange', country: 'United States', timezone: 'America/New_York' },
  { id: 'NASDAQ', name: 'NASDAQ', country: 'United States', timezone: 'America/New_York' },
  { id: 'TSX', name: 'Toronto Stock Exchange', country: 'Canada', timezone: 'America/Toronto' },

  // Europe
  { id: 'LSE', name: 'London Stock Exchange', country: 'United Kingdom', timezone: 'Europe/London' },
  { id: 'XETRA', name: 'Deutsche Börse Xetra', country: 'Germany', timezone: 'Europe/Berlin' },
  { id: 'EURONEXT', name: 'Euronext Paris', country: 'France', timezone: 'Europe/Paris' },
  { id: 'SIX', name: 'SIX Swiss Exchange', country: 'Switzerland', timezone: 'Europe/Zurich' },
  { id: 'BIT', name: 'Borsa Italiana', country: 'Italy', timezone: 'Europe/Rome' },

  // Asia Pacific
  { id: 'TSE', name: 'Tokyo Stock Exchange', country: 'Japan', timezone: 'Asia/Tokyo' },
  { id: 'SSE', name: 'Shanghai Stock Exchange', country: 'China', timezone: 'Asia/Shanghai' },
  { id: 'SZSE', name: 'Shenzhen Stock Exchange', country: 'China', timezone: 'Asia/Shanghai' },
  { id: 'HKEX', name: 'Hong Kong Stock Exchange', country: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { id: 'ASX', name: 'Australian Securities Exchange', country: 'Australia', timezone: 'Australia/Sydney' },
  { id: 'SGX', name: 'Singapore Exchange', country: 'Singapore', timezone: 'Asia/Singapore' },
  { id: 'KRX', name: 'Korea Exchange', country: 'South Korea', timezone: 'Asia/Seoul' },
  { id: 'BSE', name: 'Bombay Stock Exchange', country: 'India', timezone: 'Asia/Kolkata' },
  { id: 'NSE', name: 'National Stock Exchange of India', country: 'India', timezone: 'Asia/Kolkata' },

  // Other Regions
  { id: 'B3', name: 'B3 - Brasil Bolsa Balcão', country: 'Brazil', timezone: 'America/Sao_Paulo' },
  { id: 'JSE', name: 'Johannesburg Stock Exchange', country: 'South Africa', timezone: 'Africa/Johannesburg' },
  { id: 'TASE', name: 'Tel Aviv Stock Exchange', country: 'Israel', timezone: 'Asia/Jerusalem' },
];

export const countries = Array.from(new Set(exchanges.map(e => e.country)));

async function fetchStockData(symbol: string): Promise<StockData> {
  try {
    // For development, return mock data if available
    if (process.env.NODE_ENV === 'development' && mockStockData[symbol]) {
      return mockStockData[symbol];
    }

    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Check if we hit the API limit or got an error
    if (data.Note || data['Error Message']) {
      throw new Error(data.Note || data['Error Message']);
    }

    const quote = data['Global Quote'];
    if (!quote || !quote['05. price']) {
      throw new Error('Invalid data received from API');
    }

    return {
      symbol,
      price: parseFloat(quote['05. price']),
      change: parseFloat(quote['09. change']),
      changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
      volume: parseInt(quote['06. volume']),
      lastUpdated: quote['07. latest trading day']
    };
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    
    // Return mock data as fallback if available
    if (mockStockData[symbol]) {
      return mockStockData[symbol];
    }

    // Return a default structure if no mock data available
    return {
      symbol,
      price: 0,
      change: 0,
      changePercent: 0,
      volume: 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
  }
}

export function useStockData(symbol: string) {
  return useSWR(`stock/${symbol}`, () => fetchStockData(symbol), {
    refreshInterval: 10000, // Refresh every 10 seconds
    revalidateOnFocus: false, // Disable revalidation on window focus to reduce API calls
    dedupingInterval: 5000, // Dedupe requests within 5 seconds
  });
}

export const popularStocks: { [key: string]: string[] } = {
  // North America
  'United States': [
    'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA', 'JPM',
    'V', 'WMT', 'JNJ', 'PG', 'MA', 'UNH', 'HD', 'BAC', 'XOM', 'PFE'
  ],
  'Canada': [
    'RY.TO', 'TD.TO', 'ENB.TO', 'CNR.TO', 'BAM.A.TO', 'BCE.TO', 'BMO.TO', 'CP.TO',
    'BNS.TO', 'TRP.TO', 'CM.TO', 'SU.TO', 'RCI.B.TO', 'T.TO', 'MFC.TO', 'CNQ.TO'
  ],

  // Europe
  'United Kingdom': [
    'HSBA.L', 'BP.L', 'SHELL.L', 'AZN.L', 'ULVR.L', 'GSK.L', 'RIO.L', 'LLOY.L',
    'VOD.L', 'BARC.L', 'DGE.L', 'REL.L', 'PRU.L', 'NG.L', 'IMB.L', 'SSE.L'
  ],
  'Germany': [
    'SAP.DE', 'SIE.DE', 'ALV.DE', 'DTE.DE', 'BAY.DE', 'BAS.DE', 'BMW.DE', 'VOW3.DE',
    'DB1.DE', 'MUV2.DE', 'DPW.DE', 'RWE.DE', 'HEI.DE', 'ADS.DE', 'CON.DE', 'LIN.DE'
  ],
  'France': [
    'AI.PA', 'BNP.PA', 'MC.PA', 'SAN.PA', 'OR.PA', 'ORA.PA', 'ACA.PA', 'KER.PA',
    'CS.PA', 'BN.PA', 'AIR.PA', 'EL.PA', 'RMS.PA', 'CAP.PA', 'EN.PA', 'VIE.PA'
  ],
  'Switzerland': [
    'NESN.SW', 'ROG.SW', 'NOVN.SW', 'UHR.SW', 'ABBN.SW', 'CSGN.SW', 'UBSG.SW', 'ZURN.SW',
    'SREN.SW', 'CFR.SW', 'GIVN.SW', 'LONN.SW', 'SCMN.SW', 'GEBN.SW', 'SIKA.SW', 'CLN.SW'
  ],
  'Italy': [
    'ENI.MI', 'ISP.MI', 'UCG.MI', 'ENEL.MI', 'FCA.MI', 'G.MI', 'TIT.MI', 'STM.MI',
    'CNHI.MI', 'PRY.MI', 'ATL.MI', 'MB.MI', 'SRG.MI', 'TRN.MI', 'AMP.MI', 'RACE.MI'
  ],

  // Asia Pacific
  'Japan': [
    '7203.T', '6758.T', '6861.T', '6501.T', '7267.T', '6702.T', '6502.T', '7974.T',
    '9432.T', '9984.T', '8306.T', '6301.T', '6752.T', '7751.T', '6954.T', '4502.T'
  ],
  'China': [
    '601398.SS', '601288.SS', '601857.SS', '601988.SS', '601628.SS', '601318.SS', '600519.SS', '600036.SS',
    '601166.SS', '600276.SS', '601888.SS', '600887.SS', '601668.SS', '600030.SS', '601601.SS', '600048.SS'
  ],
  'Hong Kong': [
    '0700.HK', '0941.HK', '0005.HK', '3690.HK', '9988.HK', '0883.HK', '1299.HK', '0939.HK',
    '2318.HK', '0388.HK', '0016.HK', '0688.HK', '1810.HK', '9618.HK', '2020.HK', '0027.HK'
  ],
  'Australia': [
    'BHP.AX', 'CBA.AX', 'CSL.AX', 'NAB.AX', 'WBC.AX', 'ANZ.AX', 'MQG.AX', 'WES.AX',
    'WOW.AX', 'RIO.AX', 'TLS.AX', 'FMG.AX', 'GMG.AX', 'TCL.AX', 'NCM.AX', 'COL.AX'
  ],
  'Singapore': [
    'D05.SI', 'O39.SI', 'U11.SI', 'C6L.SI', 'Z74.SI', 'C38U.SI', 'G13.SI', 'C09.SI',
    'F34.SI', 'Y92.SI', 'U96.SI', 'S63.SI', 'S58.SI', 'V03.SI', 'ME8U.SI', 'A17U.SI'
  ],
  'South Korea': [
    '005930.KS', '000660.KS', '051910.KS', '035420.KS', '005380.KS', '000270.KS', '005490.KS', '051900.KS',
    '035720.KS', '005935.KS', '012330.KS', '055550.KS', '066570.KS', '028260.KS', '207940.KS', '006400.KS'
  ],
  'India': [
    'RELIANCE.NS', 'TCS.NS', 'HDFCBANK.NS', 'INFY.NS', 'HINDUNILVR.NS', 'HDFC.NS', 'ICICIBANK.NS', 'KOTAKBANK.NS',
    'ITC.NS', 'BHARTIARTL.NS', 'SBIN.NS', 'BAJFINANCE.NS', 'ASIANPAINT.NS', 'MARUTI.NS', 'LT.NS', 'AXISBANK.NS'
  ],

  // Other Regions
  'Brazil': [
    'PETR4.SA', 'VALE3.SA', 'ITUB4.SA', 'BBDC4.SA', 'B3SA3.SA', 'ABEV3.SA', 'RENT3.SA', 'WEGE3.SA',
    'BBAS3.SA', 'SUZB3.SA', 'JBSS3.SA', 'MGLU3.SA', 'RAIL3.SA', 'RADL3.SA', 'VIVT3.SA', 'LREN3.SA'
  ],
  'South Africa': [
    'NPN.JO', 'PRX.JO', 'BTI.JO', 'FSR.JO', 'SBK.JO', 'VOD.JO', 'AGL.JO', 'MTN.JO',
    'ABG.JO', 'CPI.JO', 'SLM.JO', 'GFI.JO', 'AMS.JO', 'BVT.JO', 'REM.JO', 'CFR.JO'
  ],
  'Israel': [
    'TEVA.TA', 'NICE.TA', 'ICL.TA', 'ESLT.TA', 'POLI.TA', 'ORL.TA', 'DSCT.TA', 'MIZR.TA',
    'FIBI.TA', 'BCOM.TA', 'ALHE.TA', 'DLEKG.TA', 'AZRM.TA', 'SHRA.TA', 'ELCO.TA', 'NVMI.TA'
  ]
};