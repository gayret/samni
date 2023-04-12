import './globals.css'

export const metadata = {
  title: 'Samni',
  description: 'Rüyalarını yorumlamak için sabırsızlanıyorum',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
