import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Usage Alerter — Get alerts before hitting API limits',
  description: 'Monitor API key usage across services and get alerts before hitting rate limits or quotas. Built for DevOps engineers and SaaS founders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90d4f99c-4eff-4ca1-ab71-709676652b9c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
