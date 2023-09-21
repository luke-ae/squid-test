import { SquidWidget } from '@0xsquid/widget';
import { env } from '~/env.mjs';


export default function Home() {
  return (
    <div className="relative grid h-[684px] place-items-center">
    <div className="absolute inset-0 z-20">
      <SquidWidget
        config={{
          integratorId: env.NEXT_PUBLIC_SQUID_ID,
          companyName: 'Stargaze',
          style: {
            neutralContent: '#a1a1aa', // secondary text - zinc-400
            baseContent: '#ffffff', // main text - white
            base100: '#27272a', // token dropdowns bg - zinc-800
            base200: '#18181b', // input bg - zinc-900
            base300: '#27272a', // input border - zinc-800
            error: '#F75B40', // error - red-500
            warning: '#D63838', // warning - red-600
            success: '#4AED4A', // success - green
            primary: '#db2777', // primary - pink-600
            secondary: '#db2777', // secondary button bg - pink-600
            secondaryContent: '#ffffff', // secondary button text - white
            neutral: '#101012', // background - black
            roundedBtn: '8px',
            roundedCornerBtn: '12px',
            roundedBox: '12px',
            roundedDropDown: '8px', // token dropdownn
          },
          slippage: 1,
          infiniteApproval: false,
          enableExpress: true,
          apiUrl:
            'https://squid-api-git-main-cosmos-mainnet-0xsquid.vercel.app',
          titles: {
            swap: "Swap",
            settings: 'Settings',
            wallets: 'Wallets',
            tokens: 'Select Token',
            chains: 'Select Chain',
            history: 'History',
            transaction: 'Transaction',
            allTokens: 'Select Token',
            destination: 'Destination Address',
          },
          priceImpactWarnings: {
            warning: 3,
            critical: 5,
          },
          initialToChainId: 'stargaze-1',
          defaultTokens: [
            {
              chainId: 'stargaze-1',
              address: 'ustars',
            },
          ],
          loadPreviousStateFromLocalStorage: true,
        }}
      />
    </div>
  </div>
  );
}
