"use client"
import { context, loadScript } from "@initia/react-wallet-widget/ssr"
import type { WalletWidget, WidgetConfig } from "@initia/utils"
import { PropsWithChildren, useEffect, useState } from "react"

declare global {
  interface Window {
    createWalletWidget?: (config: WidgetConfig) => Promise<WalletWidget>
  }
}

const VERSION = "0.219.0"

const WalletWidgetProvider = ({
  children,
  ...config
}: PropsWithChildren<WidgetConfig>) => {
  const [widget, setWidget] = useState<WalletWidget | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    async function setup() {
      await loadScript(
        `https://cdn.jsdelivr.net/npm/@initia/wallet-widget@${VERSION}/dist/index.js`
      )
      const widget = await window.createWalletWidget!(config)
      setWidget(widget)
    }
    setup()
  }, [])

  if (!widget) return null

  return <context.Provider value={widget}>{children}</context.Provider>
}

export default WalletWidgetProvider
